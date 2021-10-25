import { Component, OnInit } from '@angular/core';
import {AccountsService} from "../accounts.service";
import {Account} from "../account.model";

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  constructor(private accountsService: AccountsService) { }

  ngOnInit(): void {
  }

  onAddAccount(name: string, status: string) {
    this.accountsService.addAccount(new Account(name, status))
  }

}
