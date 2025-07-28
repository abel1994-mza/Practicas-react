import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const _filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(_filename);

const app = express();
app.use(express.json());
app.use(cors());
//app.use(express.static(path.join(__dirname, "src", "dist")));

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
  {
    id: 4,
    content: "Soy un coco",
    important: true,
  },
];
//Ruta principal
app.get("/", (request, response) => {
  response.send("<h1> Hola mundo</h1>");
});
//Ruta que devuelve el array de Notes
app.get("/api/notes", (request, response) => {
  response.json(notes);
});

// Funcion para traer un solo recurso de notes
app.get("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  const note = notes.find((note) => note.id === id);

  if (note) {
    response.json(note);
  } else {
    response.status(404).end();
  }
});
// Funcion para eliminar una nota
app.delete("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  notes = notes.filter((note) => note.id !== id);
  response.status(204).end();
});
// Funcion para mandar datos
app.post("/api/notes", (request, response) => {
  const body = request.body; // aca guadamos la peticion del cliente
  console.log(body); // Aca lo mostramos en pantall a mi cliente
  if (!body.content) {
    return response.status(400).json({ error: "Content missing" });
  }
  const note = {
    content: body.content,
    important: body.important || false, // Creamos la nota
    id: notes.length + 1,
  };
  notes = notes.concat(note);
  response.json(note);
});

// app.get("/*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "src", "dist", "index.html"));
// });

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// const app = http.createServer((request, response) => {
//   response.writeHead(200, { "Content-Type": "application/json" });
//   response.end(JSON.stringify(notes));
// });

// const PORT = 3002;
// app.listen(PORT);
// console.log(`Server running on port ${PORT}`);
