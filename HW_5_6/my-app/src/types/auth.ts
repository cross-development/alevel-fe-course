export interface SignInBody {
  email: string;
  password: string;
}

export interface SignInRes {
  token: string;
}

export interface SignUpBody {
  email: string;
  password: string;
}

export interface SignUpRes {
  id: number;
  token: string;
}
