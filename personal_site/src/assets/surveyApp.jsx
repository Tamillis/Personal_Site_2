//A React in-page app

//put the app in a closure to prevent any global scope shenanigans
const surveyApp = () => {
    //global variables of this app
    let countriesArray = [];    //to be loaded in from assets/countries.json
    const dndClassList = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Paladin", "Monk", "Ranger", "Rogue", "Sorcerer", "Wizard", "Warlock"];
    let multiClassLimit = 3;
    let genderOptions = ["Male", "Female", "Other", "Rather not say"];

    async function loadCountryData() {
        countriesArray = await fetch("src/assets/countries.json").then(res => res.json());
    }

    //main react app for the survey
    function App() {

        function TextInput(props) {
            //check that the content contains only alpha-numeric letters using controlled state name, setName
            const [name, setName] = React.useState(props.content);
            const [blank, setBlank] = React.useState((props.content === ""));

            function handleChange(event) {
                let newName = event.target.value;

                //return out if not only alphanumeric or not blank
                if (!onlyAlphaNumeric(newName) && newName !== "") return;

                if(newName === "") setBlank(true);
                else setBlank(false);

                setName(newName);
            }

            function onlyAlphaNumeric(string) {
                return /^[a-z0-9]+$/i.test(string);
            }

            if (blank) return (
                <div className="error-box">
                    <label htmlFor={props.name} className="q-label">{props.question}</label><br />
                    <input type="text" id={props.name} name={props.name} onChange={handleChange} value={name} className="textQ" />
                    <p className="error-text">Blank handles are not allowed.</p>
                </div>
            );
            return (
                <div>
                    <label htmlFor={props.name} className="q-label">{props.question}</label><br />
                    <input type="text" id={props.name} name={props.name} onChange={handleChange} value={name} className="textQ" />
                </div>
            );
        }

        function CheckBoxQ(props) {
            //check content is an array object
            if (!Array.isArray(props.content)) return <p>Error; Bad content for CheckBoxQ</p>;

            //This needs to be a "controlled component" where the input data is handled via state
            //As these are funciton components, state is handled via hook
            //With initial data an object built from the dndClassList as the keys and all the values as false
            let checkBoxDataInitialState = {};
            props.content.forEach(element => checkBoxDataInitialState[element] = false);
            //set a default checked item to "Fighter"
            checkBoxDataInitialState.Fighter = true;
            const [state, setState] = React.useState(checkBoxDataInitialState);

            function handleChange(event) {
                //check if a number of checkboxes equal to the multiClassLimit have already been checked and the clicked checkbox is not checked, returning out
                if (atSelectedLimit(multiClassLimit) && !state[event.target.value]) return;

                //check that the last checked box, that theres only one box checked and its this events box, isn't being unchecked, return out
                if (atSelectedLimit(1) && state[event.target.value]) return;

                //the new state has to use the spread operator to force a new object to be made, to keep the state immutable and thereby allow React to notice updates
                let newState = { ...state };
                newState[event.target.value] = state[event.target.value] ? false : true;
                setState(newState);
            }

            function atSelectedLimit(limit) {
                //little helper function that checks to see if there is already the given limit of trues in the values of the state object
                let array = Object.values(state);
                let count = 0;
                array.forEach(element => { if (element) count++ });
                return count == limit;
            }

            //return the main App, i.e. form
            return (
                <div>
                    <p>{props.question}</p>
                    {
                        //each checkbox question has more than one box to check, so map the content array out
                        //and format each according to the state, including the value to make it a "controlled component" where only state data is used
                        //also note that the key attribute used by react to track things must be the top of this particular DOM tree, otherwise it throws errors
                        //also the name of the set must end in [] to force it to be an array when sent/delivered to the action surveyDataHandler.php
                        Object.keys(state).map((key, index) => {
                            return (<div key={props.name + index}>
                                <input type="checkbox" id={"question-" + index} name={props.name + "[]"} value={key} checked={state[key]} onChange={handleChange} className="checkBoxQ" />
                                <label htmlFor={"question-" + index} className="q-label">{key}</label>
                            </div>)
                        })
                    }

                </div>);
        }

        function RadioQ(props) {
            return (<div>
                <p>{props.question}</p>
                {
                    props.content.map((value, index) => {
                        if (index == 0) return (
                            <div key={props.name + index}>
                                <input type="radio" id={"radio-q-" + index} name={props.name} value={value} defaultChecked className="radioQ" />
                                <label htmlFor={"radio-q-" + index} className="q-label radioQ-label">{value}</label>
                            </div>
                        );

                        return (<div key={props.name + index}>
                            <input type="radio" id={"radio-q-" + index} name={props.name} value={value} className="radioQ" />
                            <label htmlFor={"radio-q-" + index} className="q-label radioQ-label">{value}</label>
                        </div>)
                    })
                }
            </div>)
        }

        function NumericQ(props) {
            const [age, setAge] = React.useState(0);

            function handleChange(event) {
                //check the input is valid, if not switch conditional flag and set error message
                let newAge = event.target.value;

                //return out of non-numbers
                if (/\D/g.test(newAge)) return;

                //whole numbers only
                newAge = Math.floor(newAge);
                //0 is minimum, 122 is maximum
                if (newAge < 0 || newAge > 122) return;

                setAge(newAge);
            }

            return (
                <div>
                    <label htmlFor={props.name} className="q-label">{props.question}</label><br />
                    <input name={props.name} id={props.name} value={age} className="numQ" onChange={handleChange} />
                </div>
            )
        }

        function SelectBoxQ(props) {
            let data = props.content;
            let selectOptions = data.map((country, index) => {
                return (<option value={country} key={index}>{country}</option>);
            });

            return (
                <div>
                    <label htmlFor={props.name} className="q-label">{props.question}</label><br />
                    <select name={props.name} id={props.name} className="selectBoxQ" defaultValue={"United Kingdom"}>{selectOptions}</select>
                </div>
            )
        }

        function OneSubmitionForm() {
            const firstTimeSubmit = localStorage.getItem("submitted");

            if (firstTimeSubmit == null) return (
                <form onSubmit={handleSubmit} action="surveyDataHandler.php" target="" method="POST">
                    <TextInput question="What's your online handle?" name="handle" content=""></TextInput><br />
                    <SelectBoxQ question="What country are you from?" name="country" content={countriesArray}></SelectBoxQ><br />
                    <NumericQ name="age" question="How old are you?"></NumericQ><br />
                    <RadioQ content={genderOptions} question="What's your gender?" name="gender"></RadioQ><br />
                    <CheckBoxQ question="Which D&D class would you be? (Choose 1 or up to 3 for a multi-class)" content={dndClassList} name="class"></CheckBoxQ><br />
                    <input type="submit" value="Submit Survey" className="btn" />
                </form>);

            else return (
                <div>
                    <h3 className="subtitle">Already Submitted</h3>
                    <p>You have already submitted a survey, sorry :(</p>
                </div>);
        }

        function handleSubmit() {
            localStorage.setItem("submitted", "true");
        }

        //top level App HTML
        //fun fact, putting the ( below on a new line breaks React
        return (
            <div className="main-text">
                <OneSubmitionForm />
            </div>)
    }

    async function run() {
        //first preload, which has async await stuff, so gotta wrap this whole thing in an async function first
        await loadCountryData();

        return App();
    }

    //actually run the code
    run();
}

//call the closure
export default function SurveyApp() {
    return surveyApp();
}