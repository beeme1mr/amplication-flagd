import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { FlagDefinitionResolverBase } from "./base/flagDefinition.resolver.base";
import { FlagDefinition } from "./base/FlagDefinition";
import { FlagDefinitionService } from "./flagDefinition.service";

@graphql.Resolver(() => FlagDefinition)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class FlagDefinitionResolver extends FlagDefinitionResolverBase {
  constructor(
    protected readonly service: FlagDefinitionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
