import express, { Request, Response } from "express";
import { app } from "./server";

/** ------------------------------ */
/** MIDDLEWARES */
/** ------------------------------ */
app.use(express.json());
