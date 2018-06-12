import MainContainerArea from './components/MainContainerComp/MainContainerArea.vue'
import PlayVideoArea from './components/PlayVideoContainerComp/PlayVideoArea.vue'
import TotalVideoArea from './components/TotalVideoContainerComp/TotalVideoArea.vue'

export default [{
        path: '/main',
        name: 'main',
        component: MainContainerArea
    },

    {
        path: '/playVideo/:videoId/:channelId',
        name: 'playVideo',
        component: PlayVideoArea
    },

    {
        path: '/totalVideo/:channelId?/:query?/:order?',
        name: 'totalVideo',
        component: TotalVideoArea
    },

    {
        path: '*',
        redirect: '/main'
    }
]