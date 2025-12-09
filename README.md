# 🚀 Pranav Dakle – DevOps Portfolio  
### Modern Cloud-Hosted Portfolio (React + AWS S3 + CloudFront + GitHub Actions)

This is my official **DevOps Engineer Portfolio**, built using **Vite + React** and deployed on a full AWS-based, production-grade architecture with **CI/CD automation**.

Live Portfolio: **https://pranav.codzy.tech**

---

## 📌 Overview

This portfolio showcases my **DevOps, Cloud, Automation, CI/CD, and Infrastructure Engineering** skills.  
It is designed as a scalable, modern, and automated deployment setup using:

- ⚡ **Vite + React** (Frontend)  
- 🌐 **AWS S3** (Static Hosting)  
- 🚀 **AWS CloudFront** (Global CDN Distribution)  
- 🔄 **GitHub Actions CI/CD** (Automated Deployment Pipeline)  
- 🔐 **Route53 Custom Domain** (`pranav.codzy.tech`)  

The entire system is built with production best-practices, following DevOps principles such as automation, versioning, environment isolation, and fast global delivery.

---

## 🏗️ Architecture Diagram

```
Vite + React (Source Code)
        │
GitHub Actions (CI/CD – Build & Deploy)
        │
        ▼
AWS S3 Bucket (Static Website Hosting)
        │
        ▼
AWS CloudFront CDN (Caching + TLS)
        │
        ▼
Route53 (DNS)
        │
        ▼
https://pranav.codzy.tech
```

---

## ✨ Features

### 🖥️ Frontend  
- Modern and minimal React UI built using **Vite**  
- Fully responsive design  
- Motion effects using **Framer Motion**  
- Clean DevOps-themed design  

### ☁️ Cloud Infrastructure  
- AWS **S3 static hosting**  
- AWS **CloudFront CDN** with HTTPS  
- AWS **Route53** custom domain  
- Cache invalidation on each deployment  

### 🔄 CI/CD Automation  
- GitHub Actions automatically:  
  ✔️ Installs dependencies  
  ✔️ Builds Vite React app  
  ✔️ Uploads build to S3  
  ✔️ Invalidates CloudFront cache  
- Zero manual deployment needed  

---

# ⚙️ GitHub Actions CI/CD Pipeline  
> GitHub automatically provides **copy button** for this YAML in your README.

Create this file:  
`.github/workflows/deploy.yml`

```yml
name: Deploy Portfolio to AWS S3 + CloudFront

on:
  push:
    branches: 
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Repo
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install Dependencies
        run: |
          cd portfolio
          npm install

      - name: Build App
        run: |
          cd portfolio
          npm run build

      - name: Sync Files to S3
        uses: aws-actions/s3-sync@v2
        with:
          bucket: ${{ secrets.AWS_S3_BUCKET }}
          folder: portfolio/dist
          delete: true
        env:
          AWS_ACCESS_KEY_ID:     ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          AWS_REGION: "ap-south-1"

      - name: Invalidate CloudFront Cache
        uses: chetan/invalidate-cloudfront-action@v2
        with:
          distribution-id: ${{ secrets.CLOUDFRONT_DISTRIBUTION_ID }}
          paths: "/*"
        env:
          AWS_ACCESS_KEY_ID:     ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
```

---

## 🌍 AWS Configuration Details

### 🔹 **S3 Bucket (Hosting)**  
- Static website hosting enabled  
- Public access disabled (CloudFront handles access)  
- Build files uploaded to: `s3://your-bucket-name`  

### 🔹 **CloudFront Distribution**  
- Origin: S3 bucket  
- Default root object: `index.html`  
- HTTPS enabled with SSL certificate  
- Cache invalidation via GitHub Actions  

### 🔹 **Route53**  
- Domain: `pranav.codzy.tech`  
- A-Record → CloudFront distribution  

---

## 🧰 Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React + Vite |
| Animations | Framer Motion |
| CI/CD | GitHub Actions |
| Hosting | AWS S3 |
| CDN | AWS CloudFront |
| Domain | AWS Route53 |
| Package Manager | npm |

---

## 🛠️ Run Locally

### Clone the repo  
```bash
git clone https://github.com/Ripcodes/Portfolio.git
cd Portfolio
```

### Install dependencies  
```bash
npm install
```

### Run development server  
```bash
npm run dev
```

### Build for production  
```bash
npm run build
```

---

## 📸 Screenshots (Add your images later)

```
![Home Page](./assets/home.png)
![Skills](./assets/skills.png)
![Projects](./assets/projects.png)
![Contact](./assets/contact.png)
```

---

## 👨‍💼 Author – Pranav Dakle

**DevOps Engineer | Cloud | Automation | CI/CD | AWS | Linux**  
🌐 Portfolio: https://pranav.codzy.tech  
🐙 GitHub: https://github.com/pranavdaklepatil
