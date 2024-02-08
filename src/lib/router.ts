import Express, { Router } from "express";
import bodyParser from "body-parser";
import { corsOption, listeningTo } from "./func";
import { connectDatabase } from "./mongo";
import compression from "compression";

// ROUTES
import { pingRoute } from "../api/ping";
import { authRoute } from "../api/auth";

const app = Express();
const R = Router();

app.use(compression());
app.use(bodyParser.json());
app.use(corsOption());

// ASSIGN ROUTES
app.use(authRoute);
app.use(pingRoute);

app.listen(process.env.PORT, listeningTo);

connectDatabase();
export default R;
