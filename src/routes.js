import { Router } from "express";
import { convert } from "./controller/RomanOperationController";
import { romansList } from "./controller/RomansController";

const router = Router();
const apiURL = process.env.APP_URL || "127.0.0.1:3000";

router.get("/", (request, response) => {
  return response.json({
    title: "Bem vindo ao Conversor de números",
    regras: {
      I: "Algarismos de menor ou igual valor à direita são somados ao algarismo de maior valor;",
      II: "Algarismos de menor valor à esquerda são subtraídos do algarismo de maior valor.",
      III: "um algarismo não pode ser repetido lado a lado por mais de três vezes. ",
      fonte: "https://pt.wikipedia.org/wiki/Numeração_romana",
    },
    links: [
      { rel: "Lista de números romanos", href: `${apiURL}/list` },
      { rel: "Converte número romano", href: `${apiURL}/convert/{:romano}` },
    ],
  });
});

router.get("/convert/:romano", convert);
router.get("/list", romansList);

export { router };
