# Managing Tasks Frontend

This is the frontend application for managing tasks, built with Angular.

## Prerequisites

- Node.js (version 14 or higher)
- Angular CLI

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/alexspnovaes/managingtasks-front.git
   cd managingtasks-front
   ```
2. Install dependencies:
   ```bash
    npm install
    ```
3. Run the development server:
   ```bash
    ng serve    
    ```
Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Configuration
The application configuration is defined in app.config.ts. It includes providers for zone change detection, routing, client hydration, and HTTP client configuration.

## Components
AppComponent
The root component of the application. It includes the router outlet for navigation.

DashboardComponent
A standalone component for managing tasks. It includes functionality to load, add, update, and delete tasks.

Services
TaskService
A service for interacting with the backend API to manage tasks.

Models
Task
A model representing a task with properties such as id, title, and completed.