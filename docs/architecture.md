# triagex – System Architecture

## Overview
triagex follows a mobile-first, AI-driven microservice architecture.
The system is designed to keep the mobile app lightweight while delegating AI intelligence to backend services.

---

## High-Level Flow
Mobile App (React Native)
→ FastAPI Backend
→ AI Services (Vertex AI)
→ Vector Database (RAG)
→ Response back to Mobile App

---

## Components

### 1. Mobile Application (React Native)
- Used by developers, QA engineers, and on-call engineers
- Handles:
  - Bug capture
  - Screenshot upload
  - Viewing AI-structured issues
  - Triage board interaction
- Sends raw bug input to backend APIs

---

### 2. Backend API (FastAPI)
- Acts as the orchestration layer
- Responsibilities:
  - Receive bug reports from mobile
  - Call AI services for analysis
  - Trigger duplicate detection via vector search
  - Return structured bug data to mobile

---

### 3. AI Intelligence Layer
- Powered by Firebase Vertex AI
- Core responsibilities:
  - Convert unstructured bug text into structured issues
  - Suggest severity and insights
  - Assist in duplicate detection logic

---

### 4. RAG & Vector Search
- Stores embeddings of past bug reports
- Used to detect similar or duplicate issues
- Improves triage quality over time

---

### 5. DevOps & Observability
- Docker used to containerize AI and RAG services
- Fastlane used for mobile beta deployments
- Sentry used for client-side crash monitoring

---

## Design Principles
- Mobile-first execution
- AI as a core feature, not an add-on
- Clear separation of concerns
- Scalable and mentor-review safe architecture
