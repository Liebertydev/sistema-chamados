import app from "./app.js";
import prisma from "./database/prisma.js";

const PORT = process.env.PORT || 3000;

async function StartServer() {
    try {
        await prisma.$connect();
        
        console.log("Banco conectado.");

        app.listen(PORT, () => {
            console.log("Servidor conectado, localhost:3000");
        });
    } catch(e) {
        console.error("Erro ao conectar no banco de dados.");
        process.exit(1);
    }
}

StartServer();