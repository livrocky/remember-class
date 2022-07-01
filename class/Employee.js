import Human from './Human.js';

// praplecia Human class
export default class Employee extends Human {
  constructor(argAge, argName, argHourly) {
    super(argAge, argName);
    this.hourly = argHourly;
  }
}

// sukurdami Employee valadinis (sk )

const e1 = new Employee(28, 'Jane', 15);
console.log('e1===', e1);
