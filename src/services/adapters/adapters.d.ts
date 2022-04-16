import { Farm, User } from '../../types';

export interface AuthResponse {
	user: User;
	accessToken: string;
}
