import arenaApi from "@/api/arenahub-api";

export interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  roles: string[];
}

export const registerAction = async (request: RegisterRequest): Promise<string> => {
  const { data } = await arenaApi.post("/api/v1/auth/register", request);

  return data;
};
