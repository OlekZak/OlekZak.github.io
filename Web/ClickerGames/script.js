//COUNTER VAR
let Total = 0;

//BASE VAR
let Hit = 1;
let Base = 1;
let BuildNerv = 0;
let ExpandNerv = 0;
let EvaBuild = 0;
let FindEvaPilot = 0;
let AngelCoreBase = 1;

//IDLE VAR
let Incremental = 0;
let HireNerv = 0;
let TrainNerv = 1;
let BuildMagi = 1;
let EvaPilotTraining = 1;
let AngelCoreIdle = 1;

//upgrades tab popup logic
document.getElementById("pull").addEventListener("click", function () {
    var upgradeArea = document.getElementById("upgradeArea");
    if (upgradeArea.style.top === "92%") {
        upgradeArea.style.top = "62%";
        document.getElementById("pullIcon").innerHTML = "v";
    } else {
        upgradeArea.style.top = "92%";
        document.getElementById("pullIcon").innerHTML = "^";
    }
});

//counter logic
document.getElementById("counter").innerHTML = Total.toFixed(1);


//idle display
setInterval(function() {
    Incremental = (((HireNerv * TrainNerv) * BuildMagi) * EvaPilotTraining) * AngelCoreIdle;
    document.getElementById("increment").innerHTML = Incremental.toFixed(1);
    Total += Incremental;
    document.getElementById("counter").innerHTML = Total.toFixed(1);
}, 125);

//base logic
document.getElementById("clickable").addEventListener("click", () => {
    Total += Hit;
    document.getElementById("counter").innerHTML = Total.toFixed(1)
});

setInterval(function() {
    Hit = (Base + BuildNerv + ExpandNerv + EvaBuild + FindEvaPilot) * AngelCoreBase;
    document.getElementById("base").innerHTML = Hit.toFixed(1);
}, 250);

//upgrades base logic
let BuildNervPrice = 10;
document.getElementById("buildNervPrice").addEventListener("click", () => {
    if (Total >= BuildNervPrice) {
        Total = Total - BuildNervPrice;
        document.getElementById("counter").innerHTML = Total.toFixed(1);
        BuildNerv += 2;
        BuildNervPrice = BuildNervPrice * 1.2;
        document.getElementById("buildNervPrice").innerHTML = BuildNervPrice.toFixed(1);
    }
});

let ExpandNervPrice = 8700;
document.getElementById("expandNervPrice").addEventListener("click", () => {
    if (Total >= ExpandNervPrice) {
        Total = Total - ExpandNervPrice;
        document.getElementById("counter").innerHTML = Total.toFixed(1);
        ExpandNerv += 40;
        ExpandNervPrice = ExpandNervPrice * 1.2;
        document.getElementById("expandNervPrice").innerHTML = ExpandNervPrice.toFixed(1);
    }
});

let EvaBuildPrice = 87700;
document.getElementById("evaBuildNervPrice").addEventListener("click", () => {
    if (Total >= EvaBuildPrice) {
        Total = Total - EvaBuildPrice;
        document.getElementById("counter").innerHTML = Total.toFixed(1);
        EvaBuild += 270;
        EvaBuildPrice = EvaBuildPrice * 1.2;
        document.getElementById("evaBuildNervPrice").innerHTML = EvaBuildPrice.toFixed(1);
    }
});

let FindEvaPilotPrice = 263500;
document.getElementById("findEvaPilotsPrice").addEventListener("click", () => {
    if (Total >= FindEvaPilotPrice) {
        Total = Total - EvaBuildPrice;
        document.getElementById("counter").innerHTML = Total.toFixed(1);
        FindEvaPilot += 1730;
        FindEvaPilotPrice = FindEvaPilotPrice * 1.2;
        document.getElementById("findEvaPilotsPrice").innerHTML = FindEvaPilotPrice.toFixed(1);
    }
});

