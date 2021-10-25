interface IAccount {
  name: string
  status: string
}

export class Account implements IAccount {

  constructor(public name: string, public status: string) {}

}
