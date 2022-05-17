import { Injectable } from '@angular/core';
const TOKEN_KEY = 'auth-token';
const NAME_KEY = 'username'
@Injectable()
export class TokenStorageService {
  constructor() { }
  signOut(): void {
    window.sessionStorage.clear();
  }
  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }
  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }
  public saveName(name: string): void {
    window.sessionStorage.removeItem(NAME_KEY);
    window.sessionStorage.setItem(NAME_KEY, name);
  }
  public getName(): string | null {
    return window.sessionStorage.getItem(NAME_KEY);
  }
}