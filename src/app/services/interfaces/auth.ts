export enum Role {
    ADMIN = "ADMIN",
    CLIENT = "CLIENT",
    SELLER = "SELLER"
}

export interface UserInterface {
    username: string;
    password: string;
    roleName: Role;
    firstName: string;
    lastName: string;
    address: string;
}

export type LoginInterface = Pick<UserInterface, "username" | "password">;
