import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
    selector: 'app-messages',
    templateUrl: './messages-page.component.html'
})

export class MessagesComponent implements OnInit {
    constructor(
        private tokenStorage: TokenStorageService,
        private router: Router
    ) { }

    ngOnInit() {
        if (!this.tokenStorage.getToken()) this.router.navigate(['/login']);
    }
}