# ROZgo — Project Technical Documentation

> **ROZgo** is a full-stack labour and trade worker marketplace platform for India, connecting informal sector workers (plumbers, electricians, carpenters, masons, painters, domestic helpers) with employers who need on-demand services.

---

## 1. Project Overview

### Mission
Digitise India's unorganised labour market by giving blue-collar workers a verified identity, fair wage negotiation, and seamless job discovery — while giving employers a trusted, structured way to hire locally.

### Core User Roles
| Role | Description |
|------|-------------|
| **Worker** | Skilled trade workers looking for daily/hourly jobs |
| **Employer** | Individuals, households, or businesses posting work requests |
| **Admin** | Platform moderators managing KYC verification and grievances |

### Live URLs
| Service | URL |
|---------|-----|
| **Frontend** | Deployed on **Vercel** |
| **Backend API** | `https://rozgo-backend.onrender.com` |
| **API Docs** | `https://rozgo-backend.onrender.com/docs` |
| **Database** | Supabase (PostgreSQL) |

### Demo Credentials
| Role | Phone | Password |
|------|-------|----------|
| Worker | `1234567890` | `123456` |
| Employer | `1122334455` | `123456` |

---

## 2. Tech Stack

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.x | UI framework (SPA) |
| **TypeScript** | ~6.0 | Static type safety |
| **Vite** | 8.x | Build tool and dev server |
| **React Router DOM** | 7.x | Client-side routing |
| **Tailwind CSS** | 3.4 | Utility-first CSS framework |
| **Lucide React** | 1.41 | Icon library |
| **PostCSS / Autoprefixer** | Latest | CSS processing |

### Backend
| Technology | Version | Purpose |
|------------|---------|---------|
| **FastAPI** | ≥0.115 | High-performance REST API framework |
| **Python** | 3.12 | Runtime |
| **Uvicorn** | ≥0.32 | ASGI server |
| **Pydantic** | ≥2.9 | Data validation and serialization |
| **Pydantic Settings** | ≥2.6 | Environment variable management |
| **Supabase Python** | ≥2.10 | Database client |
| **python-jose** | ≥3.3 | JWT token creation and verification |
| **passlib[bcrypt]** | ≥1.7 | Password hashing |
| **python-multipart** | ≥0.0.12 | File uploads |
| **httpx / requests** | Latest | HTTP client utilities |

### Database & Storage
| Technology | Purpose |
|------------|---------|
| **Supabase (PostgreSQL)** | Primary relational database |
| **Supabase Storage** | File storage for worker documents and media |
| **Bucket: `worker-documents`** | Private KYC documents (Aadhaar, e-Shram cards) |
| **Bucket: `public-media`** | Public worker profile photos and portfolio images |

### Infrastructure & Deployment
| Component | Platform |
|-----------|----------|
| **Frontend hosting** | Vercel (auto-deploys from `sid-backend` branch) |
| **Backend hosting** | Render (Free tier, auto-deploys from GitHub) |
| **Database** | Supabase (managed PostgreSQL + Storage + Auth) |
| **OTP / SMS** | Twilio Verify (production SMS OTP for phone auth) |
| **Container** | Docker (Dockerfile available for self-hosting) |
| **CI/CD** | GitHub → Render (backend), GitHub → Vercel (frontend) |

---

## 3. Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        CLIENT BROWSER                        │
│   React SPA (Vite) — Deployed on Vercel                     │
│   React Router v7 | TailwindCSS | TypeScript                │
└──────────────────────────┬──────────────────────────────────┘
                           │  HTTPS REST API calls
                           │  (Bearer Token Auth)
┌──────────────────────────▼──────────────────────────────────┐
│                  BACKEND — FastAPI on Render                 │
│   Python 3.12 | Uvicorn ASGI | Pydantic v2                  │
│                                                              │
│   Routers:                                                   │
│   /api/v1/auth       — Login, Register, OTP, JWT           │
│   /api/v1/workers    — Worker profiles, listings            │
│   /api/v1/employers  — Employer profiles                    │
│   /api/v1/bookings   — Full booking lifecycle               │
│   /api/v1/services   — Service categories catalog          │
│   /api/v1/sync       — Profile sync from localStorage      │
│   /api/v1/uploads    — Document and media file uploads      │
└──────────────────────────┬──────────────────────────────────┘
                           │  Supabase Python Client
