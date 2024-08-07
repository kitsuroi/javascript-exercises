const getAge = function(person){
  person.yearOfDeath ??= (new Date()).getFullYear();
  return person.yearOfDeath - person.yearOfBirth;
};

const findTheOldest = function(people) {
  people.sort(function(lastPerson, nextPerson){
    return getAge(lastPerson) > getAge(nextPerson) ? -1 : 1;
  });
  return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
