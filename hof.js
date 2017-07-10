// NOTE: Make sure to use the `var` keyword for ALL variable declarations

var people = [
  {name: 'Jane', age: 32},
  {name: 'Jessica', age: 34},
  {name: 'Jasmine', age: 39}
]

var peopleOlderThan35 = []

// Use the `map` array method to create a new array containing the ages of each
// person in the `people` array. Assign the returned array to a variable
// called `peoplesAges`.

function getAges (person) {
  return person.age
}

function oldPeep (person) {
  return person.age > 35
}

var peoplesAges = people.map(getAges)
// Use the `filter` array method to create a new, filtered array containing only
// persons from the `people` array who are older than 35. Assign the returned array
// to a variable called `peopleOlderThan35`.

peopleOlderThan35 = people.filter(oldPeep)
