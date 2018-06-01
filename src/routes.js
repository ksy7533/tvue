import MainContainerArea from './components/MainContainerComp/MainContainerArea.vue'
import PlayVideoArea from './components/PlayVideoContainerComp/PlayVideoArea.vue'

export default [{
        path: '/',
        name: 'main',
        component: MainContainerArea
    },
    {
        path: '/playVideo/:videoId',
        name: 'playVideo',
        component: PlayVideoArea
    }
    // {
    //     path: '*',
    //     redirect: '/'
    // }
]