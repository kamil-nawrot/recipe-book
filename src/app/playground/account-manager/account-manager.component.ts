import { Component, OnInit } from '@angular/core';
import {Account} from "./account.model";
import {AccountsService} from "./accounts.service";

@Component({
  selector: 'app-account-manager',
  templateUrl: './account-manager.component.html',
  styleUrls: ['./account-manager.component.css']
})
export class AccountManagerComponent implements OnInit {

  accounts: Account[] = []

  constructor(private accountsService: AccountsService) { }

  ngOnInit(): void {
    this.accounts = this.accountsService.getAccounts()
  }

}
