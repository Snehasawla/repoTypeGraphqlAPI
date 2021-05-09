import { Field, ObjectType } from "type-graphql";
import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn} from "typeorm";
import { UserPost } from "./UserPost";

@ObjectType()
@Entity()
export class Post extends BaseEntity{

    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    title: string;

    @Field()
    @Column()
    body: string;

    @ManyToOne(() => UserPost, ab => ab.post)
    @JoinColumn({ name: "id"})
    userconnection: Promise<UserPost[]>;

}