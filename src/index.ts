
import path from "path";
import FileFunction from "./Utils/FileFunction";
import SortClass from "./Utils/SortingClass";

function main() {

  const inputPath = path.join(__dirname, "input.txt")
  const outputPath = path.join(__dirname, "output.txt")



  try {

    const fileContent: string = FileFunction.readFile(inputPath);
    const numberStrings: string[] = fileContent.split(", ");

    // Convert all string to number & checking the type of num
    const numbers: number[] = numberStrings.map((str) => {
      const num = Number(str);
      return isNaN(num) ? 0 : num;
    });
    const sortedNumbers: number[] = SortClass.SortByDescending(numbers);
    const sortedString: string = sortedNumbers.join(", ");
    FileFunction.writeFile(outputPath, sortedString);


  } catch (err) { }
  // const file = fs.readFileSync(path.join(__dirname, "input.txt"), "utf-8");
  // const [list] = file.split("\n");

  // const result = list;

  // fs.writeFileSync(path.join(__dirname, "output.txt"), result.toString());
}
main();
