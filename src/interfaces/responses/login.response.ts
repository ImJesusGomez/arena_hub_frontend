import type { User } from "../entities/user.entity";

export interface LoginResponse {
  accessToken: string;
  tokenType: string;
  user: User;
}
