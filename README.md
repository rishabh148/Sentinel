# 🛡️ Sentinel

> AI-Powered Secure Exam Platform with Real-Time Proctoring & Face Verification

Sentinel is a full-stack examination platform that uses AI/ML to prevent cheating through browser sensors, face detection, identity verification, and behavioral monitoring. Built with modern technologies and designed for scalability.

## 🌐 Live Demo

| Platform | URL |
|----------|-----|
| **Frontend** | [sentinel-seven-smoky.vercel.app](https://sentinel-seven-smoky.vercel.app) |
| **Backend API** | [sentinel-api-cbsk.onrender.com](https://sentinel-api-cbsk.onrender.com/api/health) |
| **GitHub** | [github.com/rishabh148](https://github.com/rishabh148) |

> ⚠️ **Note:** Backend is on Render free tier - first request may take 30-60 seconds to wake up.

---

## Why Sentinel?

Sentinel was built to explore **real-world system constraints** around security, identity verification, and real-time monitoring — not just CRUD exam flows.

The focus was on:
- Preventing cheating under adversarial behavior
- Designing verifiable, auditable security events
- Keeping the system scalable and observable

---

## 📑 Table of Contents

- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Database Schema](#-database-schema)
- [Resume Highlights](#-resume-highlights)
- [API Endpoints](#-api-endpoints)
- [Design System](#-design-system)
- [Malpractice Detection](#️-malpractice-detection-summary)
- [Future Additions](#-future-additions)
- [Author](#-author)
- [License](#-license)

---

## ✨ Features

### 🎓 For Students
- **Take Exams** - MCQ-based assessments with timer
- **Real-Time Proctoring** - AI monitors via webcam during exams
- **Face Registration** - One-time face capture with review step
- **Instant Results** - See scores and detailed review immediately
- **Submission History** - Track all past exam attempts

### 👨‍🏫 For Teachers
- **Create Exams** - Add MCQ questions with duration settings
- **Manage Exams** - Activate/deactivate exams on demand
- **Analytics Dashboard** - Visual charts and statistics
- **Suspicious Students** - Identify high-warning students with risk levels
- **Malpractice Events Viewer** - Expandable timeline of violations per submission
- **Raw SQL Analytics** - Complex aggregations using `prisma.$queryRaw`
- **Inline Validation** - Visual feedback (red borders) for incomplete exam fields

### 🔒 Security Features (14 Anti-Cheating Measures)
- **Face Detection** - Detects missing face or multiple faces
- **Face Matching** - Verifies identity against registered face using Euclidean distance
- **Face Registration Review** - Preview before saving to prevent bad captures
- **Tab-Switch Detection** - Auto-submits after 3 tab switches
- **Fullscreen Enforcement** - Forces fullscreen mode during exam
- **Copy/Paste Block** - Disables Ctrl+C, Ctrl+V, F12, PrintScreen
- **Right-Click Block** - Prevents context menu access
- **Screenshot Prevention** - Blurs content when window loses focus
- **Mobile Blocking** - Desktop-only enforcement for exam integrity
- **Rate Limiting** - Prevents brute-force attacks
- **Teacher Access Code** - Restricts teacher registration
- **Question Randomization** - Questions shuffled per student to prevent answer sharing
- **Refresh Warning** - Browser confirmation before leaving exam page

### 🔐 Authentication
- **JWT-based Auth** - Secure token authentication
- **Google OAuth** - One-click Google sign-in with role selection modal
- **Password Reset** - Email-based reset flow with Resend
- **Role-Based Access** - Separate dashboards for teachers and students

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | React 19, Vite, Tailwind CSS |
| **Backend** | Node.js, Express.js |
| **Database** | PostgreSQL (Neon.tech) |
| **ORM** | Prisma (with Raw SQL for analytics) |
| **Auth** | JWT, bcrypt, Google OAuth |
| **AI/ML** | face-api.js (TinyFaceDetector + FaceRecognitionNet) |
| **Email** | Resend.com |
| **Charts** | Recharts |

---

## 📁 Project Structure

```
Sentinel/
├── src/                          # Frontend (React)
│   ├── components/
│   │   ├── ConfirmDialog.jsx     # Confirmation modals
│   │   ├── FaceRegistration.jsx  # Face capture with review step
│   │   ├── Footer.jsx            # Footer component
│   │   ├── MobileBlocker.jsx     # Mobile device blocker
│   │   ├── RoleSelectionModal.jsx# Google OAuth role picker
│   │   └── Skeleton.jsx          # Loading skeletons
│   ├── context/
│   │   └── AuthContext.jsx       # Authentication state
│   ├── pages/
│   │   ├── Analytics.jsx         # Raw SQL dashboard with charts
│   │   ├── CreateExam.jsx        # Exam creation with inline validation
│   │   ├── ExamDetail.jsx        # Exam management + malpractice viewer
│   │   ├── ExamPrecheck.jsx      # Pre-exam security checks
│   │   ├── ForgotPassword.jsx    # Password reset request
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── ResetPassword.jsx     # Password reset with token
│   │   ├── Results.jsx           # Pie charts + answer review
│   │   ├── StudentDashboard.jsx
│   │   ├── SubmissionHistory.jsx # Past exam attempts
│   │   ├── TakeExam.jsx          # AI proctoring + face verification
│   │   └── TeacherDashboard.jsx
│   └── services/
│       └── api.js                # Axios interceptors
│
├── server/                       # Backend (Express)
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── analyticsController.js # $queryRaw SQL 
│   │   │   ├── authController.js      # Login, Register, Google OAuth
│   │   │   ├── examController.js
│   │   │   ├── faceController.js      # Face descriptor management
│   │   │   ├── questionController.js  # Question CRUD
│   │   │   └── submissionController.js
│   │   ├── middleware/
│   │   │   ├── authMiddleware.js      # JWT protection
│   │   │   ├── rateLimiter.js         # Rate limiting
│   │   │   └── sanitizer.js           # XSS protection
│   │   ├── routes/
│   │   │   ├── analyticsRoutes.js
│   │   │   ├── authRoutes.js
│   │   │   ├── examRoutes.js
│   │   │   ├── questionRoutes.js
│   │   │   ├── submissionRoutes.js
│   │   │   └── userRoutes.js          # Face descriptor endpoints
│   │   └── services/
│   │       └── emailService.js        # Resend integration
│   ├── prisma/
│   │   └── schema.prisma              # Database schema with indexes
│   └── server.js                      # Express entry point
│
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL database (or use [Neon.tech](https://neon.tech))
- Google Cloud Console project (for OAuth)

### 1. Clone & Install

```bash
git clone <repo-url>
cd "Exam Portal"

# Install frontend dependencies
npm install

# Install backend dependencies
cd server
npm install
```

### 2. Environment Setup

**Frontend `.env`:**
```env
VITE_GOOGLE_CLIENT_ID=your-google-client-id
```

**Backend `server/.env`:**
```env
DATABASE_URL=postgresql://user:password@host/database?sslmode=require
JWT_SECRET=your-super-secret-jwt-key
TEACHER_SECRET=SENTINEL2024
GOOGLE_CLIENT_ID=your-google-client-id
RESEND_API_KEY=re_xxxxxxxx  # Optional, for emails
FRONTEND_URL=http://localhost:5173
```

### 3. Database Setup

```bash
cd server
npx prisma generate
npx prisma db push
```

### 4. Run Development Servers

```bash
# Terminal 1 - Backend
cd server && npm run dev

# Terminal 2 - Frontend
npm run dev
```

### 5. Access the App
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

---

## 📊 Database Schema

```prisma
model User {
  id               String    @id @default(uuid())
  name             String
  email            String    @unique
  password         String
  role             Role      @default(STUDENT)
  faceDescriptor   Float[]   // 128-dimensional face vector
  faceRegisteredAt DateTime?
  exams            Exam[]    @relation("TeacherExams")
  submissions      Submission[]
}

model Exam {
  id          String       @id @default(uuid())
  title       String
  description String?
  duration    Int          // Duration in minutes
  isActive    Boolean      @default(true)
  teacherId   String
  teacher     User         @relation("TeacherExams")
  questions   Question[]
  submissions Submission[]
  
  @@index([teacherId])  // Faster teacher lookup
  @@index([isActive])   // Filter optimization
}

model Question {
  id            String @id @default(uuid())
  text          String
  options       Json   // ["Option A", "Option B", "Option C", "Option D"]
  correctOption Int    // Index 0-3
  examId        String
  
  @@index([examId])  // Faster exam questions lookup
}

model Submission {
  id                String   @id @default(uuid())
  score             Int
  totalQuestions    Int
  warningsCount     Int      @default(0)
  malpracticeEvents Json?    // Detailed event log
  answers           Json
  studentId         String
  examId            String
  submittedAt       DateTime @default(now())
  
  @@unique([studentId, examId])  // One submission per student per exam
  @@index([studentId])           // Performance optimization
  @@index([examId])              // Query optimization
  @@index([submittedAt])         // Sorting optimization
}

model PasswordReset {
  id        String   @id @default(uuid())
  token     String   @unique
  email     String
  expiresAt DateTime
  used      Boolean  @default(false)
}
```

> 💡 **Performance Note:** 7 database indexes added on foreign keys to reduce query time complexity from O(n) to O(log n)

---

## 🔥 Resume Highlights

### 1. Raw SQL Proficiency (The Backend Flex)
```javascript
// analyticsController.js - Complex aggregation query
const suspiciousStudents = await prisma.$queryRaw`
  SELECT 
    u.name, u.email,
    COUNT(s.id) as exams_taken,
    AVG(s.score::float / NULLIF(s."totalQuestions", 0) * 100) as avg_score,
    SUM(s."warningsCount") as total_warnings,
    CASE 
      WHEN SUM(s."warningsCount") > 10 THEN 'HIGH'
      WHEN SUM(s."warningsCount") > 5 THEN 'MEDIUM'
      ELSE 'LOW'
    END as risk_level
  FROM "User" u
  LEFT JOIN "Submission" s ON u.id = s."studentId"
  WHERE u.role = 'STUDENT'
  GROUP BY u.id
  HAVING SUM(s."warningsCount") > 0
  ORDER BY total_warnings DESC
`;
```

### 2. Face Identity Verification
```javascript
// TakeExam.jsx - Euclidean distance comparison
const distance = faceapi.euclideanDistance(
  currentDescriptor, 
  storedDescriptor
);
if (distance > 0.6) {
  logEvent('FACE_MISMATCH', { distance });  // Different person!
}
```

### 3. OAuth Interception Pattern
```javascript
// New Google users get role selection modal
if (!existingUser && !role) {
  return { needsRoleSelection: true, name, email };
}
```

### 4. Anti-Cheating Event Logging
```javascript
// Every violation is logged with timestamp
malpracticeEvents: [
  { type: 'TAB_SWITCH', timestamp: '...' },
  { type: 'FACE_NOT_DETECTED', timestamp: '...' },
  { type: 'MULTIPLE_FACES', faceCount: 2, timestamp: '...' },
  { type: 'FACE_MISMATCH', distance: '0.72', timestamp: '...' },
  { type: 'FULLSCREEN_EXIT', timestamp: '...' },
  { type: 'COPY_PASTE_ATTEMPT', key: 'c', timestamp: '...' }
]
```

### 5. Database Performance Optimization
```prisma
// schema.prisma - Indexes for query optimization
model Submission {
  @@index([studentId])   // O(n) → O(log n) lookup
  @@index([examId])      // Faster JOIN operations
  @@index([submittedAt]) // Optimized date sorting
}
```

---

## 📝 API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login with email/password |
| POST | `/api/auth/google` | Google OAuth with role selection |
| POST | `/api/auth/forgot-password` | Request password reset |
| POST | `/api/auth/reset-password` | Reset password with token |

### Face Verification
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users/face-status` | Check if face is registered |
| POST | `/api/users/face-descriptor` | Register face (128 floats) |
| GET | `/api/users/face-descriptor` | Get stored descriptor |
| DELETE | `/api/users/face-descriptor` | Remove face for re-registration |

### Analytics (Raw SQL)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/analytics/overview` | Platform-wide statistics |
| GET | `/api/analytics/suspicious-students` | Students with warnings + risk level |
| GET | `/api/analytics/exam-performance` | Per-exam metrics |

---

## 🎨 Design System

- **Theme**: Deep Dark Mode (`bg-zinc-950`)
- **Style**: Glassmorphism with `backdrop-blur`
- **Typography**: Inter / Plus Jakarta Sans
- **Animations**: Subtle micro-interactions
- **Layout**: Bento Grid for dashboards

---

## 🛡️ Malpractice Detection Summary

| Detection | Trigger | Action |
|-----------|---------|--------|
| No Face | 3 consecutive misses | Warning toast |
| Multiple Faces | 2+ faces detected | Logged |
| Face Mismatch | Distance > 0.6 | Logged + Warning |
| Tab Switch | Browser hidden | Warning + 3 strikes = auto-submit |
| Fullscreen Exit | Esc pressed | Warning + auto re-request |
| Copy/Paste | Ctrl+C/V/A/P/S | Blocked + logged |
| Right-Click | Context menu | Blocked |
| Window Blur | Alt+Tab | Content blurs |

---

## 🚧 Future Additions

- [ ] **Answer Option Shuffling** - Randomize option order per question to prevent answer sharing
- [ ] **Time Per Question Tracking** - Analytics on time spent per question
- [ ] **IP Geolocation** - Verify student is taking exam from expected location
- [ ] **Session Recording** - Video proof for academic integrity disputes
- [ ] **Lockdown Browser** - Electron-based desktop app for OS-level security (screenshot/process blocking)
- [ ] **Multi-Tenant Support** - Organization model for institutional deployments with data isolation

---

## 👨‍💻 Author

**Rishabh Tripathi**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/rishabh-tripathi-b96000264/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-black?style=flat&logo=github)](https://github.com/rishabh148)

Built with ❤️ as a portfolio project demonstrating:
- Full-stack development with React + Node.js
- Database design with PostgreSQL + Prisma + **performance indexing**
- **Raw SQL queries** for analytics (`$queryRaw`)
- OAuth implementation with Google
- **AI/ML integration** with face-api.js
- **Identity verification** using Euclidean distance on face descriptors
- 14+ anti-cheating measures for exam integrity
- Modern UI/UX with Tailwind CSS

---

## 📄 License

MIT License - feel free to use this for your own projects!
