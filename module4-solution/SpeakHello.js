(function (window) {  
    
    var helloSpeaker = {};
    var speakWord = "Hello ";
    
    helloSpeaker.speak = function (listOfNames) {
      console.log(speakWord + listOfNames);
    }
        window.helloSpeaker = helloSpeaker;

})(window);