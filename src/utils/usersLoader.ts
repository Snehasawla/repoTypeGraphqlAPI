//import DataLoader from "dataloader";
/*import { In } from "typeorm";
import { User } from "../entity/User";
import { UserPost } from "../entity/UserPost";

const batchUsers = async (postIds: number[]) => {
  const authorBooks = await UserPost.find({
    join: {
      alias: "userPost",
      innerJoinAndSelect: {
        user: "userPost.user"
      }
    },
    where: {
      postId: In(postIds)
    }
  });

  const postIdToUsers: { [key: number]: User[] } = {};

  /*
  {
    authorId: 1,
    bookId: 1,
    __author__: { id: 1, name: 'author1' }
  }
  
  authorBooks.forEach(ab => {
    if (ab.postId in postIdToUsers) {
      postIdToUsers[ab.postId].push((ab as any).__user__);
    } else {
      postIdToUsers[ab.postId] = [(ab as any).__user__];
    }
  });

  return postIds.map(postId => postIdToUsers[postId]);
};

//export const createAuthorsLoader = () => new DataLoader(async (keys: readonly string[]) => batchUsers())*/