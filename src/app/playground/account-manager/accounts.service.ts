import { Injectable } from '@angular/core';
import {Account} from "./account.model";

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  private accounts: Account[] = [
    new Account("Administrator", "active"),
    new Account("John Doe", "active"),
    new Account("Jane Doe", "inactive")
  ]

  constructor(private accountsService: AccountsService) { }

  addAccount(account: Account) {
    this.accounts.push(account)
  }

  changeStatus(id: number, newStatus: string) {
    this.accounts[id].status = newStatus
  }


}
