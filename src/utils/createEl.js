import Vue from 'vue'

export function createEl(Component, props) {
    const vm = new Vue({
        render(h) {
            return h(Component, {
                props
            })
        }
    })
    vm.$mount()
    document.body.appendChild(vm.$el)
    const comp = vm.$children[0]
    console.log(comp);


    comp.remove = () => {
        document.body.removeChild(vm.$el)
        comp.$destroy()
    }
    return comp
}