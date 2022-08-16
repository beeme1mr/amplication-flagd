import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FlagDefinitionService } from "./flagDefinition.service";
import { FlagDefinitionControllerBase } from "./base/flagDefinition.controller.base";

@swagger.ApiTags("flagDefinitions")
@common.Controller("flagDefinitions")
export class FlagDefinitionController extends FlagDefinitionControllerBase {
  constructor(
    protected readonly service: FlagDefinitionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
