import { notesToPlayInOrder } from "./music-to-play";
let audioPointer =0; 
let audio: HTMLAudioElement;

var src
let audioArray: string[] = []; 
let idList: number[] = [];

// type  a ={
//     audioArray:   string[],
//     idList:number[]

// }
function playMusic() {
console.log(notesToPlayInOrder)
    const notes = notesToPlayInOrder;
    notesToPlayInOrder.map((data,key)=>{
        if(data){
            let id;
            if(data.accidental){
                              id=  data.pitch+data.octave+data.accidental
                            }else{
                                id=  data.pitch+data.octave
                            }
                            src = <HTMLVideoElement> document.getElementById(id);
                            audioArray.push(src.src)
                            idList.push(data.beats)

        }
    })
      console.log("start"); 
      audioPointer = 0; 
      if (audioPointer <audioArray.length) { 
        audio = new Audio(audioArray[audioPointer]); 
        console.log(audio)
        let timeleft=idList[audioPointer]
        console.log(timeleft)
      setInterval(function(){
                        timeleft--;
                        // console.log(timeleft);
                        // console.log("audioPointer before increment",audioPointer)
                        if(timeleft === 0){
                            audioPointer += 1; 
                            audio.src= audioArray[audioPointer]
                            console.log(audioPointer)
                            timeleft=idList[audioPointer]
                            console.log("timeleft",timeleft)
                        }
                        else{
                            audio.play();
                        }
                        },1000);
         
        console.log(`playing ${audioArray[audioPointer]}`);
         
      } else { 
        console.log("finished"); 
      }          
 
   

    
}


document.getElementById('start-playing')?.addEventListener('click', playMusic);