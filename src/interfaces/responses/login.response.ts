import type { User } from "../entities/user.entity";

export interface LoginResponse {
  accessToken: string;
  user: User;
  tokenType: string;
}