┌──────────────────────────▼──────────────────────────────────┐
│                  DATABASE — Supabase (PostgreSQL)            │
│   Tables: users, worker_profiles, employer_profiles,        │
│           bookings, reviews, receipts, grievances,          │
│           service_categories, verification_applications     │
│                                                              │
│   Storage: worker-documents (private), public-media (public)│
└─────────────────────────────────────────────────────────────┘
```

### State Management (Frontend)
| Context | Purpose |
|---------|---------|
| `AuthContext` | Login state, JWT token, user role and profile |
| `BookingContext` | Active bookings, job matching, agreement flow |
| `GrievanceContext` | Dispute tracking and messaging |
| `LanguageContext` | Multi-language translation state |
| `ThemeContext` | Dark/light theme preference |

---

## 4. Database Schema

### Tables

#### `users`
Core authentication table.
```sql
id          UUID PK
phone       VARCHAR(20) UNIQUE
role        VARCHAR(20) CHECK (worker | employer | admin)
password_hash  VARCHAR(255)
created_at  TIMESTAMPTZ
updated_at  TIMESTAMPTZ
```

#### `worker_profiles`
Full worker identity, skills and history.
```sql
id                  VARCHAR(50) PK   -- e.g. "hr-gu-0001"
labour_no           VARCHAR(50) UNIQUE
name, phone, avatar, location, service_area
primary_skill, skills TEXT[]
experience_years, daily_rate, hourly_rate
rating, reviews_count
verification_status -- pending | verified | rejected
bio
work_locations, languages, education, certifications JSONB
portfolio, availability, benefits, work_history JSONB
```

#### `employer_profiles`
Employer identity and hiring preferences.
```sql
id, name, phone, email, avatar
employer_type    -- individual | business | contractor
business_name, business_type, employee_count
location, bio
hiring_preferences, verification_details, work_locations JSONB
```

#### `bookings`
The full lifecycle of a work agreement.
```sql
id UUID PK
booking_reference VARCHAR(20) UNIQUE  -- e.g. "RZG-BK-A1B2"
employer_id → employer_profiles
worker_id   → worker_profiles
service_id, subcategory_id
job_title, description, location
date, duration_days
wage_offer, wage_type  -- daily | hourly
status  -- requested | matched | agreement_pending | active | completed | cancelled
agreement_confirmed_by_employer BOOLEAN
agreement_confirmed_by_worker   BOOLEAN
special_terms
```

#### `reviews`
Post-job ratings.
```sql
booking_id, worker_id, author_name, author_role
rating (1–5), comment, job_title, tags TEXT[]
```

#### `verification_applications`
KYC document submission and review.
```sql
worker_id, worker_name, worker_phone
method    -- aadhaar | eshram | other_id
masked_identifier, front_document_url, back_document_url, selfie_url
status    -- pending | verified | rejected | photo_resubmit_needed
reviewed_at, reviewed_by, rejection_reason
```

#### `receipts`
Digital payment receipts.
```sql
receipt_number UNIQUE  -- e.g. "RZG-RCP-A62F86"
booking_id, employer_id, worker_id
amount, currency (INR), payment_status, payment_method
breakdown JSONB
```

#### `grievances`
Dispute and redressal tracking.
```sql
id (custom), user_id, user_name, user_phone, user_role
category, title, description, booking_id
status  -- submitted | under_review | info_requested | in_investigation | resolved | closed | escalated
priority -- low | medium | high | urgent
evidence, messages JSONB
resolution
```

#### `service_categories`
Master catalog of service types with i18n keys and subcategories (stored as JSONB).

---

## 5. API Endpoints

Base URL: `https://rozgo-backend.onrender.com/api/v1`

### Authentication (`/auth`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/auth/login` | Login with phone + password → JWT |
| `POST` | `/auth/register` | Register new worker or employer |
| `POST` | `/auth/otp/send` | Send OTP via Twilio Verify |
| `POST` | `/auth/otp/verify` | Verify OTP and issue JWT |
| `GET`  | `/auth/me` | Get current logged-in user profile |

### Workers (`/workers`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/workers` | List all workers with optional skill filter |
| `GET` | `/workers/{id}` | Get worker by ID |
| `GET` | `/workers/labour-no/{no}` | Get by labour number |
| `PUT` | `/workers/profile` | Update own profile |
| `GET` | `/workers/jobs/recommended` | Get job recommendations for worker |

### Bookings (`/bookings`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/bookings/request` | Create new work request |
| `POST` | `/bookings/match` | Smart match workers to a request |
| `POST` | `/bookings/agreement/confirm` | Employer confirms booking + wage |
| `POST` | `/bookings/agreement/worker-response` | Worker accepts or rejects |
| `GET`  | `/bookings/active` | Get all active bookings |
| `POST` | `/bookings/{id}/complete` | Mark job as complete, trigger receipt |
| `POST` | `/bookings/{id}/review` | Submit review after completion |
| `POST` | `/bookings/contracts/submit` | Submit digital contract |

### Services (`/services`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/services` | Get all service categories with subcategories |
| `GET` | `/services/categories` | Alias for category list |

