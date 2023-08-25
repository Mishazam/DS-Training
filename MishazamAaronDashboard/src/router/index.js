import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import LogIn from "@/components/LogIn.vue";
import SignUp from "@/components/SignUp.vue";
import Dashboard from "@/components/Dashboard.vue";
import Profile from "@/components/Profile.vue";
import Users from "@/components/Users.vue";
import Edit from "@/components/Edit.vue";
import Candidates from "@/components/Candidate.vue";
import Chatbox from "@/components/ChatBox.vue";
import Registration from "@/components/Registration.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/",
    name: "LogIn",
    component: LogIn,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/registration",
    name: "Registration",
    component: Registration,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    children: [
      {
        path: "users",
        name: "Users",
        component: Users,
      },
      {
        path: "profile",
        name: "Profile",
        component: Profile,
      },
      {
        path: "edit",
        name: "Edit",
        component: Edit,
      },
      {
        path: "candidates",
        name: "Candidates",
        component: Candidates,
      },
      {
        path: "chatbox",
        name: "Chatbox",
        component: Chatbox,
      },
    ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
