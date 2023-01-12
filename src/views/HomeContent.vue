<template>
    <div>
        <div class="typography">
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <p class="headline">Headline</p>
            <p class="title">Title</p>
            <p class="sub-heading">Sub Heading</p>
            <p class="body">body normal</p>
            <p class="b-body">body bold</p>
            <p class="caption">caption</p>
            <a>link text</a>
        </div>
        <div class="button-group">
            <div>
                <button>Button</button>
                <button class="primary">Primary</button>
                <button class="danger">Error</button>
                <button class="success">Success</button>
            </div>
            <div>
                <button class="primary small">Small</button>
                <button class="primary">Normal</button>
                <button class="primary large">Large</button>
            </div>
            <div>
                <button class="outline">Outline</button>
                <button class="outline primary">Primary</button>
                <button class="outline danger">Error</button>
                <button class="outline success">Success</button>
            </div>
            <div>
                <button class="disabled">Button Disabled</button>
            </div>
        </div>
        <div class="input-group">
            <div>
                <InputField v-model="name" name="name" placeholder="username" />
                <InputField
                    v-model="name"
                    name="name"
                    label="Label longggggg label overflow text text text"
                    placeholder="username"
                />
                <InputField
                    v-model="name"
                    name="name"
                    label="Label"
                    error="error message"
                    placeholder="username"
                />
            </div>
            <div>
                <InputField
                    v-model="name"
                    name="name"
                    label="Label"
                    placeholder="username"
                    :limit="12"
                />
                <InputField
                    v-model="name"
                    name="name"
                    label="Label"
                    placeholder="username"
                    required
                />
                <InputField
                    v-model="name"
                    name="name"
                    label="Label"
                    placeholder="username"
                    :limit="12"
                    required
                />
                <InputField
                    v-model="name"
                    label="Textarea"
                    textarea
                    required
                    :limit="60"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import InputField from "@/components/form/InputField.vue";

const name = ref<string>("");
</script>

<style scoped></style>
