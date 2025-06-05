# Skip Size Selector Redesign – WeWantWaste

This project is a redesigned version of the "Skip Size Selector" page for WeWantWaste. It fulfills the challenge requirements by improving the UI/UX while maintaining the original functionality and using real-time data from the API.

## 🚀 Live Demo

[Live site hosted on Vercel / Netlify – Replace with your link]

## 📁 GitHub Repository

[Link to your public GitHub repo – Replace with your link]

---

## ✅ Challenge Requirements & How I Met Them

| Requirement | Status | Notes |
|------------|--------|-------|
| Redesign the skip selector page | ✅ | Created a modern, responsive design using cards |
| Maintain functionality | ✅ | Selecting/deselecting skips works as expected |
| Use actual skip data from API | ✅ | Data fetched from `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft` |
| Submit public GitHub + Live link | ✅ | (Include both above) |
| Submit within 72 hours | ✅ | Delivered on time |

---

## 🧩 Components

### 1. `SkipSelector.jsx`

- Fetches skip data from the API
- Displays skips as interactive, animated cards
- Supports:
  - Conditional styles for selected/unavailable skips
  - Price calculation (with VAT)
  - Dynamic icons for warnings

### 2. `SkipReceipt.jsx`

- Shows a printable-style summary receipt of the selected skip
- Auto-calculates VAT and total price
- Includes actions: back, cancel, continue

### 3. `StepProgressBar.jsx`

- Vertical step progress bar with hover interactivity
- Indicates current step
- Disables future steps
- Integrates `SkipSelector` and `SkipReceipt`

---

## 🎨 Design Goals

- Clean and modern card-based layout
- Strong color contrast for accessibility
- Fully responsive (mobile-first layout)
- Clear visual hierarchy and user flow

---

## 🔧 Tech Stack

- React (functional components + hooks)
- Plain CSS (modular per component)
- Icons from `lucide-react`
- Hosted with Vercel / Netlify

---

## 📝 How It Works

1. The page loads and fetches available skip sizes from the live API.
2. Skips are displayed as cards. Clicking a card selects/deselects it.
3. A step bar shows progress, and a receipt displays skip summary.
4. User can go back, cancel selection, or continue.

---

## 🧪 Local Setup Instructions

```bash
git clone https://github.com/mohammed-alhashim99/Skip-Size-Selector.git
cd skip-selector-redesign
npm install
npm install lucide-react
npm start
