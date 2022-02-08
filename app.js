var vid = document.getElementById("myVideo");
var audio= document.getElementById("my_audio");
var audio_end= document.getElementById("my_audio1");
var i = 1.6;
var j = 1;
vid.playbackRate = 1.3;
icon1  = document.getElementById('icon1');
icon2  = document.getElementById('icon2');
icon3  = document.getElementById('icon3');



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
    i=i+2.3;
    if(i>7.9)
    {
       
        openForm();
        audio_end.play();
        
    }
}

function showLogo() {
    document.getElementById('game_screen').innerHTML = "<img src =logo.png width=\"300px\" height=\"350px\">";
 
  }

  function openForm() {
    document.getElementById("myForm").style.display = "block";
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
