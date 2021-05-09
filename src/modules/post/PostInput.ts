import { MaxLength } from "class-validator";
import { Field, InputType } from "type-graphql";


@InputType()
export class PostInput {
  @Field()
  @MaxLength(30, {message: "Max length is 30"})
  title: string;

  @Field()
  @MaxLength(255, {message: "Max length is 255"})
  body: string;

  
}