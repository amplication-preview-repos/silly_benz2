/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { ForumWhereUniqueInput } from "../../forum/base/ForumWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class MessageUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  content?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  author?: string | null;

  @ApiProperty({
    required: false,
    type: () => ForumWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ForumWhereUniqueInput)
  @IsOptional()
  @Field(() => ForumWhereUniqueInput, {
    nullable: true,
  })
  forum?: ForumWhereUniqueInput | null;
}

export { MessageUpdateInput as MessageUpdateInput };
