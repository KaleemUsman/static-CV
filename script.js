const tsbutton = document.getElementById('button-skills');
const tsskills = document.getElementById('skills');

tsbutton.addEventListener('click', () => {
    if (tsskills.style.display === 'none') {
        tsskills.style.display = 'block';
    } else {
        tsskills.style.display = 'none';
    }
});