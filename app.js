var vid = document.getElementById("myVideo");
var i = 1.82;
vid.playbackRate = 1.5;


function playVid()
{
    vid.play();
}

function pauseVid(){
    vid.pause();
    i=i+1.55;
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
