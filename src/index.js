import TestComponent from './Test.vue'
import store from './store'

const Test = {
    install(Vue, args = {}) {
        if (this.installed) { return }

        this.installed = true
        // this.params = args

        const VueTestComponent = Vue.component('test', TestComponent)
        // const events = new Vue({ name: 'vue-notification' })

        // events.$emit('add')

        store.dispatch('doStuff')


        const Test = params => {
            console.log('test params', params)
        }

        // const Test = (params) => {
        //     if (typeof params === 'string') {
        //         params = { title: '', text: params }
        //     }

        //     if (typeof params === 'object') {
        //         events.$emit('add', params)
        //     }
        // }

        // Test.close = function (id) {
        //     events.$emit('close', id)
        // }

        Vue.prototype['$test'] = Test
        Vue['test'] = Test
    }
}

export default Test