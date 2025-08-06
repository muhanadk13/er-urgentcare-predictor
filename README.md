# Urgency - ER vs Urgent Care Predictor 🏥🤖

A modern web application built with Next.js that helps users determine whether their symptoms are better suited for an **Emergency Room (ER)** or **Urgent Care** visit.

This project is currently in development and is being built for educational and exploratory use only. It is **not intended for clinical decision-making**.

---

## 📌 Overview

Urgency is a user-friendly web application that guides users through a symptom assessment process to provide recommendations on whether to visit the ER or Urgent Care. The application features:

- **Interactive Symptom Checker**: Multi-step assessment process
- **Severity Rating**: Slider-based severity assessment for each symptom
- **Critical Flags**: Yes/no questions for emergency indicators
- **Smart Recommendations**: AI-powered care recommendations
- **Modern UI**: Clean, responsive design with TailwindCSS
- **Mobile Optimized**: Works seamlessly on all devices

---

## 🚀 Live Demo

Visit the application at: [Coming Soon - Deploy to Vercel]

---

## 🛠️ Tech Stack

| Component       | Technology                    |
|----------------|-------------------------------|
| Frontend       | Next.js 15 + TypeScript       |
| Styling        | TailwindCSS                   |
| State Management| React Context API             |
| UI Components  | Custom React Components       |
| Deployment     | Vercel (planned)              |

---

## 📱 Features

### 1. **Landing Page**
- Hero section with clear value proposition
- Call-to-action to start symptom assessment
- Professional branding and design

### 2. **Symptom Assessment Flow**
- **Step 1**: Select symptoms from predefined list
- **Step 2**: Rate severity for each selected symptom (1-10 scale)
- **Step 3**: Answer critical emergency questions
- **Step 4**: Receive personalized recommendation

### 3. **Results Page**
- Clear ER vs Urgent Care recommendation
- Detailed reasoning for the recommendation
- Confidence level indicator
- Option to retake assessment
- Share results functionality

### 4. **Additional Pages**
- **About**: Project mission and how it works
- **Contact**: Developer information
- **Legal Pages**: Terms, Privacy Policy, Medical Disclaimer

---

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/muhanadk13/er-urgentcare-predictor.git
   cd er-urgentcare-predictor
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
urgency-app/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # Landing page
│   │   ├── check/             # Symptom assessment flow
│   │   ├── result/            # Results page
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── terms/             # Terms of use
│   │   ├── privacy/           # Privacy policy
│   │   └── disclaimer/        # Medical disclaimer
│   ├── components/            # Reusable React components
│   ├── context/               # React Context for state management
│   └── api/                   # API routes
├── public/
│   └── images/                # Static images
└── tailwind.config.ts         # TailwindCSS configuration
```

---

## 🧠 How It Works

1. **Symptom Selection**: Users select from a curated list of common symptoms
2. **Severity Assessment**: Each symptom is rated on a 1-10 scale
3. **Critical Evaluation**: Emergency flags are assessed through yes/no questions
4. **AI Analysis**: A decision tree algorithm processes the inputs
5. **Recommendation**: Clear guidance on ER vs Urgent Care is provided

---

## 🔒 Important Disclaimers

- **Not Medical Advice**: This tool is for educational purposes only
- **No Clinical Decision Making**: Always consult healthcare professionals
- **Emergency Situations**: Call 911 for life-threatening emergencies
- **Data Privacy**: No personal health data is stored or transmitted

---

## 🚧 Development Status

- ✅ **Frontend Complete**: Full Next.js application with all pages
- ✅ **UI/UX**: Modern, responsive design implemented
- ✅ **Assessment Flow**: Complete symptom checker workflow
- ✅ **Legal Pages**: Terms, privacy, and disclaimers added
- 🔄 **Backend Integration**: API endpoints ready for ML model integration
- 🔄 **Deployment**: Ready for Vercel deployment
- 🔄 **ML Model**: Decision tree logic implemented (simplified version)

---

## 🤝 Contributing

This project is currently in active development. For collaboration, feedback, or questions about medical AI ethics, please contact the developer.

---

## 📬 Contact

**Muhanad Khleifat**  
📧 [muhanadkhleifat@gmail.com](mailto:muhanadkhleifat@gmail.com)  
📱 (414) 243-0868  
🔗 [linkedin.com/in/muhanadk](https://linkedin.com/in/muhanadk)

---

## 📄 License

This project is for educational purposes. Please see the Terms of Use and Medical Disclaimer pages for important legal information.
