import { APIRequestContext } from '@playwright/test';

export interface ApiResponse<T = unknown> {
  status: number;
  body: T;
  headers: Record<string, string>;
}

export class ApiClient {
  constructor(
    protected readonly request: APIRequestContext,
    protected readonly baseUrl: string,
  ) {}

  async get<T = unknown>(endpoint: string, options?: { headers?: Record<string, string> }): Promise<ApiResponse<T>> {
    const response = await this.request.get(`${this.baseUrl}${endpoint}`, {
      headers: options?.headers,
    });
    return {
      status: response.status(),
      body: (await response.json()) as T,
      headers: response.headers(),
    };
  }

  async post<T = unknown>(
    endpoint: string,
    data?: unknown,
    options?: { headers?: Record<string, string> },
  ): Promise<ApiResponse<T>> {
    const response = await this.request.post(`${this.baseUrl}${endpoint}`, {
      data,
      headers: options?.headers,
    });
    return {
      status: response.status(),
      body: response.status() !== 204 ? ((await response.json()) as T) : (undefined as T),
      headers: response.headers(),
    };
  }

  async put<T = unknown>(
    endpoint: string,
    data?: unknown,
    options?: { headers?: Record<string, string> },
  ): Promise<ApiResponse<T>> {
    const response = await this.request.put(`${this.baseUrl}${endpoint}`, {
      data,
      headers: options?.headers,
    });
    return {
      status: response.status(),
      body: (await response.json()) as T,
      headers: response.headers(),
    };
  }

  async delete<T = unknown>(endpoint: string, options?: { headers?: Record<string, string> }): Promise<ApiResponse<T>> {
    const response = await this.request.delete(`${this.baseUrl}${endpoint}`, {
      headers: options?.headers,
    });
    return {
      status: response.status(),
      body: response.status() !== 204 ? ((await response.json()) as T) : (undefined as T),
      headers: response.headers(),
    };
  }
}
