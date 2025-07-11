export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

export interface CreateUserRequest {
  name: string;
  email: string;
}

export interface UpdateUserRequest {
  name?: string;
  email?: string;
}

// Validation functions
export const validateCreateUser = (data: any): CreateUserRequest => {
  if (!data.name || typeof data.name !== 'string') {
    throw new Error('Name is required and must be a string');
  }
  
  if (!data.email || typeof data.email !== 'string') {
    throw new Error('Email is required and must be a string');
  }
  
  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    throw new Error('Invalid email format');
  }
  
  return {
    name: data.name.trim(),
    email: data.email.toLowerCase().trim()
  };
};

export const validateUpdateUser = (data: any): UpdateUserRequest => {
  const updateData: UpdateUserRequest = {};
  
  if (data.name !== undefined) {
    if (typeof data.name !== 'string') {
      throw new Error('Name must be a string');
    }
    updateData.name = data.name.trim();
  }
  
  if (data.email !== undefined) {
    if (typeof data.email !== 'string') {
      throw new Error('Email must be a string');
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      throw new Error('Invalid email format');
    }
    
    updateData.email = data.email.toLowerCase().trim();
  }
  
  return updateData;
}; 