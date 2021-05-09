import { Field, ID, ObjectType, Root } from "type-graphql";
import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany} from "typeorm";
import { Post } from "./Post";

@ObjectType()
@Entity()
export class User extends BaseEntity {
     
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    firstName: string;
 
    @Field()
    @Column()
    lastName: string;

    @Field()
    @Column("text", {unique: true})
    email: string;

    @Field()
    name(@Root() parent: User): string{
        return `${parent.firstName} ${parent.lastName}`
    }

    @Column()
    password: string;

    @Column("bool", {default: false})
    confirem: boolean;

    @OneToMany(() => Post, post => post.user)
    posts: Post[];

}