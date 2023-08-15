import fs from "fs";

export const fileFormatter = (directory: string): { [key: string]: string } => {
  const reg: RegExp = /[jJ]\d{7}/gm; // J[or]j followed by 7 numbers;
  const files: string[] = fs.readdirSync(directory);
  const tidyFiles: { [key: string]: string } = {};
  const filteredList: RegExpMatchArray[] = [];
  files.forEach((file: string) => {
    const filter1: string = String(file.split(" "));
    const filter2: string = String(filter1.split("_"));
    const filter3: string = String(filter2.split("/n"));
    const filter4: string = filter3.replace(/,+/gm, " ");
    const filter5: string = filter4.toUpperCase();
    const final: string = filter5;

    let matches: IterableIterator<RegExpMatchArray> = final.matchAll(reg);

    filteredList.push(...matches);
  });

  for (const match of filteredList) {
    tidyFiles[match[0]] = match[0];
  }

  return tidyFiles;
};
