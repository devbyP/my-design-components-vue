<template>
    <div class="side-item" :class="{ active: active }">
        <div v-if="slots.icon" class="side-icon">
            <slot name="icon" />
        </div>
        <div v-if="slots.default" class="side-text sub-heading">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useSlots } from "vue";

interface SideNavItemProps {
    active?: boolean;
}

const slots = useSlots();

defineProps<SideNavItemProps>();
</script>

<style scoped>
.side-item {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1rem;
    transition: all 0.3s;
}
.side-item.active {
    background-color: var(--color-active);
}
.side-item.active::before {
    content: "";
    border-left: 3px solid var(--color-primary);
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
}
.side-item:hover {
    background-color: var(--color-secondary-clear);
    translate: 0px;
    transition: all 0.1s;
}
.side-item:not(.active):active {
    background-color: var(--color-primary-clear);
    translate: 1px;
}
.side-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 60px;
    height: 100%;
    margin-right: 12px;
}
.side-text {
    transition: opacity 0.2s ease-in-out;
    white-space: nowrap;
    opacity: 1;
}
/* minimize style */
.minimize .side-text {
    opacity: 0;
}
</style>
