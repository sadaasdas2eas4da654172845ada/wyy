// import { options } from "less";

// let Vue = null
// export default {
//     Store:class{
//         constructor(option = {}){
//             this._options = options;
//             if(Object.prototype.toString.call(this._options.state).slice(8,-1) !== 'object') return
//             this.state = Vue.observable(this._options.state??{})
//         }
//     },
//     install(_Vue){
//         Vue = _Vue;
//         Vue.mixin({
//             beforeCreate(){
//                 if(!this.$parent){
//                     Vue.prototype.$store = this.$options.store
//                 }
//             }
//         })
//     }
// }