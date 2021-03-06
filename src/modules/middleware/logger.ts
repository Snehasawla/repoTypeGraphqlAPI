import { MiddlewareFn } from "type-graphql";
import { MyContext } from "../types/MyContext";


export const logger: MiddlewareFn<MyContext> = async ({ args }, next) => {
    console.log("arg",args);
    return next();
  };