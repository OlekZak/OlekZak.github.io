document.getElementById("handle").addEventListener("click", () => {
    var leftSide = document.getElementById("mainLeft");
    var rightSide = document.getElementById("mainRight");
    if (leftSide.style.left === "0%" && rightSide.style.width === "83%") {
        leftSide.style.left = "-17%";
        rightSide.style.width = "100%";
        document.getElementById("handle").innerHTML = "<";
    } else {
        leftSide.style.left = "0%";
        rightSide.style.width = "83%";
        document.getElementById("handle").innerHTML = ">";
    }
});