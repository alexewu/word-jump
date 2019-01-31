var words = ['hello world', 'foo bar', 'john smith', 'my name'],
    element = document.body,
    currentWord = -1;

window.setInterval(function(){
   currentWord++;
   if(currentWord > words.length) currentWord = 0;
   element.textContent = words[currentWord];
}, 5000);