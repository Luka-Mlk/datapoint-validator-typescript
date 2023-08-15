import { Request, Response } from "express";
import { userInputs } from "../pkg/interfaces";
import { inputFormatter } from "../pkg/input_formatter";
import { fileFormatter } from "../pkg/file_formatter";

const homepage = (req: Request, res: Response): void => {
  res.render("home");
};

const filter = async (req: Request, res: Response): Promise<void> => {
  if (!req.body.directory)
    res.status(502).json({
      status: "failed",
      error: "Directory is required",
    });
  const directory: string = req.body.directory;
  const userInputs: userInputs = {
    item_number: req.body.item_number,
    item_id: req.body.item_id,
    vero_id: req.body.vero_id,
    item_code: req.body.item_code,
    item_name: req.body.item_name,
    item_amount: req.body.item_amount,
    item_origin: req.body.item_origin,
  };
  const tidyItemsArr: userInputs[] = inputFormatter(userInputs);
  const files: { [key: string]: string } = fileFormatter(directory);

  const availableArr: userInputs[] = [];
  const unavailableArr: userInputs[] = [];

  tidyItemsArr.forEach((item: userInputs) => {
    if (files[item.vero_id]) {
      availableArr.push(item);
    } else {
      unavailableArr.push(item);
    }
  });
  res.render("home", { available: availableArr, unavailable: unavailableArr });
};

export default {
  homepage,
  filter,
};
