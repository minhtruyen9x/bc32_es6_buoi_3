import App from "./components/App.js";
import creatStore from "./core.js";
import reducer from "./reducers/reducer.js";



// Khởi tạo store chứa các todo
const store = creatStore(reducer)



// Sau khi khởi tạo store, nhận lại được object chứa các phương
//thức có thể tương tác với store
const { dispatch, connect, attach } = store



// render ra trước các phần nội dung không cần thay đổi 
document.querySelector(".card").innerHTML = App()



// xuất phương thức dispatch ra window nhầm dễ dàng tương tác khi gắn các
// sự kiện trên DOM
window.dispatch = dispatch



// xuất các phương thức connect, attach ra để các component có thể 
// tương tác với data trong store
export { connect, attach }