# 🌟 Design Devi - AI-Powered Design Chatbot

<div align="center">

![Design Devi Banner](https://img.shields.io/badge/Design_Devi-Goddess_of_Design-purple?style=for-the-badge)
[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat&logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat&logo=node.js)](https://nodejs.org/)
[![Groq AI](https://img.shields.io/badge/Powered_by-Groq_AI-orange?style=flat)](https://groq.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat)](LICENSE)

**A mystical chatbot that answers design-related questions with divine wisdom.**

[Features](#-features) • [Tech Stack](#-tech-stack) • [Installation](#-installation) • [Usage](#-usage) • [Project Structure](#-project-structure) • [API](#-api-endpoints)

</div>

---

## ✨ Features

- 💬 **Design Expertise**: Ask questions about UI/UX, branding, color theory, typography, and more
- 🎨 **Mystical UI**: Beautiful purple-themed interface with smooth animations
- 💾 **Persistent Chat**: Automatically saves conversation history in localStorage
- 🚀 **Fast Responses**: Powered by Groq AI's LLaMA 3.1 model
- 🛡️ **Rate Limited**: Protected against API abuse with smart rate limiting
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- ✨ **Welcome Screen**: Helpful suggestions to get started
- 🔄 **Clear Chat**: Reset conversation with one click
- 🎯 **Error Handling**: User-friendly error messages

---

## 🛠️ Tech Stack

### Frontend (Client)
| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.1.1 | UI Framework |
| Vite | 7.1.7 | Build Tool |
| Tailwind CSS | 4.1.16 | Styling |
| Axios | 1.12.2 | HTTP Client |
| Lucide React | 0.548.0 | Icons |

### Backend (Server)
| Technology | Version | Purpose |
|------------|---------|---------|
| Node.js | - | Runtime |
| Express | 5.1.0 | Web Framework |
| Groq SDK | 0.34.0 | AI Integration |
| CORS | 2.8.5 | Cross-Origin Support |
| express-rate-limit | 8.1.0 | Rate Limiting |
| dotenv | 17.2.3 | Environment Variables |

---

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Groq API Key

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Asheer-ai/Design-Devi
cd Design-Devi
```

### 2️⃣ Backend Setup

```bash
cd Server
npm install
```

Create a `.env` file in the `Server` directory:
```env
GROQ_API_KEY=your_groq_api_key_here
PORT=3000
NODE_ENV=development
```

> **Note**: Replace `your_groq_api_key_here` with your actual Groq API key from [https://console.groq.com](https://console.groq.com)

Start the backend server:
```bash
npm run dev
```

✅ Backend will run on `http://localhost:3000`

### 3️⃣ Frontend Setup

Open a new terminal and navigate to the Client directory:
```bash
cd Client
npm install
```

Start the frontend development server:
```bash
npm run dev
```

✅ Frontend will run on `http://localhost:5173`

---

## 🚀 Usage

1. **Start the Backend**: Make sure the server is running on port 3000
2. **Start the Frontend**: Open `http://localhost:5173` in your browser
3. **Start Chatting**:
   - Click on suggested questions, or
   - Type your own design query
   - Design Devi will respond with mystical wisdom!

### Example Questions to Try:
- "What are the best color combinations for a healthcare app?"
- "How do I create an effective landing page layout?"
- "What fonts pair well with Helvetica?"
- "How can I improve accessibility in my designs?"
- "What's the difference between UI and UX?"

---

## 📁 Project Structure

```
Design Devi/
├── Client/                      # Frontend Application
│   ├── public/
│   │   └── devi_img.jpg        # Devi Avatar Image
│   ├── src/
│   │   ├── components/
│   │   │   ├── ChatMessage.jsx      # Message bubble component
│   │   │   ├── Header.jsx           # App header with menu
│   │   │   ├── LoadingSpinner.jsx   # Loading animation
│   │   │   ├── MessageInput.jsx     # Input field component
│   │   │   ├── MessageList.jsx      # Chat messages container
│   │   │   └── WelcomeScreen.jsx    # Initial welcome screen
│   │   ├── App.jsx              # Main application component
│   │   ├── main.jsx             # React entry point
│   │   ├── App.css              # App-specific styles
│   │   └── index.css            # Global styles
│   ├── index.html               # HTML entry point
│   ├── vite.config.js           # Vite configuration
│   └── package.json             # Frontend dependencies
│
└── Server/                      # Backend API
    ├── server.js                # Express server & API routes
    ├── .env                     # Environment variables (not in git)
    └── package.json             # Backend dependencies
```

---

## 🔌 API Endpoints

### Base URL: `http://localhost:3000`

#### `GET /ping`
Health check endpoint

**Response:**
```json
"Pong"
```

#### `POST /api/chat`
Send a message to Design Devi

**Request Body:**
```json
{
  "message": "What are the best practices for color accessibility?"
}
```

**Response:**
```json
{
  "reply": "Child of creation, let me illuminate the path of accessible colors...",
  "timestamp": "2025-10-26T10:30:00.000Z",
  "responseTime": "1234ms"
}
```

**Error Response:**
```json
{
  "error": "Error message here"
}
```

---

## 🎨 Customization

### Change the Theme Colors
Edit `Client/src/index.css` and modify the Tailwind color classes:
```css
/* Replace purple-600 with your color */
.bg-purple-600 { ... }
```

### Modify Devi's Personality
Edit `Server/server.js` and update the `DESIGN_DEVI_PROMPT` variable:
```javascript
const DESIGN_DEVI_PROMPT = `
    You are "Design Devi," a wise and mystical goddess of design...
    // Customize the prompt here
`;
```

### Add Your Own Avatar
Replace `Client/public/devi_img.jpg` with your own image (recommended size: 512x512px)

---

## 🐛 Troubleshooting

### Problem: Backend won't start
**Solutions:**
- ✅ Check if port 3000 is already in use
- ✅ Verify `GROQ_API_KEY` is set correctly in `.env`
- ✅ Run `npm install` in the Server directory

### Problem: Frontend can't connect to backend
**Solutions:**
- ✅ Ensure backend is running on `http://localhost:3000`
- ✅ Check browser console for CORS errors
- ✅ Verify both servers are running

### Problem: Messages not saving
**Solutions:**
- ✅ Check browser localStorage permissions
- ✅ Clear browser cache and reload
- ✅ Try in incognito/private mode

### Problem: Rate limit errors
**Solutions:**
- ✅ Wait 15 minutes before sending more messages
- ✅ Check the rate limit in `Server/server.js` (default: 50 requests per 15 minutes)

---

## 🔐 Environment Variables

### Server `.env` file:
```env
# Required
GROQ_API_KEY=your_groq_api_key_here

# Optional
PORT=3000
NODE_ENV=development
```

---

## 📝 Code Highlights

### Simple & Beginner-Friendly
- ✅ Clean, commented code
- ✅ Basic React hooks (useState, useEffect, useRef)
- ✅ Simple Axios API calls
- ✅ localStorage for data persistence
- ✅ Tailwind CSS for easy styling
- ✅ No complex state management

### Key Features Implementation:
- **Chat Persistence**: Uses `localStorage` to save conversations
- **Auto-scroll**: Messages automatically scroll to bottom
- **Loading States**: Shows spinner while waiting for response
- **Error Handling**: Graceful error messages for users
- **Rate Limiting**: Prevents API abuse on the backend

---

## 🚀 Building for Production

### Frontend
```bash
cd Client
npm run build
```
Build files will be in `Client/dist/`

### Backend
```bash
cd Server
# Set NODE_ENV=production in .env
npm start
```

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Groq AI** - For providing the fast LLaMA model API
- **Tailwind CSS** - For the beautiful utility-first CSS framework
- **React** - For the powerful UI library
- **Lucide Icons** - For the beautiful icon set

---

## 📧 Contact & Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/design-devi/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/design-devi/discussions)

---

<div align="center">

**Made with 💜 by [Your Name]**

*"In every pixel lies a story, in every color a feeling, and in every design, the touch of the divine."*

⭐ Star this repo if you found it helpful!

</div>
