import { romans } from "../RomanListHelper";

const romansList = (req, res) => {
  return res.json(romans);
};

export { romansList };
