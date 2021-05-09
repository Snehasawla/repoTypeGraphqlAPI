import {
    Resolver,
    Mutation,
    Arg,
    ClassType,
    InputType,
    Field,
   // UseMiddleware
  } from "type-graphql";
  import { PostInput } from "./postInput";
  import { Post } from "../../entity/Post";
  //import { Middleware } from "type-graphql/interfaces/Middleware";
  
  function createResolver<T extends ClassType, X extends ClassType>(
    suffix: string,
    returnType: T,
    inputType: X,
    entity: any,
    //middleware?: Middleware<any>[]
  ) {
    @Resolver()
    class BaseResolver {
      @Mutation(() => returnType, { name: `create${suffix}` })
     // @UseMiddleware(...(middleware || []))
      async create(@Arg("data", () => inputType) data: any) {
        return entity.create(data).save();
      }
    }
  
    return BaseResolver;
  }
  
  @InputType()
  class UpdatePostInput {
    @Field()
    title: string;

    @Field()
    body: string;
  } 
  
  export const CreatePostResolver = createResolver(
    "Post",
    Post,
    PostInput,
    Post
  );


  export const UpdatePostResolver = createResolver(
    "UpdatePost",
    Post,
    UpdatePostInput,
    Post
   );