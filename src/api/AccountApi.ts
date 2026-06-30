import { ApiClient, ApiResponse } from './ApiClient';

export interface UserCredentials {
  userName: string;
  password: string;
}

export interface TokenResponse {
  token: string;
  expires: string;
  status: string;
  result: string;
}

export interface UserResponse {
  userID: string;
  username: string;
  books: BookReference[];
}

export interface BookReference {
  isbn: string;
}

export class AccountApi extends ApiClient {
  async generateToken(credentials: UserCredentials): Promise<ApiResponse<TokenResponse>> {
    return this.post<TokenResponse>('/Account/v1/GenerateToken', credentials);
  }

  async createUser(credentials: UserCredentials): Promise<ApiResponse<UserResponse>> {
    return this.post<UserResponse>('/Account/v1/User', credentials);
  }

  async getUser(userId: string, token: string): Promise<ApiResponse<UserResponse>> {
    return this.get<UserResponse>(`/Account/v1/User/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  async deleteUser(userId: string, token: string): Promise<ApiResponse<void>> {
    return this.delete<void>(`/Account/v1/User/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  async isAuthorized(credentials: UserCredentials): Promise<ApiResponse<boolean>> {
    return this.post<boolean>('/Account/v1/Authorized', credentials);
  }
}
