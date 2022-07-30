import { Tables } from './services/table.service.js';
import { renderTables } from './services/tabsUi.service.js';
import { toggleTab } from './services/tabtoggle.service.js';

const tables = new Tables();

window.onload = () => {
    renderTables(tables.tables);
    toggleTab();
};
