var listOfNames = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < listOfNames.length; i++) {
  if (listOfNames[i].charAt(0) === 'J' || listOfNames[i].charAt(0) === 'j') {
    console.log("Goodbye " + listOfNames[i])
  }
  else {
    console.log("Hello " + listOfNames[i])
  }
}