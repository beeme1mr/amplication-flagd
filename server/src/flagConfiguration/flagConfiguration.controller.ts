import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FlagConfigurationService } from "./flagConfiguration.service";
import { FlagConfigurationControllerBase } from "./base/flagConfiguration.controller.base";

@swagger.ApiTags("flagConfigurations")
@common.Controller("flagConfigurations")
export class FlagConfigurationController extends FlagConfigurationControllerBase {
  constructor(
    protected readonly service: FlagConfigurationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
