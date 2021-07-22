import { Router } from "express";

const router = Router();

router.get("/", (request, response) => {
  return response.send("Bem vindo ao Conversor de números");
});

export { router };
