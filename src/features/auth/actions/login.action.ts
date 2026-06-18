import arenaApi from "@/api/arenahub-api";
import type { LoginResponse } from "@/interfaces/responses/login.response";

export interface LoginRequest {
  email: string;
  password: string;
}

export const loginAction = async (request: LoginRequest): Promise<LoginResponse> => {
  const { data } = await arenaApi.post("/api/v1/auth/login", request);

  return data;
};
