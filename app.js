var vid = document.getElementById("myVideo");
var i = 1.5;
var j = 1;
vid.playbackRate = 0.8;
icon1  = document.getElementById('icon1');
icon2  = document.getElementById('icon2');
icon3  = document.getElementById('icon3');


function playVid()
{
    vid.play();
    if(j==1){
        icon1.style="display:none"
    }
    else if(j==2){
        icon2.style="display:none"
    }
    else if(j==3){
        icon3.style="display:none"
    }
}

function pauseVid(){
    vid.pause();
    j=j+1;
    if(j==2){
        icon2.style="display:block; border-radius:5px; font-size:48px; color:green"
}
else if(j==3){
        icon3.style="display:block; border-radius:20px; font-size:40px; color:green"
}
    i=i+2.1;
    if(i>7.5)
    {
       
        showLogo();
    }
}

function showLogo() {
    document.getElementById('game_screen').innerHTML = "<img src =./logo.png width=\"300px\" height=\"400px\">";
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
