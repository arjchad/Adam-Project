# Employee Training Portal Frontend

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Angular](https://img.shields.io/badge/angular-14.2.0-red.svg)
![TypeScript](https://img.shields.io/badge/typescript-4.5.4-blue.svg)
![CI](https://github.com/your-username/employee-training-portal-frontend/workflows/CI/badge.svg)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Steps](#steps)
- [Code Scaffolding](#code-scaffolding)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

The **Employee Training Portal Frontend** is a modern, modular frontend application designed to streamline the onboarding and continuous training processes for organizations of all sizes. Built with scalability and user experience in mind, this portal provides a comprehensive interface for onboarding new hires, delivering training modules, and accessing essential resources and information.

## Features

- **Modular Architecture**: Easily customizable modules allow organizations to tailor the portal to their specific training needs and workflows.
- **User-Friendly Interface**: Intuitive design ensures that both administrators and employees can navigate the portal with ease.
- **Training Modules Management**: Create, assign, and track training modules to ensure effective knowledge transfer and skill development.
- **Resource Library**: Centralized repository for training materials, documentation, and supplemental resources.
- **Interactive Dashboards**: Gain insights into employee progress, module completion rates, and overall training effectiveness.
- **Responsive Design**: Accessible on various devices, including desktops, tablets, and smartphones.
- **Secure Authentication**: Robust security measures to protect sensitive training data and ensure authorized access.
- **Integration Ready**: Seamlessly integrates with existing HR systems and other enterprise tools for a unified workflow.
- **Automatic Reload**: The application will automatically reload whenever you modify any of the source files, enhancing development efficiency.

## Architecture

![Architecture Diagram](docs/architecture_diagram.png)

1. **Frontend**: Built with Angular, providing a dynamic and responsive user interface.
2. **Backend Integration**: Communicates with RESTful APIs to handle data operations.
3. **Authentication**: Secure login and role-based access control.
4. **State Management**: Utilizes NgRx for efficient state handling (optional).
5. **Styling**: Leveraging CSS and Angular Material for consistent and modern design.

## Installation

### Prerequisites

- **Node.js** (v14 or later)
- **Angular CLI** (v14.2.0 or later)
- **Git**

### Steps

1. **Clone the Repository**

    ```bash
    git clone https://github.com/your-username/employee-training-portal-frontend.git
    cd employee-training-portal-frontend
    ```

2. **Install Dependencies**

    Ensure you have [Node.js](https://nodejs.org/) installed. Then, install the necessary packages:

    ```bash
    npm install
    ```

3. **Configure Environment Variables**

    Create a `environment.ts` file in the `src/environments/` directory and add your configuration settings:

    ```typescript
    export const environment = {
      production: false,
      API_BASE_URL: 'https://api.yourdomain.com'
    };
    ```

## Code Scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Configuration

Configure the application by modifying the `environment.ts` file located in the `src/environments/` directory.

```typescript
// src/environments/environment.ts

export const environment = {
  production: false,
  API_BASE_URL: 'https://api.yourdomain.com'
};
```

## Running the Application

To build and serve the application locally with automatic reload on code changes, run:

```bash
ng serve
```

The application will automatically reload whenever you modify any of the source files. It will be available at `http://localhost:4200/`.

## Usage

- **Administrators** can manage training modules, assign courses to employees, and monitor progress through interactive dashboards.
- **Employees** can access assigned training modules, track their learning progress, and utilize the resource library for additional information.

## Technologies Used

- **Frontend Framework**: Angular
- **Styling**: CSS, Angular Material
- **Routing**: Angular Router
- **State Management**: NgRx (optional)
- **Backend Integration**: RESTful APIs (compatible with any backend technology)
- **Testing**: Jasmine, Karma
- **Package Management**: npm

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the Repository**

2. **Create a Feature Branch**

    ```bash
    git checkout -b feature/YourFeature
    ```

3. **Commit Your Changes**

    ```bash
    git commit -m "Add some feature"
    ```

4. **Push to the Branch**

    ```bash
    git push origin feature/YourFeature
    ```

5. **Open a Pull Request**

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

**AJ Chadha** - [ArjanChadha@Gmail.com](mailto:ArjanChadha@Gmail.com)  
LinkedIn: [https://www.linkedin.com/in/ajchadha](https://www.linkedin.com/in/ajchadha)  

Project Link: [https://github.com/arjchad/employee-training-portal-frontend](https://github.com/arjchad/employee-training-portal-frontend)

---

Made with ambition 🤩 by AJ Chadha
