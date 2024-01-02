export class TokenResponse {
    accessToken: string;
    refreshToken: string;
}

export class LoginRequest {
    accountId: string;
    password: string;
}