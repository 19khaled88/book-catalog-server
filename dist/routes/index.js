"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_routes_1 = require("../app/module/book/book.routes");
const router = express_1.default.Router();
router.use(book_routes_1.BookRoutes);
exports.default = router;
