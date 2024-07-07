import inquirer from 'inquirer';
const syestemGeneratedNo = Math.floor(Math.random() * 10);
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "userguess",
        message: "write your guess"
    }
]);
const { userGuess } = answer;
if (userGuess === syestemGeneratedNo) {
    console.log(userGuess, "userGuess", syestemGeneratedNo, 'SYs');
    console.log("yeaa your answer is correct \n you win!");
}
else {
    console.log("please try again better luck next time!");
}
