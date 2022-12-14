/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  ValidateNested,
  IsEnum,
  IsJSON,
} from "class-validator";
import { EnvironmentWhereUniqueInput } from "../../environment/base/EnvironmentWhereUniqueInput";
import { Type } from "class-transformer";
import { FlagDefinitionWhereUniqueInput } from "../../flagDefinition/base/FlagDefinitionWhereUniqueInput";
import { EnumFlagConfigurationState } from "./EnumFlagConfigurationState";
import { GraphQLJSONObject } from "graphql-type-json";
import { InputJsonValue } from "../../types";
@InputType()
class FlagConfigurationUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  defaultVariant?: string;

  @ApiProperty({
    required: false,
    type: () => EnvironmentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EnvironmentWhereUniqueInput)
  @IsOptional()
  @Field(() => EnvironmentWhereUniqueInput, {
    nullable: true,
  })
  environment?: EnvironmentWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => FlagDefinitionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FlagDefinitionWhereUniqueInput)
  @IsOptional()
  @Field(() => FlagDefinitionWhereUniqueInput, {
    nullable: true,
  })
  flagDefinition?: FlagDefinitionWhereUniqueInput;

  @ApiProperty({
    required: false,
    enum: EnumFlagConfigurationState,
  })
  @IsEnum(EnumFlagConfigurationState)
  @IsOptional()
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
  targeting?: InputJsonValue;
}
export { FlagConfigurationUpdateInput };
