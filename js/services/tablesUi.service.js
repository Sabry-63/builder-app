import { draw } from './tableAction.serivce.js';

const tablesContent = document.getElementById('tables-rendering');

let arr = [];
export function renderTables(tables) {
    tablesContent.innerHTML = '';
    tables.forEach((t) => {
        tablesContent.innerHTML += `
        <div class="col-3 table-box-item " id="draw-${t.id}">
            <div class="border rounded-3 shadow-sm  ">
            <h5 class="bg-gray text-center border-bottom p-3 mb-0">${t.name}</h5>
            <div id="tables-cols-render-ui-${t.id}" class="render-col-table bg-white px-3 p-2 h-100" data-id=${t.id}>
                <p class="alert alert-warning" role="alert">
                    Dont Have Any Columns
                </p>
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

export function renderColumnsTable(tables) {
    tables.forEach((t) => {
        document.getElementById(`tables-cols-render-ui-${t.id}`).innerHTML = '';
        t.columns.forEach((col) => {
            document.getElementById(
                `tables-cols-render-ui-${t.id}`
            ).innerHTML += `
            <div class="d-flex justify-content-between align-items-center gap-4">
            <span >${col.name}</span>
            <span >${col.type}</span>
        </div>
        `;
        });
    });
}
