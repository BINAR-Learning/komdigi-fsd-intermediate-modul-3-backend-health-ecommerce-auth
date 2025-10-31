# 🔐 health-ecommerce-auth

> **Authentication & Secure Coding (OWASP) untuk Health E-Commerce Backend**

[![Node.js](https://img.shields.io/badge/Node.js-18+-green)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.18-blue)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.0-brightgreen)](https://www.mongodb.com/)
[![JWT](https://img.shields.io/badge/JWT-Auth-red)](https://jwt.io/)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

Authentication, authorization, dan secure coding practices untuk production-ready Health E-Commerce applications. JWT, password hashing, RBAC, OWASP Top 10, dan security tools.

---

## 📦 Apa yang Ada di Repository Ini?

Repository ini berisi **2 versi project**:

```
health-ecommerce-auth/
├── README.md (Ini file yang kamu baca)
├── starter-project/     # 📝 Untuk practice (dengan TODO)
│   ├── README.md
│   ├── package.json
│   ├── server.js (with TODOs)
│   ├── config/
│   ├── models/
│   ├── middleware/
│   ├── controllers/
│   └── routes/
└── finished-project/    # ✅ Complete secure API
    ├── README.md
    ├── package.json
    ├── server.js (complete)
    ├── config/
    ├── models/
    ├── middleware/
    ├── controllers/
    └── routes/
```

**Pilih mana?**

- **Starter** - Jika kamu mau **belajar dengan coding** (RECOMMENDED!)
- **Finished** - Jika butuh **reference** atau stuck

---

## 🎯 Apa yang Akan Kamu Pelajari?

**Modul 4** menambahkan security layer ke API dari Modul 3!

### Konsep yang Dipelajari:

- ✅ **JWT Authentication** - Stateless token-based auth
- ✅ **Password Security** - Bcrypt hashing dengan salt
- ✅ **RBAC** - Role-Based Access Control (User/Admin)
- ✅ **OWASP Top 10** - Common vulnerabilities & mitigations
- ✅ **Security Tools** - Helmet, rate limiting, validation

### Apa yang Dibangun:

- **Auth System** - Register, login, protected routes
- **Security Middleware** - JWT verification, RBAC, input validation
- **Secure Server** - Helmet headers, rate limiting, CORS

**Output:** Production-ready secure API dengan authentication!

## 🔧 Prerequisites

- **Node.js** (v18+)
- **MongoDB** (lokal atau Atlas)
- **Postman** untuk testing
- **Basic understanding** of Express dan MongoDB (Modul 2 & 3)

## 🚀 Quick Start (Untuk Newbie)

### Option 1: Practice dengan Starter Project

```bash
# 1. Clone repository ini
git clone https://github.com/your-username/health-ecommerce-auth.git

# 2. Masuk ke folder repository
cd health-ecommerce-auth

# 3. Masuk ke starter-project
cd starter-project

# 4. Install dependencies
npm install

# 5. Copy .env.example jadi .env
cp .env.example .env
# Windows: Copy-Item .env.example .env

# 6. Edit .env dengan text editor
# Set MONGODB_URI dan JWT_SECRET

# 7. Start MongoDB
# Windows: net start MongoDB
# Mac: brew services start mongodb-community
# Linux: sudo systemctl start mongod

# 8. Start server
npm run dev

# Server running di http://localhost:3000
```

### Option 2: Lihat Complete Implementation

```bash
# 1. Clone repository (jika belum)
git clone https://github.com/your-username/health-ecommerce-auth.git

# 2. Masuk ke folder repository
cd health-ecommerce-auth

# 3. Masuk ke finished-project
cd finished-project

# 4. Install dependencies
npm install

# 5. Setup .env
cp .env.example .env
# Edit dengan MongoDB URI dan JWT_SECRET

# 6. Start MongoDB
# Windows: net start MongoDB
# Mac: brew services start mongodb-community
# Linux: sudo systemctl start mongod

# 7. Start server
npm run dev

# API complete dengan auth endpoints ready! ✅
```

---

## 📁 Struktur Starter Project

```
starter-project/
├── README.md              # Setup guide
├── package.json           # Dependencies
├── server.js             # ⚠️ TODO: Server setup
├── config/
│   └── database.js       # ✅ MongoDB connection (ready!)
├── models/
│   └── User.js           # ⚠️ TODO: User schema with password hashing
├── middleware/
│   ├── auth.js           # ⚠️ TODO: JWT verification
│   ├── authorize.js      # ⚠️ TODO: RBAC middleware
│   └── validate.js      # ⚠️ TODO: Input validation
├── controllers/
│   └── authController.js # ⚠️ TODO: Register, login, profile
└── routes/
    └── authRoutes.js     # ⚠️ TODO: Auth routes
```

**TODOs:**

- [ ] `models/User.js` - Schema dengan bcrypt password hashing
- [ ] `middleware/auth.js` - JWT verification middleware
- [ ] `middleware/authorize.js` - RBAC middleware
- [ ] `controllers/authController.js` - Register, login, logout functions
- [ ] `routes/authRoutes.js` - Auth routes

---

## 📁 Struktur Finished Project

```
finished-project/
├── README.md              # Setup + explanations
├── package.json           # Dependencies
├── server.js             # ✅ Complete secure server
├── config/
│   └── database.js       # ✅ MongoDB connection
├── models/
│   └── User.js           # ✅ User model dengan password hashing
├── middleware/
│   ├── auth.js           # ✅ JWT verification
│   ├── authorize.js      # ✅ RBAC middleware
│   └── validate.js      # ✅ Input validation
├── controllers/
│   └── authController.js # ✅ All auth functions
└── routes/
    └── authRoutes.js     # ✅ All auth routes mounted
```

**All implemented:**

- ✅ JWT authentication complete
- ✅ Password hashing dengan bcrypt
- ✅ RBAC dengan User/Admin roles
- ✅ Security headers dengan Helmet
- ✅ Rate limiting untuk login
- ✅ Input validation dengan express-validator
- ✅ All tests passing

---

## 🧪 Testing Authentication

### Register User

```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Aiman",
    "email": "aiman@example.com",
    "password": "Aiman123!",
    "role": "user"
  }'
```

### Login

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "aiman@example.com",
    "password": "Aiman123!"
  }'
```

**Response akan return JWT token** - Copy token tersebut!

### Access Protected Route

```bash
curl http://localhost:3000/api/profile \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

Ganti `YOUR_TOKEN_HERE` dengan token dari login response.

---

## 🔗 Hubungan dengan Modul Lain

**Dari Modul 1 (OOP):**

- ✅ Service layer patterns
- ✅ Async/await untuk auth operations

**Dari Modul 2 (Database):**

- ✅ User model dengan Mongoose
- ✅ Database connection

**Dari Modul 3 (Express API):**

- ✅ Routes structure
- ✅ Middleware chain
- ✅ Controllers pattern

**Modul 4 (This!)** → Adds Security Layer

- 🆕 JWT authentication
- 🆕 Password hashing
- 🆕 RBAC authorization
- 🆕 Security middleware (Helmet, rate limiting)
- 🆕 Input validation

**Ke Modul 5 (Integration):**

- → Protected external API calls
- → Secure API key management
- → Rate limiting untuk external services

**One Health E-Commerce system, built progressively!**

---

## 💡 Tips Sukses

1. **Start dengan starter-project** - Practice makes perfect!
2. **Generate strong JWT_SECRET** - Min 32 characters, random
3. **Test incrementally** - Register → Login → Protected route
4. **Use Postman** - Organize auth tests in collections
5. **Never log tokens** - Don't expose secrets in logs
6. **Compare when stuck** - Check finished-project
7. **Understand, don't copy** - Type code yourself

## 🐛 Troubleshooting

### Error: "JsonWebTokenError: invalid signature"

**Solusi:**

- JWT_SECRET di `.env` nggak match dengan yang dipakai generate token
- Pastikan same secret untuk sign dan verify
- Jangan change JWT_SECRET kalau ada active tokens!

### Error: "ValidationError: password is shorter than minimum"

**Solusi:**

- Password kurang dari minlength (8 characters)
- Check password strength requirements
- Make sure validation runs before hashing

### Error: "MongoServerError: E11000 duplicate key error"

**Solusi:**

- Email already exists (unique constraint)
- Return proper error message
- Check email before create user

### Error: "Too Many Requests"

**Solusi:**

- Hit rate limit (contoh: 5 login attempts dalam 15 min)
- Wait atau clear rate limit cache
- Adjust rate limit settings untuk development

### Token Tidak Di-accept

**Solusi:**

- Check Authorization header format: `Bearer <token>`
- Verify token belum expired
- Check JWT_SECRET match
- Test token di [jwt.io](https://jwt.io/)

## 📚 Resources

**Documentation:**

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [JWT.io](https://jwt.io/)
- [Bcrypt Documentation](https://www.npmjs.com/package/bcryptjs)
- [Helmet.js](https://helmetjs.github.io/)
- [Express Security Best Practices](https://expressjs.com/en/advanced/best-practice-security.html)

**Tools:**

- [JWT.io Debugger](https://jwt.io/) - Test & debug JWT tokens
- [Postman](https://www.postman.com/) - API testing
- [Snyk](https://snyk.io/) - Dependency vulnerability scanner

---

## 🧾 Penutup / Summary – Authentication & Secure Coding

### 🧩 Ringkasan Poin Utama

Pada modul ini, peserta telah mempelajari **application security** dengan focus pada authentication, authorization, dan protection dari common vulnerabilities.

Peserta diharapkan kini mampu:

- Implement stateless authentication dengan JWT
- Secure password storage dengan bcrypt hashing
- Build granular access control dengan RBAC
- Identify OWASP Top 10 vulnerabilities dan mitigate-nya
- Apply multiple layers of security (headers, rate limiting, validation)
- Test security dengan automated tools

Dengan pemahaman ini, peserta siap deploy **production-ready, secure applications**.

### 🎯 Kaitan dengan Tujuan Pembelajaran

| Tujuan Pembelajaran      | Pencapaian Melalui Materi                                                    |
| ------------------------ | ---------------------------------------------------------------------------- |
| JWT Implementation       | Token generation, verification, expiration handling dalam production context |
| Password Security        | Bcrypt dengan salt rounds, pre-save hooks, one-way hashing concepts          |
| Access Control           | Role-based dan permission-based middleware untuk granular authorization      |
| Vulnerability Prevention | Real attack scenarios (injection, XSS) dengan working mitigation code        |
| Security Tools           | Helmet, rate-limit, express-validator practical implementation               |

### 💭 Refleksi Akhir

**"Bagaimana JWT stateless authentication scale better dibanding session-based? Apa yang harus diperhatikan untuk JWT security?"**

**"Dari OWASP Top 10, mana yang paling critical untuk Health E-Commerce API? Bagaimana strategy mitigasi-nya?"**

**"Kapan menggunakan bcrypt vs other hashing algorithms? Apa trade-offs salt rounds yang berbeda?"**

### 📚 Sumber Referensi

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [JWT Best Practices](https://auth0.com/blog/a-look-at-the-latest-draft-for-jwt-bcp/)
- [Node.js Security Checklist](https://blog.risingstack.com/node-js-security-checklist/)
- [Snyk](https://snyk.io/) - Dependency vulnerability scanner
- [SonarCloud](https://sonarcloud.io/) - Code quality & security

### 📘 Glosarium

| Istilah           | Definisi Singkat                                           |
| ----------------- | ---------------------------------------------------------- |
| **JWT**           | JSON Web Token - self-contained token untuk authentication |
| **Bcrypt**        | Password hashing algorithm yang resist brute force         |
| **RBAC**          | Role-Based Access Control untuk permission management      |
| **OWASP**         | Open Web Application Security Project                      |
| **XSS**           | Cross-Site Scripting attack                                |
| **Injection**     | Malicious code insertion via inputs                        |
| **Salt**          | Random data untuk unique password hashes                   |
| **Rate Limiting** | Request throttling untuk prevent abuse                     |
| **Helmet**        | Security headers middleware                                |

### 💬 Kalimat Penutup

Dengan menyelesaikan modul ini, peserta telah memahami **application security fundamentals**.

Selanjutnya, peserta akan mempelajari **Integrasi Layanan Eksternal & AI** untuk connect dengan third-party services secara secure.

---

**Stay Secure! 🔐🚀**

_Disusun oleh Pusbang Talenta Digital_

---

## 🚀 Next Steps

After completing this module:

1. ✅ **Test all auth endpoints** dengan Postman
2. ✅ **Protect product routes** dengan auth middleware
3. ➡️ **Modul 5** - External integrations (AI, Payment, 3rd-party)

---

**Happy Coding! 🔐🚀**

_Part of Health E-Commerce Backend Series_  
_Modul 4 - Authentication & Secure Coding_
