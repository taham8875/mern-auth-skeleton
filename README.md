# MERN Auth Skeleton

This is a MERN stack application with authentication.

## Routes

| Method | Path                 | Purpose                               |
| ------ | -------------------- | ------------------------------------- |
| POST   | `/api/user`          | Register a new user                   |
| POST   | `/api/users/login`   | Authenticate a user and get the token |
| GET    | `/api/users/logout`  | Logout a user and clear the cookie    |
| GET    | `/api/users/profile` | Get a single user (protected route)   |
| PUT    | `/api/users/profile` | Update a user (protected route)       |
