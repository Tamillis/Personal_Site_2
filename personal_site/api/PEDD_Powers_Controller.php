<?php

class PowersController
{
    private $auth;
    private $powersFilePath;
    public function __construct()
    {
        try {
            $this->auth = new SessionAuth();
        } catch (Exception $ex) {
            API::respond(['error' => $ex->getMessage()], 500);
        }

        $this->powersFilePath = $_SERVER["DOCUMENT_ROOT"] . '/src/assets/pedd/pedd-powers.json';
    }

    public function index($name = null)
    {
        // Handle CRUD operations based on the request method
        $method = $_SERVER['REQUEST_METHOD'];

        switch ($method) {
            case 'GET':
                // Read operation
                return API::respond($this->read($name));
                break;

            case 'POST':
                // Create operation

                //always check authentication before writing
                $this->checkAuthentication();
                $inputJson = json_decode(file_get_contents('php://input'), true);
                $power = $this->bindPower($inputJson);

                //check this power doesn't already exist
                if (!is_null($this->read($power['name']))) {
                    API::respond(['error' => "Power " . $power['name'] . " already exists."], 400);
                }

                //write the power
                $success = $this->write($power);
                if ($success) API::respond(['message' => "Record {$power['name']} created successfully"]);
                else API::respond(['error' => 'Unable to write to JSON file. Check permissions.'], 500);

                break;

            case 'PUT':
                // Update operation
                //always check authentication before writing
                $this->checkAuthentication();
                $inputJson = json_decode(file_get_contents('php://input'), true);
                $power = $this->bindPower($inputJson);

                //check this power exists
                if (is_null($this->read($power['name']))) {
                    API::respond(['error' => "Power " . $power['name'] . " doesn't exist."], 400);
                }

                $this->write($power);
                API::respond(['message' => "Record {$power['name']} updated successfully"]);
                break;

            case 'DELETE':
                // Delete operation
                //always check authentication before writing
                $this->checkAuthentication();

                if(is_null($name)) API::respond(["error" => "DELETE must be called with a name"]);

                $powers = $this->read();
                $this->removePowerWithName($powers, $name);
                $this->write($powers);
                API::respond(['message' => "Record $name deleted successfully"]);
                break;

            default:
                API::respond(['error' => 'Method not allowed'], 405);
                break;
        }
    }

    //binds the incoming input
    private function bindPower($json)
    {
        $keys = array("name", "tag", "preq", "desc", "repeatable", "skills", "statChanges", "resistanceChanges", "secondaryStatChanges", "statMaxes");
        foreach ($keys as $key) {
            if (!isset($json[$key])) API::respond(['error' => "Bad binding: property '$key' is required, got: $json"], 400);
        }
        return $json;
    }

    private function read($name = null)
    {
        // Checking if the file exists, get the full content
        if (!file_exists($this->powersFilePath) || !is_readable($this->powersFilePath)) {
            API::respond(['error' => "Unable to find or read JSON file at $this->powersFilePath."], 500);
        }

        $json = json_decode(file_get_contents($this->powersFilePath), true);

        //if parameter is provided, i.e. the Primary ID key "name", filter and return that one power
        if (!is_null($name)) {
            $entries = array_filter($json, fn($var) => $var['name'] == $name);
            if (count($entries) == 0) return null;
            return array_values($entries)[0];
        } else return $json;
    }

    private function write($power)
    {
        $powers = $this->read();
        if ($this->getPowerWithName($powers, $power['name'])) {
            //record already exists, "update" it by removing the old record
            $this->removePowerWithName($powers, $power['name']);
        }

        //create record, push it to the data and sort by name, ready for writing
        $this->addAndSort($powers, $power);

        //overwrite file to save it
        $successful = file_put_contents($this->powersFilePath, json_encode($powers, JSON_PRETTY_PRINT));
        // Check if the file is writable too
        return is_writable($this->powersFilePath) && $successful;
    }

    private function getPowerWithName($arr, $name)
    {
        foreach ($arr as $el) {
            if ($el['name'] == $name) {
                return $el;
            }
        }
        return false;
    }

    // removes element with given name from passed in array
    private function removePowerWithName(&$arr, $name)
    {
        $n = -1;
        foreach ($arr as $el) {
            if ($el['name'] == $name) {
                $n = array_search($el, $arr);
                break;
            }
        }

        if ($n == -1) API::respond(["error" => "Unable to find power $name to delete it."]);
        array_splice($arr, $n, 1);
    }

    //adds in element, and makes sure it is ordered by name
    private function addAndSort(&$arr, $el)
    {
        array_push($arr, $el);
        usort($arr, function ($a, $b) {
            return strnatcmp($a['name'], $b['name']);
        });
    }

    private function checkAuthentication()
    {
        if (!$this->auth->isAuthenticated()) API::respond(['error' => 'Unauthorized. Please log in.'], 401);
    }
}