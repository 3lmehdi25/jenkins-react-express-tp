
pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Downloading source code...'
                checkout scm
            }
        }

        stage('Check Environment') {
            steps {
                bat 'node --version'
                bat 'npm --version'
                bat 'git --version'
            }
        }

        stage('Backend Install') {
            steps {
                dir('backend') {
                    bat 'npm install'
                }
            }
        }

        stage('Frontend Install') {
            steps {
                dir('frontend') {
                    bat 'npm install'
                }
            }
        }

        stage('Frontend Build') {
            steps {
                dir('frontend') {
                    bat 'npm run build'
                }
            }
        }

        stage('Build Complete') {
            steps {
                echo 'React and Express CI pipeline completed!'
            }
        }
    }

    post {
        success {
            echo 'SUCCESS: Application built successfully!'
        }

        failure {
            echo 'ERROR: Check the Jenkins console output.'
        }
    }
}
