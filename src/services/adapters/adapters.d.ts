import { User } from '../../ts/types';

export interface AuthResponse {
	user: User;
	accessToken: string;
}
