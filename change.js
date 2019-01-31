var words = ['again', 'always', 'animal', 'another', 'begin', 'because', 'believe', 'better', 'black', 'bath', 'bring', 'brother', 'goes', 'live', 'many', 'paste', 'something', 'together', 'who', 'zero'],
    element = document.body,
    currentWord = -1;

window.setInterval(function(){
   currentWord++;
   if(currentWord > words.length) currentWord = 0;
   element.textContent = words[currentWord];
}, 3000);

document.getElementById("p1").innerHTML = "New text!";