# StudyNotion - EdTech Platform

A full-stack MERN application for online learning where instructors can create courses and students can enroll and learn.

## 🚀 Features

### For Students
- Browse and search courses by categories
- Secure user authentication with OTP verification
- Purchase courses with Razorpay integration
- Video streaming with progress tracking
- Rate and review courses
- Personal dashboard with enrolled courses

### For Instructors
- Create and manage courses with multimedia content
- Upload videos, images, and documents
- Set course pricing and manage enrollments
- View analytics and earnings dashboard
- Organize content into sections and subsections

### For Admins
- Manage course categories and user accounts
- Monitor platform analytics
- Content moderation capabilities

## 🛠️ Tech Stack

**Frontend:**
- React 18
- Redux Toolkit
- React Router v6
- Tailwind CSS
- Chart.js
- React Hook Form

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- Cloudinary (Media Storage)
- Razorpay (Payment Gateway)
- Nodemailer (Email Service)

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB
- Cloudinary Account
- Razorpay Account

## ⚙️ Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/studynotion.git
cd studynotion
```

2. **Install Backend Dependencies**
```bash
cd backend
npm install
```

3. **Install Frontend Dependencies**
```bash
cd ../frontend
npm install
```

4. **Environment Variables**

Create `.env` files in both backend and frontend directories:

**Backend (.env):**
```env
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
RAZORPAY_KEY=your_razorpay_key
RAZORPAY_SECRET=your_razorpay_secret
MAIL_HOST=smtp.gmail.com
MAIL_USER=your_email
MAIL_PASS=your_email_password
```

**Frontend (.env):**
```env
REACT_APP_BASE_URL=http://localhost:4000/api/v1
REACT_APP_RAZORPAY_KEY=your_razorpay_key
```

## 🚀 Running the Application

1. **Start Backend Server**
```bash
cd backend
npm run dev
```

2. **Start Frontend Development Server**
```bash
cd frontend
npm start
```

3. **Run Both Concurrently (from frontend directory)**
```bash
npm run dev
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:4000

## 📁 Project Structure

```
studynotion/
├── backend/
│   ├── config/          # Database and service configurations
│   ├── controllers/     # Route controllers
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API routes
│   ├── middlewares/     # Authentication and validation
│   ├── utils/           # Utility functions
│   └── mail/            # Email templates
├── frontend/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── services/    # API calls
│   │   ├── slices/      # Redux slices
│   │   └── assets/      # Images and media
│   └── public/
└── README.md
```

## 🔐 Authentication Flow

1. User registers with email and OTP verification
2. JWT tokens are used for authentication
3. Role-based access control (Student/Instructor/Admin)
4. Secure password hashing with bcrypt

## 💳 Payment Integration

- Razorpay integration for secure payments
- Order management and receipt generation
- Instructor revenue tracking

## 📱 Responsive Design

- Mobile-first approach with Tailwind CSS
- Optimized for all device sizes
- Progressive Web App features

## 🧪 Testing

```bash
# Frontend tests
cd frontend
npm test

# Backend tests (if implemented)
cd backend
npm test
```

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Build the project: `npm run build`
2. Deploy the `build` folder

### Backend (Heroku/Railway)
1. Set environment variables
2. Deploy with: `npm start`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Satyam**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## 🙏 Acknowledgments

- React community for excellent documentation
- MongoDB for flexible database solutions
- Cloudinary for media management
- Razorpay for payment processing

---

⭐ Star this repository if you found it helpful!"# StudyNotion" 