### Sync (`/sync`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/sync/worker` | Sync worker profile from localStorage → Supabase |
| `POST` | `/sync/employer` | Sync employer profile from localStorage → Supabase |

### Uploads (`/uploads`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/uploads/document` | Upload KYC document (base64 or file) |
| `POST` | `/uploads/media` | Upload profile photo or portfolio image |

---

## 6. Key Features

### Worker Side
- **Dashboard** — View active jobs, pending agreements, earnings summary
- **Find Work** — Browse employer job postings filtered by skill and location
- **Job Accept / Reject Flow** — Receive booking requests, review terms, accept or decline
- **Work History** — Full completed jobs log with receipts and earnings
- **Profile Builder** — Skill listing, experience, education, certifications, bio, portfolio
- **KYC Verification** — Upload Aadhaar / e-Shram card with selfie for admin review
- **Labour ID** — Auto-generated sequential ID (e.g. `hr-gu-0001`) based on state and city

### Employer Side
- **Home / Service Discovery** — Browse 6 service categories with subcategory drill-down
- **Create Work Request** — Specify job, date, time, location, and wage offer
- **Smart Worker Matching** — Equal-opportunity rotation algorithm matches the best available worker
- **Agreement Flow** — Review worker details, confirm wage, wait for worker acceptance
- **My Requests** — Track all bookings by status (requested → active → completed)
- **Completed Services** — History with receipts and rating capability
- **Employer Profile** — Business details, hiring history, verification

### Platform Features
- **Multi-language Support** — 8 languages: English, Hindi, Bengali, Gujarati, Kannada, Malayalam, Tamil, Telugu
- **Dark / Light Theme** — System-aware with manual toggle
- **Grievance & Redressal System** — Raise, track, and resolve disputes with admin portal
- **Digital Receipts** — Auto-generated receipts with unique numbers (e.g. `RZG-RCP-A62F86`)
- **Equal Opportunity Rotation** — Workers without recent work are ranked higher in match results
- **Fallback / Offline Demo Mode** — App works with local mock data if backend is unavailable

---

## 7. Service Categories

| Service | Subcategories |
|---------|--------------|
| **Plumber** | Tap Repair, Pipe Leakage, Drain Cleaning, Bathroom Plumbing, Water Tank Installation |
| **Electrician** | Switchboard Repair, Fan Install, MCB/Fuse, LED Lighting, Inverter Wiring |
| **Carpenter** | Furniture Repair, Door Lock, Wardrobe Fix, Window Mesh |
| **Domestic Help** | Daily Cleaning, Deep Cleaning, Utensil Washing, Elderly Care |
| **Mason & Construction** | Tile Laying, Wall Plastering, Brickwork, Concrete Slab |
| **Painter** | Interior Paint, Exterior Paint, Wall Putty & Primer, Waterproofing |

---

## 8. Worker ID Format

Workers get a geographically encoded sequential ID:

```
<state-code>-<city-code>-<sequence>
Examples:
  hr-gu-0001   → Haryana, Gurgaon, Worker #1
  mh-pn-0001   → Maharashtra, Pune, Worker #1
  dl-nd-0005   → Delhi, New Delhi, Worker #5
```

State and city codes are parsed from the worker's registered location string automatically.

---

## 9. Authentication Flow

```
User enters phone + password
         │
         ▼
POST /api/v1/auth/login
         │
Backend normalises phone (strips +91, spaces)
         │
Searches users table → checks bcrypt hash
         │
If not found → falls back to worker_profiles / employer_profiles
         │
Returns JWT (HS256, 30-day expiry) + full profile object
         │
Frontend stores token in localStorage ("rozgo_auth_token")
         │
All subsequent requests include: Authorization: Bearer <token>
```

### OTP Flow (Alternative)
```
POST /auth/otp/send    → Twilio sends 6-digit OTP via SMS
POST /auth/otp/verify  → Validates OTP → Returns JWT
```

---

## 10. Booking Lifecycle

```
REQUESTED
    │  Employer creates work request (POST /bookings/request)
    ▼
MATCHED
    │  System matches best worker (POST /bookings/match)
    ▼
AGREEMENT_PENDING
    │  Employer confirms terms (POST /bookings/agreement/confirm)
    │  Worker sees accept/reject dialog
    ▼         ▼
 ACTIVE    CANCELLED
    │  (Worker accepted)
    │
    │  Job is performed
    ▼
COMPLETED
    │  POST /bookings/{id}/complete
    │  Receipt generated (RZG-RCP-XXXXXX)
    ▼
Review submitted by either party
```

---

## 11. Frontend Route Map

