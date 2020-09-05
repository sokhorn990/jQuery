var sounds = document.getElementById("result");
var btn = document.querySelector("#btn");
btn.addEventListener('click', userSpeak);
function userSpeak() {
    if ('webkitSpeechRecognition' in window) {
        let speak = new webkitSpeechRecognition();
        speak.continuous = true;
        speak.interimResults = true;
        speak.lang = "en-IN";
        speak.start();
        let finalSpeak = '';
        speak.onresult = function (event) {
            let interimTranscript = '';
            for (let i = event.resultIndex; i < event.results.length; i++) {
                let transcripts = event.results[i][0].transcript;
                transcripts.replace("\n", "<br>");
                if (event.results[i].isFinal) {
                    finalSpeak += transcripts;
                } else {
                    interimTranscript += transcripts;
                }
            }
            sounds.innerHTML = finalSpeak + interimTranscript;
        };
    } else {
        sounds.innerHTML = "Browser not support";
    }
}
