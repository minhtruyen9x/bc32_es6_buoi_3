// Phần chủ yếu nhầm tương tác với kho dữ liệu đã tạo ra ở file index.js

import { attach } from "./index.js";
import TodosComplete from "./components/TodoComplete.js"
import TodosUnComplete from "./components/TodoUnComplete.js";
import * as actions from "./actions/action.js"



// 2 Component này cần sử dụng dữ liệu trong kho để render ra các Element tương ứng
// nên gắn các component này vào bằng phương thức attach lấy được từ việc khởi tạo store ở file index.js
attach(TodosUnComplete, "#todo")
attach(TodosComplete, "#completed")



// Phần xử lý các sự kiện chính của ứng dụng
// Với hàm dispatch có thể tương tác trực tiếp thay đổi dữ liệu trong store(được gắn vào object window để dễ dàng sử dụng hơn)
document.querySelector(".card__body").onclick = function (e) {
    const target = e.target

    // Mặc định các button sự kiện đều được thêm một attribute data-type
    const targetType = target.dataset.type


    // Nếu nhấn phải các nút không liên quan với các chức năng ứng dụng todo thì trực tiếp bỏ qua
    if (!targetType) return


    // Lấy id của todo nhầm thực hiện các chức năng thêm sửa xóa todo cụ thể
    const id = target.closest("li")?.dataset.id



    if (targetType === "add") {
        const contentInput = document.querySelector("#newTask")
        dispatch(actions.addTodo(contentInput.value))
        contentInput.value = ""
        contentInput.focus()
    }

    if (targetType === "delete") {
        dispatch(actions.deleteTodo(id))
        return
    }

    if (targetType === "check") {
        dispatch(actions.checkTodo(id))
        return
    }

    if (targetType === "uncheck") {
        dispatch(actions.unCheckTodo(id))
        return
    }

    if (targetType === "sortcheck") {
        dispatch(actions.filterCheck())
        return
    }

    if (targetType === "sortdown") {
        dispatch(actions.filterAZ())
        return
    }

    if (targetType === "sortup") {
        dispatch(actions.filterZA())
        return
    }

    if (targetType === "sorttime") {
        dispatch(actions.filterTIME())
        return
    }

}