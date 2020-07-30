# backend


## Auth
| Method | Endpoint                | Description                                                           |
| ------ | ----------------------- | ----------------------------------------------------------------------|
| POST   | /api/users/register     | Creates a user with the information sent inside the `request body`    |
| POST   | /api/users/login        | Logs in a user using information sent inside of the `request body`    |
| GET    | /api/users/logout       | Logs out user                                                         |

#### User Schema
| field      | data type        | metadata                                            |
| -----      | ---------------- | --------------------------------------------------- |
| id         | unsigned integer | primary key, auto-increments, generated by database |
| firstName  | string           | required                                            |
| lastName   | string           | required                                            |
| username   | string           | required, unique                                    |
| password   | string           | required                                            |



## Projects
| Method | Endpoint                  | Description                                                           |
| ------ | ------------------------- | ----------------------------------------------------------------------|
| GET    | /api/projects/:userId     | Gets all of a user's projects                                         |
| GET    | /api/projects/:userId/:id | Gets a specific user's project by the id specified in the url         |
| POST   | /api/projects/:userId     | Creates a project under a specific user                               |
| DELETE | /api/projects/:userId/:id | Deletes a specific project of a user                                  |

#### Project Schema
| field       | data type        | metadata                                            |
| -----       | ---------------- | --------------------------------------------------- |
| id          | unsigned integer | primary key, auto-increments, generated by database |
| user_id     | unsigned int     | required                                            |
| description | string           | required                                            |



## Values
| Method | Endpoint                  | Description                                        |
| ------ | ------------------------- | ---------------------------------------------------|
| GET    | /api/values               | Gets all values                                    |



## Goals
| Method | Endpoint                  | Description                                        |
| ------ | ------------------------- | ---------------------------------------------------|
| GET    | /api/goals/:userId        | Gets all a user's goals                            |
| POST   | /api/goals/:userId        | Creates a goal for a user                          |

#### Goal Schema
| field       | data type        | metadata                                            |
| -----       | ---------------- | --------------------------------------------------- |
| id          | unsigned integer | primary key, auto-increments, generated by database |
| user_id     | unsigned int     | required                                            |
| title       | string           | required                                            |
| date        | string           | not required                                        |