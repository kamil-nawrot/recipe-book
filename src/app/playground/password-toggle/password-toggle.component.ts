import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-toggle',
  templateUrl: './password-toggle.component.html',
  styleUrls: ['./password-toggle.component.css']
})
export class PasswordToggleComponent {

  isPasswordVisible = false
  togglePasswordMessage = "Show password"

  clickList: Date[] = []

  onTogglePassword() {
    this.isPasswordVisible = !this.isPasswordVisible
    this.togglePasswordMessage = this.isPasswordVisible ? "Hide password" : "Show password"

    this.clickList.push(new Date(Date.now()))
  }

  onReset() {
    this.clickList = []
  }

  getColor() {
    return this.clickList.length <= 5 ? "black" : "red"
  }

}
