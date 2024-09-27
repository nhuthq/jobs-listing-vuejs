import { createWebHistory, createRouter } from "vue-router";
import HomeView from "@/views/Home/HomeView.vue";
import JobsView from "@/views/Jobs/JobsView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import JobDetailsView from "@/views/JobDetails/JobDetailsView.vue";
import AddJobView from "@/views/AddJob/AddJobView.vue";
import EditJobView from "@/views/EditJob/EditJobView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView,
    },
    {
      path: "/jobs/:id",
      name: "job-details",
      component: JobDetailsView,
    },
    {
      path: "/jobs/edit/:id",
      name: "job-edit",
      component: EditJobView,
    },
    {
      path: "/jobs/add",
      name: "add-job",
      component: AddJobView,
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFoundView,
    },
  ],
});

export default router;
