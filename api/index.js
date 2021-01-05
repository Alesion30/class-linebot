"use strict";

const express = require("express");
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const router = express.Router()
router.get('/', (req, res) => {
  res.send('授業マイスターAPI')
})
app.use(router)

const PORT = process.env.PORT || 3000;
process.env.NOW_REGION ? (module.exports = app) : app.listen(PORT);
console.log(`Server running at http://localhost:${PORT}`);
