const STORAGE_KEY = 'WEATHER_APP_KEY'

export function loadFromStorage() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY))
}
export function saveToStorage(item) {
    return localStorage.setItem(STORAGE_KEY, JSON.stringify(item))
}

export function makeId(length = 17){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for(var i=0; i < length; i++)
    {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}