| Route | Component | Access |
|-------|-----------|--------|
| `/` | `LandingPage` | Public |
| `/about` | `AboutPage` | Public |
| `/support` | `SupportTrustPage` | Public |
| `/auth/login` | `LoginPage` | Public |
| `/auth/create-account` | `RoleSelectPage` | Public |
| `/auth/onboarding` | `WorkerOnboardingPage` | Public |
| `/auth/employer-onboard` | `EmployerOnboardingPage` | Public |
| `/worker/dashboard` | `WorkerDashboardPage` | Worker |
| `/worker/find-work` | `FindWorkPage` | Worker |
| `/worker/profile` | `WorkerProfilePage` | Worker |
| `/worker/:labourId` | `PublicWorkerProfilePage` | Public |
| `/worker/completed-works` | `CompletedWorksPage` | Worker |
| `/worker/verify` | `WorkerVerificationPage` | Worker/Admin |
| `/employer` | `EmployerHomePage` | Employer |
| `/employer/request` | `CreateWorkRequestPage` | Employer |
| `/employer/match` | `WorkerMatchPage` | Employer |
| `/employer/requests` | `MyRequestsPage` | Employer |
| `/employer/profile` | `EmployerProfilePage` | Employer |
| `/employer/completed-services` | `EmployerCompletedWorksPage` | Employer |
| `/grievances` | `GrievanceLandingPage` | Public |
| `/grievances/new` | `RaiseGrievancePage` | Authenticated |
| `/grievances/my` | `MyGrievancesPage` | Authenticated |
| `/grievances/:id` | `GrievanceDetailPage` | Authenticated |
| `/admin/grievances` | `AdminGrievancePage` | Admin |

---

## 12. Environment Variables

### Backend (Render)
```env
PORT=5000
ENVIRONMENT=production
SUPABASE_URL=https://<project>.supabase.co
SUPABASE_KEY=<anon_key>
SUPABASE_SERVICE_ROLE_KEY=<service_role_key>
SUPABASE_BUCKET_DOCUMENTS=worker-documents
SUPABASE_BUCKET_MEDIA=public-media
JWT_SECRET=<secret>
JWT_ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=43200
TWILIO_ACCOUNT_SID=<sid>
TWILIO_AUTH_TOKEN=<token>
TWILIO_VERIFY_SERVICE_SID=<verify_sid>
CORS_ORIGIN=*
```

### Frontend (Vercel)
```env
VITE_API_BASE_URL=https://rozgo-backend.onrender.com/api/v1
```

---

## 13. Project Structure

```
ROZgo/
├── backend/
│   ├── app/
│   │   ├── main.py              # FastAPI app, CORS, router mounting
│   │   ├── config.py            # Settings via pydantic-settings
│   │   ├── database.py          # Supabase client factory
│   │   ├── routers/
│   │   │   ├── auth.py          # Login, register, OTP
│   │   │   ├── workers.py       # Worker CRUD + search
│   │   │   ├── employers.py     # Employer CRUD
│   │   │   ├── bookings.py      # Full booking lifecycle (994 lines)
│   │   │   ├── services.py      # Service catalog
│   │   │   ├── sync.py          # localStorage → Supabase sync
│   │   │   └── uploads.py       # File/document upload
│   │   ├── schemas/             # Pydantic request/response models
│   │   └── utils/
│   │       ├── security.py      # JWT create/verify, bcrypt
│   │       ├── worker_id.py     # Sequential geo-encoded ID generator
│   │       ├── rotation.py      # Equal-opportunity worker ranking
│   │       └── storage.py       # Supabase Storage upload helpers
│   ├── sql/schema.sql           # Full PostgreSQL schema + seed data
│   ├── requirements.txt
│   ├── Dockerfile
│   └── render.yaml              # Render deployment config
│
├── frontend/
│   ├── src/
│   │   ├── App.tsx              # Router and global providers
│   │   ├── api/
│   │   │   ├── apiClient.ts     # HTTP client (fetch + JWT headers)
│   │   │   ├── authApi.ts       # Auth-specific API calls
│   │   │   └── endpoints.ts     # Centralized endpoint strings
│   │   ├── context/             # React contexts (Auth, Booking, etc.)
│   │   ├── pages/               # Page components by role
│   │   ├── components/          # Shared UI components
│   │   ├── translations/        # 8 language translation files
│   │   └── types/               # TypeScript interfaces
│   ├── vercel.json              # SPA routing rewrites
│   └── vite.config.ts
│
└── vercel.json                  # Root-level SPA routing config
```

---

## 14. Supported Languages

| Code | Language |
|------|----------|
| `en` | English |
| `hi` | Hindi (हिंदी) |
| `bn` | Bengali (বাংলা) |
| `gu` | Gujarati (ગુજરાતી) |
| `kn` | Kannada (ಕನ್ನಡ) |
| `ml` | Malayalam (മലയാളം) |
| `ta` | Tamil (தமிழ்) |
| `te` | Telugu (తెలుగు) |

---