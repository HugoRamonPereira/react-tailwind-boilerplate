import { httpClient } from '../http-client';

export interface SignInProps {
  email: string;
  password: string;
}

interface SignInResponse {
  accessToken: string;
}

export async function signIn(params: SignInProps) {
  const { data } = await httpClient.post<SignInResponse>(
    '/auth/signin',
    params
  );

  return data;
}
