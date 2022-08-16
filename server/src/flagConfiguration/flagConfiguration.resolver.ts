import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { FlagConfigurationResolverBase } from "./base/flagConfiguration.resolver.base";
import { FlagConfiguration } from "./base/FlagConfiguration";
import { FlagConfigurationService } from "./flagConfiguration.service";

@graphql.Resolver(() => FlagConfiguration)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class FlagConfigurationResolver extends FlagConfigurationResolverBase {
  constructor(
    protected readonly service: FlagConfigurationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
