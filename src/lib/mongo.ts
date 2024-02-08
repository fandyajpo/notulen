import { connect, Error } from "mongoose";
import { logger } from "./func";

export const connectDatabase = async () => {
  try {
    // const con = connect(
    //   `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_PATH}/${process.env.MONGO_DB}`,
    //   { maxPoolSize: 10 }
    // );
    logger("CONNECT TO DATABASE");
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }

    throw error;
  }
};
