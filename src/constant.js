export default {
    SET_CURRENT_GNB_ID: 'setCurrentGnbId',
    SET_CUSTOM_LIST_DATA: 'setCustomListData',
    SET_KEYWORD: 'setKeyword',
    SET_CURRENT_VIDEO: 'setCurrentVideo',
    SET_IS_LIKE_VIDEO: 'setIsLikeVideo',

    GNB_LIST: [{
            name: '예능',
            id: '24'
        },
        {
            name: '음악',
            id: '10'
        },
        {
            name: '게임',
            id: '20'
        },
        {
            name: '동물',
            id: '15'
        },
        {
            name: '스포츠',
            id: '17'
        }
    ],

    YOUTUBE_API_KEY: "AIzaSyBQ1G-JhjIMd0bGr9IeF49NKeQ29roBttY",
    VIDEO_URL: "https://www.googleapis.com/youtube/v3/videos",
    SEARCH_URL: "https://www.googleapis.com/youtube/v3/search",
    PLAYLIST_URL: "https://www.googleapis.com/youtube/v3/playlistItems",
    PLAYLISTS_URL: "https://www.googleapis.com/youtube/v3/playlists",

    ADD_LIKE_VIDEO: 'addLikeVideo',
    REMOVE_LIKE_VIDEO: 'removeLikeVideo'
}