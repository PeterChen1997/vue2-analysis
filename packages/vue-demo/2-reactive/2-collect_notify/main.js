import Vue from '../../../vue-source/dist/vue.js'

const ComponentChild = {
    template: '<p>I am child component</p>'
};
new Vue({
    el: '#app',
    components: {
        'component-child': ComponentChild,
    },
    data () {
        return {
            flag: true,
            msg: 'this is msg',
            msg1: 'this is msg1'
        };
    },
    // watch: {
    //     msg () {
    //         this.msg = Math.random();
    //     }
    // },
    methods: {
        change () {
            this.msg = Math.random();
        },
        toggle () {
            this.flag = !this.flag;
        }
    }
})