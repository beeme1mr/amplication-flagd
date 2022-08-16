import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { FlagDefinitionServiceBase } from "./base/flagDefinition.service.base";

@Injectable()
export class FlagDefinitionService extends FlagDefinitionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
