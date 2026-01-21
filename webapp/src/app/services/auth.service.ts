import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  register(name: string, email: string, password: string) {
    return this.http.post(environment.apiUrl + "/auth/register", {
      name, email, password,
    })
  }

  login(email: string, password: string) {
    return this.http.post(environment.apiUrl + "/auth/login", {
      email, password,
    })
  }

  get isLoggedIn() {
    let token = localStorage.getItem('token');
    if (token) {
      return true;
    }
    return false;
  }

  get isAdmin() {
    let userData = localStorage.getItem('user');
    if (userData) {
      return JSON.parse(userData).isAdmin;
    }
    return false;
  }

  get UserName() {
    let userData = localStorage.getItem('user');
    if (userData) {
      return JSON.parse(userData).name;
    }
    return null;
  }

  get UserEmail() {
    let userData = localStorage.getItem('user');
    if (userData) {
      return JSON.parse(userData).email;
    }
    return null;
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

  }
}
