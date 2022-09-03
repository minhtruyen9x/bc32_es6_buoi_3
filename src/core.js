// Hàm gốc nhầm khởi tạo một store, nhận đối số đầu vào là hàm reducer
// Hàm reducer có nhiệm vụ nhận giá trị dữ liệu trước đó, và trả ra giá trị mới




function creatStore(reducer) {
    // Khởi tạo dữ liệu state ban đầu
    let state = reducer()

    // roots lưu trữ component và element cha tương ứng của nó
    // với key là element cha, value là component
    const roots = {}

    // prevRender lưu trữ các lần render trước đó, nhầm kiểm tra xem component đó có cần
    // phải render lại vào DOM không
    const prevRender = {}

    // hàm render , mỗi lần dispatch một hành động nào đó, thì sẽ tự
    // động chạy lại hàm render
    function render() {
        for (const root in roots) {
            const component = roots[root]

            const output = component()
            const rootEl = document.querySelector(root)

            // Kiểm tra xem component có gì thay đổi so với trước
            // nếu có thay đổi thì render lại vào DOM
            if (prevRender[root] !== output) {
                prevRender[root] = output
                rootEl.innerHTML = output
            }
        }
    }

    return {
        // Hàm attach nhầm gắn các component vào một element cha trong DOM
        attach(component, root) {
            roots[root] = component
            render()
        },


        // Hàm dispatch nhận vào là một action, có tác đụng thay đổi dữ liệu trong store 
        dispatch(action) {
            state = reducer(state, action)
            render()
        },


        // Hàm connect nhầm giúp các component có thể nhận được dữ liệu trong store làm đối số
        connect(component, selector = (data) => data) {
            return () => component(selector(state))
        }
    }
}

export default creatStore
