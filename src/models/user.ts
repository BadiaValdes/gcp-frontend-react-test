export interface User{
    _id: string,
    email: string;
    nombre: string;
    apellido: string;
    roles: UserRole;
    dni: string;
  }

export enum UserRole {
    Admin = "admin",
    User = "user",
}