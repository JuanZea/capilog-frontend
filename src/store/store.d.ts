import { User } from "../ts/types";

export declare type State = {
	user?: User;
	errors: {
		server: boolean;
	};
};
