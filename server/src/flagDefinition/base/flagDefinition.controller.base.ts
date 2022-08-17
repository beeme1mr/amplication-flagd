/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { FlagDefinitionService } from "../flagDefinition.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { FlagDefinitionCreateInput } from "./FlagDefinitionCreateInput";
import { FlagDefinitionWhereInput } from "./FlagDefinitionWhereInput";
import { FlagDefinitionWhereUniqueInput } from "./FlagDefinitionWhereUniqueInput";
import { FlagDefinitionFindManyArgs } from "./FlagDefinitionFindManyArgs";
import { FlagDefinitionUpdateInput } from "./FlagDefinitionUpdateInput";
import { FlagDefinition } from "./FlagDefinition";
import { FlagConfigurationFindManyArgs } from "../../flagConfiguration/base/FlagConfigurationFindManyArgs";
import { FlagConfiguration } from "../../flagConfiguration/base/FlagConfiguration";
import { FlagConfigurationWhereUniqueInput } from "../../flagConfiguration/base/FlagConfigurationWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class FlagDefinitionControllerBase {
  constructor(
    protected readonly service: FlagDefinitionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "FlagDefinition",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: FlagDefinition })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: FlagDefinitionCreateInput
  ): Promise<FlagDefinition> {
    return await this.service.create({
      data: {
        ...data,

        projects: {
          connect: data.projects,
        },
      },
      select: {
        createdAt: true,
        id: true,
        key: true,

        projects: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        variants: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "FlagDefinition",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [FlagDefinition] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(FlagDefinitionFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<FlagDefinition[]> {
    const args = plainToClass(FlagDefinitionFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        id: true,
        key: true,

        projects: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        variants: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "FlagDefinition",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: FlagDefinition })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: FlagDefinitionWhereUniqueInput
  ): Promise<FlagDefinition | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        id: true,
        key: true,

        projects: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        variants: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "FlagDefinition",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: FlagDefinition })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: FlagDefinitionWhereUniqueInput,
    @common.Body() data: FlagDefinitionUpdateInput
  ): Promise<FlagDefinition | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          projects: {
            connect: data.projects,
          },
        },
        select: {
          createdAt: true,
          id: true,
          key: true,

          projects: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
          variants: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "FlagDefinition",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: FlagDefinition })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: FlagDefinitionWhereUniqueInput
  ): Promise<FlagDefinition | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          id: true,
          key: true,

          projects: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
          variants: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "FlagConfiguration",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/flagConfigurations")
  @ApiNestedQuery(FlagConfigurationFindManyArgs)
  async findManyFlagConfigurations(
    @common.Req() request: Request,
    @common.Param() params: FlagDefinitionWhereUniqueInput
  ): Promise<FlagConfiguration[]> {
    const query = plainToClass(FlagConfigurationFindManyArgs, request.query);
    const results = await this.service.findFlagConfigurations(params.id, {
      ...query,
      select: {
        createdAt: true,
        defaultVariant: true,

        environments: {
          select: {
            id: true,
          },
        },

        flagDefinition: {
          select: {
            id: true,
          },
        },

        id: true,
        state: true,
        targeting: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "FlagDefinition",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/flagConfigurations")
  async connectFlagConfigurations(
    @common.Param() params: FlagDefinitionWhereUniqueInput,
    @common.Body() body: FlagConfigurationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      flagConfigurations: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "FlagDefinition",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/flagConfigurations")
  async updateFlagConfigurations(
    @common.Param() params: FlagDefinitionWhereUniqueInput,
    @common.Body() body: FlagConfigurationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      flagConfigurations: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "FlagDefinition",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/flagConfigurations")
  async disconnectFlagConfigurations(
    @common.Param() params: FlagDefinitionWhereUniqueInput,
    @common.Body() body: FlagConfigurationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      flagConfigurations: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
