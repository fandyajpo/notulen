import { ping } from "../handler/ping";
import { Router } from "express";

export const pingRoute = Router({ strict: true });

// ASSIGN ANY PLUGIN
// pingRoute.use()

pingRoute.get("/ping", ping.ping);
