import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { EnvironmentResolverBase } from "./base/environment.resolver.base";
import { Environment } from "./base/Environment";
import { EnvironmentService } from "./environment.service";

@graphql.Resolver(() => Environment)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class EnvironmentResolver extends EnvironmentResolverBase {
  constructor(
    protected readonly service: EnvironmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
