pipeline {
    agent any

    tools {
        maven 'Maven 3'       // Jenkins Maven tool name
        jdk 'jdk21'           // Jenkins JDK tool name
        nodejs 'NodeJS 20'    // Jenkins NodeJS tool name
    }

    environment {
        BACKEND_DIR = 'Online-Banking-System/onlinebankingsystem'
        FRONTEND_DIR = 'Online-Banking-System/onlinebanking'
    }

    stages {
        stage('Checkout') {
            steps {
                echo "Checking out code from GitHub..."
                git branch: 'main', url: 'https://github.com/vaddamanipallavi/online_banking_system.git'
            }
        }

        stage('Build') {
            parallel {
                stage('Backend Build') {
                    steps {
                        dir("${BACKEND_DIR}") {
                            echo "Building backend with Maven..."
                            bat 'mvn clean package -DskipTests'
                        }
                    }
                    post {
                        success {
                            archiveArtifacts artifacts: "${BACKEND_DIR}\\target\\*.jar", fingerprint: true
                        }
                        failure {
                            echo "Backend build failed!"
                        }
                    }
                }

                stage('Frontend Build') {
                    steps {
                        dir("${FRONTEND_DIR}") {
                            echo "Installing frontend dependencies..."
                            bat 'npm install'
                            echo "Building frontend..."
                            bat 'npm run build'
                        }
                    }
                    post {
                        success {
                            archiveArtifacts artifacts: "${FRONTEND_DIR}\\build\\**", fingerprint: true
                        }
                        failure {
                            echo "Frontend build failed!"
                        }
                    }
                }
            }
        }
    }

    post {
        always {
            echo "Cleaning up workspace..."
            cleanWs()
        }
        success {
            echo "Build completed successfully!"
        }
        failure {
            echo "Build failed!"
        }
    }
}
