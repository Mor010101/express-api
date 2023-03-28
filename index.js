import express, { response } from "express";
import bodyParser from "body-parser";
import routes from "./routes/routes.js" 

const port = 3002;
const app = express();

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

routes(app);

const server = app.listen(port, (error) => {
    console.log("Server listening on port: %s", server.address().port);
});
