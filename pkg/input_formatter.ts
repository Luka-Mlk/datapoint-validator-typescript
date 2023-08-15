import { userInputs } from "./interfaces";

export const inputFormatter = (inputs: userInputs): userInputs[] => {
  const item_number: string[] = inputs.item_number.split("\r\n");
  const item_id: string[] = inputs.item_id.split("\r\n");
  const vero_id: string[] = inputs.vero_id.split("\r\n");
  const item_code: string[] = inputs.item_code.split("\r\n");
  const item_name: string[] = inputs.item_name.split("\r\n");
  const item_amount: string[] = inputs.item_amount.split("\r\n");
  const item_origin: string[] = inputs.item_origin.split("\r\n");
  const inputsArr: userInputs[] = [];
  for (let i = 0; i < item_number.length; i++) {
    const tidyInputs: userInputs = {
      item_number: item_number[i],
      item_id: item_id[i],
      vero_id: vero_id[i],
      item_code: item_code[i],
      item_name: item_name[i],
      item_amount: item_amount[i],
      item_origin: item_origin[i],
    };
    inputsArr.push(tidyInputs);
  }
  return inputsArr;
};
