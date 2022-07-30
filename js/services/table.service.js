export class Table {
    constructor(name, id) {
        this.id = 0 + id;
        this.name = name;
        this.isEdit = false;
        this.columns = [];
    }
    // Add New Column
    addColumn(obj) {
        this.columns.push(obj);
    }

    // Remove New Column
    removeColumn() {
        console.log('remove ');
    }

    // Edit New Column
    editColumn() {
        console.log('Edit ');
    }
}

export class Tables {
    constructor() {
        this.tables = [];
    }

    // Add New Table
    addTable(name) {
        const table = new Table(name, this.tables.length + 1);
        this.tables.push(table);
        return table;
    }

    // Remove New Table
    removeTable(id) {
        this.tables = this.tables.filter((t) => +t.id !== +id);
    }

    // Edit New Table
    editTable(id, val) {
        const select = this.tables.find((t) => +t.id === +id);
        select.isEdit = !select.isEdit;
        val ? (select.name = val) : select.name;
    }
}
