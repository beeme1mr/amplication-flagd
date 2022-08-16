import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { FlagConfigurationServiceBase } from "./base/flagConfiguration.service.base";

@Injectable()
export class FlagConfigurationService extends FlagConfigurationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
