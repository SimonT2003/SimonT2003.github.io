(function () {

    var listOfNames = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    
    for (var i = 0; i < listOfNames.length; i++) {
    
      var firstLetter = listOfNames[i].charAt(0).toLowerCase();
      if (firstLetter === 'j') {
        byeSpeaker.speak(listOfNames[i]);
      } 
      else {
        helloSpeaker.speak(listOfNames[i]);
      }
    }
    
})();