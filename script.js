//mobile dropdown
const dropdown = document.getElementById("navbarMobileDropdown");
const container = document.getElementById("navbarMobileContainer");

dropdown.addEventListener("click", () => {
    if (container.style.top === "-1200%" && container.style.opacity === "0") {
        container.style.top = "100%";
        container.style.opacity = "1";
    } else {
        container.style.top = "-1200%";
        container.style.opacity = "0";
    }
});