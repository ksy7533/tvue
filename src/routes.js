import MainContainerArea from './components/MainContainerComp/MainContainerArea.vue'
import PlayVideoArea from './components/PlayVideoContainerComp/PlayVideoArea.vue'
import TotalVideoArea from './components/TotalVideoContainerComp/TotalVideoArea.vue'

// import LoginArea from './components/AuthComp/Login.vue'
// import SignupArea from './components/AuthComp/Signup.vue'

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
        path: '/totalVideo/hot/:query',
        name: 'totalVideoHot',
        component: TotalVideoArea

    },

    {
        path: '/totalVideo/channel/:channelId',
        name: 'totalVideoChannel',
        component: TotalVideoArea
    },

    {
        path: '/totalVideo/mylist',
        name: 'totalVideoMylist',
        component: TotalVideoArea
    },

    // {
    //     path: '/login',
    //     name: 'login',
    //     component: LoginArea
    // },

    // {
    //     path: '/signup',
    //     name: 'signup',
    //     component: SignupArea
    // },

    {
        path: '*',
        redirect: '/main'
    }
]