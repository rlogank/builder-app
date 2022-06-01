const express = require("express");
const fs = require("fs/promises");
const fsCallbacks = require("fs");
const { v4: uuid } = require("uuid");
const fse = require("fs-extra");
const path = require("path");
const cors = require("cors");
const archiver = require("archiver");

/**
 * @param {String} sourceDir: /some/folder/to/compress
 * @param {String} outPath: /path/to/created.zip
 * @returns {Promise}
 */
function zipDirectory(sourceDir, outPath) {
  console.log({ sourceDir, outPath });
  const archive = archiver("zip", { zlib: { level: 9 } });
  const stream = fsCallbacks.createWriteStream(outPath);

  return new Promise((resolve, reject) => {
    archive
      .directory(sourceDir, false)
      .on("error", (err) => reject(err))
      .pipe(stream);

    stream.on("close", () => resolve());
    archive.finalize();
  });
}
const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(cors());

app.post("/api", async (req, res) => {
  try {
    const generatedId = uuid();
    await fs.mkdir("./anything/" + generatedId + "/site", { recursive: true });

    await fse.copy("./penis", `./anything/${generatedId}/site`);
    await fs.writeFile(
      path.join("anything", generatedId, "site", "data.json"),
      JSON.stringify(req.body)
    );
    await zipDirectory(
      "./anything/" + generatedId + "/site",
      "./public/" + generatedId + ".zip"
    );

    res.end(generatedId);
  } catch (err) {
    console.error(err.message);
    res.sendStatus(500);
  }
});

app.listen(666, () => {
  console.log("Server up and listening on port 666.");
});
