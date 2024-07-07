mport inquirer from 'inquirer';
type ansType = {
    userGuess: number 
}
const syestemGeneratedNo = Math.floor(Math.random()  * 10);

const answer : ansType = await inquirer.prompt([
    {
        type: "number",
        name:"userguess",
        message: "write your guess number b/w 1 to 10:"
    }
])
console.log( answer.userGuess);


const {userGuess} = answer;
console.log(userGuess,"userGuess",syestemGeneratedNo,'SYs')
if (userGuess === syestemGeneratedNo){
    console.log("yeaa your answer is correct \n you win!")
}else {
    console.log("please try again better luck next time!")
}
