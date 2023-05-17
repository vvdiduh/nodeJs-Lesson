const { error } = require('console');
const fs = require('fs/promises');
// const fs = require("fs").promises;

const readFile = async () => {
  const text = await fs.readFile('./files/file.txt', 'utf-8');
  console.log(text);
  //   const buffer = await fs.readFile('./files/file.txt');
  //   const text = buffer.toString();
  //   console.log(text);

  // fs.readFile('./files/file.txt')
  //   .then(data => console.log(data))
  //   .catch(error => console.log(error));

  // fs.readFile("./files/file.txt", (error, data) => {
  //     console.log(error);
  //     console.log(data);
  // })
};

readFile();

const addText = async () => {
  const result = await fs.appendFile('./files/file2.txt', '\n  Як казав мій дід я твій дід');
};

addText();

const replaceText = async () => {
    const result = await fs.writeFile('./files/file3.txt', 'Як казав мій дід я твій дід');
}

replaceText();

