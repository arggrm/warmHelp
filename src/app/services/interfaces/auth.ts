export enum Role {
  ADMIN = "ADMIN",
  CLIENT = "CLIENT",
  SELLER = "SELLER"
}

export interface UserInterface {
  username: string;
  password: string;
  createdAt: string;
  roleName: Role;
}

export interface ProfileInterface extends UserInterface {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  email: string;
  username: string;
  user: UserInterface;
}

export interface MiPerfilStatus {
  isActiveToggleEditProfile: boolean;
  isActiveToggleChangePassword: boolean;
}

export type LoginInterface = Pick<UserInterface, "username" | "password">;
