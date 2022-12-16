import fs from "fs";

const markdownFolderPath = "public/content";
let postlist = [];
const writeJsonPath = "src/posts.json";

// Find the indices of the start and end of the metadata lines in the markdown file
function getMetadataIndices(acc, elem, i) {
  if (/^---/.test(elem)) {
    acc.push(i);
  }
  return acc;
}

// Parse the metadata lines into an object
function parseMetadata(lines, metadataIndices) {
  let metadataObj = {};
  if (metadataIndices.length > 0) {
    let metadata = lines.slice(metadataIndices[0] + 1, metadataIndices[1]);
    metadata.forEach((line) => {
      metadataObj[line.split(": ")[0]] = line.split(": ")[1];
    });
    return metadataObj;
  }
}

// Parse the content lines into a string
function parseContent(lines, metadataIndices) {
  if (metadataIndices.length > 0) {
    lines = lines.slice(metadataIndices[1] + 1, lines.length);
  }
  return lines.join("\n");
}

const getPosts = () => {
  fs.readdir(markdownFolderPath, (err, files) => {
    if (err) {
      return console.log("Failed to list contents of directory: " + err);
    }
    files.forEach((file, i) => {
      let post;
      fs.readFile(`${markdownFolderPath}/${file}`, "utf8", (err, contents) => {
        console.log(`File ${i + 1}: ${file}`);
        if (err) {
          return err;
        }
        const lines = contents.split("\n");
        const metadataIndices = lines.reduce(getMetadataIndices, []);
        const metadata = parseMetadata(lines, metadataIndices);
        const content = parseContent(lines, metadataIndices);
        const timestamp = new Date(metadata.date).getTime() / 1000;
        post = {
          id: timestamp,
          // URL slug, converts title to lowercase, removes non-alphanumeric characters, and replaces spaces with hyphens
          // Ex.  "The benefits of backpacking + carry-on, versus bringing a luggage" ->
          //      "the-benefits-of-backpacking-carry-on-versus-bringing-a-luggage"
          titleUrl: metadata.title
            .toLowerCase()
            .replace(/[^a-z0-9\ \-]+/g, "")
            .replace(/[ ]+/g, "-"),
          titleString: metadata.title ? metadata.title : "No title given",
          author: metadata.author ? metadata.author : "No author given",
          date: metadata.date ? metadata.date : "No date given",
          content: content ? content : "No content given",
        };
        console.log(post);
        console.log();
        postlist.push(post);
        if (i === files.length - 1) {
          const sortedList = postlist.sort((a, b) => {
            return a.id < b.id ? 1 : -1;
          });
          let data = JSON.stringify(sortedList);
          fs.writeFileSync(writeJsonPath, data);
        }
      });
    });
  });
  return;
};

getPosts();
