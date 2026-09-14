# Airbnb Clone (Frontend)

A modern, highly responsive frontend clone of Airbnb's property listing page built with React and Vite. This project meticulously replicates the core user interface, interactions, and sticky behaviors of the actual Airbnb property details layout.

## 🚀 Features

- **Pixel-Perfect UI:** Identical typography, spacing, styling, and color schemes.
- **Dynamic Image Gallery:** Interactive lightbox and custom photo tour components.
- **Complex Layouts:** Responsive CSS Grid and Flexbox layouts.
- **Sticky Booking Sidebar:** Faithfully recreated bounded sticky sidebar that behaves just like Airbnb's right-hand booking card.
- **Smooth Navigation:** Sticky sub-navigation for quick jumps to different page sections.
- **Interactive UI Elements:** Modals, tooltips, toggleable save buttons, and more.
- **Vite Powered:** Extremely fast build and HMR (Hot Module Replacement).

## 📂 Project Structure

The React application is contained entirely within the `frontend/vite-project` directory.

## 💻 Running Locally

1. Navigate to the frontend directory:
   ```bash
   cd frontend/vite-project
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the local link provided in your terminal (usually `http://localhost:5173`).

## ☁️ Deploying to Vercel

This project is perfectly configured to be deployed on Vercel. Because the Vite project is nested inside a subfolder, you need to configure the Vercel Root Directory correctly.

**Option 1: Vercel Dashboard (Recommended)**
1. Push this repository to your GitHub account.
2. Log in to [Vercel](https://vercel.com/) and click **Add New... > Project**.
3. Import your GitHub repository.
4. **CRITICAL STEP:** In the "Configure Project" screen, look for **Root Directory**. Click Edit, and select the `frontend/vite-project` folder.
5. Vercel will automatically detect Vite and set the Build Command to `npm run build` and Output Directory to `dist`.
6. Click **Deploy**.

**Option 2: Vercel CLI**
If you have the Vercel CLI installed globally (`npm i -g vercel`), simply run:
```bash
cd frontend/vite-project
vercel
```