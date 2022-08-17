/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateFlagConfigurationArgs } from "./CreateFlagConfigurationArgs";
import { UpdateFlagConfigurationArgs } from "./UpdateFlagConfigurationArgs";
import { DeleteFlagConfigurationArgs } from "./DeleteFlagConfigurationArgs";
import { FlagConfigurationFindManyArgs } from "./FlagConfigurationFindManyArgs";
import { FlagConfigurationFindUniqueArgs } from "./FlagConfigurationFindUniqueArgs";
import { FlagConfiguration } from "./FlagConfiguration";
import { Environment } from "../../environment/base/Environment";
import { FlagDefinition } from "../../flagDefinition/base/FlagDefinition";
import { FlagConfigurationService } from "../flagConfiguration.service";

@graphql.Resolver(() => FlagConfiguration)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class FlagConfigurationResolverBase {
  constructor(
    protected readonly service: FlagConfigurationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "FlagConfiguration",
    action: "read",
    possession: "any",
  })
  async _flagConfigurationsMeta(
    @graphql.Args() args: FlagConfigurationFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [FlagConfiguration])
  @nestAccessControl.UseRoles({
    resource: "FlagConfiguration",
    action: "read",
    possession: "any",
  })
  async flagConfigurations(
    @graphql.Args() args: FlagConfigurationFindManyArgs
  ): Promise<FlagConfiguration[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => FlagConfiguration, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "FlagConfiguration",
    action: "read",
    possession: "own",
  })
  async flagConfiguration(
    @graphql.Args() args: FlagConfigurationFindUniqueArgs
  ): Promise<FlagConfiguration | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => FlagConfiguration)
  @nestAccessControl.UseRoles({
    resource: "FlagConfiguration",
    action: "create",
    possession: "any",
  })
  async createFlagConfiguration(
    @graphql.Args() args: CreateFlagConfigurationArgs
  ): Promise<FlagConfiguration> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        environments: {
          connect: args.data.environments,
        },

        flagDefinition: {
          connect: args.data.flagDefinition,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => FlagConfiguration)
  @nestAccessControl.UseRoles({
    resource: "FlagConfiguration",
    action: "update",
    possession: "any",
  })
  async updateFlagConfiguration(
    @graphql.Args() args: UpdateFlagConfigurationArgs
  ): Promise<FlagConfiguration | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          environments: {
            connect: args.data.environments,
          },

          flagDefinition: {
            connect: args.data.flagDefinition,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => FlagConfiguration)
  @nestAccessControl.UseRoles({
    resource: "FlagConfiguration",
    action: "delete",
    possession: "any",
  })
  async deleteFlagConfiguration(
    @graphql.Args() args: DeleteFlagConfigurationArgs
  ): Promise<FlagConfiguration | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Environment, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Environment",
    action: "read",
    possession: "any",
  })
  async environments(
    @graphql.Parent() parent: FlagConfiguration
  ): Promise<Environment | null> {
    const result = await this.service.getEnvironments(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => FlagDefinition, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "FlagDefinition",
    action: "read",
    possession: "any",
  })
  async flagDefinition(
    @graphql.Parent() parent: FlagConfiguration
  ): Promise<FlagDefinition | null> {
    const result = await this.service.getFlagDefinition(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
