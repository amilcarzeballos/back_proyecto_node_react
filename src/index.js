/* const express = require("express")
 */
import  Express  from "express";
const app = Express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("servidor http://127.0.0.1:"+PORT)
})