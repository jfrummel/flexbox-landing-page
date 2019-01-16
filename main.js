function toggleDropDown() {
    let navBarToggle = document.getElementById("dropDownMenu");
    if (navBarToggle.className === "topnav") {
        navBarToggle.className += " responsive";
    } else {
        navBarToggle.className = "topnav";
    }
}