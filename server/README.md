# 🎵 Echolia - Real-Time Chat Application
### Where Voices Resonate

A full-featured, mobile-first real-time chat application built with Socket.io, React, and Node.js. Echolia provides seamless real-time communication with advanced features like typing indicators, message reactions, file sharing, and more.

![Echolia Banner](https://ui-avatars.com/api/?name=Echolia&size=200&background=667eea&color=fff)

## 📋 Table of Contents
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [API Documentation](#-api-documentation)
- [Socket.io Events](#-socketio-events)
- [Assignment Requirements](#-assignment-requirements-compliance)
- [Screenshots](#-screenshots)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

### Core Features (Task 2)
- ✅ **User Authentication** - JWT-based secure authentication
- ✅ **Real-Time Messaging** - Instant message delivery using Socket.io
- ✅ **Global Chat Rooms** - Public rooms where all users can communicate
- ✅ **Message Timestamps** - Display message time and sender information
- ✅ **Typing Indicators** - See when other users are typing
- ✅ **Online/Offline Status** - Real-time user presence tracking

### Advanced Features (Task 3)
- ✅ **Private Messaging** - One-on-one direct messaging
- ✅ **Multiple Chat Rooms** - Create and join different channels
- ✅ **File & Image Sharing** - Upload and share media files
- ✅ **Message Reactions** - React to messages with emojis
- ✅ **Read Receipts** - See when messages are read
- ✅ **Message Editing** - Edit messages within 15 minutes

### Real-Time Notifications (Task 4)
- ✅ **New Message Alerts** - Instant notifications for new messages
- ✅ **User Join/Leave Notifications** - Know when users join or leave
- ✅ **Unread Message Count** - Track unread messages per room
- ✅ **Sound Notifications** - Optional audio alerts
- ✅ **Browser Notifications** - Native desktop notifications

### Performance & UX (Task 5)
- ✅ **Message Pagination** - Load older messages efficiently
- ✅ **Reconnection Logic** - Automatic reconnection on disconnect
- ✅ **Message Search** - Search through chat history
- ✅ **Delivery Acknowledgment** - Confirm message delivery
- ✅ **Responsive Design** - Works seamlessly on mobile and desktop
- ✅ **Multi-Device Support** - Use across multiple devices simultaneously

## 🛠 Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **Socket.io** - Real-time bidirectional communication
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **Bcrypt.js** - Password hashing
- **Cloudinary** - Cloud-based file storage
- **Multer** - File upload handling

### Frontend (Not included in this repository)
- **React** - UI library
- **Socket.io-client** - Client-side Socket.io
- **React Router** - Navigation
- **Axios** - HTTP client
- **Context API** - State management

### Additional Tools
- **Express Validator** - Input validation
- **Morgan** - HTTP request logger
- **Helmet** - Security headers
- **Compression** - Response compression
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
echolia-server/
├── config/                    # Configuration files
│   ├── cloudinary.js          # Cloudinary configuration
│   └── database.js            # MongoDB connection
├── controllers/               # Request handlers
│   ├── authController.js      # Authentication logic
│   ├── messageController.js   # Message management
│   ├── roomController.js      # Room management
│   ├── uploadController.js    # File upload handling
│   └── userController.js      # User management
├── middleware/                # Custom middleware
│   ├── auth.js                # JWT authentication
│   ├── errorHandler.js        # Error handling
│   └── validation.js          # Request validation
├── models/                    # Database models
│   ├── Message.js             # Message schema
│   ├── Room.js                # Room/Channel schema
│   └── User.js                # User schema
├── routes/                    # API routes
│   ├── authRoutes.js          # Authentication endpoints
│   ├── messageRoutes.js       # Message endpoints
│   ├── roomRoutes.js          # Room endpoints
│   ├── uploadRoutes.js        # Upload endpoints
│   └── userRoutes.js          # User endpoints
├── socket/                    # Socket.io handlers
│   └── socketHandler.js       # Main Socket.io logic
├── utils/                     # Utility functions
│   ├── jwtUtils.js            # JWT helpers
│   └── socketAuth.js          # Socket authentication
├── .env.example               # Environment variables template
├── .gitignore                 # Git ignore file
├── package.json               # Dependencies
├── package-lock.json          # Dependency lock file
└── server.js                  # Main server entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)
- MongoDB (local or cloud instance)
- Cloudinary account (for file uploads)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd echolia-server
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Then edit `.env` with your configuration (see [Environment Variables](#-environment-variables))

4. **Start MongoDB**
   ```bash
   # If using local MongoDB
   mongod
   ```

5. **Run the server**
   ```bash
   # Development mode with auto-reload
   npm run dev

   # Production mode
   npm start
   ```

6. **Server should be running on**
   ```
   http://localhost:5000
   ```

### Quick Test
```bash
# Test the health endpoint
curl http://localhost:5000/api/health
```

## 🔐 Environment Variables

Create a `.env` file in the server root directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Client Configuration
CLIENT_URL=http://localhost:5173

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/echolia
# Or use MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:<password>@cluster.mongodb.net

# JWT Configuration (Generate secure random strings)
JWT_SECRET=your_super_secret_jwt_key_min_32_characters
JWT_EXPIRES_IN=7d
JWT_REFRESH_SECRET=your_super_secret_refresh_token_key_min_32_characters
JWT_REFRESH_EXPIRES_IN=30d

# Cloudinary Configuration (Sign up at cloudinary.com)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# File Upload Configuration
MAX_FILE_SIZE=5242880
ALLOWED_FILE_TYPES=image/jpeg,image/png,image/gif,image/webp

# Socket.io Configuration
SOCKET_PING_TIMEOUT=60000
SOCKET_PING_INTERVAL=25000

# Rate Limiting (Optional)
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

**Generate secure JWT secrets:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

## 📡 API Documentation

### Authentication Endpoints

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Get Current User
```http
GET /api/auth/me
Authorization: Bearer <access_token>
```

#### Logout
```http
POST /api/auth/logout
Authorization: Bearer <access_token>
```

### Room Endpoints

#### Get Public Rooms
```http
GET /api/rooms/public
Authorization: Bearer <access_token>
```

#### Create Room
```http
POST /api/rooms
Authorization: Bearer <access_token>
Content-Type: application/json

{
  "name": "General Chat",
  "description": "A room for general discussion",
  "roomType": "public"
}
```

#### Get User's Rooms
```http
GET /api/rooms/my-rooms
Authorization: Bearer <access_token>
```

### Message Endpoints

#### Get Room Messages
```http
GET /api/messages/room/:roomId?page=1&limit=50
Authorization: Bearer <access_token>
```

#### Get Direct Messages
```http
GET /api/messages/direct/:userId?page=1&limit=50
Authorization: Bearer <access_token>
```

#### Search Messages
```http
GET /api/messages/search?q=keyword
Authorization: Bearer <access_token>
```

#### Get Unread Count
```http
GET /api/messages/unread/count
Authorization: Bearer <access_token>
```

### User Endpoints

#### Get Online Users
```http
GET /api/users/online
Authorization: Bearer <access_token>
```

#### Search Users
```http
GET /api/users/search?q=john
Authorization: Bearer <access_token>
```

#### Update Profile
```http
PUT /api/users/profile
Authorization: Bearer <access_token>
Content-Type: application/json

{
  "username": "new_username",
  "statusMessage": "Available",
  "status": "online"
}
```

### Upload Endpoints

#### Upload File
```http
POST /api/upload
Authorization: Bearer <access_token>
Content-Type: multipart/form-data

file: <binary>
```

#### Upload Avatar
```http
POST /api/upload/avatar
Authorization: Bearer <access_token>
Content-Type: multipart/form-data

avatar: <binary>
```

## 🔌 Socket.io Events

### Client → Server Events

#### Connection
```javascript
socket.emit('connection', {
  auth: { token: '<jwt_token>' }
});
```

#### Send Message (Room)
```javascript
socket.emit('message:send', {
  roomId: '<room_id>',
  content: 'Hello, everyone!',
  messageType: 'text'
}, (response) => {
  console.log(response.message);
});
```

#### Send Private Message
```javascript
socket.emit('message:private', {
  recipientId: '<user_id>',
  content: 'Hi there!',
  messageType: 'text'
});
```

#### Typing Started
```javascript
socket.emit('typing:start', {
  roomId: '<room_id>'  // or recipientId for private chat
});
```

#### Typing Stopped
```javascript
socket.emit('typing:stop', {
  roomId: '<room_id>'
});
```

#### Mark Message as Read
```javascript
socket.emit('message:read', {
  messageId: '<message_id>',
  roomId: '<room_id>'
});
```

#### Add Reaction
```javascript
socket.emit('message:reaction:add', {
  messageId: '<message_id>',
  emoji: '❤️'
});
```

#### Join Room
```javascript
socket.emit('room:join', {
  roomId: '<room_id>'
}, (response) => {
  console.log(response.room);
});
```

#### Update Status
```javascript
socket.emit('user:status:update', {
  status: 'away',
  statusMessage: 'Out for lunch'
});
```

### Server → Client Events

#### Connection Success
```javascript
socket.on('connection:success', (data) => {
  console.log(data.userId, data.username);
});
```

#### Receive Message
```javascript
socket.on('message:receive', (data) => {
  console.log(data.message);
});
```

#### Receive Private Message
```javascript
socket.on('message:private:receive', (data) => {
  console.log(data.message);
});
```

#### Typing Update
```javascript
socket.on('typing:update', (data) => {
  console.log(`${data.username} is ${data.isTyping ? 'typing' : 'not typing'}`);
});
```

#### User Online
```javascript
socket.on('user:online', (data) => {
  console.log(`${data.username} is now online`);
});
```

#### User Offline
```javascript
socket.on('user:offline', (data) => {
  console.log(`${data.username} went offline at ${data.lastSeen}`);
});
```

#### Message Read Confirmation
```javascript
socket.on('message:read:confirm', (data) => {
  console.log(`Message ${data.messageId} read by ${data.readBy}`);
});
```

#### Reaction Update
```javascript
socket.on('message:reaction:update', (data) => {
  console.log(data.reactions);
});
```

#### User Joined Room
```javascript
socket.on('room:user:joined', (data) => {
  console.log(`${data.user.username} joined ${data.roomId}`);
});
```

#### User Left Room
```javascript
socket.on('room:user:left', (data) => {
  console.log(`${data.username} left ${data.roomId}`);
});
```

## ✅ Assignment Requirements Compliance

### Task 1: Project Setup ✓
- [x] Node.js server with Express
- [x] Socket.io configured on server
- [x] Basic connection established
- [x] JWT authentication middleware

### Task 2: Core Chat Functionality ✓
- [x] User authentication (JWT-based)
- [x] Global chat rooms
- [x] Messages with sender name and timestamp
- [x] Typing indicators
- [x] Online/offline status

### Task 3: Advanced Chat Features ✓
- [x] Private messaging between users
- [x] Multiple chat rooms/channels
- [x] "User is typing" indicator
- [x] File and image sharing
- [x] Read receipts
- [x] Message reactions

### Task 4: Real-Time Notifications ✓
- [x] New message notifications
- [x] User join/leave notifications
- [x] Unread message count
- [x] Sound notification support
- [x] Browser notification integration ready

### Task 5: Performance and UX Optimization ✓
- [x] Message pagination
- [x] Reconnection logic
- [x] Socket.io optimization (namespaces, rooms)
- [x] Message delivery acknowledgment
- [x] Message search functionality
- [x] Responsive design considerations
- [x] Multi-device support

## 📸 Screenshots

### Server Running
```
╔═══════════════════════════════════════╗
║   🎵 ECHOLIA CHAT SERVER STARTED 🎵   ║
╠═══════════════════════════════════════╣
║  Port: 5000                            ║
║  Environment: development              ║
║  Time: 10:30:45 AM                     ║
╚═══════════════════════════════════════╝

✅ MongoDB Connected: localhost
📊 Database: echolia
✅ Socket.io initialized
```

### Socket Connection Log
```
✅ User connected: john_doe (507f1f77bcf86cd799439011)
✅ User connected: jane_smith (507f1f77bcf86cd799439012)
📨 Message sent in room: general
❌ User disconnected: john_doe (507f1f77bcf86cd799439011)
```

## 🚀 Deployment

### Backend Deployment (Render/Railway/Heroku)

#### Render
1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Configure environment variables in Render dashboard
4. Deploy!

**Build Command:**
```bash
npm install
```

**Start Command:**
```bash
npm start
```

#### Railway
```bash
railway login
railway init
railway add
railway up
```

#### Heroku
```bash
heroku create echolia-server
git push heroku main
heroku config:set JWT_SECRET=your_secret
```

### Environment Variables for Production
Make sure to set all environment variables from `.env.example` in your deployment platform.

### Database Setup (MongoDB Atlas)
1. Create a cluster on MongoDB Atlas
2. Whitelist all IPs (0.0.0.0/0) for deployment
3. Get connection string
4. Set `MONGODB_URI` in environment variables

### Cloudinary Setup
1. Sign up at cloudinary.com
2. Get API credentials from dashboard
3. Set in environment variables

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- **PLP Student** - Initial work

## 🙏 Acknowledgments

- Socket.io documentation and community
- Express.js team
- MongoDB team
- All open-source contributors

## 📞 Support

For support, email philipbarongo30@gmail.com or open an issue in the repository.

---


*Echolia - Where Voices Resonate* 🎵
