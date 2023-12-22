import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import directives from './directives'
// import VueTelInput from 'vue-tel-input'
// import IconSvg from './components/shared/ui/IconSvg/IconSvg.vue'
import UIComponents from './components/shared/ui'
// import 'vue-tel-input/vue-tel-input.css';

const app = createApp(App)

UIComponents.forEach(UIComponent => {
    app.component(UIComponent.name, UIComponent)
    
});
// app.component('icon-svg', IconSvg)
// app.component('v-img', VImg)

app.use(router)
directives.forEach(directive => {
    app.directive(directive.name, directive)
})

// const globalOptions = {
//     mode: 'auto',
// };

// app.use(VueTelInput as any, globalOptions)

app.mount('#app')
