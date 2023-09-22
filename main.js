const listenBtn = document.querySelector("button");
const selectEl = document.querySelector("select");
const pause = document.getElementById("pause")
const resume = document.getElementById("resume")
const stop1 = document.getElementById("stop")
const speech = new SpeechSynthesisUtterance();
let voices = null;


listenBtn.addEventListener('click', () => {
    const textValue = document.querySelector("textarea").value;
    speech.text = textValue;
   speechSynthesis.speak(speech);
});

speechSynthesis.onvoiceschanged = () => {
    voices = speechSynthesis.getVoices();
    console.log(voices);
    speech.voice = voices[0];
    voices.forEach((voice, i) => selectEl.options[i] = new Option(voice.name, i));
}
selectEl.addEventListener("change", () => {
    speech.voice = voices[selectEl.value]; 
});

pause.addEventListener("click", () => {
    const textValue = document.querySelector("textarea").value;
    speech.text = textValue;
    speechSynthesis.pause(speech);
})
resume.addEventListener("click", () => {
    const textValue = document.querySelector("textarea").value;
    speech.text = textValue;
    speechSynthesis.resume(speech);
})
stop1.addEventListener("click", () => {
    const textValue = document.querySelector("textarea").value;
    speech.text = textValue;
    speechSynthesis.cancel(speech);
})
