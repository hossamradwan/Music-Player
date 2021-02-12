var audio = document.getElementById('myAudio');

songs =['1.mp3', '2.mp3', '3.mp3', '4.mp3']
var i = 0
var repeatFlag=false;
var shuffleFlag=false;
document.getElementById('play').addEventListener("click",()=>{
    repeatFlag=false;
    shuffleFlag=false;
    audio.play();

})

document.getElementById('repeat').addEventListener("click",()=>{
    repeatFlag=true;
    shuffleFlag=false;
    audio.play();
})

document.getElementById('shuffle').addEventListener("click",()=>{
    shuffleFlag=true;
    repeatFlag=false;
    audio.play();
})

document.getElementById('Song1').addEventListener("click",()=>{
    audio.pause(); 
    audio.src='1.mp3'; 
    audio.play();
    i=0; 
})
document.getElementById('Song2').addEventListener("click",()=>{
    audio.pause(); 
    audio.src='2.mp3'; 
    audio.play(); 
    i=1;
})
document.getElementById('Song3').addEventListener("click",()=>{
    audio.pause(); 
    audio.src='3.mp3'; 
    audio.play(); 
    i=2;
})
document.getElementById('Song4').addEventListener("click",()=>{
    audio.pause(); 
    audio.src='4.mp3'; 
    audio.play(); 
    i=3;
})


audio.addEventListener("ended",(e)=>{
    console.log(shuffleFlag);
    console.log(repeatFlag);

    if(repeatFlag==true)
    {
        //do not increase i
    }
    else if(shuffleFlag==true)
    {
        var max=3;
        i = Math.floor(Math.random() * (max + 1)); 
        console.log(i);   
    }
    else
    {
        i=i+1
        if(i == 4)
        {
            i = 1;
        }  
    }
    e.target.src=songs[i]; 
    e.target.play();
    
})