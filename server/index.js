/* eslint-disable no-undef */
import express from "express"
const app = express()
import bodyParser from "body-parser"
import cors from "cors"
import routes from "./routes/api"
var session = require("express-session")

app.use(session({
	secret: "this is secret, don't tell anyone about it.",
	resave: false,
	saveUninitialized: true,
}))

app.use(cors())

app.use(bodyParser.json())

app.use("/api", routes)

app.listen(8000, () => {
	// eslint-disable-next-line no-console
	console.log("Listening on port 8000!")
})
