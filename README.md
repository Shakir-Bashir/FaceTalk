# 🌍 Face Talk  

A **language exchange and social platform** featuring **real-time chat, video calls, and customizable themes**. Built with the **MERN stack + Stream API**, it combines **scalability, reliability, and an engaging UI** for modern social interaction.  


## 🌟 Highlights  

- 🌐 Real-time Messaging with **Typing Indicators & Reactions**  
- 📹 **1-on-1 and Group Video Calls** with Screen Sharing & Recording  
- 🔐 Secure **JWT Authentication** & Protected Routes  
- 🎨 **32 Unique UI Themes** for personalization  
- 🧠 **Global State Management** with Zustand  
- 🚨 Robust **Error Handling** (Frontend & Backend)  
- ⚡ **Optimized Data Fetching** with TanStack Query  
- 🚀 **Deployment Ready** (Vercel + Render/Heroku)  
- 🎯 Built with scalable technologies like **Stream API & WebRTC**  

---

## 🛠 Tech Stack  

| Layer        | Technologies |
|--------------|--------------|
| **Frontend** | React 19, TailwindCSS, TanStack Query, Zustand |
| **Backend**  | Node.js, Express.js |
| **Database** | MongoDB |
| **Auth**     | JWT |
| **Real-Time**| Stream API,  |
| **Deployment** |  Render (backend) |

---

## 🧩 Core Features  

- **Authentication** → Signup, login, logout with JWT  
- **Onboarding Flow** → Smooth user onboarding process  
- **Friends System** → Send/accept friend requests & recommended users  
- **Chat System** → Real-time chat, notifications, reactions  
- **Video Calling** → 1-on-1 & group calls, screen sharing, recording  
- **UI Customization** → 32 different themes with live previews  
- **API Testing** → Endpoints tested for reliability  
- **Custom Hooks & Clean Architecture** → Reusable and scalable codebase  



# .env Setup
## Backend
```
PORT=5001
MONGO_URI=your_mongo_uri
STEAM_API_KEY=your_steam_api_key
STEAM_API_SECRET=your_steam_api_secret
JWT_SECRET_KEY=your_jwt_secret
NODE_ENV=development
```
## Frontend
```
VITE_STREAM_API_KEY=your_stream_api_key
```
##  Run the Backend
```
cd backend
npm install
npm run dev
```
##  Run the Frontend
```
cd frontend
npm install
npm run dev
```
