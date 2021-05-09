import {
    BaseEntity,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryColumn
  } from "typeorm";
  import { User } from "./User";
  import { Post } from "./Post";
  
  @Entity()
  export class UserPost extends BaseEntity {
    @PrimaryColumn()
    userId: number;
  
    @PrimaryColumn()
    postId: number;
  
    @ManyToOne(() => User, user => user.postconnection, { primary: true })
    @JoinColumn({ name: "userId" })
    user: Promise<User>;
  
    @ManyToOne(() => Post, post => post.userconnection, {
      primary: true
    })
    @JoinColumn({ name: "postId" })
    post: Promise<Post>;
  }