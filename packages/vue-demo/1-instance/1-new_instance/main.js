import Vue from '../../../vue-source/dist/vue.js'

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