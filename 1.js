function openmenu() {
    const menuItems = document.getElementById('menuItem');
    const hamburgerIcon = document.querySelector('#icon');
    
    menuItems.classList.toggle('show');
    hamburgerIcon.classList.toggle('open');
}
