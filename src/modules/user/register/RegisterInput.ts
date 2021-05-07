import { MaxLength, Length, IsEmail } from "class-validator";
import { Field, InputType } from "type-graphql";
import { IsEmailAlreadyExist } from "./isEmailAlreadyExist";

@InputType()
export class RegisterInput {
  @Field()
  @MaxLength(30, {message: "Max length is 30"})
  firstName: string;

  @Field()
  @MaxLength(30, {message: "Max length is 30"})
  lastName: string;

  @Field()
  @IsEmail()
  @IsEmailAlreadyExist({message: "Email already exist."})
  email: string;

  @Field()
  @Length(1,255, {message: "Length between 1 to 255"})
  password: string;



  @Field({ nullable: true })
  @Length(30, 255)
  description?: string;
}