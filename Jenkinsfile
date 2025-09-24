pipeline {
    agent any

    tools {
        maven 'Maven 3'       // the name you gave in Jenkins for Maven
        jdk 'jdk21'           // the name you gave in Jenkins for JDK
        nodejs 'NodeJS 20'    // the name you gave in Jenkins for Node
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/vaddamanipallavi/online_banking_system.git'
            }
        }

        stage('Backend Build') {
            steps {
                dir('Online-Banking-System/onlinebankingsystem') {
                    sh 'mvn clean package -DskipTests'
                }
            }
        }

        stage('Frontend Build') {
            steps {
                dir('Online-Banking-System/onlinebanking') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }
    }
}
