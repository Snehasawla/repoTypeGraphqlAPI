import { Field, ID, ObjectType, Root } from "type-graphql";
import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany} from "typeorm";
import { UserPost } from "./UserPost"

@ObjectType()
@Entity()
export class User extends BaseEntity {
     
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: string;

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

    @OneToMany(() => UserPost, ab => ab.user )
    postconnection: Promise<UserPost[]>;

}