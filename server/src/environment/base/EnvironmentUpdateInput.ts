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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { FlagConfigurationUpdateManyWithoutEnvironmentsInput } from "./FlagConfigurationUpdateManyWithoutEnvironmentsInput";
import { Type } from "class-transformer";
import { ProjectWhereUniqueInput } from "../../project/base/ProjectWhereUniqueInput";
@InputType()
class EnvironmentUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: () => FlagConfigurationUpdateManyWithoutEnvironmentsInput,
  })
  @ValidateNested()
  @Type(() => FlagConfigurationUpdateManyWithoutEnvironmentsInput)
  @IsOptional()
  @Field(() => FlagConfigurationUpdateManyWithoutEnvironmentsInput, {
    nullable: true,
  })
  flagConfigurations?: FlagConfigurationUpdateManyWithoutEnvironmentsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;

  @ApiProperty({
    required: false,
    type: () => ProjectWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProjectWhereUniqueInput)
  @IsOptional()
  @Field(() => ProjectWhereUniqueInput, {
    nullable: true,
  })
  project?: ProjectWhereUniqueInput;
}
export { EnvironmentUpdateInput };
