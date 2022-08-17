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
import { CreateEnvironmentArgs } from "./CreateEnvironmentArgs";
import { UpdateEnvironmentArgs } from "./UpdateEnvironmentArgs";
import { DeleteEnvironmentArgs } from "./DeleteEnvironmentArgs";
import { EnvironmentFindManyArgs } from "./EnvironmentFindManyArgs";
import { EnvironmentFindUniqueArgs } from "./EnvironmentFindUniqueArgs";
import { Environment } from "./Environment";
import { FlagConfigurationFindManyArgs } from "../../flagConfiguration/base/FlagConfigurationFindManyArgs";
import { FlagConfiguration } from "../../flagConfiguration/base/FlagConfiguration";
import { Project } from "../../project/base/Project";
import { EnvironmentService } from "../environment.service";

@graphql.Resolver(() => Environment)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class EnvironmentResolverBase {
  constructor(
    protected readonly service: EnvironmentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Environment",
    action: "read",
    possession: "any",
  })
  async _environmentsMeta(
    @graphql.Args() args: EnvironmentFindManyArgs
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
  @graphql.Query(() => [Environment])
  @nestAccessControl.UseRoles({
    resource: "Environment",
    action: "read",
    possession: "any",
  })
  async environments(
    @graphql.Args() args: EnvironmentFindManyArgs
  ): Promise<Environment[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Environment, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Environment",
    action: "read",
    possession: "own",
  })
  async environment(
    @graphql.Args() args: EnvironmentFindUniqueArgs
  ): Promise<Environment | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Environment)
  @nestAccessControl.UseRoles({
    resource: "Environment",
    action: "create",
    possession: "any",
  })
  async createEnvironment(
    @graphql.Args() args: CreateEnvironmentArgs
  ): Promise<Environment> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        project: {
          connect: args.data.project,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Environment)
  @nestAccessControl.UseRoles({
    resource: "Environment",
    action: "update",
    possession: "any",
  })
  async updateEnvironment(
    @graphql.Args() args: UpdateEnvironmentArgs
  ): Promise<Environment | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          project: {
            connect: args.data.project,
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

  @graphql.Mutation(() => Environment)
  @nestAccessControl.UseRoles({
    resource: "Environment",
    action: "delete",
    possession: "any",
  })
  async deleteEnvironment(
    @graphql.Args() args: DeleteEnvironmentArgs
  ): Promise<Environment | null> {
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
  @graphql.ResolveField(() => [FlagConfiguration])
  @nestAccessControl.UseRoles({
    resource: "FlagConfiguration",
    action: "read",
    possession: "any",
  })
  async flagConfigurations(
    @graphql.Parent() parent: Environment,
    @graphql.Args() args: FlagConfigurationFindManyArgs
  ): Promise<FlagConfiguration[]> {
    const results = await this.service.findFlagConfigurations(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Project, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Project",
    action: "read",
    possession: "any",
  })
  async project(
    @graphql.Parent() parent: Environment
  ): Promise<Project | null> {
    const result = await this.service.getProject(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
