import { writable } from "svelte/store"

export const createSearchStore = (song) => {

    const { subscribe, set, update } = writable ({
        song: song, 
        filtered: song, 
        search: '', 
    })

    return {
        subscribe, 
        set, 
        update, 
    }
}

export const searchHandler = (store) => {
    const searchTerm = store.search.toLowerCase() || "";
    store.filtered = store.song.filter((item) => {
        return item.searchTerms.toLowerCase().includes(searchTerm);
    });
}