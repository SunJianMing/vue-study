export default class {
    constructor() {
        this.callbacks = {}
    }
    $on(name, fn) {
        this.callbacks[name] = this.callbacks[name] || []
        this.callbacks[name].push(fn)
    }
    $emit(name, args) {
        if (this.callbacks[name]) {

            this.callbacks[name].map(cb => cb(args))
        }
    }
}