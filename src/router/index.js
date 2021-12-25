import VueRouter from "vue-router";

import UsersList from "../components/UsersList"
import UserCard from "@/components/UserCard";

export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            component: UsersList
        },
        {
            path: "/user/*",
            component: UserCard
        }
    ]
    }
)