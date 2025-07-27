import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const _filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(_filename);

const app = express();

app.get("*", (req, res) => {
  res.send("Catch-all route works fine");
});

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Test server running on port ${PORT}`);
});
