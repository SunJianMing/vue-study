import Vue from 'vue'
import Notice from '@/components/Notice.vue';

function McreateEl(Component, props) {
    // 创建vue 子类组件
    let proFile = Vue.extend(Component)


    // 生成组件的VDOM,并实例化
    let instance = new proFile({
        propsData: props
    }).$mount()


    // 实例化组件
    // instance.$mount()
    //将实例挂载到body
    document.body.appendChild(instance.$el)
    //组件实例销毁方法
    instance.remove = function () {
        document.body.removeChild(instance.$el)
        instance.$destroy()
    }


    return instance
}
export default {
    install(Vue) {
        Vue.prototype.$Notice = function (options) {
            return McreateEl(Notice, options)
        }
    }
}