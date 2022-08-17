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
import { AccountWhereUniqueInput } from "../../account/base/AccountWhereUniqueInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { EnvironmentUpdateManyWithoutProjectsInput } from "./EnvironmentUpdateManyWithoutProjectsInput";
import { FlagDefinitionUpdateManyWithoutProjectsInput } from "./FlagDefinitionUpdateManyWithoutProjectsInput";
@InputType()
class ProjectUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AccountWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AccountWhereUniqueInput)
  @IsOptional()
  @Field(() => AccountWhereUniqueInput, {
    nullable: true,
  })
  account?: AccountWhereUniqueInput;

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
    type: () => EnvironmentUpdateManyWithoutProjectsInput,
  })
  @ValidateNested()
  @Type(() => EnvironmentUpdateManyWithoutProjectsInput)
  @IsOptional()
  @Field(() => EnvironmentUpdateManyWithoutProjectsInput, {
    nullable: true,
  })
  environments?: EnvironmentUpdateManyWithoutProjectsInput;

  @ApiProperty({
    required: false,
    type: () => FlagDefinitionUpdateManyWithoutProjectsInput,
  })
  @ValidateNested()
  @Type(() => FlagDefinitionUpdateManyWithoutProjectsInput)
  @IsOptional()
  @Field(() => FlagDefinitionUpdateManyWithoutProjectsInput, {
    nullable: true,
  })
  flags?: FlagDefinitionUpdateManyWithoutProjectsInput;

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
}
export { ProjectUpdateInput };
