<template>
    <div
        class="sidebar"
        :class="{ minimize: minimize }"
        :style="{ width: width + 'px' }"
    >
        <slot />
    </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
interface SideNavProps {
    minimize?: boolean;
    minimizeToIcon?: boolean;
}

const props = defineProps<SideNavProps>();

const defaultWidth = 230;
const minimizeWidth = 60;

const width = ref<number>(defaultWidth);
watchEffect(() => {
    if (props.minimize) {
        width.value = props.minimizeToIcon ? minimizeWidth : 0;
    } else {
        width.value = defaultWidth;
    }
});
</script>

<style scoped>
.sidebar {
    overflow: hidden;
    height: 100%;
    background-color: var(--color-background-element);
    transition: 0.3s ease-in-out;
}
</style>
