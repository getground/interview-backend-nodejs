import { Router } from 'express';

const router = Router();

// API info endpoint
router.get('/', (req, res) => {
  res.json({
    message: 'Node.js Backend API',
    version: '1.0.0',
    endpoints: {
      health: '/health'
    }
  });
});

export default router; 