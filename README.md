# **FinityFlow**

**FinityFlow** is a powerful and efficient quoting and customer relationship management (CRM) tool designed to streamline operations for Comcast employees. The platform helps employees create personalized quotes, manage customer interactions, and improve Net Promoter Score (NPS) by delivering a seamless, customer-focused experience.

---

## **Features**

### **1. Quoting System**
- Quickly create, edit, and manage customer-specific quotes.
- Automates calculations for pricing, financing, and discounts.
- Generates PDF quotes to share with customers.

### **2. Customer Management**
- Maintain a detailed customer database.
- Track interactions, follow-ups, and customer preferences.
- Provide a personalized experience through tailored quotes and notifications.

### **3. Dashboard**
- Access real-time metrics, including quotes created, follow-ups completed, and NPS scores.
- Visualize trends with charts and graphs.
- View pending tasks and customer follow-ups in one place.

### **4. Net Promoter Score (NPS) Integration**
- Enhance customer relationships with tools that directly impact NPS.
- Track and visualize customer feedback.
- Notify employees about customer concerns to address them proactively.

---

## **Technology Stack**
- **Frontend:** React.js
- **Backend:** Supabase (PostgreSQL as database, authentication)
- **UI Framework:** Bootstrap
- **Charting Library:** Chart.js
- **Hosting:** Deployed on a cloud platform (e.g., Netlify, Vercel)

---

## **Installation**

### **Requirements**
- Node.js (v14+)
- npm or yarn

### **Steps**
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/FinityFlow.git
   cd FinityFlow
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the project root and add your Supabase credentials:
     ```
     REACT_APP_SUPABASE_URL=your_supabase_url
     REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
     ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open the application in your browser:
   ```
   http://localhost:3000
   ```

---

## **Usage**

1. **Sign In/Sign Up:**
   - Employees can sign up or log in to their accounts using email and password.
2. **Create Quotes:**
   - Navigate to the "Quotes" section to create and manage quotes.
3. **Manage Customers:**
   - Use the "Customers" tab to add new customers and track interactions.
4. **Track Progress:**
   - View key metrics and trends on the Dashboard to monitor performance and NPS improvements.

---

## **Contributing**
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them.
4. Push to your fork and submit a pull request.

---

## **License**
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## **Change Log**

#### Setting up project structure
#### Finished Login and Signup Function also Logout. 