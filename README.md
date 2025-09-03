```markdown
# 🔐 Express Password Encryption API

This project is a simple **Node.js + Express** server that demonstrates how to encrypt user passwords using the **AES-256-CBC** algorithm from Node's built-in **crypto** module.  

---

## 🚀 Features
- Accepts a `userName` and `password` via a POST request.
- Encrypts the password using **AES-256-CBC**.
- Generates a **new IV** (initialization vector) for every encryption.
- Returns JSON with:
  - `userName`
  - Encrypted `password`
  - The generated `iv`

---

## 📂 Project Structure
```

project/
├── index.js       # Main server file
└── package.json   # Dependencies and scripts

````

---

## ⚙️ Installation
```bash
npm install express
node index.js
````

---

## 📡 API Usage

### Endpoint

```
POST /submit
```

### Request Body

```json
{
  "userName": "Alex",
  "password": "mypassword123"
}
```

### Response

```json
{
  "userName": "Alex",
  "password": "7f4a1c7d6d8f98f0b7c83ab4...",
  "iv": "cd42a5b3e118b9201e98d1c8..."
}
```

---

## 🛠️ Example with curl

```bash
curl -X POST http://localhost:3000/submit \
-H "Content-Type: application/json" \
-d '{"userName":"Alex","password":"mypassword123"}'
```

---

## 📌 Notes

* The key is generated randomly each time the server starts.
* Data cannot be decrypted after a restart unless you save the key.
* For production use password hashing (e.g. `bcrypt`) instead of encryption.
