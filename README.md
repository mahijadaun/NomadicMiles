# 🌄 Nomadic Miles – Your Personal Travel Diary  

**Nomadic Miles** is a secure, full-stack personal travel diary web app where users can privately document their travel experiences. With features like login/signup, story search, image uploads, and a liking system, Nomadic Miles allows you to create, view, and manage your travel memories — all in one place. Each story includes a title, location, content, images, and date, and only the story owner has access to their diary entries.  

## ✨ Features  

✅ **Private Travel Diary** – Only you can access and manage your stories.  
✅ **Authentication System** – Secure login and signup functionality with JWT.  
✅ **CRUD Operations** – Create, edit (with image updates), view, and delete travel stories.  
✅ **Story Search** – Quickly find stories using keywords.  
✅ **Date-wise Filter** – Easily view stories from a specific date.  
✅ **Liking System** – Add personal likes to your favorite travel stories.  
✅ **Image Upload via Cloudinary** – Seamlessly upload and manage story images.  
✅ **Detailed Story Fields** – Include title, location, date, content, and photos for each story.  
✅ **Responsive UI** – Clean and modern interface built with Tailwind CSS.  

## 🛠️ Tech Stack  

- **React.js** – Frontend development  
- **Redux** – State management  
- **React Router** – Client-side routing  
- **Tailwind CSS** – Modern, utility-first styling  
- **Node.js & Express.js** – Backend and API development  
- **MongoDB** – NoSQL database for storing user and story data  
- **Cloudinary** – Image upload and storage  
- **JWT** – Authentication and authorization  

## 🚀 Installation  

To run **Nomadic Miles** locally, follow these steps:

### Prerequisites  

- **Node.js** (v16+ recommended)  
- **npm** or **yarn**  
- **MongoDB Atlas account**  
- **Cloudinary account**  

### Steps  

1. **Clone the Repository**  
   ```sh
    git clone https://github.com/mahijadaun/NomadicMiles.git
    cd NomadicMiles
2. **Install Dependencies**
   ```sh
    # For frontend
      cd frontend
      npm install
      
      # For backend
      cd backend
      npm install

3. **Set Up Environment Variables**
   ```sh
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key

4. **Run the Development Server**
   ```sh
   # Run backend
   cd backend
   npm run dev
   
   # In a new terminal, run frontend
   cd frontend
   npm run dev



## 👤 Author  

Developed by **Mahi Jadaun** 🚀  

Feel free to **contribute**, **suggest improvements**, or **report issues**! 😊  

