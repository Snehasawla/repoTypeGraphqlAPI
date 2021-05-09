import { buildSchema } from "type-graphql";
import { LoginResolver } from "../modules/user/Login";
//import { LogoutResolver } from "../modules/user/Logout";
import { MeResolver } from "../modules/user/Me";
import { RegisterResolver } from "../modules/user/Register";

export const createSchema = () =>
  buildSchema({
    resolvers: [
      LoginResolver,
      MeResolver,
      RegisterResolver
    ],
    authChecker: ({ context: { req } }) => {
      return !!req.session.userId;
    }
  });
