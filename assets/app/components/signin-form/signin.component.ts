import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "../../services/auth.service";
import { User } from "../../models/user.model";
import { TokenStorageService } from "../../services/token-storage.service";

@Component({
    selector: "app-signin",
    templateUrl: "./signin.component.html",
})
export class SigninComponent {
    form: any = {
        email: "",
        password: "",
    };
    saveSuccess: boolean;
    errorSuccess: boolean;
    sucessMessage: string = "";
    errorMessage: string = "";

    constructor(
        private authService: AuthService,
        private tokenStorage: TokenStorageService,
        private router: Router
    ) { }

    onSubmit() {
        const userAux = new User(this.form.email, this.form.password);

        this.authService.signInUser(userAux).subscribe(
            (success) => {
                this.saveSuccess = true;
                this.sucessMessage = `${success.message}`;
                this.tokenStorage.saveToken(success.token);
                this.tokenStorage.saveName(success.name);
                this.router.navigate(["/mensagens"]);
            },
            (error) => {
                this.errorSuccess = true;
                this.errorMessage = `${error.message}`;
            }
        );
    }
}
