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
          stage("Unit Tests") {
            steps {
                script {
                    dir ("FullStackAppFrontEnd"){
                    echo "======== Executing Unit Tests ========"
                    sh "npm test"
                }}
            }
        }

        stage("Create Docker Image") {
            steps {
                script {
                     dir ("FullStackApp"){
                    echo "======== Executing Docker Image Creation ========"
                    sh "docker build -t miniprojet ."
                }
            }
        }
        }

        stage("Push to Docker Hub") {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'rouamk', usernameVariable: 'rouamk', passwordVariable: 'rouamkadmi')]) {
                        sh "docker login -u rouamk -p rouamkadmi"
                    echo "======== Executing Push to Docker Hub ========"
                    sh "docker tag miniprojet rouamk/miniprojet:miniprojet"
                    sh "docker push rouamk/miniprojet:miniprojet"
                    }}
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
