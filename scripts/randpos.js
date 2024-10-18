document.addEventListener("DOMContentLoaded", function(event){
    var buttns = document.querySelectorAll('#buttn');
    buttns.forEach(buttns => {
        buttns.style.top = Math.floor(Math.random() * 100) + "%";
        buttns.style.left = Math.floor(Math.random() * 95) + "%";
        var randDeg = Math.floor(Math.random() * 25) + "deg";
        var randTime = Math.floor(Math.random() * 5) * 1000;
        console.log(randDeg)
        buttns.animate([
            { transform: `rotate(${randDeg})` },
            { transform: `rotate(-${randDeg})` }
        ],{
            duration: randTime,
            iterations: Infinity,
            direction: "alternate",
            easing: "ease-in-out",
            animationPlayState: "running"
        });
    });
    var killtoggle = document.getElementById('killanim');
    killtoggle.addEventListener('click', () => {
        document.getElementById("killbuttons").style.display = "inline";
        document.getElementById("fireLeft").style.display = "none";
        document.getElementById("fireRight").style.display = "none";
        const anims = document.querySelectorAll("a");
        document.body.style.animationIterationCount = "0";
        anims.forEach(buttanim => {
            buttanim.animate([
                { transform: `rotate(0deg)` },
                { transform: `rotate(0deg)` }
            ],{
                duration: 10000000,
                iterations: Infinity,
                direction: "alternate",
                easing: "ease-in-out",
                animationPlayState: "running"
            });
        })
    });
    var killbuttons = document.getElementById('killbuttons');
    killbuttons.addEventListener('click', () => {
        document.querySelector("#buttonbar").remove();
    })
  });