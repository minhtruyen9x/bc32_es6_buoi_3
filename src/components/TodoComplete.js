import { connect } from "../index.js"

const connectTodosComplete = connect(TodosComplete, (state) => {
    return state.filter(todo => todo.completed && todo.isRender)
})

function TodosComplete(todos) {
    return todos
        .map(todo => `
                <li data-id="${todo.id}">
                    ${todo.content}
                    <button class="removeBtn" data-type="delete"><i class='bx bx-box'></i></button>
                    <button class="checkBtn completed" data-type="uncheck"><i class='bx bxs-check-circle'></i></button>
                </li>
            `)
        .join("")
}
export default connectTodosComplete