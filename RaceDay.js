let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let runnerAge = 18;

if(registeredEarly && runnerAge > 18){
  raceNumber += 1000;
}

if(registeredEarly && runnerAge > 18){
  console.log(`Runner ${raceNumber}: Your race begins at 9:30 am.`);
}else if(registeredEarly === false && runnerAge > 18){
  console.log('Late adults run at 11:00 am.');
}

if(runnerAge < 18){
  console.log('Youth registrants run at 12:30 pm (regardless of registration)');
}else if(runnerAge === 18){
  console.log(`Runner ${raceNumber}: Please see the registration desk!`);
}
