//standard variables
let counter = 0;

//manual variables
let hit = 1;
let vocaLicence = 0;
let mikuRemix = 0;
let mikuCovers = 0;

//idle variables
let idle = 0;
let soundCloud = 0;
let spotify = 0;
let youTube = 0;

//upgrade prices
let costUpgrade1 = 10;
let costUpgrade2 = 200;
let costUpgrade3 = 4500;
let costUpgrade4 = 12300;
let costUpgrade5 = 132300;
let costUpgrade6 = 7823470;
let costUpgrade7 = 656784310;
let costUpgrade8 = 9763435948670;
let costUpgrade9 = 53904890908943430950;

//rebirth variables
let rebirth = 1;
let rebirthP = 1;
let rebirthPP = 1;

//ANIMATIONS

//reset handle animation and logic
document.getElementById("resetHandle").addEventListener("click", () => {
    const resetTab = document.getElementById("resetTab");
    if (resetTab.style.transform === "translate(-50%, -50%)") {
        resetTab.style.transform = "translate(-50%, 0%)";
    } else {
        resetTab.style.transform = "translate(-50%, -50%)";
    }
});

document.getElementById("reset").addEventListener("click", () => {
    counter = 0;
    hit = 1;
    vocaLicence = 0;
    mikuRemix = 0;
    mikuCovers = 0;
    idle = 0;
    soundCloud = 0;
    spotify = 0;
    youTube = 0;
    rebirth = 1;
    rebirthP = 1;
    rebirthPP = 1;
    costUpgrade1 = 10;
    costUpgrade2 = 200;
    costUpgrade3 = 4500;
    costUpgrade4 = 12300;
    costUpgrade5 = 132300;
    costUpgrade6 = 7823470;
    costUpgrade7 = 656784310;
    costUpgrade8 = 9763435948670;
    costUpgrade9 = 53904890908943430950;
    hit = 1 + vocaLicence + mikuRemix + mikuCovers * rebirth * rebirthP * rebirthPP;
    idle = soundCloud + spotify + youTube * rebirth * rebirthP * rebirthPP;
    document.getElementById("costUpgrade1").innerHTML = costUpgrade1.toFixed(1);
    document.getElementById("costUpgrade2").innerHTML = costUpgrade2.toFixed(1);
    document.getElementById("costUpgrade3").innerHTML = costUpgrade3.toFixed(1);
    document.getElementById("costUpgrade4").innerHTML = costUpgrade4.toFixed(1);
    document.getElementById("costUpgrade5").innerHTML = costUpgrade5.toFixed(1);
    document.getElementById("costUpgrade6").innerHTML = costUpgrade6.toFixed(1);
    document.getElementById("costUpgrade7").innerHTML = costUpgrade7.toFixed(1);
    document.getElementById("costUpgrade9").innerHTML = costUpgrade9.toFixed(1);
    document.getElementById("costUpgrade9").innerHTML = costUpgrade9.toFixed(1);
    document.getElementById("counter").innerHTML = counter.toFixed(1);
});

//upgrades tab animation
document.getElementById("upgradesButton").addEventListener("click", () => {
    const upgradesTab = document.getElementById("upgradesTab");
    if (upgradesTab.style.left === "-30%") {
        upgradesTab.style.left = "9%";
    } else {
        upgradesTab.style.left = "-30%"
    }
});

//GAMEPLAY

//hit logic
document.getElementById("clickable").addEventListener("click", () => {
    counter += hit;
    document.getElementById("counter").innerHTML = counter.toFixed(1);
});

document.getElementById("buyUpgrade1").addEventListener("click", () => {
    if (counter >= costUpgrade1) {
        counter -= costUpgrade1;
        vocaLicence += 3;
        costUpgrade1 *= 1.2;
        hit = 1 + vocaLicence + mikuRemix + mikuCovers * rebirth * rebirthP * rebirthPP;
        document.getElementById("costUpgrade1").innerHTML = costUpgrade1.toFixed(1);
    }
});

document.getElementById("buyUpgrade3").addEventListener("click", () => {
    if (counter >= costUpgrade3) {
        counter -= costUpgrade3;
        mikuRemix += 51;
        costUpgrade3 *= 1.2;
        hit = 1 + vocaLicence + mikuRemix + mikuCovers * rebirth * rebirthP * rebirthPP;
        document.getElementById("costUpgrade3").innerHTML = costUpgrade3.toFixed(1);
    }
});

