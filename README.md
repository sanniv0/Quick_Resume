# Quick Resume

Quick Resume is a full-stack web application designed to help users create professional resumes quickly and easily. It features a user-friendly interface, multiple customizable templates, and instant PDF download capabilities.

## Features

*   **Professional Templates**: Choose from various professionally designed templates (Classic, Modern, Minimalist, Executive).
*   **Easy-to-Use Interface**: Intuitive form-based input system for guided resume creation.
*   **Customization Options**: Personalize resumes with custom colors, fonts, and layouts.
*   **Instant PDF Download**: Download completed resumes as high-quality PDFs.
*   **Expert Tips & Guidance**: Receive helpful tips throughout the creation process.
*   **Mobile Responsive**: Build resumes on any device with a fully responsive design.

## Technologies Used

This project is built with a modern web application stack, including:

*   **Frontend**: React, Vite, Tailwind CSS, Radix UI
*   **Backend**: Express.js, TypeScript
*   **Database**: Drizzle ORM (with Neon Database for serverless PostgreSQL)
*   **Authentication**: Passport.js
*   **State Management**: React Query
*   **Routing**: Wouter

## Project Structure

The project is organized into `client`, `server`, and `shared` directories:

*   `client/`: Contains the React frontend application.
    *   `client/src/pages/landing.tsx`: The main landing page of the application.
    *   `client/src/App.tsx`: Defines the main application component and routing.
*   `server/`: Contains the Express.js backend API.
*   `shared/`: Contains shared schema definitions for resume data and user information.

## Getting Started

To run the application locally, follow these steps:

### Prerequisites

*   Node.js (LTS version recommended)
*   npm (Node Package Manager)

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd Quick_Resume_New
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```

### Running the Application

To start the development server (both frontend and backend):

```bash
npm run dev
```

The application will be accessible at `http://localhost:5000`.

### Building for Production

To build the application for production:

```bash
npm run build
```

This will create optimized builds for both the client and server in the `dist/` directory.

### Database Migrations

To push database schema changes:

```bash
npm run db:push
```

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.