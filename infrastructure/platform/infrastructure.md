
This file describes the infrastructure for the platform functionality.

#### Authentication

Handle the user authentication process

**Info**

| implementation | usage     |
| :------------: | :-------: |
| firebase       | 50K/month |

**data**

| key | type |
| --- | ---- |
| uuid | string (index) |
| email | string |
| username | string (optional) |

**To-do**

- [x] createUser
- [x] loginUser
- [x] getUser
- [ ] resetPassword

#### Workspaces

Containers for services. used to connect and manage services

**Info**

| implementation | capacity | limit |
| ---------------- | -------- | ----- |
| appwrite | ~4.8M | 2/user |

**data**

| key | type | size |
| ---- | ---- | ---- |
| ownerid | string | 28 |
| id | string | 32 |
| name | string | max(20) |
| created_in | number | tmp |
| token | string | 36 |
| apiKeys | string[] | 1024 |
| secrets | string[] | 1024 |

**To-do**

- [x] createWorkspace
- [x] listWorkspaces
- [ ] getWorkspace
- [ ] updateWorkspace
- [ ] deleteWorkspace

#### Services

Isolated sandboxes or containers that operate on-demand, executing specific predefined tasks or functionalities within milliseconds.

**Info**

| implementation | capacity | limits |
| --------------- | --------- | ------ |
| koxy | unlimited | free:3 pro:10 business:100

**data**

| key | type | size |
| --- | ---- | ---- |
| workspaceid | string | 32 |
| id | string | 16 |
| name | string | max(20) |
| marketid | string | 16 |
| type | string(ef, ai, rn, rl, db, http, auth) | 2 |
| requiredToken | string | <1024> |
| createdAt | string | 20 |
| updatedAt | string | 20 |

**types**

@type=ai

| key | type | size |
| --- | ---- | ---- |
| provider | string(openai, hf) | max(6) |
| model | string | max(32) |
| task | string | any |

@type=rl

| key | type | size |
| --- | ---- | ---- |
| machine | string | any |
| channel | string | 16 |

@type=db

| key | type | size |
| --- | ---- | ---- |
| databaseid | uuid | 36 |
| region | string | max(24)

@type=http

| key | type | size |
| --- | ---- | ---- |
| url | string | any |
| auth | string | any |
