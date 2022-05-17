
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
    selector: "app-messages",
    templateUrl: "./auth-page.component.html",
})
export class AuthPageComponent implements OnInit {

    constructor(
        private tokenStorage: TokenStorageService,
        private router: Router
    ) { }

    ngOnInit(): void {
        if (this.tokenStorage.getToken()) {
            this.router.navigate(['/mensagens']);
        }
    }
}