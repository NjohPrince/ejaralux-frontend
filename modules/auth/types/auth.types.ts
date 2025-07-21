export type LoginDataType = {
  email: string;
  password: string;
};

export type RegisterDataType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type ForgotPasswordDataType = {
  email: string;
};

export type ResetPasswordDataType = {
  password: string;
  confirmPassword: string;
};

export type ChangePasswordDataType = {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
};
