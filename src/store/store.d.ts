import { Farm, User } from "../types";

export declare type State = {
	user?: User;
	farms?: Array<Farm>
	errors: {
		server: boolean;
	};
};
