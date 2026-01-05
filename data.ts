
import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "Pravin Chavan",
  title: "Java / Microservices Developer",
  email: "pravin.chavan2729@gmail.com",
  phone: "8850947153",
  linkedin: "linkedin.com/in/pravin-chavan-534029240",
  location: "Navi Mumbai",
  summary: "Results-driven Java & Microservices Developer with hands-on experience building secure, scalable, high-performance banking/fintech systems. Proficient in Java 8–21, Spring Boot, REST APIs, Microservices, SQL, AWS, and API integrations for digital payments & transaction processing. Operates effectively in Agile/Scrum, delivering clean, modular, production-ready services.",
  experience: [
    {
      role: "Software Engineer / Team Lead",
      company: "Sodel Software Solutions",
      client: "Yes Bank",
      period: "05/2023 – Present",
      location: "Navi Mumbai",
      responsibilities: [
        "Team Lead handling end-to-end technical delivery, code reviews, mentoring developers & ensuring on-time sprint completion.",
        "Built secure, scalable banking apps using Java 11, Spring Boot, MySQL.",
        "Designed/implemented RESTful APIs with JWT/OAuth2, HTTPS, AES for secure data exchange.",
        "Backend for YES PAY BIZ enabling real-time merchant onboarding & digital payments with bank settlement.",
        "Integrated Juspay, NPCI (IMPS/UPI), M2P APIs for payment gateway and digital banking features.",
        "Developed FASTag toll module with RFID & secure APIs for real-time highway automation.",
        "Optimized millions of transactions via SQL tuning, multithreading, and Spring scheduled jobs.",
        "Developed and maintained PPI (Prepaid Payment Instrument) modules supporting wallet creation, KYC, loading, settlements & regulatory compliance.",
        "Enabled real-time SMS/Email/Push notifications to improve customer communication & transparency.",
        "Worked in Agile/Scrum with Jira (sprint planning, stand-ups, retrospectives)."
      ]
    },
    {
      role: "Java Developer Trainee",
      company: "Orange IT Solutions",
      period: "09/2022 – 04/2023",
      location: "Pune",
      responsibilities: [
        "Contributed to enterprise software & web apps with senior developer guidance.",
        "Improved performance & scalability via code analysis, refactoring, and maintenance.",
        "Consistently delivered clean, testable, production-ready code with positive mentor feedback."
      ]
    }
  ],
  skills: [
    { category: "Programming", skills: ["Java (8–17)", "SQL", "HTML", "CSS"] },
    { category: "Frameworks", skills: ["Spring Boot", "Spring MVC", "Spring Data JPA", "Hibernate"] },
    { category: "Messaging", skills: ["Apache Kafka (real-time pipelines)"] },
    { category: "Databases", skills: ["MySQL", "PostgreSQL", "Stored Procedures", "Transaction Mgmt"] },
    { category: "API & Security", skills: ["REST", "Swagger", "OAuth2", "JWT", "Postman"] },
    { category: "Architecture", skills: ["Microservices", "Service Registry", "Inter-service Communication"] },
    { category: "DevOps & Cloud", skills: ["AWS (EC2, S3, RDS)", "Docker", "Kubernetes", "CI/CD", "Jenkins"] },
    { category: "Tools & Testing", skills: ["IntelliJ IDEA", "Git", "Maven", "JUnit"] }
  ],
  education: [
    { degree: "MCA", institution: "Uttaranchal University" },
    { degree: "BCA", institution: "Shivaji University", period: "2019–2022" }
  ],
  certifications: [
    "Java Full Stack Developer (2022)",
    "National Merit-Cum-Means Scholarship (2015)"
  ],
  projects: [
    { title: "User Management System", description: "Role-based authentication and user CRUD operations.", tech: ["Java", "Spring Boot", "MySQL"] },
    { title: "Attendance Application", description: "Student attendance tracking with reporting features.", tech: ["Java", "Spring MVC", "JPA"] }
  ]
};
