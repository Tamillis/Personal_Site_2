<?php

class SurveyController
{

    public function __construct(private SurveyGateway $gateway)
    {
    }
    public function processRequest(string $method, ?string $handle): void
    {
        if ($handle === null && $method == "GET") {
            echo json_encode($this->gateway->getAll());
        } else {
            //Authorize for everything except getAll
            Auth::authenticate();
        }

        if ($handle === null && $method == "POST") {
            $data = (array) json_decode(file_get_contents("php://input"), true);
            $errors = $this->getValidationErrors($data);

            if (!empty($errors)) {
                //not valid, can't store new record
                $this->respondUnprocessableEntity($errors);
                return;
            } else {
                $data = SurveyModel::convert($data);
                $idCreated = $this->gateway->create($data);

                $this->respondCreated($idCreated);
            }
        } elseif ($handle === null) $this->respondMethodNotAllowed("GET, POST");
        elseif ($handle === "handles" && $method == "GET") {
            echo json_encode(["handles" => $this->gateway->getAllHandles()]);
        } else {
            $handle = str_replace("%20", " ", $handle);
            $survey = $this->gateway->get($handle);

            if ($survey === false) $this->respondNotFound($handle);
            else switch ($method) {
                case 'GET':
                    echo json_encode($survey);
                    break;
                    // case 'PATCH':
                    //     $data = (array) json_decode(file_get_contents("php://input"), true);

                    //     $errors = $this->getValidationErrors($data, false);

                    //     if (!empty($errors)) {
                    //         //not valid, can't store new record
                    //         $this->respondUnprocessableEntity($errors);
                    //         return;
                    //     }

                    //     $data = $this->gateway->update($handle, $data);

                    //     if(array_key_exists("NotUpdated", $data)) {
                    //         http_response_code(304);
                    //     } elseif($data !== false) {
                    //         echo json_encode($data);
                    //     }

                    //     break;
                case 'DELETE':
                    $rows = $this->gateway->delete($handle);
                    $message = "$rows " . ($rows > 1 ? "rows" : "row") . " deleted";
                    echo json_encode(["message" => $message]);
                    break;
                default:
                    $this->respondMethodNotAllowed("GET, PATCH, DELETE");
                    break;
            }
        }
    }

    private function respondMethodNotAllowed(string $allowedMethods): void
    {
        http_response_code(405);
        header("Allow: $allowedMethods");
    }

    private function respondNotFound(string $handle): void
    {
        http_response_code(404);

        echo json_encode(["message" => "handle $handle not found"]);
    }

    private function respondCreated(string $handle): void
    {
        http_response_code(201);

        echo json_encode($this->gateway->get($handle));
    }

    private function getValidationErrors(array $data, bool $is_new = true): array
    {
        $countries = json_decode(file_get_contents(__DIR__ . "/countries.json"), true);
        $errors = [];

        if ($is_new && empty($data["handle"])) {
            $errors[] = "handle is required";
        } elseif ($is_new && in_array($data["handle"], $this->gateway->getAllHandles())) {
            $errors[] = "handle is already taken";
        } elseif ($is_new && $data["handle"] == "handles") {
            $errors[] = "'Handles' is a reserved word";
        }

        if ($is_new && empty($data["country"])) {
            $errors[] = "country is required";
        } elseif (!in_array($data["country"], $countries)) {
            $errors[] = "country not in allowed list of countries";
        }

        if (!in_array($data["gender"], SurveyModel::genderOptions())) {
            $errors[] = "Invalid gender option " . $data['gender'];
        }

        if (empty($data["class"]) || count($data["class"]) < 1 || count($data["class"]) > 3) {
            $errors[] = "Invalid class selection. 1 - 3 class options are required.";
        }

        return $errors;
    }

    private function respondUnprocessableEntity(array $errors): void
    {
        http_response_code(422);
        echo json_encode(["errors" => $errors]);
    }
}
