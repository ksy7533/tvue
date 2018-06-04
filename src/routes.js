import MainContainerArea from './components/MainContainerComp/MainContainerArea.vue'
import PlayVideoArea from './components/PlayVideoContainerComp/PlayVideoArea.vue'

export default [{
        path: '/main',
        name: 'main',
        component: MainContainerArea
    },
    {
        path: '/playVideo/:videoId/:channelId',
        name: 'playVideo',
        component: PlayVideoArea
    }
    // {
    //     path: '*',
    //     redirect: '/'
    // }
]