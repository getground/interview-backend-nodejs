# Node.js Backend API

A simple Node.js backend built with Express and TypeScript, featuring a clean modular architecture with routes, controllers, and models.

## 🚀 Features

- **Express.js** - Fast, unopinionated web framework
- **TypeScript** - Type-safe JavaScript
- **Modular Architecture** - Clean separation of concerns
- **RESTful API** - Standard HTTP methods and status codes
- **CORS Support** - Cross-origin resource sharing enabled
- **Error Handling** - Comprehensive error handling middleware
- **Request Logging** - Automatic request logging
- **Environment Configuration** - Environment variable support

## 📁 Project Structure

```
interview_simple_node_backend/
├── src/
│   ├── routes/          # API routes and handlers
│   │   ├── index.ts     # Route aggregation
│   │   └── users.ts     # User routes
│   ├── controllers/     # Business logic and data aggregation
│   │   ├── index.ts     # Controller exports
│   │   └── userController.ts # User controller
│   ├── models/          # Database models
│   │   ├── index.ts     # Model exports
│   │   └── User.ts      # User model and validation
│   └── server.ts        # Main server file
├── package.json
├── tsconfig.json        # TypeScript configuration
├── nodemon.json         # Development configuration
└── README.md
```

## 🛠️ Setup & Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd interview_simple_node_backend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file (optional):
```bash
cp .env.example .env
```

4. Start development server:
```bash
npm run dev
```

The server will start on `http://localhost:3000`

## 📚 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Start production server
- `npm run watch` - Watch for TypeScript changes

## 🔗 API Endpoints

### Health Check
- `GET /health` - Server health status

### API Info
- `GET /api` - API information and available endpoints

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

## 📝 API Examples

### Get All Users
```bash
curl http://localhost:3000/api/users
```

### Create User
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com"}'
```

### Get User by ID
```bash
curl http://localhost:3000/api/users/1
```

### Update User
```bash
curl -X PUT http://localhost:3000/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"John Updated","email":"john.updated@example.com"}'
```

### Delete User
```bash
curl -X DELETE http://localhost:3000/api/users/1
```

## 🔧 Configuration

### Environment Variables

- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment (development/production)

### TypeScript Configuration

The project uses strict TypeScript configuration with:
- ES2020 target
- CommonJS modules
- Strict type checking
- Source maps enabled

## 🏗️ Architecture

### Routes (`src/routes/`)
- Define API endpoints and HTTP methods
- Import and use controllers
- Handle request/response flow

### Controllers (`src/controllers/`)
- Contain business logic
- Process requests and generate responses
- Handle data validation and error handling

### Models (`src/models/`)
- Define data structures and interfaces
- Include validation functions
- Type-safe data handling

## 🚀 Deployment

1. Build the project:
```bash
npm run build
```

2. Start production server:
```bash
npm start
```

## 📄 License

ISC

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For questions or issues, please open an issue on the repository. 