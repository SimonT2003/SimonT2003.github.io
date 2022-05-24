(function (window){
    var byeSpeaker = {};
    var speakWord = "GoodBye ";
    
    byeSpeaker.speak = function (listOfNames) {
      console.log(speakWord + listOfNames);
    }
     
     window.byeSpeaker = byeSpeaker;

})(window);