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
import { FlagConfigurationService } from "../flagConfiguration.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { FlagConfigurationCreateInput } from "./FlagConfigurationCreateInput";
import { FlagConfigurationWhereInput } from "./FlagConfigurationWhereInput";
import { FlagConfigurationWhereUniqueInput } from "./FlagConfigurationWhereUniqueInput";
import { FlagConfigurationFindManyArgs } from "./FlagConfigurationFindManyArgs";
import { FlagConfigurationUpdateInput } from "./FlagConfigurationUpdateInput";
import { FlagConfiguration } from "./FlagConfiguration";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class FlagConfigurationControllerBase {
  constructor(
    protected readonly service: FlagConfigurationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "FlagConfiguration",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: FlagConfiguration })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: FlagConfigurationCreateInput
  ): Promise<FlagConfiguration> {
    return await this.service.create({
      data: {
        ...data,

        environments: {
          connect: data.environments,
        },

        flagDefinition: {
          connect: data.flagDefinition,
        },
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "FlagConfiguration",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [FlagConfiguration] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(FlagConfigurationFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<FlagConfiguration[]> {
    const args = plainToClass(FlagConfigurationFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "FlagConfiguration",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: FlagConfiguration })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: FlagConfigurationWhereUniqueInput
  ): Promise<FlagConfiguration | null> {
    const result = await this.service.findOne({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "FlagConfiguration",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: FlagConfiguration })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: FlagConfigurationWhereUniqueInput,
    @common.Body() data: FlagConfigurationUpdateInput
  ): Promise<FlagConfiguration | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          environments: {
            connect: data.environments,
          },

          flagDefinition: {
            connect: data.flagDefinition,
          },
        },
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
    resource: "FlagConfiguration",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: FlagConfiguration })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: FlagConfigurationWhereUniqueInput
  ): Promise<FlagConfiguration | null> {
    try {
      return await this.service.delete({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
