//  the  lists below has been poplated with test data that could change
var wordSequence1 = ["", "The turkey ", "Mom ", "Dad ", "The dog ", "My teacher"];
var wordSequence2 = ["", "sat on ", "ate " , "danced with ", "saw ", "doesnt like"];
var wordSequence3 = [
  "",
  "a funny ",
  "a scary ",
  "a goofy ",
  "a slimy ",
  "a barking ",
];
var wordSequence4 = ["", "goat ", "monkey ", "fish ", "cow ", "frog ", "bug"];
var wordSequence5 = [
  "",
  "on the moon ",
  "on the chair ",
  "in my spaghetti ",
  "in my soup ",
  "on the grass ",
];

var count1 = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;
var count5 = 0;
// get randoms from the according to which button is clicked
var btn = document.getElementById("btn-1");
btn.onclick = function () {
  count1++;
  var text1 = document.getElementById("text-1");
  text1.innerHTML = wordSequence1[count1];
  console.log(wordSequence1[count1]);
};
var btn2 = document.getElementById("btn-2");
btn2.onclick = function () {
  count2++;
  var text2 = document.getElementById("text-2");
  text2.innerHTML = wordSequence2[count2];
  console.log(wordSequence2[count2]);
};
var btn3 = document.getElementById("btn-3");
btn3.onclick = function () {
  count3++;
  var text3 = document.getElementById("text-3");
  text3.innerHTML = wordSequence3[count3];
  console.log(wordSequence3[count3]);
};
var btn4 = document.getElementById("btn-4");
btn4.onclick = function () {
  count4++;
  var text4 = document.getElementById("text-4");
  text4.innerHTML = wordSequence4[count4];
  console.log(wordSequence4[count4]);
};
var btn5 = document.getElementById("btn-5");
btn5.onclick = function () {
  count5++;
  var text5 = document.getElementById("text-5");
  text5.innerHTML = wordSequence5[count5];
  console.log(wordSequence5[count5]);
};
// gived user a random text from the lists above
function surprise() {
  let randomNumber=Math.floor(Math.random()*5) ;
  alert(wordSequence1[randomNumber]+wordSequence2[randomNumber]+wordSequence3[randomNumber]+wordSequence4[randomNumber]+wordSequence5[randomNumber])
};
//returns words to be said by the robot
function getWordsToSpeak() {
  let randomNumber=Math.floor(Math.random()*5) ;
  return (wordSequence1[randomNumber]+wordSequence2[randomNumber]+wordSequence3[randomNumber]+wordSequence4[randomNumber]+wordSequence5[randomNumber])
};


// text to speech code
var voiceList = document.querySelector('#voiceList');
var btnSpeak = document.querySelector('#speak');
var synth = window.speechSynthesis;
var voices = [];

PopulateVoices();
if(speechSynthesis !== undefined){
    speechSynthesis.onvoiceschanged = PopulateVoices;
}

btnSpeak.addEventListener('click', ()=> {
    

    var toSpeak = new SpeechSynthesisUtterance(getWordsToSpeak());
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth.speak(toSpeak);
});

function PopulateVoices(){
    voices = synth.getVoices();
    var selectedIndex = voiceList.selectedIndex < 0 ? 0 : voiceList.selectedIndex;
    voiceList.innerHTML = '';
    voices.forEach((voice)=>{
        var listItem = document.createElement('option');
        listItem.textContent = voice.name;
        listItem.setAttribute('data-lang', voice.lang);
        listItem.setAttribute('data-name', voice.name);
        voiceList.appendChild(listItem);
    });

    voiceList.selectedIndex = selectedIndex;
}