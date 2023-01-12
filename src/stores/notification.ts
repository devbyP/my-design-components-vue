import { ref, computed } from "vue";
import { defineStore } from "pinia";

interface NotificationItem {
    title: string;
    message: string;
}

export const useNotificationStore = defineStore("norification", () => {
    const notifyList = ref<NotificationItem[]>([]);
    const newNotify = ref<NotificationItem[]>([]);
    const isNotifying = ref<boolean>(false);

    const newNotiNum = computed(() => newNotify.value.length);

    function read() {
        isNotifying.value = false;
    }

    function newNoti(noti: NotificationItem) {
        isNotifying.value = true;
        newNotify.value.push(noti);
    }

    return {
        notifyList,
        isNotifying,
        newNotify,
        read,
        newNoti,
        newNotiNum,
    };
});
