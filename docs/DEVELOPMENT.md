# Development Guide

## Getting Started

### Prerequisites
- Node.js 16.x or higher
- npm 7.x or higher

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/kpdgayao/getsome-website.git
   cd getsome-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

## Development Workflow

### Branch Strategy
- `main`: Production branch
- `develop`: Development branch
- `feature/*`: Feature branches
- `bugfix/*`: Bug fix branches

### Creating a New Feature
1. Create a new branch from develop:
   ```bash
   git checkout -b feature/your-feature-name develop
   ```

2. Make your changes

3. Commit your changes:
   ```bash
   git commit -m "feat: your feature description"
   ```

4. Push to GitHub:
   ```bash
   git push origin feature/your-feature-name
   ```

5. Create a Pull Request to develop

### Code Style
- Follow React best practices
- Use CSS Modules for styling
- Follow semantic commit messages
- Write meaningful component documentation

## Build Process

### Development Build
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Testing
```bash
npm run test
```