function toggleNav() {
    var menu_icon = document.getElementById("menu-icon");
    //toggle adds a class if it's not there or removes it if it is.
    menu_icon.classList.toggle("open");
    var sidebar = document.getElementById("sidebar");
    //toggle adds a class if it's not there or removes it if it is.
    sidebar.classList.toggle("slide");
}