import {Component, Input, OnInit} from '@angular/core';
import {Account} from "../account.model";
import {AccountsService} from "../accounts.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  // @ts-ignore
  @Input() account: Account
  @Input() id: number = -1

  constructor(private accountsService: AccountsService) { }

  ngOnInit(): void {
  }

  onChangeStatus(newStatus: string, id: number) {
    this.accountsService.changeStatus(id, newStatus)
  }

}
