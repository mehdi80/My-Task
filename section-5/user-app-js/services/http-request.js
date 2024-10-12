"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const getApiUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const url = "https://jsonplaceholder.typicode.com/users";
    try {
        const response = yield axios_1.default.get(url);
        return response.data;
    }
    catch (err) {
        console.error("Error Get User :", err);
        throw err;
    }
});
const getAlbum = () => __awaiter(void 0, void 0, void 0, function* () {
    const url = "https://jsonplaceholder.typicode.com/albums";
    try {
        const response = yield axios_1.default.get(url);
        return response.data;
    }
    catch (err) {
        console.error("Error get Album :", err);
        throw err;
    }
});
const getComment = () => __awaiter(void 0, void 0, void 0, function* () {
    const url = "https://jsonplaceholder.typicode.com/comments";
    try {
        const response = yield axios_1.default.get(url);
        return response.data;
    }
    catch (err) {
        console.error("Error get Comment :", err);
        throw err;
    }
});
const getPost = () => __awaiter(void 0, void 0, void 0, function* () {
    const url = "https://jsonplaceholder.typicode.com/posts";
    try {
        const response = yield axios_1.default.get(url);
        return response.data;
    }
    catch (err) {
        console.error("Error get posts :", err);
        throw err;
    }
});
