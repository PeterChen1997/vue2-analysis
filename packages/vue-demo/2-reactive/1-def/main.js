import Vue from '../../../vue-source/dist/vue.js'

new Vue({
    el: '#app',
    data () {
        return {
            msg: 'Hello Vue',
            nested: {
                msg: 'this is nested msg'
            }
        };
    }
})