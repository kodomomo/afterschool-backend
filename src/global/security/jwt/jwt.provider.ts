import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { TokenResponse } from '../../../domain/auth/presentation/auth.dto';

@Injectable()
export class JwtProvider {
    constructor(
        private readonly jwtService: JwtService
    ) {
    }

    async generateToken(accountId: string): Promise<TokenResponse> {
        const accessToken = await this.signJwtToken(accountId, '1h', 'access');
        const refreshToken = await this.signJwtToken(accountId, '14d', 'refresh');

        return {
            accessToken,
            refreshToken
        };
    }

    async getSubject(token: string): Promise<string> {
        const parsed = await this.jwtService.verifyAsync(token);

        return parsed.sub;
    }

    private async signJwtToken(accountId: string, exp: string, typ: string) {
        return await this.jwtService.signAsync(
            { sub: accountId, typ },
            { expiresIn: exp }
        );
    }
}
