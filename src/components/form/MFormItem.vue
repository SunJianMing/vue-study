<template>
    <div>
        <label v-if="label">{{ label }}</label>
        <slot></slot>
        <p v-if="error">{{ error }}</p>
    </div>
</template>

<script>
import emitter from "@/mixins/emitter";
import Schema from "async-validator";
export default {
    name: "MFormItem",
    componentName: "MFormItem",
    mixins: [emitter],
    inject: ["form"],
    data() {
        return {
            error: ""
        };
    },
    props: {
        label: {
            type: String,
            default: ""
        },
        prop: String
    },
    mounted() {
        this.$on("m.formitem.validate", () => {
            this.validate();
        });
        if (this.prop) {
            this.dispatch("MForm", "m.form.validate", [this]);
        }
    },
    methods: {
        validate() {
            let reuls = this.form.rules[this.prop];
            let value = this.form.mode[this.prop];
            let validator = new Schema({ [this.prop]: reuls });
            return validator.validate({ [this.prop]: value }, errors => {
                if (errors) {
                    this.error = errors[0].message;
                } else {
                    this.error = "";
                }
            });
        }
    }
};
</script>

<style lang="scss" scoped></style>
