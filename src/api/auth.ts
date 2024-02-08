import { auth } from "../handler/auth";
import { Router } from "express";

export const authRoute = Router({ strict: true });

// ASSIGN ANY PLUGIN
// authRoute.use()

authRoute.get("/auth", auth.signIn);
