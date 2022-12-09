import { Module } from '@nestjs/common';
import { HeaderApiKeyStrategy } from './tokenStrategy';
import { PassportModule } from '@nestjs/passport';
import { ConfigurationModule } from '../../config';
import { HeaderApiKeyGuard } from './headerApiKeyGuard';

@Module({
  imports: [PassportModule, ConfigurationModule],
  providers: [HeaderApiKeyStrategy, HeaderApiKeyGuard],
  exports: [HeaderApiKeyStrategy, HeaderApiKeyGuard],
})
export class AuthModule {}
