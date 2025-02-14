# Blog Website

## 📌 Project Overview
This is a Full Stack Blog Website where users can:
- Upload blog posts with images, titles, content, author names, and created dates.
- Search for blogs based on titles.
- View individual blog posts by clicking on them.

## 🚀 Tech Stack
### **Frontend**
- React.js 
- Tailwind CSS for styling

### **Backend**
- Node.js with Express,

### **Database**
- MongoDB 

### **Cloud Storage**
- Cloudinary (for storing images)

## 🔗 **Deployment Links**
- **Frontend:** [Live Demo](https://bro-chill-1f3m.vercel.app)
- **Backend:** [API Server](https://bro-chill-henna.vercel.app)

## ⚙️ **Installation Guide**
### **Clone Repository**
```bash
  git https://github.com/Sajid788/BroChill.git
  cd backend
  cd frontend
```

### **Backend Setup**
```bash
cd backend
npm install
npm nodemon index.js
```
- Create a `.env` file and add MongoDB connection string and Cloudinary API keys:
```env
MONGO_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### **Frontend Setup**
```bash
cd frontend
npm install
npm start
```
## 🛠 **API Endpoints**
### **Blogs**
| Method | Endpoint         | Description            |
|--------|----------------|------------------------|
| GET    | /api/blogs      | Get all blogs          |
| GET    | /api/blogs/:id  | Get a single blog      |
| POST   | /api/blogs      | Create a new blog      |

## 📷 **Image Upload via Cloudinary**
- Ensure Cloudinary is properly configured in the backend.
- Use `multer-storage-cloudinary` for handling file uploads.
  

## 📌 Application ScreenShots
![image](https://github.com/user-attachments/assets/157d4964-8edb-405c-812e-b9511a4c274c)
![image](https://github.com/user-attachments/assets/dddf13e6-326e-466d-a04e-ca989c5e81d0)



## 📜 **License**
This project is open-source and available under the [MIT License](LICENSE).

---

💡 **Contributions, issues, and feature requests are welcome!**

### ⭐ **Don't forget to star the repository if you find this useful!**
