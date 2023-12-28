import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassRegistrationEntity } from './classRegistration.entity';
import { Global, Module } from '@nestjs/common';

const CLASS_REGISTRATION_REPOSITORY = TypeOrmModule.forFeature([ClassRegistrationEntity]);

@Global()
@Module({
    imports: [CLASS_REGISTRATION_REPOSITORY],
    exports: [CLASS_REGISTRATION_REPOSITORY]
})
export class ClassRegistrationModule {
}