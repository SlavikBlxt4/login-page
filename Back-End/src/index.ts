import express, { Request, Response } from "express";
import cors from 'cors';
import { Pool } from "pg";
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
const PORT = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const myPool = new Pool({
    user: "postgres",
    host: "database-1.c1iywqwec4uj.us-east-1.rds.amazonaws.com",
    database: "postgres",
    password: "postgres",
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



//post para logear usuarios

app.post('/usuarios/login', async (req, res) => { //para logear a los usuarios
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ mensaje: 'Se requiere un email y contraseña' });
    }

    try {
        const result = await myPool.query('SELECT * FROM usuarios WHERE email = $1', [email]);
        if (result.rows.length === 0) {
            return res.status(401).json({ mensaje: 'Email o contraseña incorrectos' });
        }

        const usuario = result.rows[0];

        // Comparar la contraseña ingresada con la contraseña almacenada en la base de datos
        
        if (password !== usuario.password) {
            return res.status(401).json({ mensaje: 'Email o contraseña incorrectos' });
        }

        return res.status(200).json({ mensaje: 'Login exitoso' });
    } catch (error) {
        return res.status(500).json({ mensaje: 'Error al realizar el login', error });
    }
});

//post para registrar usuarios

app.post('/usuarios', async (req, res) => {
    const { email, password } = req.body;

    try {
      // Insert the user data into the database
      const queryString = 'INSERT INTO usuarios ("email", "password") VALUES($1, $2)';
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
