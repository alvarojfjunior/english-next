export interface IUser {
  _id: string;
  name: string;
  email: string;
  token: string;
  type: number;
}

export interface IAuth {
  _id: string;
  name: string;
  email: string;
  type: number;
  status: number;
}
