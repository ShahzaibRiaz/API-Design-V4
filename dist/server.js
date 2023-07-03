"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
/** ------------------------------ */
/** READ .env file and add variable to process */
/** ------------------------------ */
dotenv_1.default.config();
const PORT = process.env.PORT || 8000;
const app = (0, express_1.default)();
exports.app = app;
app.listen(PORT, () => {
    console.log(`Listening to requests at PORT ${PORT}`);
});