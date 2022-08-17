/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import {
  Prisma,
  FlagDefinition,
  FlagConfiguration,
  Project,
} from "@prisma/client";

export class FlagDefinitionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.FlagDefinitionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FlagDefinitionFindManyArgs>
  ): Promise<number> {
    return this.prisma.flagDefinition.count(args);
  }

  async findMany<T extends Prisma.FlagDefinitionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FlagDefinitionFindManyArgs>
  ): Promise<FlagDefinition[]> {
    return this.prisma.flagDefinition.findMany(args);
  }
  async findOne<T extends Prisma.FlagDefinitionFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.FlagDefinitionFindUniqueArgs>
  ): Promise<FlagDefinition | null> {
    return this.prisma.flagDefinition.findUnique(args);
  }
  async create<T extends Prisma.FlagDefinitionCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FlagDefinitionCreateArgs>
  ): Promise<FlagDefinition> {
    return this.prisma.flagDefinition.create<T>(args);
  }
  async update<T extends Prisma.FlagDefinitionUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FlagDefinitionUpdateArgs>
  ): Promise<FlagDefinition> {
    return this.prisma.flagDefinition.update<T>(args);
  }
  async delete<T extends Prisma.FlagDefinitionDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.FlagDefinitionDeleteArgs>
  ): Promise<FlagDefinition> {
    return this.prisma.flagDefinition.delete(args);
  }

  async findFlagConfigurations(
    parentId: string,
    args: Prisma.FlagConfigurationFindManyArgs
  ): Promise<FlagConfiguration[]> {
    return this.prisma.flagDefinition
      .findUnique({
        where: { id: parentId },
      })
      .flagConfigurations(args);
  }

  async getProjects(parentId: string): Promise<Project | null> {
    return this.prisma.flagDefinition
      .findUnique({
        where: { id: parentId },
      })
      .projects();
  }
}
