export declare type User = {
	dni: string;
	name: string;
	lastname?: string;
	role: { role: string };
	farm: { farm: Farm };
};

export declare type Farm = {
	idFarm: number;
	farm: string;
	location: string;
	createdAt: string;
	updatedAt: string;
};
