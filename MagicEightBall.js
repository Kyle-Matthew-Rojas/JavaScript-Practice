let userName = "TestUser123";
userName === "" ? console.log('Hello!') : console.log(`Hello, ${userName}!`);

let userQuestion = "Will I win the lottery?";
console.log(`${userName} asked: ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";

switch(randomNumber){
  case 0:
    eightBall = 'Probably not';
    break;
  case 1:
    eightBall = 'It is certain';
    break;
  case 2:
    eightBall = 'It is decidely so';
    break;
  case 3:
    eightBall = 'Reply hazy try again';
    break;
  case 4:
    eightBall = 'Cannot predict now';
    break;
  case 5:
    eightBall = 'Do not count on it';
    break;
  case 6:
    eightBall = 'My sources say no';
    break;
  case 7:
    eightBall = 'Outlook not so good';
    break;
  case 8:
    eightBall = 'Signs point to yes';
    break;
  default:
    eightBall = 'Try Again';
    break;
}

console.log(`The eight ball answered: ${eightBall}`);
