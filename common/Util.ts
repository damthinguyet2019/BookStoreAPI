//doc json thanh string
import { readFile } from 'node:fs/promises';
import * as path from 'path';
export async function getDataFromJsonFile(filePath: string): Promise<Record<string, string>> {

    const fullFilePath= path.resolve(process.cwd(),filePath);
    const data = await readFile(fullFilePath, 'utf-8');
    return JSON.parse(data);
} 