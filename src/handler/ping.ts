import { Request, Response } from "express";

interface IPing {
  ping(req: Request, res: Response): Express.Response;
}

class PingHandler implements IPing {
  ping(req: Request, res: Response) {
    return res.json({ d: "test" });
  }
}

export const ping: IPing = new PingHandler();
