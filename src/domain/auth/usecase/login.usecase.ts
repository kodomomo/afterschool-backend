import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from '../../user/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { JwtProvider } from '../../../global/security/jwt/jwt.provider';
import { LoginRequest, TokenResponse } from '../presentation/auth.dto';

@Injectable()
export class LoginUseCase {

    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
        private readonly jwtProvider: JwtProvider
    ) {
    }

    async execute(request: LoginRequest): Promise<TokenResponse> {
        const user = await this.userRepository.findOneBy({
            accountId: request.accountId
        });

        if (!await bcrypt.compare(request.password, user.password)) {
            throw new UnauthorizedException('Invalid Password');
        }
        return await this.jwtProvider.generateToken(user.accountId);
    }
}