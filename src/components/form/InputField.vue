<template>
    <div class="input-wrapper">
        <p class="error-message caption float-top">{{ error }}</p>
        <div class="input-field-wrapper" :class="{ error: error }">
            <div class="input-text-wrapper">
                <label class="caption" v-if="label">
                    {{ label }}
                </label>
                <textarea
                    v-if="textarea"
                    v-model="value"
                    v-bind="attrs"
                    :required="required"
                    :maxlength="limit"
                ></textarea>
                <input
                    v-else
                    type="text"
                    v-model="value"
                    v-bind="attrs"
                    :required="required"
                    :maxlength="limit"
                />
            </div>
        </div>
        <p class="caption required" v-if="required">Required</p>
        <p class="caption limit" v-if="limit">{{ current }}/{{ limit }}</p>
    </div>
</template>

<script setup lang="ts">
import { computed, useAttrs } from "vue";

interface InputFieldProps {
    modelValue: string;
    label?: string;
    error?: string;
    required?: boolean;
    limit?: number;
    textarea?: boolean;
}

const attrs = useAttrs();

interface InputFieldEmits {
    (e: "update:modelValue", value: string): void;
}
const current = computed(() => {
    return props.modelValue.length;
});

const props = defineProps<InputFieldProps>();
const emits = defineEmits<InputFieldEmits>();
const value = computed({
    set(v: string) {
        emits("update:modelValue", v);
    },
    get(): string {
        return props.modelValue;
    },
});
</script>

<style scoped>
.input-wrapper {
    padding-top: 14px;
    padding-bottom: 12px;
}
.input-field-wrapper {
    border-radius: 5px;
    border-style: solid;
    border-width: 1px;
    border-color: var(--color-border);
    padding: 4px 6px;
    background-color: var(--color-background-element);
}

.input-field-wrapper:focus-within {
    border-color: var(--color-primary);
}
.input-field-wrapper.error {
    border-color: var(--color-danger);
    background-color: var(--color-danger-clear);
    border-width: 2px;
}

.input-field-wrapper.error input {
    border-bottom: 1px solid var(--color-danger);
}

.input-text-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
}
label {
    width: 100%;
    max-width: 200px;
    height: 12px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: var(--color-primary);
    line-height: 1;
}
textarea {
    padding: 0;
    background: none;
    border: none;
    outline: none;
    resize: none;
    overflow: auto;
    min-width: 200px;
    width: 100%;
}
input {
    padding: 0;
    background: none;
    border: none;
    outline: none;
    border-bottom: 1px solid var(--color-secondary);
}
.float-top,
.limit,
.required {
    position: absolute;
    line-height: 1;
}
.float-top {
    top: 0;
    left: 0;
}
.limit {
    right: 0;
    bottom: 0;
    font-weight: 400;
}
.required {
    left: 0;
    bottom: 0;
}
</style>
