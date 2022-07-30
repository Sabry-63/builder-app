export function saveInlocalStorage(name, data) {
    localStorage.setItem(String(name), JSON.stringify(data));
}
