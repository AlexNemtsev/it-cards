import { components } from '@/shared/api/schema';

export type LoginRequest = components['schemas']['LoginRequest'];
export type LoginResponse = components['schemas']['LoginResponse'];
export type MeResponse = components['schemas']['User'];

export type RecoverPasswordRequest = components['schemas']['RecoverPasswordRequest'];
export type RecoverPasswordResponse = {
  message: string;
  path: string;
  statusCode: number;
  timestamp: string;
};
