import express from "express";
import cors from "cors";
import dotenv from 'dotenv';

const app = express();
app.use(express.json());
dotenv.config();

const port = process.env.PORT;

app.listen(port || 4000, () => {
  console.log("Server running on port 4000");
});

const dominiosPermitidos = [process.env.URL_FRONTEND];

const corsOptions = {
  origin: (origin, callback) => {
    if (dominiosPermitidos.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));

app.post("/contact", (req, res) => {
  console.log(req.body);
});
