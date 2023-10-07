// Types
import { RequestData } from './common';

export interface SignInBody extends RequestData {
  email: string;
  password: string;
}

export interface SignInRes {
  token: string;
}

export interface SignUpBody extends RequestData {
  email: string;
  password: string;
}

export interface SignUpRes {
  id: number;
  token: string;
}
