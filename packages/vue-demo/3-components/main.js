import Vue from '../../vue-source/dist/vue.js'

const ErrorComp = {
    render: h => h('p', 'Error!')
};

const LoadingComp = {
    render: h => h('p', 'Loading~~~')
};

const MyComp = {
    render: h => h('p', 'Hello World')
};

const AsyncComponent = () => ({
    component: new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(MyComp);
        }, 1000);
    }),
    loading: LoadingComp,
    error: ErrorComp,
    // delay before loadingComp show
    delay: 100,
    timeout: 2000
});

new Vue({
    el: "#app",
    components: {
        AsyncComponent,
    },
    // 这里的 h 是 createElement 方法
    render: h => h("AsyncComponent")
});
