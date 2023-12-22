/* eslint-disable */
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}
declare module '*.svg' {
    import Vue, { VueConstructor } from 'vue';
    const content: VueConstructor<Vue>;
    export default content;
}
// declare module '*.svg' {
//     import type { DefineComponent } from 'vue';
//     const component: DefineComponent;
//     export default component;
// }
declare module '*.jpg' {
    const value: string;
    export default value;
}