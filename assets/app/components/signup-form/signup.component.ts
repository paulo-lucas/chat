import { Component } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { NgForm } from "@angular/forms";
import { User } from "../../models/user.model";

@Component({
    selector: "app-signup",
    templateUrl: "./signup.component.html",
})
export class SignupComponent {
    countrys: string[] = ["Brazil", "Japan", "France"];
    newState: number = 0;
    selected: string = "";
    saveSuccess: boolean;
    errorSuccess: boolean;
    sucessMessage: string = "";
    errorMessage: string = "";

    constructor(
        private authService: AuthService,
    ) { }

    valueChange(event: any) {
        this.selected = event.target.value;
    }

    onSubmit(form: NgForm) {
        const userAux = new User(
            form.value.email,
            form.value.password,
            form.value.firstName,
            form.value.lastName,
            form.controls["gender"].value,
            this.selected
        );

        this.authService.signUpUser(userAux).subscribe(
            (sucess) => {
                this.saveSuccess = true;
                this.sucessMessage = `${sucess.message}`;
                window.setTimeout(function () {
                    document.location.reload();
                }, 4000);
            },
            (error) => {
                this.errorMessage = `${error.message}`;
                this.errorSuccess = true;
            }
        );
    }
}
