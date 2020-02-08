function createElement(type, options, text) {
    // createElement
    const element = document.createElement(type)

    // set content
    element.innerHTML = text

    return element
}

function Vue(options) {
    const { el, render } = options

    // 1. 找到element
    const targetDOM = document.querySelector(el)
    // 2. 调用函数生成Element
    const targetElement = render.call(this, createElement)
    // 3. 替换HTML
    targetDOM.outerHTML = targetElement.outerHTML
}

new Vue({
    el: '.app',
    render: function(createElement) {
        return createElement(
            'div',
            {},
            'Hello World'
        )
    }
})