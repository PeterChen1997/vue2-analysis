function createElement(type, options, text) {
    return {
        tag: type,
        text: text
    }
}

function patch(el, vnode) {
    // 创建element
    const element = document.createElement(vnode.tag)
    element.innerHTML = vnode.text

    // 挂载
    el.parentElement.insertBefore(element, el)

    // 删除old node
    el.parentElement.removeChild(el)
}

function Vue(options) {
    const { el, render } = options

    // 1. 生成VNode (vm._render 方法)
    const targetDOM = document.querySelector(el)
    const targetVNode = render.call(this, createElement)

    // 2. 挂载VNode (vm._update 方法)
    patch(targetDOM, targetVNode)
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