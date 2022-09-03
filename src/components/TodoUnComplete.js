import { connect } from "../index.js"

const connectTodosUnComplete = connect(TodosUnComplete, (state) => {
    return state.filter(todo => !todo.completed && todo.isRender)
})

function TodosUnComplete(todos) {
    return todos
        .map(todo => `
                <li data-id="${todo.id}">
                    ${todo.content}
                    <button class="removeBtn" data-type="delete"><i class='bx bx-box'></i></button>
                    <button class="checkBtn" data-type="check"><i class='bx bx-check-circle'></i></button>
                </li>
            `)
        .join("")
}
export default connectTodosUnComplete