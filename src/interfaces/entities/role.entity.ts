export interface Role {
  id: string;
  name: RoleName;
}

type RoleName = "ROLE_ADMIN" | "ROLE_DEVELOPER" | "ROLE_CLIENT";
