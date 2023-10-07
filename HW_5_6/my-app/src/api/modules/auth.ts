// API
import { apiCaller } from '../apiClient';
// Types
import { SignInBody, SignInRes, SignUpBody, SignUpRes } from '../../types/auth';

const Auth = {
  signIn: (body: SignInBody) => apiCaller.post<SignInRes>('/login', body),
  signUp: (body: SignUpBody) => apiCaller.post<SignUpRes>('/register', body),
};

export default Auth;
