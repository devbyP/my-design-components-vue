<template>
    <header>
        <div class="nav-left" v-if="slots.left">
            <slot name="left"></slot>
        </div>
        <div class="nav-center" v-if="slots.default">
            <slot />
        </div>
        <div class="nav-right" v-if="slots.right">
            <slot name="right"></slot>
        </div>
    </header>
</template>

<script setup lang="ts">
import { useSlots } from "vue";

const slots = useSlots();
</script>

<style scoped>
header {
    --nav-height: 4rem;
}
header {
    display: grid;
    grid-template: "left center right"/ 1fr 1fr 1fr;
    height: var(--nav-height);
    align-items: center;
    box-shadow: 0 2px 8px var(--shadow);
    padding: 0 1rem;
    width: 100%;
    z-index: 2;
}
.nav-left,
.nav-center,
.nav-right {
    display: flex;
    align-items: center;
}

.nav-left {
    grid-area: left;
    justify-self: left;
}
.nav-center {
    grid-area: center;
    justify-self: center;
}
.nav-right {
    grid-area: right;
    justify-self: right;
}
</style>
