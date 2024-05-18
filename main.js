import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "numberone",
        message: "Kindly enter your 1st  no:"
    },
    {
        type: "number",
        name: "numbertwo",
        message: "Kindly enter your 2nd no:"
    },
    {
        type: "list",
        name: "operator",
        choices: ["*", "+", "-", "/"],
        message: "Select operator:"
    },
]);
const { numberone, numbertwo, operator } = answers;
if (numberone && numbertwo && operator) {
    let result = 0;
    if (operator === "+") {
        result = numberone + numbertwo;
    }
    else if (operator === "-") {
        result = numberone - numbertwo;
    }
    if (operator === "/") {
        result = numberone / numbertwo;
    }
    if (operator === "*") {
        result = numberone * numbertwo;
    }
    console.log("your result is: ", result);
}
else {
    console.log("Kindly enter valid  input");
}
