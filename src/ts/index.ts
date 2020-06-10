import { notesToPlayInOrder } from "./music-to-play";

function playMusic() {
    const notes = notesToPlayInOrder;
    
    // TODO Play these notes one after the other at the pitch and rhythm given in each note

    var i = -1;
    const playNext = () => 
    {
        i++;
        if(notes[i])
        {
            const audio = new Audio(); // creating audio for each object present in the array

            if(notes[i].accidental || notes[i].accidental!= null) // Find the source which has accidental
            {
                audio.src = notes[i].pitch + notes[i].octave.toString() + " " + notes[i].accidental + ".mp3";
            }
            else
            {
                audio.src = notes[i].pitch + notes[i].octave.toString() + ".mp3";
            }

            audio.currentTime = 0; // Play the new audio from the start while keeping the current time as 0
            audio.play();

            setTimeout(function() // Pause the audio after (notes[i].beats * 250) milli-seconds
            {
                audio.pause();
            }, (notes[i].beats)*250); // BEATS_PER_MINUTE = 240, X BEATS = Y milliseconds 

            audio.addEventListener("pause", function() // eventlistener to call the playNext() once the audio is paused
            {
                return playNext(); // recursion
            });
        }
    }
    playNext(); // Method/function to play audio one after another
}

document.getElementById('start-playing')?.addEventListener('click', playMusic);
