"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getAllUsers = void 0;
let users = [
    {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        createdAt: new Date().toISOString()
    },
    {
        id: '2',
        name: 'Jane Smith',
        email: 'jane@example.com',
        createdAt: new Date().toISOString()
    }
];
const getAllUsers = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            data: users,
            count: users.length
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: 'Failed to fetch users'
        });
    }
};
exports.getAllUsers = getAllUsers;
const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = users.find(u => u.id === id);
        if (!user) {
            res.status(404).json({
                success: false,
                error: 'User not found'
            });
            return;
        }
        res.status(200).json({
            success: true,
            data: user
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: 'Failed to fetch user'
        });
    }
};
exports.getUserById = getUserById;
const createUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        if (!name || !email) {
            res.status(400).json({
                success: false,
                error: 'Name and email are required'
            });
            return;
        }
        const existingUser = users.find(u => u.email === email);
        if (existingUser) {
            res.status(400).json({
                success: false,
                error: 'Email already exists'
            });
            return;
        }
        const newUser = {
            id: (users.length + 1).toString(),
            name,
            email,
            createdAt: new Date().toISOString()
        };
        users.push(newUser);
        res.status(201).json({
            success: true,
            data: newUser
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: 'Failed to create user'
        });
    }
};
exports.createUser = createUser;
const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;
        const userIndex = users.findIndex(u => u.id === id);
        if (userIndex === -1) {
            res.status(404).json({
                success: false,
                error: 'User not found'
            });
            return;
        }
        if (email && users.some(u => u.email === email && u.id !== id)) {
            res.status(400).json({
                success: false,
                error: 'Email already exists'
            });
            return;
        }
        users[userIndex] = {
            ...users[userIndex],
            name: name || users[userIndex].name,
            email: email || users[userIndex].email
        };
        res.status(200).json({
            success: true,
            data: users[userIndex]
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: 'Failed to update user'
        });
    }
};
exports.updateUser = updateUser;
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const userIndex = users.findIndex(u => u.id === id);
        if (userIndex === -1) {
            res.status(404).json({
                success: false,
                error: 'User not found'
            });
            return;
        }
        const deletedUser = users.splice(userIndex, 1)[0];
        res.status(200).json({
            success: true,
            data: deletedUser,
            message: 'User deleted successfully'
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: 'Failed to delete user'
        });
    }
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=userController.js.map