import { 
  Cloud, Code, Server, Terminal, Cpu, Shield, Database 
} from 'lucide-react';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];


export const STATS = [
  { label: "Uptime Maintained", value: "99.99%" },
  { label: "Projects Delivered", value: "50+" },
  { label: "Hours Automated", value: "1000+" },
  { label: "Commits", value: "2.5k+" },
];

export const SKILLS = [
  { 
    category: "Cloud Architecture", 
    icon: <Cloud size={24} className="text-blue-600 dark:text-blue-400" />, 
    desc: "Designing resilient cloud-native systems.",
    items: ["AWS (Solutions Architect)", "Google Cloud Platform", "Azure", "Hybrid Cloud", "Serverless"] 
  },
  { 
    category: "Infrastructure as Code", 
    icon: <Code size={24} className="text-indigo-600 dark:text-indigo-400" />, 
    desc: "Provisioning infrastructure via code.",
    items: ["Terraform", "Ansible", "Pulumi", "CloudFormation", "Packer", "Vagrant"] 
  },
  { 
    category: "Container Orchestration", 
    icon: <Server size={24} className="text-purple-600 dark:text-purple-400" />, 
    desc: "Managing microservices at scale.",
    items: ["Kubernetes (EKS/AKS)", "Docker", "Helm", "Istio", "Rancher", "OpenShift"] 
  },
  { 
    category: "CI/CD & DevOps", 
    icon: <Terminal size={24} className="text-green-600 dark:text-green-400" />, 
    desc: "Automating the software delivery lifecycle.",
    items: ["Jenkins", "GitHub Actions", "GitLab CI", "ArgoCD", "CircleCI", "Bamboo"] 
  },
  { 
    category: "Observability", 
    icon: <Cpu size={24} className="text-orange-600 dark:text-orange-400" />, 
    desc: "Monitoring system health and performance.",
    items: ["Prometheus", "Grafana", "ELK Stack", "Datadog", "New Relic", "Jaeger"] 
  },
  { 
    category: "Security & Networking", 
    icon: <Shield size={24} className="text-red-600 dark:text-red-400" />, 
    desc: "Hardening systems and managing traffic.",
    items: ["VPC Design", "WAF", "HashiCorp Vault", "SonarQube", "Nginx", "WireGuard"] 
  },
  { 
    category: "Database Management", 
    icon: <Database size={24} className="text-cyan-600 dark:text-cyan-400" />, 
    desc: "Managing persistent data stores.",
    items: ["PostgreSQL", "MongoDB", "Redis", "DynamoDB", "RDS", "Backup Strategies"] 
  },
  { 
    category: "Scripting", 
    icon: <Code size={24} className="text-gray-600 dark:text-gray-400" />, 
    desc: "Glue code for automation.",
    items: ["Python", "Bash/Shell", "Go (Golang)", "Node.js", "PowerShell"] 
  },
];

export const PROJECTS = [
  {
    title: "K8s Auto-Scaler Controller",
    desc: "A custom Kubernetes controller written in Go that scales pods based on custom business metrics (e.g., SQS queue depth) rather than just CPU/RAM usage. Implemented to handle burst traffic during sales events.",
    tags: ["Go", "Kubernetes", "Docker", "Prometheus"],
    links: { demo: "#", code: "#" },
  },
  {
    title: "Zero-Trust Mesh Network",
    desc: "Implemented a service mesh using Istio across a multi-cluster environment to enforce mTLS encryption between all microservices. Replaced legacy VPNs with a zero-trust architecture.",
    tags: ["Istio", "Kubernetes", "Security", "mTLS"],
    links: { demo: "#", code: "#" },
  },
  {
    title: "Serverless CI/CD Platform",
    desc: "Fully serverless deployment pipeline using AWS CodePipeline and Lambda to deploy microservices with zero downtime/blue-green deployment strategies. Reduced build costs by 60%.",
    tags: ["AWS Lambda", "Terraform", "Node.js", "DynamoDB"],
    links: { demo: "#", code: "#" },
  },
  {
    title: "Centralized Log Aggregator",
    desc: "Built a high-throughput logging pipeline using Fluentd, Kafka, and Elasticsearch to aggregate logs from 500+ servers. Created custom Grafana dashboards for anomaly detection.",
    tags: ["ELK Stack", "Kafka", "Fluentd", "Grafana"],
    links: { demo: "#", code: "#" },
  },
  {
    title: "FinOps Cloud Dashboard",
    desc: "A React + Python dashboard visualizing real-time infrastructure costs and resource utilization across multi-cloud environments to identify waste and zombie resources.",
    tags: ["React", "Python", "FastAPI", "AWS Cost Explorer"],
    links: { demo: "#", code: "#" },
  },
  {
    title: "Secure VPC Terraform Module",
    desc: "An open-source, highly reusable Terraform module for spinning up a secure, CIS-compliant VPC architecture with public/private subnets, NAT gateways, and NACLs.",
    tags: ["HCL", "Terraform", "AWS", "Security"],
    links: { demo: "#", code: "#" },
  }
];