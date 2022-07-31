import {
    editTable,
    removeTable,
    addColumns,
    toggleTable,
} from './tableAction.serivce.js';
import { renderTables } from './tablesUi.service.js';

// Constats
let tableId = null;
const tableGroup = document.getElementById('table-group');
const noTable = `
    <div class="alert alert-warning" role="alert">
        Dont Have Any Table
    </div>`;

export const renderTabs = (tablesUi) => {
    tableGroup.innerHTML = '';
    if (tablesUi.length !== 0) {
        tablesUi.forEach((t) => {
            tableGroup.innerHTML += ` 
                <div class="table-group__body__column">
                    <button
                        class="d-felx py-2 gap-4 border-bottom px-3 btn table-group__body__column__head w-100 text-start"
                        data-id=${t.id}
                        id="open-btn-${t.id}"
                    >
                        <i
                            class="fa fa-chevron-up small-icon"
                            aria-hidden="true"
                        ></i>
                       ${
                           t.isEdit
                               ? `<div>
                               <input
                                    type="text"
                                    class="form-control"
                                    name=""
                                    id="inp-val-${t.id}"
                                    aria-describedby="helpId"
                                    placeholder="${t.name}"
                                />
                               <button class="btn main-btn btn-save-edit" data-id=${t.id}>save</button>
                               </div>`
                               : `<span>${t.name} </span>`
                       } 
                    </button>
                    
                    <div class="bg-white table__content" id="open-tab-${t.id}">
                    
                        <div class="table-group__body__column__content" id="columns-group-content-${
                            t.id
                        }">
                        </div>
                       
                        <div
                            class="d-flex justify-content-between align-items-center border-top pt-2 px-3"
                        >
                            <div class="d-flex align-items-center">
                                <i class="fas fa-layer-group"></i>
                               
                                <div class="dropdown">
                                <button
                                    class="btn dropdown-toggle"
                                    type="button"
                                    id="triggerId"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                </button>
                                <div class="dropdown-menu py-0" aria-labelledby="triggerId">
                                    <button class="dropdown-item btn-table-edit" data-id=${
                                        t.id
                                    }> <i class="fa fa-edit text-info" aria-hidden="true"></i> Edit</button>
                                    <button class="dropdown-item btn-table-delete" data-id=${
                                        t.id
                                    }><i class="fa fa-trash text-danger" aria-hidden="true"></i> Delete</button>
                                </div>
                            </div>
                            </div>
                            <div
                                class="d-flex align-items-center gap-2"
                            >
                                <button
                                    class="btn text-black-50 border text-capitalize px-2 py-1"
                                >
                                    add index
                                </button>
                                <button
                                    class="btn main-btn text-capitalize px-2 py-1 btn-add-column"
                                    data-bs-toggle="modal"
                                    data-bs-target="#columnModal"
                                    data-id=${t.id}
                                >
                                    add column
                                </button>
                            </div>
                        </div>
                    </div>
            </div>
            `;

            tableGroup.querySelectorAll('.btn-save-edit').forEach((ele) => {
                ele.addEventListener('click', () => {
                    const nawVal = document.getElementById(
                        `inp-val-${ele.dataset.id}`
                    );
                    editTable(ele.dataset.id, nawVal.value);
                });
            });
            tableGroup
                .querySelectorAll('.table-group__body__column__head')
                .forEach((ele) => {
                    ele.addEventListener('click', () => {
                        toggleTable(ele.dataset.id);
                    });
                });
            tableGroup.querySelectorAll('.btn-table-edit').forEach((ele) => {
                ele.addEventListener('click', () => {
                    editTable(ele.dataset.id);
                });
            });
            tableGroup.querySelectorAll('.btn-table-delete').forEach((ele) => {
                ele.addEventListener('click', () => {
                    removeTable(ele.dataset.id);
                });
            });
            tableGroup.querySelectorAll('.btn-add-column').forEach((ele) => {
                ele.onclick = () => {
                    tableId = ele.dataset.id;
                };
            });
        });
        document.getElementById('btn-add-column').onclick = function () {
            const tableGroupColumns = document.querySelector(
                `#columns-group-content-${tableId}`
            );
            const tablesUiCols = document.querySelector(
                `#tables-cols-render-ui-${tableId}`
            );

            addColumns(tableId, tableGroupColumns, tablesUiCols);
            renderTables(tablesUi);
        };
    } else {
        tableGroup.innerHTML = noTable;
    }

    renderTables(tablesUi);
};

export function renderColumns(table, parent) {
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
}
