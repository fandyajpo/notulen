import Express, { Router } from "express";
import bodyParser from "body-parser";
import { corsOption, listeningTo } from "./func";
import { connectDatabase } from "./mongo";

// ROUTES
import { pingRoute } from "../api/ping";
import { authRoute } from "../api/auth";

const app = Express();
export const router = Router();

app.use(bodyParser.json());
app.use(corsOption());

// ASSIGN ROUTES
app.use(authRoute);
app.use(pingRoute);

connectDatabase();
app.listen(process.env.PORT, listeningTo);
