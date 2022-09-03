function TodoInput() {
    return `
        <div class="card__add">
            <input id="newTask" type="text" placeholder="Enter an activity...">
            <button id="addItem" data-type="add">
                <i class="fa fa-plus"></i>
            </button>
        </div>
    `
}

export default TodoInput