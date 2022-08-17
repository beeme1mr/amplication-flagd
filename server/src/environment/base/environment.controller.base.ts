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
import { EnvironmentService } from "../environment.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { EnvironmentCreateInput } from "./EnvironmentCreateInput";
import { EnvironmentWhereInput } from "./EnvironmentWhereInput";
import { EnvironmentWhereUniqueInput } from "./EnvironmentWhereUniqueInput";
import { EnvironmentFindManyArgs } from "./EnvironmentFindManyArgs";
import { EnvironmentUpdateInput } from "./EnvironmentUpdateInput";
import { Environment } from "./Environment";
import { FlagConfigurationFindManyArgs } from "../../flagConfiguration/base/FlagConfigurationFindManyArgs";
import { FlagConfiguration } from "../../flagConfiguration/base/FlagConfiguration";
import { FlagConfigurationWhereUniqueInput } from "../../flagConfiguration/base/FlagConfigurationWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class EnvironmentControllerBase {
  constructor(
    protected readonly service: EnvironmentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Environment",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Environment })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: EnvironmentCreateInput
  ): Promise<Environment> {
    return await this.service.create({
      data: {
        ...data,

        project: {
          connect: data.project,
        },
      },
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,

        project: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Environment",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [Environment] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(EnvironmentFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Environment[]> {
    const args = plainToClass(EnvironmentFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,

        project: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Environment",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Environment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: EnvironmentWhereUniqueInput
  ): Promise<Environment | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,

        project: {
          select: {
            id: true,
          },
        },

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
    resource: "Environment",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Environment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: EnvironmentWhereUniqueInput,
    @common.Body() data: EnvironmentUpdateInput
  ): Promise<Environment | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          project: {
            connect: data.project,
          },
        },
        select: {
          createdAt: true,
          description: true,
          id: true,
          name: true,

          project: {
            select: {
              id: true,
            },
          },

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
    resource: "Environment",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Environment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: EnvironmentWhereUniqueInput
  ): Promise<Environment | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          name: true,

          project: {
            select: {
              id: true,
            },
          },

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
    @common.Param() params: EnvironmentWhereUniqueInput
  ): Promise<FlagConfiguration[]> {
    const query = plainToClass(FlagConfigurationFindManyArgs, request.query);
    const results = await this.service.findFlagConfigurations(params.id, {
      ...query,
      select: {
        createdAt: true,
        defaultVariant: true,

        environment: {
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
    resource: "Environment",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/flagConfigurations")
  async connectFlagConfigurations(
    @common.Param() params: EnvironmentWhereUniqueInput,
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
    resource: "Environment",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/flagConfigurations")
  async updateFlagConfigurations(
    @common.Param() params: EnvironmentWhereUniqueInput,
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
    resource: "Environment",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/flagConfigurations")
  async disconnectFlagConfigurations(
    @common.Param() params: EnvironmentWhereUniqueInput,
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
