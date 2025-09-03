const express = require("express");
const crypto = require("node:crypto");

const app = express();
app.use(express.json());

const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);

function encrypt(text) {
    const iv = crypto.randomBytes(16); // новый IV для каждого шифрования
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(text, "utf-8", "hex");
    encrypted += cipher.final("hex");

    return {
        iv: iv.toString("hex"),
        encryptedData: encrypted,
    };
}

app.post("/submit", (req, res) => {
    const { userName, password } = req.body;

    if (
        !userName ||
        typeof userName !== "string" ||
        !password ||
        typeof password !== "string"
    ) {
        return res.status(400).json({
            error: "Invalid input",
        });
    }

    const encryptedPassword = encrypt(password);

    res.json({
        userName,
        password: encryptedPassword.encryptedData,
        iv: encryptedPassword.iv,
    });
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
