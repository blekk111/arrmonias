function goToPage(page) {
    window.location.href = page;
}
// -------------------
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.navbar ul').classList.toggle('showing');
});
