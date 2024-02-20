import express from 'express'
const app = express();
const PORT = process.env.PORT || 3000; // Puerto en el que se ejecutará el servidor
import { readFile } from 'fs/promises'
import cors from 'cors'
app.use(cors());

// Ruta de ejemplo que devuelve un JSON
app.get('/trendingList', async (req, res) => {
  // const data = import('./trending.json');
  // res.json(data); // Enviar el JSON como respuesta
  try {
    const data = await readFile('./api/trending.json', 'utf8'); // lee el archivo JSON
    res.json(JSON.parse(data)); // Envía los datos JSON como respuesta
  } catch (error) {
    console.error('Error al leer el archivo JSON', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

app.get('/categories', async (req, res) => {
  // const data = import('./trending.json');
  // res.json(data); // Enviar el JSON como respuesta
  try {
    const data = await readFile('./api/categories.json', 'utf8'); // lee el archivo JSON
    res.json(JSON.parse(data)); // Envía los datos JSON como respuesta
  } catch (error) {
    console.error('Error al leer el archivo JSON', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

app.get('/topCreators', async (req, res) => {
  // const data = import('./trending.json');
  // res.json(data); // Enviar el JSON como respuesta
  try {
    const data = await readFile('./api/topCreators.json', 'utf8'); // lee el archivo JSON
    res.json(JSON.parse(data)); // Envía los datos JSON como respuesta
  } catch (error) {
    console.error('Error al leer el archivo JSON', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});


// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express en funcionamiento en el puerto ${PORT}`);
});
