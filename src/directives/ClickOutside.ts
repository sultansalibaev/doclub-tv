import { DirectiveBinding } from 'vue';

interface DirectiveElement extends Element {
    clickOutsideEvent: (event: MouseEvent) => void;
}


export default {
    name: 'click-outside',
    beforeMount(el: DirectiveElement, binding: DirectiveBinding) {
        console.log('el', el);
        
        if (binding.value == false) return;
        console.log('binding.value', binding.value);
        el.clickOutsideEvent = function (event) {
            // @ts-ignore
            const path = event.composedPath ? event.composedPath() : event.path;
            // @ts-ignore
            if (!(el === event.target || el.contains(event.target) || path.includes(el))) {
                binding.value();
            }
        };
        // add Event Listeners
        document.body.addEventListener('mousedown', el.clickOutsideEvent);
    },
    unmounted(el: DirectiveElement, binding: DirectiveBinding) {
        if (binding.value == false) return;
        document.body.removeEventListener('mousedown', el.clickOutsideEvent);
    },
}
