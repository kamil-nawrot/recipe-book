import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = false

  logIn() {
    this.loggedIn = true
    console.log("User logged in")
  }

  logOut() {
    this.loggedIn = false
    console.log("User logged out")
  }

  isAuthenticated() {
    const isAuthenticated = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn)
        }, 800)
      }
    )

    return isAuthenticated
  }

  constructor() { }
}
