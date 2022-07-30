import { Tables } from './services/table.service.js';
import { renderTabs } from './services/tabsUi.service.js';
import { toggleTab } from './services/tabtoggle.service.js';

const tables = new Tables();

window.onload = () => {
    renderTabs(tables.tables);
    toggleTab();
};
