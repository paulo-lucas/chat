import { Routes } from "@angular/router";
import { SignupComponent } from "./components/signup-form/signup.component";
import { SigninComponent } from "./components/signin-form/signin.component";
import { LogoutComponent } from "./components/logout/logout.component";

export const AUTH_ROUTES: Routes = [
    { path: '', redirectTo: 'signup', pathMatch: 'full' },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'logout', component: LogoutComponent }
]