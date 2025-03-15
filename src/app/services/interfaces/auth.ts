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

export interface MiPerfilStatus {
  isActiveToggleEditProfile: boolean;
  isActiveToggleChangePassword: boolean;
}

export type LoginInterface = Pick<UserInterface, "username" | "password">;
