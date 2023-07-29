<?php
//a class that models the survey table

class SurveyModel {

    public function __construct(
        public string $handle = "",
        public string $country = "",
        public string $gender = "",
        public int $age = 0,
        public bool $barbarian = false,
        public bool $bard = false,
        public bool $cleric = false,
        public bool $druid = false,
        public bool $fighter = false,
        public bool $paladin = false,
        public bool $monk = false,
        public bool $ranger = false,
        public bool $rogue = false,
        public bool $sorcerer = false,
        public bool $wizard = false,
        public bool $warlock = false
    )
    {
        
    }

    public static function columns() : string {
        return "handle, country, gender, barbarian, bard, cleric, druid, fighter, paladin, monk, ranger, rogue, sorcerer, wizard, warlock";
    }

    public static function parameters() : array {
        return [":handle", ":country", ":gender", ":age", ":Barbarian", ":Bard", ":Cleric", ":Druid", ":Fighter", ":Paladin", ":Monk", ":Ranger", ":Rogue", ":Sorcerer", ":Wizard", ":Warlock"];
    }

    public function values() : string {
        return "$this->handle, $this->country, $this->gender, $this->age, $this->barbarian, $this->bard, $this->cleric, $this->druid, $this->fighter, $this->paladin, $this->monk, $this->ranger, $this->rogue, $this->sorcerer, $this->wizard, $this->warlock";
    }

    public static function dndClasses() : array {
        return ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Paladin", "Monk", "Ranger", "Rogue", "Sorcerer", "Wizard", "Warlock"];
    }

    public static function genderOptions() : array {
        return ["Male", "Female", "Other", "Rather Not Say"];
    }

    public static function convert($data) : array {
        //information comes in the form where classes are simply an array on a "class" name
        if(empty($data["class"])) {
            http_response_code(400);
            echo json_encode(["message" => "Missing required parameter CLASS"]);
            exit;
        }

        foreach(SurveyModel::dndClasses() as $class) {
            $data[$class] = in_array($class, $data["class"]);
        }

        return $data;
    }

}