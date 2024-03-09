import express, { Request, Response } from "express";
import cors from 'cors';
import { Pool } from "pg";

const app = express();
app.use(cors());
const PORT = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const myPool = new Pool({
    user: "postgres",
    host: "database-1.cpmk4w6w84vv.us-east-1.rds.amazonaws.com",
    database: "postgres",
    password: "12345678",
    port: 5432,
    ssl: {
        rejectUnauthorized: false,
    },
});

app.listen(PORT, ()=> {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

app.get("/pelicula", async (req: Request, res: Response) => {
    try {
        const { rows } = await myPool.query("SELECT * FROM pelicula;");
        res.json(rows);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Internal Server Error");
    }
});



app.post("/peliculas", (req: Request, res: Response) => {
    res.send('Tu primer POST');
    // INSERTAR UNA PELÍCULA (INSERT INTO PELICULA ... VALUES ...)
});

app.put("/peliculas", (req: Request, res: Response) => {
    res.send('Tu primer PUT');
    // MODIFICAR UNA PELÍCULA (UPDATE PELICULA SET .... WHERE)
});

app.delete("/peliculas", (req: Request, res: Response) => {
    res.send('Tu primer DELETE');
    // ELIMINAR UNA PELÍCULA (DELETE PELICULA)
});

app.post('/usuarios', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Insert the user data into the database
      const queryString = 'INSERT INTO usuarios (email, password) VALUES($1, $2)';
      const values = [email, password];
  
      await myPool.query(queryString, values);
      res.status(200).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Failed to insert user into database:', error);
      res.status(500).json({ error: 'Failed to insert user into database' });
    }
  });

app.get("/categoria", async (req: Request, res: Response) => {
    try {
        const { rows } = await myPool.query("SELECT * FROM categoria;");
        res.json(rows);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.get("/categoriapelicula", async (req: Request, res: Response) => {
    try {
        const { rows } = await myPool.query("SELECT * FROM categoriapelicula;");
        res.json(rows);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Internal Server Error");
    }
});
