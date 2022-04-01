import { Injectable } from "@angular/core";

@Injectable()

export class AuthService {
  private isAuthenticated: boolean = true;

  login() {
    this.isAuthenticated = true;
  }

  logout() {
    this.isAuthenticated = false;
    window.localStorage.clear();
  }

  isLoggedIn(): boolean {
    if (this.isAuthenticated === undefined) this.isAuthenticated = true;
    return this.isAuthenticated;
  }
}

