import { MessageService } from "./services/message.service";
import { Component } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { TokenStorageService } from "./services/token-storage.service";
import { authInterceptorProviders } from './helpers/auth.interceptor'

@Component({
    selector: "my-app",
    templateUrl: "./app.component.html",
    providers: [MessageService, AuthService, TokenStorageService],
})
export class AppComponent { }
