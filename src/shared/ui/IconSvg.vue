<template>
    <svg width="24" height="24" v-bind="attrs" v-html="svg"></svg>
</template>

<script>
export default {
    name: 'icon-svg',
    props: {
        name: {
            type: String,
            required: true
        },
    },
    data: () => ({
        svg: '',
        attrs: {},
    }),
    methods: {
        async getSvg() {
            try {
                const get_svg_url = require(`@/assets/svg/${this.name}.svg`);

                const response = await fetch(get_svg_url);
                let svg = await response.text();

                const el = document.createElement('svg');
                el.innerHTML = svg;
                svg = el.querySelector('svg');

                let attributes = {};
                for (const attr of svg.attributes) {
                    attributes[attr.name] = attr.value;
                }

                this.svg = svg.innerHTML;
                this.attrs = attributes;
            } catch (error) {
                console.log(`@/assets/svg/${this.name}.svg`, error);
            }
        },
    },
    async created() {
        await this.getSvg();
    },
}
</script>