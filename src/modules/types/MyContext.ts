export interface MyContext {
    req: Request & {
      session: {
        userId?: any;
      };
    };
    res: Response & {
      session: {
        userId?: any;
      };
    };
  }