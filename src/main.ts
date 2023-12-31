import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import directives from './directives'
import UIComponents from './shared/ui'
import './shared/utils/Prototypes'

const app = createApp(App);

UIComponents.forEach(UIComponent => {
    app.component(UIComponent.name, UIComponent);
});

app.use(router);


directives.forEach(directive => {
    app.directive(directive.name, directive);
});

app.mount('#app');
