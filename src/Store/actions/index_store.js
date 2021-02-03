// This [index_store.js] file will 'regroups all export from separate files'
// => So at the end i can always 'point to this file [index_store.js] to import something from any of those files '

export {
    add,
    substract,
    increment,
    decrement
} from './counter';

export {
    storeResult,
    deleteResult
} from './result';