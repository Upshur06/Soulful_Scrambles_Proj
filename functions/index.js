const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe");

(sk_test_51HQSx1DeGDdFSiaV80TuevAsijlNvngYoCpKE3gdQfQPSckDBCuVzteprY3bhEpU0gthiADN6SM2DmncTqWKnESi00IfOFFkXq)

const app = express();

app.use(cors({origin: true}));
app.use(express.json());

app.get("/", (req, res) => res.status(200).send("Hello World"));

exports.api = functions.https.onRequest(app);
