import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import EventLayout from '../views/event/Layout.vue'
import EventDetails from '../views/event/Details.vue'
import EventRegister from '../views/event/Register.vue'
import EventEdit from '../views/event/Edit.vue'
import About from '../views/About.vue'
import NotFound from "@/views/NotFound";

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
    props: route => ({
      page: parseInt(route.query.page) || 1
    })
  },
  {
    path: '/events/:id',
    name: 'EventLayout',
    props: true,
    component: EventLayout,
    children: [
      {
        path: '',
        name: 'EventDetails',
        component: EventDetails
      },
      {
        path: 'register',
        name: 'EventRegister',
        component: EventRegister
      },
      {
        path: 'edit',
        name: 'EventEdit',
        props: true,
        component: EventEdit
      }
    ]
  },
  // {
  //   path: '/event/:id',
  //   redirect: () => {
  //     return { name: 'EventDetails' }
  //   },
  //   children: [
  //     { path: 'register', redirect: () => ({ name: 'EventRegister' }) },
  //     { path: 'edit', redirect: () => ({ name: 'EventEdit' }) }
  //   ]
  // },
  {
    path: '/event/:afterEvent(.*)',
    redirect: to => {
      return { path: '/events/' + to.params.afterEvent }
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/404/:resource',
    name: '404Resource',
    component: NotFound,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
