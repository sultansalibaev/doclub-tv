<template>
    <div
        class="bg-white shadow-default absolute p-4 rounded-xl cursor-default select-none"
        :class="{
            'hidden': modal === false,
        }"
        @click.stop
    >
        
        <div class="flex justify-between items-center h-7 mb-4">
            <h5 class="text-500">{{ title }}</h5>
            <button @click.stop="hideDropdown" class="cursor-pointer ml-[12px] focus-visible:outline-none">
                <icon-svg name="close" class="text-neutral-700" />
            </button>
        </div>
        <slot>
            <div class="space-y-4 text-400 overflow-y-scroll max-h-[164px] gray-scrollbar border-r-[5px] border-transparent pr-[5px]">
                <div
                    class="truncate cursor-pointer"
                    :title="getOptionName(option)"
                    @click.stop="selectOption(option, index)"
                    v-for="(option, index) in options"
                    :key="index"
                >{{ getOptionName(option) }}</div>
            </div>
        </slot>
    </div>
</template>

<script>

export default {
    name: 'v-dropdown',
    props: {
        modal: {
            type: Boolean,
            required: true
        },
        title: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: false,
            default: undefined
        },
        optionName: {
            type: String,
            required: false,
            default: undefined
        },
        options: {
            type: Array,
            required: false,
            default: () => ([])
        },
    },
    methods: {
        hideDropdown() {
            this.$emit('hideDropdown');
        },
        selectOption(option, index) {
            this.$emit('selectOption', option, index);
            console.log('selectOption', this.modal);
            this.hideDropdown();
        },
        getOptionName(option) {
            if (this.optionName != undefined) {
                let result = '';
                const regex = new RegExp("^[a-zA-Z]+$");
                let key = '';
                for (const char of this.optionName) {
                    if (regex.test(key + char)) {
                        key += char;
                    }
                    else {
                        let optionParam = '';
                        if (key != '') optionParam = option[key];
                        result += optionParam + char;
                        key = '';
                    }
                }
                if (key != '') result += option[key];
                return result;
            }
            if (this.name === undefined && this.optionName === undefined) return option;
            return option[this.name];
        },
    },
}
</script>
