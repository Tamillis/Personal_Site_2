<?php
class SurveyGateway {

    public function __construct(private PDO $conn, private string $table)
    {
    }

    public function getAllHandles() : array {
        $sql = "SELECT handle FROM $this->table";

        $pdoStatement = $this->conn->query($sql);

        $data = [];

        while($row = $pdoStatement->fetch(PDO::FETCH_ASSOC)) {
            $data[] = $row["handle"];
        }

        return $data;
    }

    public function getAll() : array {
        $sql = "SELECT * FROM $this->table";

        $pdoStatement = $this->conn->query($sql);

        $data = [];

        while($row = $pdoStatement->fetch(PDO::FETCH_ASSOC)) {
            //convert data types as appropriate
            $row = $this->convertRowData($row);
            $data[] = $row;
        }

        return $data;
    }

    public function get(string $handle) : array | false {
        $sql = "SELECT * FROM $this->table WHERE handle = :handle";

        $pdoStatement = $this->conn->prepare($sql);
        $pdoStatement->bindValue(":handle", $handle, PDO::PARAM_STR);
        $pdoStatement->execute();

        $data = $pdoStatement->fetch(PDO::FETCH_ASSOC);

        if($data !== false) {
            $data = $this->convertRowData($data);
        }

        return $data;
    }

    public function create(array $data) : string {
        $sql = "INSERT INTO $this->table (" . SurveyModel::columns() . ") VALUES (" . implode(',', SurveyModel::parameters()) . ")";

        $pdoStatement = $this->conn->prepare($sql);

        foreach(SurveyModel::parameters() as $param) {
            $column = substr($param, 1);

            if ($param == ":handle" || $param == ":country" || $param == ":gender") $pdoStatement->bindValue($param, $data[$column], PDO::PARAM_STR);
            elseif ($param == ":age") $pdoStatement->bindValue($param, $data[$column], PDO::PARAM_INT);
            else $pdoStatement->bindValue($param, $data[$column] ?? false, PDO::PARAM_BOOL);
        }

        $pdoStatement->execute();

        return $data["handle"];
    }

    //update is not a priority, current leaving API lesson's example as a template
    // public function update(string $handle, array $data) : array | false {
    //     $fields = [];

    //     if(! empty($data["name"])) $fields["name"] = [$data["name"], PDO::PARAM_STR];
    //     if(array_key_exists("priority", $data)) $fields["priority"] = [$data["priority"], PDO::PARAM_INT];
    //     if(array_key_exists("is_completed", $data)) $fields["is_completed"] = [$data["is_completed"], PDO::PARAM_BOOL];

    //     if(empty($fields)) {
    //         return ["NotUpdated" => "No changes made"];
    //     }
    //     else {
    //         $sets = array_map(function($value) {
    //             return "$value = :$value";
    //         }, array_keys($fields));
    
    //         $sql = "UPDATE task SET " . implode(", ", $sets) . " WHERE handle = :handle";
    
    //         $pdoStatement = $this->conn->prepare($sql);
    //         $pdoStatement->bindValue(":handle", $handle, PDO::PARAM_INT);

    //         foreach($fields as $name => $value) $pdoStatement->bindValue(":$name", $value[0], $value[1]);

    //         $pdoStatement->execute();

    //         $data = $this->get($handle);

    //         if($data !== false) {
    //             $data["is_completed"] = (bool) $data["is_completed"];
    //         }

    //         return $data;
    //     }
    // }

    public function delete(string $handle) : int {
        $sql = "DELETE FROM $this->table WHERE handle = :handle";

        $pdoStatement = $this->conn->prepare($sql);
        $pdoStatement->bindValue(":handle", $handle, PDO::PARAM_STR);
        $pdoStatement->execute();

        return $pdoStatement->rowCount();
    }

    private function convertRowData(array $row) : array {
        $row["Barbarian"] = (bool)$row["Barbarian"];
        $row["Bard"] = (bool)$row["Bard"];
        $row["Cleric"] = (bool)$row["Cleric"];
        $row["Druid"] = (bool)$row["Druid"];
        $row["Fighter"] = (bool)$row["Fighter"];
        $row["Paladin"] = (bool)$row["Paladin"];
        $row["Monk"] = (bool)$row["Monk"];
        $row["Ranger"] = (bool)$row["Ranger"];
        $row["Rogue"] = (bool)$row["Rogue"];
        $row["Sorcerer"] = (bool)$row["Sorcerer"];
        $row["Wizard"] = (bool)$row["Wizard"];
        $row["Warlock"] = (bool)$row["Warlock"];
        return $row;
    }
}