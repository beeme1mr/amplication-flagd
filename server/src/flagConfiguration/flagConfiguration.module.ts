import { Module } from "@nestjs/common";
import { FlagConfigurationModuleBase } from "./base/flagConfiguration.module.base";
import { FlagConfigurationService } from "./flagConfiguration.service";
import { FlagConfigurationController } from "./flagConfiguration.controller";
import { FlagConfigurationResolver } from "./flagConfiguration.resolver";

@Module({
  imports: [FlagConfigurationModuleBase],
  controllers: [FlagConfigurationController],
  providers: [FlagConfigurationService, FlagConfigurationResolver],
  exports: [FlagConfigurationService],
})
export class FlagConfigurationModule {}
