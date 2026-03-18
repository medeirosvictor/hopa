# Hopa

Hopa is a virtual closet, log your clothes. saved ON device, and get suggestions of outfits and data on your items. Know what u use the most and what needs either more love or to be donated! Save outfits for later and find interesting cominbations in your closet while fometing a culture of cycling clothing pieces and incentivizing donation culture aroudn the items that are just gathering dust layers

## Project Structure

```
.
├── frontend/          # Vite + Svelte + Tailwind CSS
│   ├── src/
│   ├── package.json
│   └── ...
├── backend/           # FastAPI + PostgreSQL
│   ├── app/
│   ├── requirements.txt
│   └── ...
└── docker-compose.yml
```

## Getting Started

### Frontend

```bash
cd frontend
pnpm install
pnpm dev
```

### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Database

```bash
docker-compose up -d db
```

## Tech Stack

- **Frontend**: Vite, Svelte, Tailwind CSS, pnpm
- **Backend**: Python, FastAPI, SQLAlchemy
- **Database**: PostgreSQL
