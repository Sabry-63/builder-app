const tablesContent = document.getElementById('table-group');

export function renderTables(tabls) {
    tablesContent.innerHTML = '';
    tabls.forEach((t) => {
        tablesContent.innerHTML += `
            <span>${t.name}</span>
        `;
    });
}
