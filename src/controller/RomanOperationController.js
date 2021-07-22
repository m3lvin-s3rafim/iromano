import { romans } from "../RomanListHelper";

const convert = (req, res) => {
  const { romano } = req.params;

  if (occurrenceCharacter(romano) > 3) {
    return res.status(400).send(`O número ${romano} não é válido`);
  }

  let valueRoman = "";
  let valueInteger = [];

  for (let i = 0; i < romano.length; i++) {
    for (let roman in romans) {
      if (roman == romano.charAt(i)) {
        valueRoman += roman;
        valueInteger.push(romans[roman]);
      }
    }
  }

  if (valueInteger.length > 0) {
    const integer = countIntegerValue(valueInteger);

    return res.json({
      "ROMANO VÁLIDO": valueRoman,
      INTEIRO: integer,
      ENVIADO: romano,
    });
  }

  return res.status(400).json(`O valor [ ${romano} ] não é romano`);
};

const occurrenceCharacter = (input) => {
  let count = 0;
  let lastOccurrence = input.charAt(0);

  for (let i = 0; i < input.length; i++) {
    if (input.charAt(i) == lastOccurrence) {
      count++;
    } else {
      count = 0;
    }
    lastOccurrence = input.charAt(i);
  }
  return count;
};

const countIntegerValue = (integer) =>
  integer.reduce((total, value) => {
    return total + value;
  });

export { convert };
