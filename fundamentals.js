// NOTE: Make sure to use the `var` keyword for ALL variable declarations.

// Create an array of strings called `colors` that contains three colors.

var colors = ['blue', 'red', 'green']

// Access the last item in the array and assign to a variable called `last`.

var last = colors[colors.length - 1]

// Create an empty array called `favoriteColors`.

var favoriteColors = []

// Create a `for` loop that adds each string in `colors` to `favoriteColors`.

for (var i = 0; i < colors.length; i++) {
  favoriteColors.push(colors[i])
}

// Create an object literal called `instructor` that contains three key-value pairs.

var instructor = {
  alive: true,
  age: 42,
  hairColor: 'brown'
}

// Add a `facial-hair` (spelled exactly) property to `instructor` by accessing
// it (do not change the original object you typed above) and assigning it
// a boolean value.

instructor['facial-hair'] = true
