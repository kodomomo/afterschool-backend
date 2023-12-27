import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reflector } from '@nestjs/core';
import { Permission } from '../decorator/authority.decorator';
import { UserEntity } from '../../domain/user/user.entity';

@Injectable()
export class JwtAuthGuard implements CanActivate {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
        private readonly jwtService: JwtService,
        private readonly reflector: Reflector
    ) {
    }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const authority = this.reflector.get(Permission, context.getHandler());
        if (!authority) {
            return true;
        }
        const token = this.extractTokenFromHeader(request.headers);
        if (authority.includes('OPTIONAL') && token == null) {
            return true;
        }

        const { sub } = this.parseToken(token);

        const currentUser = await this.queryUserByAccountId(sub);
        request.user = currentUser;

        return this.matchRole(authority, currentUser.authority);
    }

    private parseToken(token: string) {
        let parsed: any;
        try {
            parsed = this.jwtService.verify(token);
        } catch (e) {
            throw new UnauthorizedException(e.message);
        }

        if (parsed.typ != 'access') {
            throw new UnauthorizedException('Invalid Token');
        }
        return parsed;
    }

    private matchRole(required: string[], provided: string): boolean {
        return required.includes(provided);
    }

    private extractTokenFromHeader(header: any): string {
        const { authorization } = header;
        return authorization?.substring(7);
    }

    private async queryUserByAccountId(accountId: string): Promise<UserEntity> {
        const user = await this.userRepository.findOneBy({ accountId: accountId });
        if (!user) {
            throw new UnauthorizedException('Invalid Token');
        }

        return user;
    }
}
