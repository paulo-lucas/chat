import { ReactiveFormsModule } from "@angular/forms";
import { LogoutComponent } from "./components/logout/logout.component";
import { SignupComponent } from "./components/signup-form//signup.component";
import { SigninComponent } from "./components/signin-form/signin.component";
import { HeaderComponent } from "./components/header/header.component";
import { MessageComponent } from "./components/message/message.component";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { MessageListComponent } from "./components/message-list/message-list.component";
import { MessageInputComponent } from "./components/message-input/message-input.component";
import { MessagesComponent } from "./components/messages-page/messages-page.component";
import { myrouting } from "./app.routing";
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AuthPageComponent } from "./components/auth-page/auth-page.component";
import { authInterceptorProviders } from "./helpers/auth.interceptor";
import { TokenStorageService } from "./services/token-storage.service";

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent,
        AuthPageComponent,
        HeaderComponent,
        SigninComponent,
        SignupComponent,
        LogoutComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        myrouting,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
    ],
    bootstrap: [AppComponent],
    providers: [authInterceptorProviders, TokenStorageService],
})
export class AppModule { }