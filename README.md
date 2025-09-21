Express Starter

Features
- Express.js server with basic routing
- Centralized error handling and request logging
- Jest and Mocha test setups (tests run with both)
- ESLint configured with recommended rules
- Nodemon for development

Requirements
- Node.js v16 or newer

Getting Started
1) Clone the repository
2) Copy environment example to .env
   cp .env.example .env
3) Install dependencies
   npm install
4) Start development server (with hot reload)
   npm run dev
5) Start production server
   npm start
   You should see: Server running on port 3000
6) Run tests (Jest then Mocha)
   npm test

Scripts
- npm start: Run the server with Node
- npm run dev: Run the server with Nodemon
- npm test: Run ESLint, then Jest tests, then Mocha tests
- npm run test:jest: Run tests with Jest only
- npm run test:mocha: Run tests with Mocha only
- npm run lint: Lint code
- npm run lint:fix: Lint and fix issues

Project Structure
- server.js: Application entry point
- src/app.js: Express app setup
- src/routes/index.js: Basic routes
- src/middleware/logger.js: Request logger middleware
- tests/app.test.js: Basic test suite (compatible with Jest and Mocha)

Environment
- PORT: Server port (default 3000)
- NODE_ENV: Environment name (development, test, production)
