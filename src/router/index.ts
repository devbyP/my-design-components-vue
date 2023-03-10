import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
            children: [
                {
                    path: "",
                    name: "homeContent",
                    component: () => import("@/views/HomeContent.vue"),
                },
            ],
        },
    ],
});

export default router;
