import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';

const USER_REPOSITORY = TypeOrmModule.forFeature([UserEntity]);

@Global()
@Module({
    imports: [USER_REPOSITORY],
    exports: [USER_REPOSITORY],
    providers: [],
    controllers: []
})
export class UserModule {
}