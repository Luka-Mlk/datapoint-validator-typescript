"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const input_formatter_1 = require("../pkg/input_formatter");
const file_formatter_1 = require("../pkg/file_formatter");
const homepage = (req, res) => {
    res.render("home");
};
const filter = async (req, res) => {
    if (!req.body.directory)
        res.status(502).json({
            status: "failed",
            error: "Directory is required",
        });
    const directory = req.body.directory;
    const userInputs = {
        item_number: req.body.item_number,
        item_id: req.body.item_id,
        vero_id: req.body.vero_id,
        item_code: req.body.item_code,
        item_name: req.body.item_name,
        item_amount: req.body.item_amount,
        item_origin: req.body.item_origin,
    };
    const tidyItemsArr = (0, input_formatter_1.inputFormatter)(userInputs);
    const files = (0, file_formatter_1.fileFormatter)(directory);
    const availableArr = [];
    const unavailableArr = [];
    tidyItemsArr.forEach((item) => {
        if (files[item.vero_id]) {
            availableArr.push(item);
        }
        else {
            unavailableArr.push(item);
        }
    });
    res.render("home", { available: availableArr, unavailable: unavailableArr });
};
exports.default = {
    homepage,
    filter,
};
