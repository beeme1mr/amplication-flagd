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
  Environment,
  FlagConfiguration,
  Project,
} from "@prisma/client";

export class EnvironmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.EnvironmentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.EnvironmentFindManyArgs>
  ): Promise<number> {
    return this.prisma.environment.count(args);
  }

  async findMany<T extends Prisma.EnvironmentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.EnvironmentFindManyArgs>
  ): Promise<Environment[]> {
    return this.prisma.environment.findMany(args);
  }
  async findOne<T extends Prisma.EnvironmentFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.EnvironmentFindUniqueArgs>
  ): Promise<Environment | null> {
    return this.prisma.environment.findUnique(args);
  }
  async create<T extends Prisma.EnvironmentCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EnvironmentCreateArgs>
  ): Promise<Environment> {
    return this.prisma.environment.create<T>(args);
  }
  async update<T extends Prisma.EnvironmentUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EnvironmentUpdateArgs>
  ): Promise<Environment> {
    return this.prisma.environment.update<T>(args);
  }
  async delete<T extends Prisma.EnvironmentDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.EnvironmentDeleteArgs>
  ): Promise<Environment> {
    return this.prisma.environment.delete(args);
  }

  async findFlagConfiguration(
    parentId: string,
    args: Prisma.FlagConfigurationFindManyArgs
  ): Promise<FlagConfiguration[]> {
    return this.prisma.environment
      .findUnique({
        where: { id: parentId },
      })
      .flagConfiguration(args);
  }

  async getProject(parentId: string): Promise<Project | null> {
    return this.prisma.environment
      .findUnique({
        where: { id: parentId },
      })
      .project();
  }
}
