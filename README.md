# Node.js Hello World App with Railway and GitHub Actions CI/CD

This repository contains a simple Node.js Hello World application. The application is deployed to Railway using GitHub Actions for continuous integration and continuous deployment (CI/CD).

## Project Structure

- `index.js`: Main application file.
- `package.json`: Node.js project file that includes dependencies and scripts.
- `test`: Directory containing test files.
- `.github/workflows/test.yml`: GitHub Actions workflow file for deploying the app to Railway.

## Prerequisites

- Node.js (version 20 or higher)
- Railway account
- GitHub account

## Setup

### Local Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd #path_to_your_local_directory
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the application:
    ```bash
    npm start
    ```
   The server should be running on `http://localhost:3000`.

4. Run the tests:
    ```bash
    npm test
    ```

### Railway Setup

1. Create a new project on Railway.
2. Link that to your remote github repository
3. Change the project setting to only deploy after successfull execution of github actions.

### GitHub Actions CI/CD

The GitHub Actions workflow (`.github/workflows/test.yml`) is set up to deploy the application to Railway on every push to the `main` branch.

#### Workflow Steps:

1. **Checkout Code**: Checks out the repository.
2. **Set up Node.js**: Sets up Node.js version 20.
3. **Install Dependencies**: Installs the required Node.js dependencies.
4. **Run Tests**: Runs the test suite.
5. **Deploy to Railway**: Deploys the application to Railway using the Railway CLI and the provided project token.

### Deployment
The application is automatically deployed to Railway on every push to the main branch using GitHub Actions.

## Video Demonstration
Watch a video demonstration of the project [here](https://youtu.be/QYgwQvpSUN0).

### Contributing
Feel free to open issues or create pull requests if you have any improvements or bug fixes.

### License
This project is licensed under the MIT License.