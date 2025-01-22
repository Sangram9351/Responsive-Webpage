// Toggle Left Menu Collapsible
// const toggleButton = document.getElementById('toggle-menu');
// const leftMenu = document.getElementById('left-menu');

// toggleButton.addEventListener('click', () => {
//     leftMenu.classList.toggle('collapsible');
// });

const menu = document.querySelector('.left-menu');
const toggleButton = document.getElementById('toggle-menu');

toggleButton.addEventListener('click', () => {
    menu.classList.toggle('collapsed');
});


// Adjust Page Width Based on Screen Size
function adjustPageWidth() {
    const width = window.innerWidth;
    const body = document.body;

    if (width >= 992 && width <= 1600) {
        body.style.transform = 'scale(0.9)';
    } else if (width >= 700 && width <= 767) {
        body.style.transform = 'scale(0.8)';
    } else if (width >= 600 && width < 700) {
        body.style.transform = 'scale(0.75)';
    } else if (width <= 600) {
        body.style.transform = 'scale(0.5)';
    } else {
        body.style.transform = 'scale(1)';
    }
}

// Add Event Listener for Resize
window.addEventListener('resize', adjustPageWidth);
adjustPageWidth();
