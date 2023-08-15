import express, { Express } from "express";
import path from "path";
import bodyParser from "body-parser";
import checker from "./handlers/handlerMain";

const app: Express = express();

app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static(path.join(__dirname, "views")));

app.get("/", checker.homepage);

app.post("/submitted-data", checker.filter);

try {
  app.listen("3030", (): void => {
    console.log("[server]: App started on http://localhost:3030");
  });
} catch (err) {
  console.log(err);
}
