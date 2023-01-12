<template>
    <Icon class="icon" :icon="menu" width="24" />
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { Icon } from "@iconify/vue";

interface NotificationProps {
    isClose?: boolean;
}

const props = defineProps<NotificationProps>();

const normal = "material-symbols:menu-rounded";
const minimize = "material-symbols:menu-open-rounded";

const menu = ref<string>(normal);

watchEffect(() => {
    if (props.isClose) {
        menu.value = normal;
    } else {
        menu.value = minimize;
    }
});
</script>

<style scoped>
.icon {
    cursor: pointer;
}
</style>
