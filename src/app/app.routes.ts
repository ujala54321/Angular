import { Routes } from '@angular/router';
import { ControlFlow } from './components/control-flow/control-flow';
import { DataBinding } from './components/data-binding/data-binding';
import { Signal } from './components/signal/signal';
import { Attribute } from './components/attribute/attribute';
import { NotFound } from './components/not-found/not-found';
import { Photos } from './components/photos/photos';
import { User } from './components/user/user';
import { Login } from './components/login/login';
import { Layout } from './components/layout/layout';
import { authGuard } from './guard/auth-guard';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: '',
        component: Layout,
        children: [
            {
                path: 'controlflow',
                component: ControlFlow
            },
            {
                path: 'data-binding',
                component: DataBinding,
                canActivate:[authGuard]
            },
            {
                path: 'signal',
                component: Signal
            },
            {
                path: 'attribute',
                component: Attribute
            },
            {
                path: 'photos',
                component: Photos
            },
            {
                path: 'user',
                component: User
            },
        ]
    },

    {
        path: '',
        component: NotFound
    }
];

