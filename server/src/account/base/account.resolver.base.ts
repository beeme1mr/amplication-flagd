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
import { CreateAccountArgs } from "./CreateAccountArgs";
import { UpdateAccountArgs } from "./UpdateAccountArgs";
import { DeleteAccountArgs } from "./DeleteAccountArgs";
import { AccountFindManyArgs } from "./AccountFindManyArgs";
import { AccountFindUniqueArgs } from "./AccountFindUniqueArgs";
import { Account } from "./Account";
import { ProjectFindManyArgs } from "../../project/base/ProjectFindManyArgs";
import { Project } from "../../project/base/Project";
import { AccountService } from "../account.service";

@graphql.Resolver(() => Account)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class AccountResolverBase {
  constructor(
    protected readonly service: AccountService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "read",
    possession: "any",
  })
  async _accountsMeta(
    @graphql.Args() args: AccountFindManyArgs
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
  @graphql.Query(() => [Account])
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "read",
    possession: "any",
  })
  async accounts(
    @graphql.Args() args: AccountFindManyArgs
  ): Promise<Account[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Account, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "read",
    possession: "own",
  })
  async account(
    @graphql.Args() args: AccountFindUniqueArgs
  ): Promise<Account | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Account)
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "create",
    possession: "any",
  })
  async createAccount(
    @graphql.Args() args: CreateAccountArgs
  ): Promise<Account> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Account)
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "update",
    possession: "any",
  })
  async updateAccount(
    @graphql.Args() args: UpdateAccountArgs
  ): Promise<Account | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => Account)
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "delete",
    possession: "any",
  })
  async deleteAccount(
    @graphql.Args() args: DeleteAccountArgs
  ): Promise<Account | null> {
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
  @graphql.ResolveField(() => [Project])
  @nestAccessControl.UseRoles({
    resource: "Project",
    action: "read",
    possession: "any",
  })
  async projects(
    @graphql.Parent() parent: Account,
    @graphql.Args() args: ProjectFindManyArgs
  ): Promise<Project[]> {
    const results = await this.service.findProjects(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
