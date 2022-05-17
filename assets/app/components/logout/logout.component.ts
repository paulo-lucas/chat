import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { TokenStorageService } from "../../services/token-storage.service";

@Component({
  selector: "app-logout",
  templateUrl: './logout.component.html',
})
export class LogoutComponent {
  constructor(
    private router: Router,
    private tokenStorage: TokenStorageService
  ) { }

  onLogout() {
    this.tokenStorage.signOut();
    this.router.navigate(["/"]);
  }
}
