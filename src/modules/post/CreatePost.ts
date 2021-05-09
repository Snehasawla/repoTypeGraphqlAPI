import { Post } from "../../entity/Post";
import { UserPost } from "../../entity/UserPost";
import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";



@Resolver()
export class CreatePostResolver {
    @Mutation(() => Post)
    async createPost(
        @Arg("title") title: string,
        @Arg("body") body: string
    ){
        return Post.create({title, body}).save();
    }

    @Mutation(() => Boolean)
    async addUserPost(
        @Arg("userid", () => Int) userId: number,
        @Arg("postId", () => Int) postId: number)
        {
            await UserPost.create({ userId, postId}).save();
            return true;
        }
         

        @Mutation(() => Boolean)
        async deletePost(@Arg("postId", () => Int) postId: number){
               await UserPost.delete({ postId});
               await Post.delete({id: postId });
               return true;
        }


    @Query(() => [Post])
    async posts(){
        return Post.find();
    }
        
    

    
}