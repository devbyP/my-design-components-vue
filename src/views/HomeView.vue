<template>
    <div class="layout-wrapper">
        <home-nav
            :minimize-side="minimizeSide"
            @trigger-menu="triggerSideMini"
        />
        <main>
            <div class="side">
                <home-side-bar :minimize-side="minimizeSide" />
            </div>
            <div class="main-content">
                <router-view />
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterView } from "vue-router";
import HomeNav from "@/components/home/HomeNav.vue";
import HomeSideBar from "@/components/home/HomeSideBar.vue";

const minimizeSide = ref<boolean>(false);
function triggerSideMini() {
    minimizeSide.value = !minimizeSide.value;
}
</script>

<style scope>
.layout-wrapper {
    position: fixed;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}
main {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
}
.main-content {
    flex-grow: 2;
    padding: 2rem;
    padding-top: 0;
    scrollbar-color: var(--color-primary) transparent;
    overflow-y: auto;
    overflow-x: hidden;
}
.button-group {
    display: flex;
    row-gap: 10px;
    flex-direction: column;
}
.button-group div {
    display: flex;
    column-gap: 10px;
    align-items: center;
}
.input-group {
    display: flex;
    row-gap: 10px;
    flex-direction: column;
}
.input-group div {
    display: flex;
    column-gap: 10px;
    align-items: center;
}
.nav-list {
    display: flex;
    list-style: none;
    column-gap: 20px;
    padding: 0;
    margin-left: 20px;
}
.nav-item a {
    font-weight: 600;
}
.logo {
    display: flex;
    align-items: center;
}
.logo .headline {
    font-weight: 800;
    text-decoration: underline;
}
.logo:hover {
    text-decoration: none;
}
</style>
