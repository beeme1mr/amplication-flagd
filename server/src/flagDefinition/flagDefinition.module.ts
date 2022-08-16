import { Module } from "@nestjs/common";
import { FlagDefinitionModuleBase } from "./base/flagDefinition.module.base";
import { FlagDefinitionService } from "./flagDefinition.service";
import { FlagDefinitionController } from "./flagDefinition.controller";
import { FlagDefinitionResolver } from "./flagDefinition.resolver";

@Module({
  imports: [FlagDefinitionModuleBase],
  controllers: [FlagDefinitionController],
  providers: [FlagDefinitionService, FlagDefinitionResolver],
  exports: [FlagDefinitionService],
})
export class FlagDefinitionModule {}
