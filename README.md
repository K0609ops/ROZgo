# ROZgo

ROZgo is a comprehensive cooperative platform designed to connect unorganized sector workers (plumbers, electricians, daily helpers, domestic workers, etc.) directly with local employers and households. By removing predatory middlemen and agencies, ROZgo ensures workers get 100% of their agreed wages while providing employers with verified, reliable local talent.

## 🚀 Features

### For Workers
- **Direct Matching:** No middlemen, no commission fees. Keep 100% of what you earn.
- **Verified Digital Identity:** Every verified worker gets a unique "ROZgo Labour Number".
- **Dynamic Portfolios:** Build a profile with ratings, reviews, past completed jobs, and skill certifications.
- **Grievance Redressal:** Built-in protection against wage theft and exploitation.

### For Employers
- **Transparent Hiring:** See upfront pricing, verified reviews, and proximity of workers.
- **Mutual Agreements:** Digitally finalize wages, dates, and times before work begins.
- **Easy Tracking:** Manage ongoing requests, completed services, and past agreements all in one dashboard.

## 🛠️ Tech Stack

- **Frontend:** React (Vite), TypeScript, Tailwind CSS, Lucide Icons
- **Backend:** Python, FastAPI
- **Database & Authentication:** Supabase (PostgreSQL)

---

## 💻 Local Development Setup

To run this project locally, you will need Node.js, Python, and a Supabase project.

### 1. Database Setup (Supabase)
1. Create a new project on [Supabase](https://supabase.com).
2. Go to the **SQL Editor** in your Supabase dashboard.
3. Copy the contents of `backend/sql/schema.sql` and run it in the SQL Editor to create the necessary tables (`worker_profiles`, `employer_profiles`, etc.).

### 2. Backend Setup (FastAPI)
1. Open a terminal and navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Create and activate a Python virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use: venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Configure environment variables (create a `.env` file or export them):
   ```bash
   export SUPABASE_URL="your_supabase_project_url"
   export SUPABASE_KEY="your_supabase_service_role_key"
   ```
5. Start the server:
   ```bash
   uvicorn app.main:app --reload --port 8000
   ```

### 3. Frontend Setup (React/Vite)
1. Open a new terminal and navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install Node dependencies:
   ```bash
   npm install
   ```
3. (Optional) Create a `.env` file in the frontend folder if your backend is running on a different port:
   ```env
   VITE_API_URL=http://localhost:8000
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## 🌐 Deployment
- **Frontend** can be seamlessly deployed to platforms like **Vercel** or **Netlify**. Ensure you set the `VITE_API_URL` environment variable to your production backend URL.
- **Backend** can be deployed to platforms like **Render**, **Railway**, or **Heroku**. Ensure you configure the `SUPABASE_URL` and `SUPABASE_KEY` environment variables.

## 📄 License
This project was built for hackathon purposes.
