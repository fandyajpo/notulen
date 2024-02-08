import jwt, { JwtPayload } from "jsonwebtoken";

//it will have interfaces like user Interface
const createAccessToken = (payload: any) => {
  try {
    delete payload?.password;
    const accessToken = jwt.sign(payload, String(process.env.ACCESS_TOKEN), {
      expiresIn: "10s",
    });
    return accessToken;
  } catch (error) {
    throw error;
  }
};

const createRefreshToken = (payload: any) => {
  try {
    delete payload?.password;
    const refreshToken = jwt.sign(payload, String(process.env.REFRESH_TOKEN), {
      expiresIn: "7d",
    });
    return refreshToken;
  } catch (error) {
    throw error;
  }
};

export const createAuth = async (p: any) => {
  try {
    const gen = await Promise.all([
      createAccessToken(p),
      createRefreshToken(p),
    ]);

    return {
      accessToken: String(gen[0]),
      refreshToken: String(gen[1]),
    };
  } catch (error) {
    throw error;
  }
};

export const verifyAccess = (token: string) => {
  try {
    var res = jwt.verify(String(token), String(process.env.ACCESS_TOKEN));
    return res as JwtPayload;
  } catch (error) {
    throw error;
  }
};

export const verifyRefresh = (token: string) => {
  try {
    var res = jwt.verify(String(token), String(process.env.REFRESH_TOKEN));
    return res as JwtPayload;
  } catch (error) {
    throw error;
  }
};
