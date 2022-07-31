import { Tables } from './table.service.js';
import { renderColumnsTable } from './tablesUi.service.js';
import { renderTabs, renderColumns } from './tabsUi.service.js';

const inpAdd = document.getElementById('input-add');
const btnCreate = document.getElementById('btn-add');
const nameText = document.getElementById('column-name');
const typeSelect = document.getElementById('column-type');
const keySelect = document.getElementById('column-key');

const tables = new Tables();

btnCreate.addEventListener('click', () => {
    tables.addTable(inpAdd.value);
    renderTabs(tables.tables);
    inpAdd.value = '';
});

export function editTable(id, val) {
    tables.editTable(id, val);
    renderTabs(tables.tables);
}

export function removeTable(id) {
    tables.removeTable(id);
    renderTabs(tables.tables);
}

export function toggleTable(id) {
    const ele = document.getElementById(`open-tab-${id}`);
    const btn = document.getElementById(`open-btn-${id}`);
    ele.classList.toggle('toggle-table');
    btn.classList.toggle('toggle-btn');
}

export function addColumns(id, parent, tablesUiCols) {
    const table = tables.tables.find((t) => +t.id === +id);
    const obj = {
        name: nameText.value,
        type: typeSelect.value,
        key: keySelect.value,
    };

    table.addColumn(obj);
    renderColumns(table, parent);
    renderColumnsTable(table, tablesUiCols);

    console.log(renderColumnsTable());

    // nameText.value = '';
    // typeSelect.value = '';
    // keySelect.value = '';
}