document.getElementById("buyUpgrade5").addEventListener("click", () => {
    if (counter >= costUpgrade5) {
        counter -= costUpgrade5;
        mikuCovers += 807;
        costUpgrade5 *= 1.2;
        hit = 1 + vocaLicence + mikuRemix + mikuCovers * rebirth * rebirthP * rebirthPP;
        document.getElementById("costUpgrade5").innerHTML = costUpgrade5.toFixed(1);
    }
});

//idle logic
setInterval(() => {
    counter += idle;
    //this line also auto resets the counter on upgrade purchase
    document.getElementById("counter").innerHTML = counter.toFixed(1);
}, 125);

document.getElementById("buyUpgrade2").addEventListener("click", () => {
    if (counter >= costUpgrade2) {
        counter -= costUpgrade2;
        soundCloud += 4;
        costUpgrade2 *= 1.2;
        idle = soundCloud + spotify + youTube * rebirth * rebirthP * rebirthPP;
        document.getElementById("costUpgrade2").innerHTML = costUpgrade2.toFixed(1);
        document.getElementById("idle").innerHTML = idle.toFixed(1);
    }
});

document.getElementById("buyUpgrade4").addEventListener("click", () => {
    if (counter >= costUpgrade4) {
        counter -= costUpgrade4;
        spotify += 423;
        costUpgrade4 *= 1.2;
        idle = soundCloud + spotify + youTube * rebirth * rebirthP * rebirthPP;
        document.getElementById("costUpgrade4").innerHTML = costUpgrade4.toFixed(1);
        document.getElementById("idle").innerHTML = idle.toFixed(1);

    }
});

document.getElementById("buyUpgrade6").addEventListener("click", () => {
    if (counter >= costUpgrade6) {
        counter -= costUpgrade6;
        youTube += 7113;
        costUpgrade6 *= 1.2;
        idle = soundCloud + spotify + youTube * rebirth * rebirthP * rebirthPP;
        document.getElementById("costUpgrade6").innerHTML = costUpgrade6.toFixed(1);
        document.getElementById("idle").innerHTML = idle.toFixed(1);
    }
});

//rebirth logic
document.getElementById("buyUpgrade7").addEventListener("click", () => {
    if (counter >= costUpgrade7 && rebirth == 1) {
        counter = 0;
        rebirth = 2;
        //set variables to default values
        vocaLicence = 0;
        mikuRemix = 0;
        mikuCovers = 0;
        soundCloud = 0;
        spotify = 0;
        youTube = 0;
        //set calcs
        hit = (1 + vocaLicence + mikuRemix + mikuCovers) * rebirth * rebirthP * rebirthPP;
        idle = (soundCloud + soundCloud + youTube * rebirth) * rebirthP * rebirthPP;
        //set prices to default
        costUpgrade1 = 10;
        costUpgrade2 = 200;
        costUpgrade3 = 4500;
        costUpgrade4 = 12300;
        costUpgrade5 = 132300;
        costUpgrade6 = 7823470;
        //set price
        costUpgrade7 *= 1.2;
        document.getElementById("costUpgrade7").innerHTML = costUpgrade7.toFixed(1);
        document.getElementById("idle").innerHTML = idle.toFixed(1);
    } else if (counter >= costUpgrade7 && rebirth >= 2) {
        counter = 0;
        rebirth *= 2;
        //set variables to default values
        vocaLicence = 0;
        mikuRemix = 0;
        mikuCovers = 0;
        soundCloud = 0;
        spotify = 0;
        youTube = 0;
        //set calcs
        hit = (1 + vocaLicence + mikuRemix + mikuCovers) * rebirth * rebirthP * rebirthPP;
        idle = (soundCloud + soundCloud + youTube * rebirth) * rebirthP * rebirthPP;
        //set prices to default
        costUpgrade1 = 10;
        costUpgrade2 = 200;
        costUpgrade3 = 4500;
        costUpgrade4 = 12300;
        costUpgrade5 = 132300;
        costUpgrade6 = 7823470;
        //set price
        costUpgrade7 *= 1.2;
        document.getElementById("costUpgrade7").innerHTML = costUpgrade7.toFixed(1);
        document.getElementById("idle").innerHTML = idle.toFixed(1);
    }
});

