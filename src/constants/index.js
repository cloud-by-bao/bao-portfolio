// src/constants/index.js
import { FaLinkedin, FaGithub } from "react-icons/fa";

/* =========================
   Services (cards content)
   ========================= */
export const servicesData = [
  {
    title: "Cloud Infrastructure & Support",
    description:
      "Hands-on AWS operations across EC2, S3, IAM, and VPC; incident response; and health monitoring with CloudWatch, Datadog, and Splunk.",
    items: [
      { title: "AWS Core Services", description: "EC2, S3, IAM, VPC networking & security" },
      { title: "Container Support", description: "ECS/EKS, task & service troubleshooting" },
      { title: "Cost & Security Hygiene", description: "Tagging standards, guardrails, least-privilege IAM" },
    ],
  },
  {
    title: "DevOps & Automation",
    description:
      "Automating deployments, improving reliability, and removing repetitive tasks with Infrastructure as Code and scripting.",
    items: [
      { title: "CI/CD Pipelines", description: "GitHub Actions, AWS CodePipeline, Jenkins" },
      { title: "Infrastructure as Code", description: "Terraform, modular & versioned configurations" },
      { title: "Scripting", description: "Bash and Python for automation & tooling" },
    ],
  },
  {
    title: "Monitoring & Reliability",
    description:
      "Proactive alerting, logs, and dashboards to detect issues early and minimize downtime.",
    items: [
      { title: "Monitoring", description: "CloudWatch, Datadog, Splunk, Prometheus basics" },
      { title: "Logging & Alerting", description: "Structured logs, metrics, incident response" },
      { title: "Ops Readiness", description: "Runbooks, escalation, postmortems" },
    ],
  },
  {
    title: "Enterprise Support Foundation",
    description:
      "A strong background in high-pressure support that delivers fast, reliable resolutions.",
    items: [
      { title: "User Access Management", description: "Active Directory, O365, MFA, VPN" },
      { title: "System Support", description: "Remote tools, ticketing via ServiceNow & Jira" },
      { title: "Process Improvement", description: "Runbook updates, repeat issue prevention" },
    ],
  },
];

/* =========================
   Projects (Works section)
   ========================= */
export const projects = [
  {
    id: 1,
    name: "AWS VPC with Terraform",
    description:
      "Production-ready VPC with public/private subnets, NAT, and secure routing via reusable Terraform modules.",
    href: "https://github.com/cloud-by-bao/aws-vpc-project",
    image: "/assets/projects/mobile-accessories-store.jpg",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "Terraform" },
      { id: 2, name: "AWS" },
      { id: 3, name: "VPC/Networking" },
    ],
  },
  {
    id: 2,
    name: "Serverless API (Lambda + API Gateway + DynamoDB)",
    description:
      "CRUD API with IaC, CI/CD, and logging best practices. Focus on IAM least privilege and DynamoDB design.",
    href: "https://github.com/cloud-by-bao/aws-dynamodb-query-project",
    image: "/assets/projects/plant-shop.jpg",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "AWS Lambda" },
      { id: 2, name: "API Gateway" },
      { id: 3, name: "DynamoDB" },
      { id: 4, name: "Terraform" },
    ],
  },
  {
    id: 3,
    name: "Go Web App — CI/CD to ECS (Practice)",
    description:
      "Containerized Go app with GitHub Actions pipeline, image build/push, and ECS service deployment (practice project).",
    href: "https://github.com/iam-veeramalla/go-web-app",
    image: "/assets/projects/apple-tech-store.jpg",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "Go" },
      { id: 2, name: "Docker" },
      { id: 3, name: "GitHub Actions" },
      { id: 4, name: "AWS ECS" },
    ],
  },
  {
    id: 4,
    name: "bao-portfolio (This Site)",
    description:
      "React + Vite portfolio adapted from an Awwwards-style template, customized with Cloud/DevOps experience.",
    href: "https://github.com/cloud-by-bao/bao-portfolio",
    image: "/assets/projects/electronics-store.jpg",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Vite" },
      { id: 3, name: "Tailwind CSS" },
    ],
  },
];

/* =========================
   Social links (used in Contact + Navbar)
   NOTE: store icon component refs (NO JSX here)
   ========================= */
export const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/bluong21/",
    Icon: FaLinkedin, // component reference
  },
  {
    name: "GitHub",
    href: "https://github.com/cloud-by-bao",
    Icon: FaGithub, // component reference
  },
];
/* =========================
   Certifications
   ========================= */
export const certifications = [
  { id: 1, name: "AWS Solutions Architect – Associate" },
  { id: 2, name: "AWS Certified Cloud Practitioner" },
  { id: 3, name: "HashiCorp Terraform Associate" },
  { id: 4, name: "Microsoft Azure Fundamentals (AZ-900)" },
  { id: 5, name: "Linux LPI / LPIC-1" }
];

