const pianoKeys = document.querySelectorAll(".piano-keys .key");
volumeSlider = document.querySelector(".volume-slider input");
keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = [],
audio = new Audio("tunes/a.wav");

const playTune = (key) => {
    //passing audio src based on key pressed
    audio.src = `tunes/${key}.wav`;
    //playing audio 
    audio.play(); 
    // console.log(allKeys);
    

    const clickedKey = document.querySelector(`[data-key = "${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 2000);

}

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key);
    // calling playtune function with passing data-key value as an argument
    key.addEventListener("click", () => playTune(key.dataset.key));
    
});

const handleVolume = (e) => {
    //passing the range slider value as an audio volume
    audio.volume = e.target.value; 
}

const pressedKey = (e) => {
    // if the passed key is in the allkeys array, only call the playtune function
    if (allKeys.includes(e.key))  playTune(e.key);
    // console.log(e); 
    
}

const showHideKeys = () => {

    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);