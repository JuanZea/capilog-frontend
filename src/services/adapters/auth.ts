import { AxiosResponse } from 'axios';
import { AuthResponse } from './adapters';

export const getAuthFromLoginResponse = ({ data: { data } }: AxiosResponse<{ data: AuthResponse }>): AuthResponse => ({
	user: data.user,
	accessToken: data.accessToken,
});
