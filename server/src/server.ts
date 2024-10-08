import cors from "cors";
import express from "express";
import { routes } from "./routers";

export const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
