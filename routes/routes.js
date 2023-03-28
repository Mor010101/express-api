import pool from "../data/config.js"
import crypto from 'crypto'   


const router = (app) => {

    app.get("/", (request, response) => {
        response.send({
            message: "liuiuiui",
        });
    });

    app.get("/users", (req, resp) => {
      pool.query('SELECT * FROM users', (error, result) => {
      if (error) throw error;
      
      resp.send(result);
      });
    });

    app.post('/users', (request, response) => {
      request.body.id = crypto.randomUUID();
      
      pool.query('INSERT INTO users SET ?', request.body, (error, result) => {
        if (error) throw error;
        response.status(201).send(`User added with ID: ${result}`);
      });
    });

    app.put('/users/:id', (request, response) => {
      const id = request.params.id;
      pool.query('UPDATE users SET ? WHERE id = ?', [request.body, id], (error, result) => {
          if (error) throw error;
          response.send('User updated successfully.');
  
      });
  
  });
  
  
    app.get("/users/:id", (req,resp) => {
      const id = req.params.id;

      pool.query('SELECT * FROM users WHERE id = ?', id, (error, result) => {
        if (error) throw error;

        resp.send(result);

      });
    });

};

export default router;