document.getElementById("buyUpgrade8").addEventListener("click", () => {
    if (counter >= costUpgrade8 && rebirthP == 1) {
        counter = 0;
        rebirthP = 3;
        //set variables to default values
        vocaLicence = 0;
        mikuRemix = 0;
        mikuCovers = 0;
        soundCloud = 0;
        spotify = 0;
        youTube = 0;
        rebirth = 1;
        //set calcs
        hit = (1 + vocaLicence + mikuRemix + mikuCovers) * rebirth * rebirthP * rebirthPP;
        idle = (soundCloud + soundCloud + youTube * rebirth) * rebirthP * rebirthPP;
        //set prices to default
        costUpgrade1 = 10;
        costUpgrade2 = 200;
        costUpgrade3 = 4500;
        costUpgrade4 = 12300;
        costUpgrade5 = 132300;
        costUpgrade6 = 7823470;
        costUpgrade7 = 656784310;
        //set price
        costUpgrade8 *= 1.2;
        document.getElementById("costUpgrade8").innerHTML = costUpgrade8.toFixed(1);
        document.getElementById("idle").innerHTML = idle.toFixed(1);
    } else if (counter >= costUpgrade8 && rebirthP >= 3) {
        counter = 0;
        rebirthP *= 3;
        //set variables to default values
        vocaLicence = 0;
        mikuRemix = 0;
        mikuCovers = 0;
        soundCloud = 0;
        spotify = 0;
        youTube = 0;
        rebirth = 1;
        //set calcs
        hit = (1 + vocaLicence + mikuRemix + mikuCovers) * rebirth * rebirthP * rebirthPP;
        idle = (soundCloud + soundCloud + youTube * rebirth) * rebirthP * rebirthPP;
        //set prices to default
        costUpgrade1 = 10;
        costUpgrade2 = 200;
        costUpgrade3 = 4500;
        costUpgrade4 = 12300;
        costUpgrade5 = 132300;
        costUpgrade6 = 7823470;
        costUpgrade7 = 656784310;
        //set price
        costUpgrade8 *= 1.2;
        document.getElementById("costUpgrade8").innerHTML = costUpgrade8.toFixed(1);
        document.getElementById("idle").innerHTML = idle.toFixed(1);
    }
});

document.getElementById("buyUpgrade9").addEventListener("click", () => {
    if (counter >= costUpgrade9 && rebirthPP == 1) {
        counter = 0;
        rebirthPP = 4;
        //set variables to default values
        vocaLicence = 0;
        mikuRemix = 0;
        mikuCovers = 0;
        soundCloud = 0;
        spotify = 0;
        youTube = 0;
        rebirth = 1;
        rebirthP = 1;
        //set calcs
        hit = (1 + vocaLicence + mikuRemix + mikuCovers) * rebirth * rebirthP * rebirthPP;
        idle = (soundCloud + soundCloud + youTube * rebirth) * rebirthP * rebirthPP;
        //set prices to default
        costUpgrade1 = 10;
        costUpgrade2 = 200;
        costUpgrade3 = 4500;
        costUpgrade4 = 12300;
        costUpgrade5 = 132300;
        costUpgrade6 = 7823470;
        costUpgrade7 = 656784310;
        costUpgrade8 = 53904890908943430950;
        //set price
        costUpgrade9 *= 1.2;
        document.getElementById("costUpgrade9").innerHTML = costUpgrade9.toFixed(1);
        document.getElementById("idle").innerHTML = idle.toFixed(1);
    } else if (counter >= costUpgrade9 && rebirthPP >= 4) {
        counter = 0;
        rebirthPP *= 4;
        //set variables to default values
        vocaLicence = 0;
        mikuRemix = 0;
        mikuCovers = 0;
        soundCloud = 0;
        spotify = 0;
        youTube = 0;
        rebirth = 1;
        rebirthP = 1;
        //set calcs
        hit = (1 + vocaLicence + mikuRemix + mikuCovers) * rebirth * rebirthP * rebirthPP;
        idle = (soundCloud + soundCloud + youTube * rebirth) * rebirthP * rebirthPP;
        //set prices to default
        costUpgrade1 = 10;
        costUpgrade2 = 200;
        costUpgrade3 = 4500;
        costUpgrade4 = 12300;
        costUpgrade5 = 132300;
        costUpgrade6 = 7823470;
        costUpgrade7 = 656784310;
        costUpgrade8 = 53904890908943430950;
        //set price
        costUpgrade9 *= 1.2;
        document.getElementById("costUpgrade9").innerHTML = costUpgrade9.toFixed(1);
        document.getElementById("idle").innerHTML = idle.toFixed(1);
    }
});