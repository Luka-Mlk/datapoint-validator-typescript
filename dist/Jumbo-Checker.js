"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const handlerMain_1 = __importDefault(require("./handlers/handlerMain"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({
    limit: "50mb",
    extended: true,
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
// app.use(express.static(path.join(__dirname, "views")));
app.get("/", handlerMain_1.default.homepage);
app.post("/submitted-data", handlerMain_1.default.filter);
try {
    app.listen("3030", () => {
        console.log("[server]: App started on http://localhost:3030");
    });
}
catch (err) {
    console.log(err);
}
