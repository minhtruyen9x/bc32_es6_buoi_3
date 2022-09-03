import Filter from "./Filter.js"
import TodoInput from "./TodoInput.js"
import TodoList from "./TodoList.js"
function MainSection() {
    return `
        <div class="card__body">
            ${Filter()}
            <div class="card__content">
                <div class="card__title">
                    <h2>My Tasks</h2>
                    <p>September 9,2020</p>
                </div>
                ${TodoInput()}
                ${TodoList()}
            </div>
        </div>
    `
}
export default MainSection