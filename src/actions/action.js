import { ADD_TODO, CLEAR_COMPLETED, COMPLETE_TODO, DELETE_TODO } from "../constants/ActionType.js"
import { FILTER_AZ, FILTER_COMPLETED, FILTER_TIME, FILTER_ZA } from "../constants/FilterType.js"

function addTodo(value) {
    return {
        type: ADD_TODO,
        payload: value
    }
}

function deleteTodo(value) {
    return {
        type: DELETE_TODO,
        payload: value
    }
}

function checkTodo(value) {
    return {
        type: COMPLETE_TODO,
        payload: value
    }
}

function unCheckTodo(value) {
    return {
        type: CLEAR_COMPLETED,
        payload: value
    }
}

function filterCheck(value) {
    return {
        type: FILTER_COMPLETED,
        payload: value
    }
}

function filterAZ(value) {
    return {
        type: FILTER_AZ,
        payload: value
    }
}


function filterZA(value) {
    return {
        type: FILTER_ZA,
        payload: value
    }
}

function filterTIME(value) {
    return {
        type: FILTER_TIME,
        payload: value
    }
}

export { addTodo, deleteTodo, checkTodo, unCheckTodo, filterCheck, filterAZ, filterZA, filterTIME }