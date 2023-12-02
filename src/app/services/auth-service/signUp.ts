import { httpClient } from '../http-client';

export interface SignUpProps {
  name: string;
  email: string;
  password: string;
}

interface SignUpResponse {
  accessToken: string;
}

export async function signUp(params: SignUpProps) {
  const { data } = await httpClient.post<SignUpResponse>(
    '/auth/signup',
    params
  );

  return data;
}
