"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileFormatter = void 0;
const fs_1 = __importDefault(require("fs"));
const fileFormatter = (directory) => {
    const reg = /[jJ]\d{7}/gm; // J[or]j followed by 7 numbers;
    const files = fs_1.default.readdirSync(directory);
    const tidyFiles = {};
    const filteredList = [];
    files.forEach((file) => {
        const filter1 = String(file.split(" "));
        const filter2 = String(filter1.split("_"));
        const filter3 = String(filter2.split("/n"));
        const filter4 = filter3.replace(/,+/gm, " ");
        const filter5 = filter4.toUpperCase();
        const final = filter5;
        let matches = final.matchAll(reg);
        filteredList.push(...matches);
    });
    for (const match of filteredList) {
        tidyFiles[match[0]] = match[0];
    }
    return tidyFiles;
};
exports.fileFormatter = fileFormatter;
