import { Tables } from './services/table.service.js';
import { renderTabs } from './services/tabsUi.service.js';
import { toggleTab } from './services/tabtoggle.service.js';

const tables = new Tables();

const docPrint = document.getElementById('tables-rendering');
document.getElementById('printTables').onclick = function () {
    html2pdf(docPrint);
};

window.onload = () => {
    renderTabs(tables.tables);
    toggleTab();
};
