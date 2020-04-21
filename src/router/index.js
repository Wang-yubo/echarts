import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import IndexDefault from "../components/IndexDefault.vue"
import Sun from "../components/Sun.vue"
import Line from "../components/Line.vue"
import Pie from "../components/Pie.vue"
import RichText from "../components/RichText.vue"
import Sunburst from "../components/Sunburst.vue"
import PictorialBar from "../components/PictorialBar.vue"
import Gauge from "../components/Gauge.vue"
import City3d from "../components/city3d.vue"
import Globe3d from "../components/Globe3d.vue"
import Music from "../components/Music.vue"
import Rounded from "../components/Rounded.vue"
Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: "/home"
    },
    {
        path: "/home",
        name: "home",
        component: Home,
        children: [{
                path: "",
                name: "index",
                component: IndexDefault
            },
            {
                path: "/sun",
                name: "sun",
                component: Sun
            },
            {
                path: "/line",
                name: "line1",
                component: Line
            }, {
                path: "/pie",
                name: "Pie",
                component: Pie
            }, {
                path: "/richtext",
                name: "RichText",
                component: RichText
            }, {
                path: "/sunburst",
                name: "Sunburst",
                component: Sunburst
            }, {
                path: "/pictorialbar",
                name: "PictorialBar",
                component: PictorialBar
            }, {
                path: "/gauge",
                name: "Gauge",
                component: Gauge
            }, {
                path: "/city3d",
                name: "City3d",
                component: City3d
            }, {
                path: "/globe3d",
                name: "Globe3d",
                component: Globe3d
            }, {
                path: "/music",
                name: "Music",
                component: Music
            }, {
                path: "/rounded",
                name: "Rounded",
                component: Rounded
            },

        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router