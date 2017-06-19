export interface PasswordForgotRequestDto {
    email: string;
}

export interface PasswordSetRequestDto {
    email: string;
}

export interface PasswordVerifyTokenQueryParamData {
    token: string;
}

export interface PasswordVerifyTokenResponseDto {
    valid: boolean;
}
