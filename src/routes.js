import { Router } from "express";
import { convert } from "./controller/RomanOperation";
import { romansList } from "./controller/Romans";
const router = Router();

router.get("/", (request, response) => {
  return response.json("Bem vindo ao Conversor de números");
});

router.get("/convert/:romano", convert);
router.get("/list", romansList);

export { router };
