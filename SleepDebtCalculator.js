function getSleepHours(day){
  switch(day){
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 7;
      break;
    case 'wednesday':
      return 5;
      break;
    case 'thursday':
      return 9;
      break;
    case 'friday':
      return 10;
      break;
    default:
      console.log('invalid day');
      break;
  }
}
/*
console.log(getSleepHours('monday'));
console.log(getSleepHours('wednesday'));
console.log(getSleepHours('friday'));
console.log(getSleepHours('thursday'));
*/
const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday');

function getIdealSleepHours(){
  var idealHours = 8;
  return idealHours * 7;
}

//console.log(getActualSleepHours('monday'));
//console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
  var actualSleepHours = getActualSleepHours('monday');
  var idealSleepHours = getIdealSleepHours('monday');

  if(actualSleepHours === idealSleepHours){
    console.log('You got the perfect amount of sleep.');
  }

  if(actualSleepHours > idealSleepHours){
    console.log('You got more sleep than needed.');
  }else{
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
  }
};

calculateSleepDebt();
