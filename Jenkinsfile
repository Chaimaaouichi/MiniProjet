pipeline {
    agent any
    
    stages {
        stage("Getting Code") {
            steps {
                git url: 'https://github.com/Chaimaaouichi/MiniProjet.git', branch: 'main',
                credentialsId: 'github-credentials' // jenkins-github-creds
                sh "ls -ltr"
            }
        }

        stage("Create Docker Image") {
            steps {
                script {
                     dir ("FullStackApp"){
                    echo "======== Executing Docker Image Creation ========"
                    sh "sudo docker build -t miniprojet ."
                }
            }
        }
        }

        stage("Push to Docker Hub") {
            steps {
                script {
                    echo "======== Executing Push to Docker Hub ========"
                    sh "docker tag devopstp rouamk/miniprojet:miniprojet"
                    sh "docker push rouamk/miniprojet:miniprojet"
                }
            }
        }
    }

    post {
        success {
            echo "======== Pipeline executed successfully ========"
        }
        failure {
            echo "======== Pipeline execution failed ========"
        }
    }
}
