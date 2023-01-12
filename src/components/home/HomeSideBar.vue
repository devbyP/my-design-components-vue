<template>
    <side-nav :minimize="minimizeSide" minimize-to-icon>
        <side-nav-item>
            <template #icon>
                <Icon icon="carbon:carbon-for-ibm-product" width="24" />
            </template>
            <span>Item</span>
        </side-nav-item>
        <side-nav-item active>
            <template #icon>
                <Icon icon="fluent:board-16-regular" width="24" />
            </template>
            <span>Item Active</span>
        </side-nav-item>
    </side-nav>
</template>

<script setup lang="ts">
import SideNav from "@/components/navigate/SideNav.vue";
import SideNavItem from "@/components/navigate/SideNavItem.vue";
import { Icon } from "@iconify/vue";

interface HomeSideBarProps {
    minimizeSide?: boolean;
}

defineProps<HomeSideBarProps>();
</script>

<style scoped></style>
