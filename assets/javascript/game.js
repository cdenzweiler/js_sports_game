console.log("It's Tuesday, my dudes.")


//              TEAM ONE                // 
const tshoot = document.querySelector("#teamone-shoot-button")
const tnum = document.querySelector("#teamone-numshots")
const tscore = document.querySelector("#teamone-numgoals")

tshoot.addEventListener("click", function () {
    console.log("T1 shoots");

    tnumValue = Number(tnum.innerHTML) + 1;
    tnum.innerHTML = tnumValue;

    var y = Math.floor(Math.random() * 10);
    var x = Number(5);

    console.log(y)

    if (y > x) {
        tscoreValue = Number(tscore.innerHTML) + 1;
        tscore.innerHTML = tscoreValue;
    }
})



//              TEAM 2          //

const t2shoot = document.querySelector("#teamtwo-shoot-button")
const t2num = document.querySelector("#teamtwo-numshots")
let t2score = document.querySelector("#teamtwo-numgoals")

t2shoot.addEventListener("click", function () {
    console.log("T2 shoots");

    t2numValue = Number(t2num.innerHTML) + 1;
    t2num.innerHTML = t2numValue

    var y = Math.floor(Math.random() * 8);
    var x = Number(3);

    console.log(y)

    if (y > x) {
        t2scoreValue = Number(t2score.innerHTML) + 1;
        t2score.innerHTML = t2scoreValue;
    }

    
})


//              RESET             //

const reset = document.querySelector("#reset-button")
const rnum = document.querySelector("#num-resets")


reset.addEventListener("click", function () {
    console.log("reset")
    tnum.innerHTML = 0
    t2num.innerHTML = 0
    tscore.innerHTML = 0
    t2score.innerHTML = 0
    rnumValue = Number(rnum.innerHTML) + 1;
    rnum.innerHTML = rnumValue;

    
})
                // WIP //
//              Bonus               ///
// let audio = document.querySelector(au)