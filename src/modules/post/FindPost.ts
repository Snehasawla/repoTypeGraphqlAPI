import { Post } from "../../entity/Post";
import { Arg, Query, Resolver } from "type-graphql";


@Resolver()
export class FindPostResolver{
    @Query(() => [Post])
    post(){
        return Post.find()
    }

    @Query(() => Post)
    onePost(@Arg("Id") id: string){
       return Post.findOne({where: {id}});
    }
}