//upgrades idle logic
let HireNervPrice = 600;
document.getElementById("hireNervPrice").addEventListener("click", () => {
    if (Total >= HireNervPrice) {
        Total = Total - HireNervPrice;
        document.getElementById("counter").innerHTML = Total.toFixed(1);
        HireNerv += 4;
        HireNervPrice = HireNervPrice * 1.2;
        document.getElementById("hireNervPrice").innerHTML = HireNervPrice.toFixed(1);
    }
});

let TrainNervPrice = 23700;
document.getElementById("trainNervPrice").addEventListener("click", () => {
    if (Total >= TrainNervPrice) {
        Total = Total - TrainNervPrice;
        document.getElementById("counter").innerHTML = Total.toFixed(1);
        TrainNerv += 0.2;
        TrainNervPrice = TrainNervPrice * 1.2;
        document.getElementById("trainNervPrice").innerHTML = TrainNervPrice.toFixed(1);
    }
});

let BuildMagiPrice = 134700;
document.getElementById("buildMagiPrice").addEventListener("click", () => {
    if (Total >= BuildMagiPrice) {
        Total = Total - BuildMagiPrice;
        document.getElementById("counter").innerHTML = Total.toFixed(1);
        BuildMagi += 1.3;
        BuildMagiPrice = BuildMagiPrice * 1.2;
        document.getElementById("buildMagiPrice").innerHTML = BuildMagiPrice.toFixed(1);
    }
});

let EvaPilotTrainingPrice = 578700;
document.getElementById("evaPilotTrainingPrice").addEventListener("click", () => {
    if (Total >= EvaPilotTrainingPrice) {
        Total = Total - EvaPilotTraining;
        document.getElementById("counter").innerHTML = Total.toFixed(1);
        EvaPilotTraining += 2.7;
        EvaPilotTrainingPrice = EvaPilotTrainingPrice * 1.2;
        document.getElementById("evaPilotTrainingPrice").innerHTML = EvaPilotTrainingPrice.toFixed(1);
    }
});

//rebirth logic
let AngelPrice = 9275700;
document.getElementById("killAngelPrice").addEventListener("click", () => {
    if (Total >= AngelPrice) {
        Total = 0;
        document.getElementById("counter").innerHTML = Total.toFixed(1);
        //base reset
        BuildNerv = 0;
        BuildNervPrice = 10;
        document.getElementById("buildNervPrice").innerHTML = BuildNervPrice.toFixed(1);
        ExpandNerv = 0;
        ExpandNervPrice = 8700;
        document.getElementById("expandNervPrice").innerHTML = ExpandNervPrice.toFixed(1);
        EvaBuild = 0;
        EvaBuildPrice = 87700;
        document.getElementById("evaBuildNervPrice").innerHTML = EvaBuildPrice.toFixed(1);
        FindEvaPilot = 0;
        FindEvaPilotPrice = 263500;
        document.getElementById("findEvaPilotsPrice").innerHTML = FindEvaPilotPrice.toFixed(1);
        //idle reset
        HireNerv = 0;
        HireNervPrice = 600;
        document.getElementById("hireNervPrice").innerHTML = HireNervPrice.toFixed(1);
        TrainNerv = 1;
        TrainNervPrice = 23700;
        document.getElementById("trainNervPrice").innerHTML = TrainNervPrice.toFixed(1);
        BuildMagi = 1;
        BuildMagiPrice = 134700;
        document.getElementById("buildMagiPrice").innerHTML = BuildMagiPrice.toFixed(1);
        EvaPilotTraining = 1;
        EvaPilotTrainingPrice = 578700;
        document.getElementById("evaPilotTrainingPrice").innerHTML = EvaPilotTrainingPrice.toFixed(1);
        //rebirth setting
        AngelCoreBase = AngelCoreBase * 2;
        AngelCoreIdle = AngelCoreIdle * 2.5;
        AngelPrice = AngelPrice * 1.5;
        document.getElementById("killAngelPrice").innerHTML = AngelPrice.toFixed(1);
    }
});