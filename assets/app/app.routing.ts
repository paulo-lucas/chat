import { AUTH_ROUTES } from './auth.routers';
import { Routes, RouterModule } from '@angular/router'
import { MessagesComponent } from './components/messages-page/messages-page.component'
import { AuthPageComponent } from './components/auth-page/auth-page.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: AuthPageComponent },
    { path: 'mensagens', component: MessagesComponent },
];

export const myrouting = RouterModule.forRoot(APP_ROUTES);