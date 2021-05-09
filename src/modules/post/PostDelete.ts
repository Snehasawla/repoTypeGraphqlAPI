import { Post } from "../../entity/Post";
import { Arg, Mutation, Resolver } from "type-graphql";


@Resolver()
export class PostDeleteResolver{
  @Mutation(() => Boolean)
  async deletePost(@Arg("Id") id: number){
      const post = await Post.findOne({where: { id }})
      if(!post) throw new Error("Post not found!");
       await post.remove()
       return true;
  }
}