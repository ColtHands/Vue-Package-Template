import TestComponent from './Test.vue'
import store from './store.js'

const Test = {
    install(Vue, options) {
        if (this.installed) { return }

        this.installed = true

        Vue.component('test', TestComponent)

        console.log('install options', options)

        const Test = params => {
            store.dispatch('test', params)
            console.log('test params', params)
        }

        Vue.prototype['$test'] = Test
        Vue['test'] = Test
    }
}

export default Test