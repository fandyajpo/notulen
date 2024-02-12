import { Request, Response } from "express";

interface IAuth {
  signIn(req: Request, res: Response): Promise<Express.Response>;
  signOut?(req: Request, res: Response): Promise<Express.Response>;
  resetPassword?(req: Request, res: Response): Promise<Express.Response>;
  register?(req: Request, res: Response): Promise<Express.Response>;
}

class AuthHandler implements IAuth {
  async signIn(req: Request, res: Response) {
    return res.json({ d: "test" });
  }
  async signOut(req: Request, res: Response) {
    return res.json({ d: "test" });
  }
}

export const auth: IAuth = new AuthHandler();
