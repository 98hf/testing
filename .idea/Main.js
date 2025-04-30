//Speech recognition api
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
    alert("Sorry, your browser doesn't support Speech Recognition. Try using Google Chrome.");
} else {
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    var commands = ['go', 'cancel', 'new tab', 'search', 'scroll', 'enable tts', 'disable tts', 'tab', 'press', 'fontsize'];

    recognition.onresult = function(event) {
        var command = event.results[0][0].transcript.toLowerCase(); //Speech to text
        console.log('Command received: ' + command); // Log the command for debugging
        switch (command) {
            case 'black':
                var bg = document.querySelector('body');
                bg.style.background = 'black';
                break;
        }
        console.log('Confidence: ' + event.results[0][0].confidence); //confidence level of what was recognized
    }
}



function checkPM() {
    const checkbox = document.querySelector('input[name="Physical\\/Motor"]');
    return checkbox.checked;
}


function settings() {
    document.getElementsByClassName("settings")[0].style.display = "block";
}

let recActive = false;
function saveAndClose() {
    document.getElementsByClassName("settings")[0].style.display = "none";
    if(checkPM()){
        if(!recActive){
            recognition.start();
            recActive = true;
            console.log('Voice command on');
        }
    } else {
        if(recActive){
            recognition.stop();
            recActive = false;
            console.log('Voice command off');
        }
    }
}
