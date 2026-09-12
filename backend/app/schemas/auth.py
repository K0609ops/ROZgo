from pydantic import BaseModel, Field
from typing import Optional, Any, Dict



class LoginPasswordRequest(BaseModel):
    phone: str
    password: str

class RegisterRequest(BaseModel):
    phone: str
    role: str = Field(..., description="worker or employer")
    name: str
    password: Optional[str] = None
    location: Optional[str] = None
    primary_skill: Optional[str] = None
    experience_years: Optional[int] = 0
    dob_or_age: Optional[str] = None
    gender: Optional[str] = None
    preferred_language: Optional[str] = None
    state: Optional[str] = None
    district: Optional[str] = None
    city: Optional[str] = None
    pincode: Optional[str] = None
    travel_radius: Optional[str] = None
    selected_trades: Optional[list] = None
    sub_skills: Optional[list] = None
    experience_range: Optional[str] = None
    experience_description: Optional[str] = None
    usual_availability: Optional[list] = None
    available_today: Optional[bool] = None
    employer_type: Optional[str] = None
    business_name: Optional[str] = None
    avatar: Optional[str] = None

class AuthResponse(BaseModel):
    success: bool
    token: str
    role: str
    user: Dict[str, Any]
    profile: Dict[str, Any]

