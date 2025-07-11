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
export declare const validateCreateUser: (data: any) => CreateUserRequest;
export declare const validateUpdateUser: (data: any) => UpdateUserRequest;
//# sourceMappingURL=User.d.ts.map