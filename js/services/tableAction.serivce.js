import { Tables } from './table.service.js';
import { renderTables } from './tabsUi.service.js';

const inpAdd = document.getElementById('input-add');
const btnCreate = document.getElementById('btn-add');
const nameText = document.getElementById('column-name');
const typeSelect = document.getElementById('column-type');
const keySelect = document.getElementById('column-key');
const btnCreateColumn = document.getElementById('btn-add-column');

const tables = new Tables();

btnCreate.addEventListener('click', () => {
    tables.addTable(inpAdd.value);
    renderTables(tables.tables);
    inpAdd.value = '';
});

export function editTable(id, val) {
    tables.editTable(id, val);
    renderTables(tables.tables);
}

export function removeTable(id) {
    tables.removeTable(id);
    renderTables(tables.tables);
}

export function toggleTable(id) {
    const ele = document.getElementById(`open-tab-${id}`);
    const btn = document.getElementById(`open-btn-${id}`);
    ele.classList.toggle('toggle-table');
    btn.classList.toggle('toggle-btn');
}

export function addColumns(id, parent) {
    const table = tables.tables.find((t) => +t.id === +id);

    const obj = {
        name: nameText.value,
        type: typeSelect.value,
        key: keySelect.value,
    };
    console.log(table, 'table selected');
    console.log(id, 'table selected');

    btnCreateColumn.addEventListener('click', () => {
        table.addColumn(obj);
        parent.innerHTML = '';
        table.columns.forEach((col) => {
            return (parent.innerHTML += `
                    <div  class="d-flex justify-content-between align-items-center mb-2 px-3" >
                        <span>${col.name}</span>
                        <span>${col.type}</span>
                        <span>N</span>
                        <span>
                        ${
                            col.key === '1'
                                ? ` <i
                        class="fa fa-key"
                        aria-hidden="true"
                    ></i>`
                                : ''
                        }

                        </span>
                        <span>
                            <i
                                class="fa fa-ellipsis-h"
                                aria-hidden="true"
                            ></i>
                        </span>
                    </div>
                `);
        });
    });
}
