# triagex – Screen Mapping (Design to Code)

This document maps finalized UI designs to implementation logic.
It ensures no feature or screen is missed during development.

---

## 1. Home / Dashboard Screen

### Purpose
- Give a quick overview of system status
- Allow fast access to bug reporting

### UI Elements
- App header with user avatar
- System status indicator
- “Report Incident” primary CTA
- Severity summary cards (Critical, Major, Resolved)
- Recent activity list

### User Actions
- Tap “Report Incident” → Navigate to Bug Capture Screen
- Tap issue card → Navigate to Issue Detail Screen

---

## 2. Bug Capture Screen

### Purpose
- Allow users to report bugs with minimal effort

### UI Elements
- Large multiline text input (“What went wrong?”)
- Screenshot upload button
- Dictation / voice input button
- Auto-captured context section (Device, Network, Build)
- “Triage with AI” primary CTA

### User Actions
- Enter bug description
- Attach screenshot (optional)
- Tap “Triage with AI” → Navigate to AI Preview Screen

---

## 3. AI Preview / Structuring Screen

### Purpose
- Show AI-structured version of the bug
- Allow confirmation before creating issue

### UI Elements
- AI Analysis status indicator
- Possible duplicate warning card
- Structured fields:
  - Issue Title
  - Steps to Reproduce
  - Severity Assessment
  - Environment
- “Confirm & Create” CTA

### User Actions
- Review AI output
- Tap “Confirm & Create” → Create issue and navigate to Triage Board

---

## 4. Triage Board Screen

### Purpose
- Visualize current issues and their status

### UI Elements
- Kanban columns:
  - Open
  - In Progress
  - Resolved
- Issue cards with severity indicators
- Floating action button for quick bug report

### User Actions
- Tap issue card → Navigate to Issue Detail Screen
- Swipe cards to update status

---

## 5. Issue Detail Screen

### Purpose
- Provide full visibility into an issue

### UI Elements
- Issue title and status
- AI insight cards (Root cause, Impact)
- Description and logs
- Steps to reproduce
- Assign / update status buttons

### User Actions
- Update issue status
- Assign issue
- View AI insights

---

## 6. Settings / Profile Screen (Optional)

### Purpose
- Manage user preferences

### UI Elements
- User profile information
- Appearance settings (Light/Dark/System)
- Notification preferences
- Privacy & Security options

### User Actions
- Update preferences
- Sign out

---

## Navigation Summary

Home → Bug Capture → AI Preview → Triage Board → Issue Detail  
Settings accessible via profile icon.
