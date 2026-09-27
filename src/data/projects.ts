import type { Project } from "./types";

/**
 * EDIT ME: Add real projects here as you build them. Use the
 * "[ADD PROJECT HERE]" placeholder pattern for anything not yet real —
 * never invent projects, links, or numbers.
 */
export const projects: Project[] = [
  {
    name: "Caritas University Clearance System",
    shortDescription:
      "A digital exam clearance system designed to streamline student clearance, approval management, and exam access at Caritas University, giving administrators centralized clearance controls and students a fast way to verify clearance and access a digital exam pass.",
    detailedDescription:
      "The Caritas University Digital Exam Clearance System is a digital platform designed to simplify and modernize the exam clearance process for students and university administrators. The system replaces a largely manual clearance workflow with a centralized platform where clearance information can be managed, reviewed, and verified digitally.\n\nThe platform allows authorized clearance officers and administrators to review students' clearance status and assign statuses such as Approved, Pending, or Deferred, while managing relevant deadlines and clearance requirements. Students can access their clearance information and easily determine whether they've been cleared to sit for examinations.\n\nOne of the key features is the digital examination pass, which provides cleared students with a QR-based pass that can be presented for verification at examination halls. Examination personnel can scan the QR code to quickly verify a student's clearance status, reducing manual checking and improving the efficiency of exam entry.\n\nThe system also provides administrative functionality for managing students, clearance records, examination access, and system activity, with role-based access ensuring different categories of administrators can only reach the functionality relevant to their responsibilities.\n\nThe platform is built with a focus on security, reliability, usability, and scalability, using modern web technologies and a centralized backend architecture — aiming to reduce administrative workload, minimize errors from manual clearance processes, and give students a faster, more transparent way to manage their exam clearance.",
    type: "Web App",
    technologies: ["React", "TypeScript", "Supabase", "GitHub"],
    role: "Front-End Developer",
    keyFeatures: [
      "QR-based exam pass verification — generates digital QR exam passes that can be scanned to quickly verify a student's clearance status.",
      "Role-based access control — provides different permissions for students, clearance officers, exam officers, and administrators.",
      "Real-time clearance management — lets authorized officers update student statuses (Approved, Pending, Deferred) while students view their current clearance status live.",
    ],
    liveUrl: null,
    githubUrl: null,
    image: null,
    status: "IN PROGRESS",
  },
];
