export interface Role {
  id: string;
  name: RoleName;
}

export const ADMIN_ROLES = ["ROLE_ADMIN", "ROLE_DEVELOPER"];
type RoleName = "ROLE_ADMIN" | "ROLE_DEVELOPER" | "ROLE_CLIENT";
