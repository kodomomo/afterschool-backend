import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => {
                return {
                    type: 'mysql',
                    host: configService.get('DB_HOST'),
                    port: +configService.get<number>('DB_PORT'),
                    username: configService.get('DB_USERNAME'),
                    database: configService.get('DB_NAME'),
                    password: configService.get('DB_PASSWORD'),
                    synchronize: true,
                    autoLoadEntities: true,
                    logging: true,
                    namingStrategy: new SnakeNamingStrategy()
                };
            }
        })
    ]
})
export class TypeormConfigModule {
}