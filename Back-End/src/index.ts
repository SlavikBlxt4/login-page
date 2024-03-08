import express, { Request, Response } from "express";
import cors from 'cors';
import { Pool } from "pg";

const app = express();
app.use(cors());
const PORT = 3000;

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

app.post("/usuarios/", (req: Request, res: Response) => {
    const { email, password, name } = req.body;
    res.send('Body params por POST');
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
