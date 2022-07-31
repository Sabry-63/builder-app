import { draw } from './tableAction.serivce.js';

const tablesContent = document.getElementById('tables-rendering');

let arr = [];
export function renderTables(tables) {
    tablesContent.innerHTML = '';
    tables.forEach((t) => {
        tablesContent.innerHTML += `
        <div class="col-3 table-box-item " id="draw-${t.id}">
            <div class="border rounded-3 shadow-sm p-2 h-100">
            <h2 class="bg-gray text-center border-bottom p-2">${t.name}</h2>
            <div id="tables-cols-render-ui-${t.id}" class="render-col-table bg-white px-3 py-2 " data-id=${t.id}>
            </div>
            </div>
        </div>
        `;
    });
    tablesContent.querySelectorAll('.table-box-item').forEach((ele) => {
        ele.addEventListener('click', () => {
            arr.push(ele.id);
            draw(arr[0], arr[1]);
            if (arr.length === 2) {
                arr = [];
            }
        });
    });
}

export function renderColumnsTable(table, parent) {
    parent.innerHTML = '';
    table.columns &&
        table.columns.forEach((col) => {
            return (parent.innerHTML += `
                <div class="d-flex justify-content-between align-items-center gap-4">
                    <span >${col.name}</span>
                    <span >${col.type}</span>
                </div>
            `);
        });
}
