<template>
    <navbar-wrapper>
        <template #left>
            <menu-icon @click="trigger" :is-close="minimizeSide" />
            <router-link class="logo" to="/">
                <Icon icon="carbon:carbon-for-ibm-product" width="24" />
                <p class="headline">Logo</p>
            </router-link>
        </template>
        <template #right>
            <div>
                <notification-icon
                    :notifying="notiStore.isNotifying"
                    :noti-num="notiStore.newNotiNum"
                />
            </div>
            <ul class="nav-list">
                <li class="nav-item">
                    <router-link to="/about">About</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/contact">Contact</router-link>
                </li>
            </ul>
        </template>
    </navbar-wrapper>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useNotificationStore } from "@/stores/notification";

import NavbarWrapper from "@/components/navigate/NavbarWrapper.vue";
import NotificationIcon from "@/components/icon/NotificationIcon.vue";
import MenuIcon from "@/components/icon/MenuIcon.vue";

import { Icon } from "@iconify/vue";

interface HomeNavProps {
    minimizeSide?: boolean;
}

interface HomeNavEmits {
    (e: "trigger-menu"): void;
}

defineProps<HomeNavProps>();
const emits = defineEmits<HomeNavEmits>();

const notiStore = useNotificationStore();

function trigger() {
    emits("trigger-menu");
}
</script>

<style scoped></style>
