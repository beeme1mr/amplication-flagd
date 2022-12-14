/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsString,
  ValidateNested,
  IsEnum,
  IsJSON,
  IsOptional,
} from "class-validator";
import { Type } from "class-transformer";
import { Environment } from "../../environment/base/Environment";
import { FlagDefinition } from "../../flagDefinition/base/FlagDefinition";
import { EnumFlagConfigurationState } from "./EnumFlagConfigurationState";
import { GraphQLJSONObject } from "graphql-type-json";
import { JsonValue } from "type-fest";
@ObjectType()
class FlagConfiguration {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  defaultVariant!: string;

  @ApiProperty({
    required: true,
    type: () => Environment,
  })
  @ValidateNested()
  @Type(() => Environment)
  environment?: Environment;

  @ApiProperty({
    required: true,
    type: () => FlagDefinition,
  })
  @ValidateNested()
  @Type(() => FlagDefinition)
  flagDefinition?: FlagDefinition;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    enum: EnumFlagConfigurationState,
  })
  @IsEnum(EnumFlagConfigurationState)
  @Field(() => EnumFlagConfigurationState, {
    nullable: true,
  })
  state?: "ENABLED" | "DISABLED";

  @ApiProperty({
    required: false,
  })
  @IsJSON()
  @IsOptional()
  @Field(() => GraphQLJSONObject, {
    nullable: true,
  })
  targeting!: JsonValue;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { FlagConfiguration };
