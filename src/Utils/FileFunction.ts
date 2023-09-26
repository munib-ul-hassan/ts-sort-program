import fs from "fs";
class FileFunction {
    static readFile(filePath: string): string {
        try {
            return fs.readFileSync(filePath, "utf-8");
        } catch (error) {
            throw new Error(
                `Error reading file: ${(error as Error).message}`
            );
        }
    }

    static writeFile(filePath: string, content: string): void {
        try {
            fs.writeFileSync(filePath, content);
        } catch (error) {
            throw new Error(
                `Error writing file: ${(error as Error).message}`
            );
        }
    }
}

export default FileFunction;
