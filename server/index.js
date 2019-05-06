import express from "express";
const app = express();
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./routes/api";

app.use(cors());

app.use(bodyParser.json());

app.use("/api", routes);

app.listen(8000, () => {
	// eslint-disable-next-line no-console
	console.log("Listening on port 8000!");
});
