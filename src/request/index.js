// 所有请求放这里
import axios from 'axios';
import { data } from 'jquery';
import store from 'storejs';
const http = axios.create({
    baseURL:'https://netease-cloud-music-api-five-roan-88.vercel.app'
})
// 添加请求拦截器
http.interceptors.request.use(function (config) {
    console.log(config);
    const cookie = store.get("__m__cookie")??""
    config.params =config.params || {};
    config.params.cookie = cookie;
    return config
})
export const fetchPlaylistHot = () =>
http.get('/playlist/hot');

export const fetchPlaylists = (cat) =>
http.get('/top/playlist', {
		params: { cat }
	})
export const fetchSearchDefault = () => http.get('/search/default');
export const fetchSear = () => http.get('/homepage/block/page');

// MineView.vue
export const fetchMineView = () => 
http.get(
    '/search/hot/detail'
    );

    export const getQRkey = () => 
    http.get(
        '/login/qr/key'
        );
    export const getQRinfo = (key,qrimg = 1) => 
    http.get(
            '/login/qr/create',{params:{key,qrimg}}
            );
    export const checkQrStatus = (key) => http.get('/login/qr/check',{params:{key,timestamp:Date.now}})

    export const getUserAccount = () => http.get('/user/account');
    export const getUserDetail = (uid) => http.get('/user/detail',{params:{uid}});

// MusicView
//  export const getMusic = () => 
//     axios.get(
//         'https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/track/all?id=7605381616'
//     );

    export const songDetail = (params) => http.get(`/playlist/detail?id=${params}`);

// 所有歌曲
export const songAll = (params) => http.get(`/playlist/track/all?id=${params}`);
// login后名称和头像
export const gitloginList = () => http.get('/login/status');
// 登录后获取用户详情
export const gitloginUser = () => http.get('/user/account');//471458939
export const gitJsx = (params) => http.get(`/user/detail?uid=${params}`);
// 历史评论
export const fetchUserHistory = (uid) => http.get('/user/comment/history', { params: { uid } });

export const getMP3 = (id)=>
http.get('/song/url/v1',{params:{ id,level: 'standard'}});

export const getTrackDetail = (id) => http.get('/song/detail', { params: { ids: id } });