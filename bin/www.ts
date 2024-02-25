import dotenv from "dotenv";
import { app } from "#/src/app.js";

dotenv.config();

const port = Number(process.env.PORT || 3000);
const host = process.env.HOST || "127.0.0.1";

app.listen(port, host, () => {
    console.log(`[server]: Server is running at ${host}:${port}`);
});