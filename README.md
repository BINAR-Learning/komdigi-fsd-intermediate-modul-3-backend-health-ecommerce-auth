# 🔐 health-ecommerce-auth

> **JWT Authentication & Secure Coding untuk Health E-Commerce**

[![Node.js](https://img.shields.io/badge/Node.js-18+-green)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.18-blue)](https://expressjs.com/)
[![JWT](https://img.shields.io/badge/JWT-9.0-orange)](https://jwt.io/)
[![Security](https://img.shields.io/badge/Security-OWASP-red)](https://owasp.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

Complete authentication & security layer untuk Health E-Commerce dengan JWT, RBAC, dan OWASP best practices.

---

## 📦 Apa yang Ada di Repository Ini?

Repository ini berisi **2 versi project**:

```
health-ecommerce-auth/
├── README.md (Ini file yang kamu baca)
├── starter-project/     # 📝 Untuk practice (dengan TODO)
│   ├── README.md
│   ├── package.json
│   ├── server.js
│   ├── config/
│   ├── controllers/
│   ├── middleware/ (with TODOs)
│   ├── models/
│   └── routes/
└── finished-project/    # ✅ Complete auth system
    ├── README.md
    ├── package.json
    ├── server.js
    ├── config/
    ├── controllers/
    ├── middleware/ (auth + RBAC!)
    ├── models/
    └── routes/
```

**Pilih mana?**

- **Starter** - Untuk **belajar security dari scratch** (RECOMMENDED!)
- **Finished** - Untuk **reference** production auth patterns

---

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

# 6. Edit .env dengan strong secret key
# JWT_SECRET=your-super-secret-key-min-32-characters
# MONGODB_URI=mongodb://localhost:27017/health-ecommerce

# 7. Start MongoDB
mongod

# 8. Start server
npm run dev

# Server running di http://localhost:5000
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
# Edit dengan JWT_SECRET yang strong

# 6. Start MongoDB
mongod

# 7. Start server
npm run dev

# Complete auth system ready di http://localhost:5000
```

---

## 🎯 Apa yang Akan Kamu Pelajari?

**Modul 4** melanjutkan dari Modul 3 (API) dengan menambahkan **security layer**!

### Konsep yang Dipelajari:

- ✅ **JWT Authentication** - Stateless auth dengan tokens
- ✅ **Password Security** - Bcrypt hashing dengan salt rounds
- ✅ **RBAC** - Role-Based Access Control (Admin vs User)
- ✅ **OWASP Top 10** - Security vulnerabilities & prevention
- ✅ **Input Validation** - Prevent injection attacks
- ✅ **Rate Limiting** - Prevent brute force attacks

### Apa yang Dibangun:

- **Auth endpoints** (register, login, profile)
- **JWT middleware** untuk protected routes
- **RBAC middleware** untuk admin-only actions
- **Security middleware** (Helmet, rate limit, sanitization)

**Output:** Secure API yang production-ready untuk external integration (Modul 5)!

---

## 📁 Struktur Starter Project

```
starter-project/
├── README.md              # Setup guide
├── package.json           # Dependencies (JWT, bcrypt, helmet)
├── server.js             # ⚠️ TODO: Add security middleware
├── config/
│   └── database.js       # ✅ MongoDB connection (ready!)
├── controllers/
│   └── authController.js # ⚠️ TODO: Register, login, profile
├── middleware/
│   ├── auth.js           # ⚠️ TODO: JWT verification
│   ├── authorize.js      # ⚠️ TODO: RBAC implementation
│   └── errorHandler.js   # ✅ Error handler (ready!)
├── models/
│   ├── User.js           # ⚠️ TODO: User schema dengan password hashing
│   └── Product.js        # ✅ From Modul 2 (ready!)
└── routes/
    └── authRoutes.js     # ⚠️ TODO: Auth endpoints
```

**TODOs:**

- [ ] `models/User.js` - Schema dengan bcrypt pre-save hook
- [ ] `controllers/authController.js` - Register, login, profile logic
- [ ] `middleware/auth.js` - JWT verification middleware
- [ ] `middleware/authorize.js` - RBAC middleware
- [ ] `routes/authRoutes.js` - Auth routes
- [ ] `server.js` - Mount auth routes & security middleware

---

## 📁 Struktur Finished Project

```
finished-project/
├── README.md              # Complete guide + security notes
├── package.json           # All security dependencies
├── server.js             # ✅ Complete dengan Helmet, rate limiting
├── config/
│   └── database.js       # ✅ MongoDB connection
├── controllers/
│   └── authController.js # ✅ Register, login, profile (complete!)
├── middleware/
│   ├── auth.js           # ✅ JWT authentication middleware
│   ├── authorize.js      # ✅ RBAC middleware
│   └── errorHandler.js   # ✅ Global error handler
├── models/
│   ├── User.js           # ✅ Bcrypt hashing implemented
│   └── Product.js        # ✅ From Modul 2
└── routes/
    ├── authRoutes.js     # ✅ /register, /login, /profile
    └── productRoutes.js  # ✅ Protected with JWT & RBAC
```

**All implemented:**

- ✅ JWT authentication (stateless)
- ✅ Password hashing (bcrypt salt 10)
- ✅ RBAC (admin vs user roles)
- ✅ Security headers (Helmet)
- ✅ Rate limiting (5 login attempts/15min)
- ✅ Input validation
- ✅ XSS & injection prevention

---

## 🧪 Testing Auth Endpoints

### 1. Register User:

```bash
POST http://localhost:5000/api/auth/register
Content-Type: application/json

{
  "name": "Aiman",
  "email": "aiman@example.com",
  "password": "Aiman123!",
  "role": "user"
}
```

**Response:**

```json
{
  "success": true,
  "message": "User registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### 2. Login:

```bash
POST http://localhost:5000/api/auth/login
Content-Type: application/json

{
  "email": "aiman@example.com",
  "password": "Aiman123!"
}
```

**Response:**

```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "...",
    "name": "Aiman",
    "email": "aiman@example.com",
    "role": "user"
  }
}
```

### 3. Get Profile (Protected):

```bash
GET http://localhost:5000/api/auth/profile
Authorization: Bearer YOUR_TOKEN_HERE
```

### 4. Admin-Only Endpoint:

```bash
POST http://localhost:5000/api/products
Authorization: Bearer ADMIN_TOKEN_HERE
Content-Type: application/json

{
  "name": "Vitamin C",
  "price": 85000,
  ...
}
```

---

## 🔗 Hubungan dengan Modul Lain

**Dari Modul 1 (OOP):**

- ✅ Class patterns untuk service layer

**Dari Modul 2 (Database):**

- ✅ User model dari Modul 2
- ✅ Product model untuk authorization examples

**Dari Modul 3 (Express):**

- ✅ Express server & routes
- ✅ Middleware chain
- ✅ Error handling

**Modul 4 (This!)** → Adds Security

- 🆕 JWT authentication
- 🆕 Password hashing
- 🆕 RBAC authorization
- 🆕 OWASP security measures

**Ke Modul 5 (Integration):**

- → Auth middleware protects external API endpoints
- → RBAC for admin-only operations (Kemenkes sync)
- → Rate limiting extended untuk AI endpoints

**One secure Health E-Commerce system!**

---

## 🐛 Troubleshooting

### ❌ "JsonWebTokenError: jwt malformed"

**Solusi:**

```bash
# Check Authorization header format:
# Authorization: Bearer YOUR_TOKEN
# (with space after "Bearer")
```

### ❌ "ValidationError: Password required"

**Solusi:**

- Check password length (min 6 characters)
- Include numbers & letters
- Check password confirmation match

### ❌ "Too many login attempts"

**Solusi:**

- Expected! Rate limiter working
- Wait 15 minutes
- Or increase limit in development

### ❌ "Forbidden: Access denied"

**Solusi:**

- Check user role (user vs admin)
- Admin-only endpoints require admin role
- Verify RBAC middleware working

---

## 💡 Security Best Practices Implemented

1. ✅ **Never store plain passwords** - Always hash dengan bcrypt
2. ✅ **Use strong JWT secrets** - Min 32 characters, random
3. ✅ **Validate all inputs** - Prevent injection attacks
4. ✅ **Rate limit auth endpoints** - Prevent brute force
5. ✅ **Use HTTPS in production** - Never send tokens over HTTP
6. ✅ **Set token expiration** - Tokens expire after 24h
7. ✅ **Sanitize inputs** - Remove malicious code

---

## 📚 Resources

**Documentation:**

- [JWT.io](https://jwt.io/) - JWT debugger & docs
- [bcrypt.js](https://github.com/dcodeIO/bcrypt.js) - Password hashing
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Helmet.js](https://helmetjs.github.io/) - Security headers

**Tools:**

- [Postman](https://www.postman.com/) - Test auth flows
- [JWT.io](https://jwt.io/) - Decode & verify tokens

---

## 🚀 Next Steps

After completing this module:

1. ✅ **Test auth flow** - Register → Login → Access protected route
2. ✅ **Verify RBAC** - Test admin vs user permissions
3. ➡️ **Modul 5** - Add external integrations (AI, Payment)
4. ➡️ **Frontend Modules** - Connect React app dengan auth API

---

**Happy Securing! 🔐**

_Modul 4 - Authentication & Secure Coding_  
_Part of Health E-Commerce Backend Series_

---

**📁 Repository Info:**

- **Name:** `health-ecommerce-auth`
- **Type:** Authentication & Security Layer
- **Structure:** 1 Repo, 2 Folders (starter + finished)
