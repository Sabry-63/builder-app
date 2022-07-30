const tabContet = document.getElementById('tables-tabs');
const btnToggleTable = document.getElementById('btn-toggle');

export function toggleTab() {
    btnToggleTable.addEventListener('click', () => {
        btnToggleTable.classList.toggle('open');
        tabContet.classList.toggle('open');
        if (tabContet.classList.contains('open')) {
            tabContet.style.marginLeft = -tabContet.clientWidth + 'px';
        } else {
            tabContet.style.marginLeft = 0;
        }
    });
}
