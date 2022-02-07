var vid = document.getElementById("myVideo");
var audio= document.getElementById("my_audio");
var audio_end= document.getElementById("my_audio1");
var i = 1.5;
var j = 1;
vid.playbackRate = 1.2;
icon1  = document.getElementById('icon1');
icon2  = document.getElementById('icon2');
icon3  = document.getElementById('icon3');
play_btn  = document.getElementById('play_btn');


function playVid()
{
    audio.play();
   
    if(j==1){
        icon1.style="display:none"
    }
    else if(j==2){
        icon2.style="display:none"
    }
    else if(j==3){
        icon3.style="display:none"
    }
    vid.play();
}

function pauseVid(){
    vid.pause();
    j=j+1;
    if(j==2){
        icon2.style="display:block; font-size:48px; color:black"
}
else if(j==3){
        icon3.style="display:block;  font-size:40px; color:black"
}
    i=i+2.1;
    if(i>7.5)
    {
       
        showLogo();
        audio_end.play();
        play_btn.style="display:block; border-radius:50px; font-size:40px; color:black"
    }
}

function showLogo() {
    document.getElementById('game_screen').innerHTML = "<img src =logo.png width=\"300px\" height=\"350px\">";
 
  }

// function showLogo(){
//     document.getElementById('game_Logo')

// }
    document.getElementById('game_screen').addEventListener('click',(e)=>
    { playVid();
    vid.addEventListener("timeupdate", function()
    {
        if(this.currentTime >=i){
            pauseVid();
            console.log(this.currentTime);
            console.log(i);
        }
       
    });
})
