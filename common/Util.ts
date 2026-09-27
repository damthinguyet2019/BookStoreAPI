//doc json thanh string
import { readFile } from 'node:fs/promises';
import * as path from 'path';
import * as fs from 'fs';
import { parse } from 'csv-parse';
export async function getDataFromJsonFile(filePath: string): Promise<Record<string, string>> {

    const fullFilePath= path.resolve(process.cwd(),filePath);
    const data = await readFile(fullFilePath, 'utf-8');
    return JSON.parse(data);
} 



export async function changeValueByKey(jsonBody: string, fieldName: string, fieldValue: string): Promise<string> {
    let result ="";
   let jsonObject = JSON.parse(jsonBody);
    if (jsonObject.hasOwnProperty(fieldName)) {
        jsonObject[fieldName] = fieldValue;
        result = JSON.stringify(jsonObject);
    }
    return result;
}
export async function copyFile(filePath: string): Promise<void> {
    const fullFilePath= path.resolve(process.cwd(),filePath);
    const curentFileName = path.basename(fullFilePath);
    const newFileName = "copy_" + curentFileName;
    const destinationPath = path.resolve(process.cwd(), "testdata/AuthorizedAPI", newFileName);
    await fs.promises.copyFile(fullFilePath, destinationPath);
}


export async function readCsv(filePath: string): Promise<any[]> {
  return new Promise((resolve, reject) => {
    const records: any[] = [];
    fs.createReadStream(filePath)
      .pipe(parse({ columns: true, trim: true }))
      .on('data', (row) => {
        records.push(row);
      })
      .on('end', () => {
        resolve(records);
      })
      .on('error', (err) => {
        reject(err);
      });
  });
}