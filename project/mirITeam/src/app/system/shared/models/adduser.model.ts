export class  AddUserModel {
  public id?: number;
  constructor(
    public name: string,
    public login: string,
    public password: string,
    public type: string
  ) {}
}

