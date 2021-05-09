//import { response } from "express";
import { Ctx, Mutation, Resolver } from "type-graphql";
//import { MyContext } from "../types/MyContext";


@Resolver()
export class LogoutResolver{
    @Mutation(() => Boolean)
    async logout(
        @Ctx() ctx: any): Promise<Boolean>{
       return new Promise((response, rejects) =>
       ctx.req.session.destroy((err: any) => { 
           if(err){
               console.log(err);
               rejects(false)
            }
            response(true);
        })
       );
    }
}