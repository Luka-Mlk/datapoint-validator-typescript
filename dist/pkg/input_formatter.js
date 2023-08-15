"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inputFormatter = void 0;
const inputFormatter = (inputs) => {
    const item_number = inputs.item_number.split("\r\n");
    const item_id = inputs.item_id.split("\r\n");
    const vero_id = inputs.vero_id.split("\r\n");
    const item_code = inputs.item_code.split("\r\n");
    const item_name = inputs.item_name.split("\r\n");
    const item_amount = inputs.item_amount.split("\r\n");
    const item_origin = inputs.item_origin.split("\r\n");
    const inputsArr = [];
    for (let i = 0; i < item_number.length; i++) {
        const tidyInputs = {
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
exports.inputFormatter = inputFormatter;
