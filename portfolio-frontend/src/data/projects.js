import HomeImage from "../assets/swasthyachinhahome.png"
import AuthLogin from "../assets/AuthLogin.png"
import SuchakLogin from "../assets/SuchakLogin.png";
export const projects = [
  {
    id: "swasthyachinha",
    title: "SwasthyaChinha",
    shortDescription: "Role-based digital prescription system with AI-powered recommendations.",
    fullDescription:
      "SwasthyaChinha is a full-stack healthcare platform that connects patients, doctors, pharmacists, and hospital administrators in a unified system. It enables digital prescription management, QR-based verification, and real-time patient monitoring. The system includes AI-powered features such as smart medicine autocomplete and disease prediction with personalized recommendations. Built with a scalable architecture, it streamlines healthcare workflows and improves communication across all roles.",
    tech: ["ASP.NET core", "React", "SQL Server", "JWT Auth", "Flask", "FastAPI"],
    github: "https://github.com/payalrajbanshi/swasthyachinha",
    image: HomeImage,
  },
  {
    id: "suchak",
    title: "Suchak",
    shortDescription: "Smart task management system with role-based access and productivity features.",
    fullDescription:
      "Suchak is a full-stack task management system designed to help users organize, track, and optimize their daily tasks. It includes role-based authentication, task creation and management, prioritization, deadlines tracking, task reordering, and workload planning based on available time. Users can manage tasks efficiently with status updates, daily planning, and personalized theme customization.",
    tech: ["ASP.NET core", "React", "Sql server", "JWT Auth", "Tailwind CSS"],
    github: "https://github.com/payalrajbanshi/suchak",
    image: SuchakLogin,
  },
  {
    id:"auth-verification",
    title:"AuthVerification",
    shortDescription: "Secure authentication and verification system.",
    fullDescription:
    "A robust authentication system that supports user registration, email and mobile verification using PIN codes, secure password hashing with BCrypt, password reset functionality , and role-based user management. Built with clean architecture principles and service-based design for scalability and maintainability.",
    tech: ["Asp.Net Core", "React", "SQL Server", "Syncfusion UI"],
    github: "https://github.com/payalrajbanshi/authVerification",
    image:AuthLogin,

  }
  
  
  
];