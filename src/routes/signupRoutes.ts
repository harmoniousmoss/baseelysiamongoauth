// src/routes/signupRoutes.ts
import { Elysia } from "elysia";
import { signupHandler } from "../handlers/signupHandler";

export const setupRoutes = (app: Elysia) => {
  app.post("/signup", signupHandler);
};
