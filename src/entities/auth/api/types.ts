import { components } from '@/shared/api/schema';

export type LoginRequest = components['schemas']['LoginRequest'];
export type LoginResponse = components['schemas']['LoginResponse'];

export type SignUpRequest = components['schemas']['RegistrationRequest'];
export type SignUpResponse = components['schemas']['User'];

export type User = components['schemas']['User'];

export type RecoverPasswordRequest = components['schemas']['RecoverPasswordRequest'];
export type RecoverResetPasswordResponse = {
  message: string;
  path: string;
  statusCode: number;
  timestamp: string;
};

export type ResetPasswordRequestArgs = {
  password: string;
  token: string;
};

export type BaseErrorResponse = {
  data: {
    message: string;
    path: string;
    statusCode: number;
    timestamp: string;
  };
};

export type SignUpErrorResponse = {
  data: {
    errorMessages: string[];
  };
};
