/* eslint-disable */
import { getAuth, onAuthStateChanged} from 'firebase/auth';
import { createRouter, createWebHistory, START_LOCATION } from 'vue-router';
import store from './Store';

// COMPONENTS
import Home from './components/Home/home-view';
import Article from './components/Articles/article-view';
import Signin from './components/Users/sign-in';
import NotFound from './components/Not-Found.vue';
import dashboard from './components/Users/Dashboard/dashboard-user';
import UserMain from './components/Users/Dashboard/main-app.vue';
import UserProfile from './components/Users/Dashboard/Pages/user_profile.vue';
import AdminArticles from './components/Users/Dashboard/Admin/articles-app.vue';
import AdminAddArticles from './components/Users/Dashboard/Admin/add-app.vue';





const routes = createRouter({
    history: createWebHistory(),
    routes:[
        { path:'/', component: Home, name:'home'},
        { path:'/article/:id', component:Article, name:'article' },
        { path:'/signin', component:Signin, name:'signin',meta:{ signin: true }},
        { path:'/user/dashboard', component:dashboard,meta:{ auth: true }, children:[
            { path:'', component: UserMain,name:'dashboard'},
            { path:'profile', component: UserProfile ,name:'user_profile'},
            { path:'articles', component: AdminArticles ,name:'admin_articles'},
            { path:'articles/add', component: AdminAddArticles ,name:'admin_add'},
            
        ]},
        { path: '/:notFound(.*)*', component: NotFound,name:'404'}
    ]
})
const auth = getAuth();
const validateCheck = (to,from,next) => {
    if( to.meta.auth && !store.getters['auth/isAuth']){
        next('/signin');
    } else if( to.meta.signin && store.getters['auth/isAuth']){
        next('/user/dashboard');
    } else{
        next();
    }
    store.commit('notify/setLoading',false);
}   


routes.beforeEach((to,from,next)=>{
    if(from === START_LOCATION){
        const unsubscribe = onAuthStateChanged(auth, user => {
            if(user){
                store.dispatch('auth/autosign',user).then(()=>{
                    validateCheck(to,from,next)
                })
            } else {
                validateCheck(to,from,next)
            }
        })
        unsubscribe();
    } else {
        validateCheck(to,from,next)
    }    
})


export default routes;