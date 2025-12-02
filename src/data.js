export const skills = [
    { name: "All", icon: "fas fa-th-large" },
    { name: "AWS", icon: "fab fa-aws" },
    { name: "Docker", icon: "fab fa-docker" },
    { name: "Kubernetes", icon: "fas fa-dharmachakra" },
    { name: "Jenkins", icon: "fab fa-jenkins" },
    { name: "Terraform", icon: "fas fa-cubes" },
    { name: "Ansible", icon: "fas fa-network-wired" },
    { name: "Python", icon: "fab fa-python" }
];

export const projects = [
    {
        title: "K8s Cluster Automation",
        desc: "Automated the provisioning of EKS clusters using Terraform modules with auto-scaling groups.",
        tags: ["AWS", "Kubernetes", "Terraform"],
        link: "#"
    },
    {
        title: "CI/CD Pipeline",
        desc: "Built a Jenkins shared library to standardize deployment pipelines across 15+ microservices.",
        tags: ["Jenkins", "Docker", "Groovy"],
        link: "#"
    },
    {
        title: "Serverless Monitor",
        desc: "Python Lambda functions to monitor EC2 usage and send Slack alerts for cost optimization.",
        tags: ["AWS", "Python"],
        link: "#"
    },
    {
        title: "Configuration Mgmt",
        desc: "Used Ansible playbooks to configure Nginx and harden security on 50+ Linux servers.",
        tags: ["Ansible", "Linux"],
        link: "#"
    },
    {
        title: "Container Registry",
        desc: "Implemented a private Docker registry with vulnerability scanning using Clair.",
        tags: ["Docker", "Security"],
        link: "#"
    },
    {
        title: "Infrastructure as Code",
        desc: "Multi-tier VPC architecture deployed via Terraform with public/private subnets.",
        tags: ["Terraform", "AWS"],
        link: "#"
    }
];