/* eslint-disable */
import { createRouter, createWebHistory, START_LOCATION } from 'vue-router';

// COMPONENTS
import Home from './components/Home/home-view';
import Article from './components/Articles/article-view';
import Signin from './components/Users/sign-in';
import dashboard from './components/Users/dashboard-user';



const routes = createRouter({
    history: createWebHistory(),
    routes:[
        { path:'/', component: Home, name:'home'},
        { path:'/article/:id', component:Article, name:'article' },
        { path:'/signin', component:Signin, name:'signin' },
        {path : '/user/dashboard', component:dashboard ,name:'dashboard'}
    ]
})


export default routes;