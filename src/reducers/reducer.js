import { ADD_TODO, CLEAR_COMPLETED, COMPLETE_TODO, DELETE_TODO } from "../constants/ActionType.js"
import { FILTER_AZ, FILTER_COMPLETED, FILTER_TIME, FILTER_ZA } from "../constants/FilterType.js"

// Hàm creatID nhầm khởi tạo ngẫu nhiên ID
let createID = () => {
    const date = new Date
    const random = Math.random() * 100
    return date.getTime().toString() + random
}

// Model cho một phần tử Todo
class Todo {
    isRender = true
    constructor(content, completed = false) {
        this.content = content
        this.completed = completed
        this.id = createID()
    }
}

// Dữ liệu khởi tạo cho store ban đầu
const initialData = [
    new Todo("Chưa làm xong"),
    new Todo("Đã lam xong", true),
    new Todo("a"),
    new Todo("c"),
    new Todo("b"),
    new Todo("A test", true),
    new Todo("C test", true),
    new Todo("B test", true),
]


function reducer(state = initialData, action = {}) {
    const { type, payload } = action
    switch (type) {

        case ADD_TODO: {
            return [
                new Todo(payload),
                ...state
            ]
        }

        case DELETE_TODO: {
            return state.filter(todo => todo.id !== payload)
        }

        case COMPLETE_TODO: {
            const todo = state.find(todo => todo.id === payload)
            todo.completed = true
            return state
        }

        case CLEAR_COMPLETED: {
            const todo = state.find(todo => todo.id === payload)
            todo.completed = false
            return state
        }


        case FILTER_COMPLETED: {
            state.forEach(todo => {
                if (!todo.completed) todo.isRender = false
            })

            return state
        }

        case FILTER_AZ: {
            state = state.sort((a, b) => {
                a.isRender = true
                let x = a.content.toLowerCase();
                let y = b.content.toLowerCase();
                if (x < y) { return -1; }
                if (x > y) { return 1; }
                return 0;
            })
            return state
        }

        case FILTER_ZA: {
            state = state.sort((a, b) => {
                a.isRender = true
                let x = a.content.toLowerCase();
                let y = b.content.toLowerCase();
                if (x > y) { return -1; }
                if (x < y) { return 1; }
                return 0;
            })

            return state
        }

        case FILTER_TIME: {
            state = state.sort((a, b) => {
                a.isRender = true
                return a.id - b.id
            })

            return state
        }

        default: {
            return state
        }
    }
}

export default reducer