import { Router } from 'express';
import userRoutes from './users';

const router = Router();

// Mount route modules
router.use('/users', userRoutes);

// API info endpoint
router.get('/', (req, res) => {
  res.json({
    message: 'Node.js Backend API',
    version: '1.0.0',
    endpoints: {
      users: '/api/users',
      health: '/health'
    }
  });
});

export default router; 