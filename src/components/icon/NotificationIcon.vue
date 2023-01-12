<template>
    <div class="noti-icon">
        <div class="hovering"></div>
        <Icon :icon="bell" width="24" />
        <div v-if="notifying" class="noti-num">
            <span>{{ notiNumFilter }}</span>
            <span class="more" v-if="notiExceed9">+</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watchEffect, computed } from "vue";
import { Icon } from "@iconify/vue";

interface NotificationProps {
    notifying?: boolean;
    notiNum: number;
}

const props = defineProps<NotificationProps>();

const normal = "ph:bell-simple-bold";
const ringing = "ph:bell-simple-ringing-bold";

const bell = ref<string>(normal);

const notiNumFilter = computed(() => {
    if (props.notiNum > 9) {
        return 9;
    }
    return props.notiNum;
});
const notiExceed9 = computed(() => props.notiNum > 9);

watchEffect(() => {
    if (!props.notifying) {
        bell.value = normal;
    } else {
        bell.value = ringing;
    }
});
</script>

<style scoped>
.noti-icon {
    cursor: pointer;
}

.noti-num {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: var(--color-danger);
    width: 14px;
    height: 14px;
    border-radius: 50%;
    right: -20%;
    bottom: -5%;
    font-size: 12px;
    font-weight: 800;
    color: var(--color-text-inverted);
}
.hovering {
    position: absolute;
    width: 0;
    height: 0;
    top: 0;
    bottom: 0;
    left: -100%;
    right: -100%;
    border-radius: 50%;
    background-color: transparent;
    margin: auto;
    pointer-events: none;
    transition: 0.1s ease-in;
}
.noti-icon:hover .hovering {
    width: 50px;
    height: 50px;
    background-color: var(--color-secondary-clear);
}
.noti-icon:active .hovering {
    width: 40px;
    height: 40px;
    background-color: var(--color-active);
}
</style>
