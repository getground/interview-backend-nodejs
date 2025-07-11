"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUpdateUser = exports.validateCreateUser = void 0;
const validateCreateUser = (data) => {
    if (!data.name || typeof data.name !== 'string') {
        throw new Error('Name is required and must be a string');
    }
    if (!data.email || typeof data.email !== 'string') {
        throw new Error('Email is required and must be a string');
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        throw new Error('Invalid email format');
    }
    return {
        name: data.name.trim(),
        email: data.email.toLowerCase().trim()
    };
};
exports.validateCreateUser = validateCreateUser;
const validateUpdateUser = (data) => {
    const updateData = {};
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
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            throw new Error('Invalid email format');
        }
        updateData.email = data.email.toLowerCase().trim();
    }
    return updateData;
};
exports.validateUpdateUser = validateUpdateUser;
//# sourceMappingURL=User.js.map