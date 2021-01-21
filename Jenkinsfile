def dockerhub = "michan11/vue-jenkins"
def image_name = "${dockerhub}:${BRANCH_NAME}"
def builder

pipeline {
    agent any

    // parameters {
    //     string(name: 'DOCKERHUB', defaultValue: 'nameDockerID', description: 'DockerID')
    //     booleanParam(name: 'RUNTEST', defaultValue: 'false', description: 'Not Running')
    //     choice(name: 'DEPLOY', choices: ["Yes", "No"], description: 'Build Run')
    // }

    stages {

        stage("Installing ....") {
            steps {
                nodejs("node") {
                    sh 'npm install'
                }
            }
        }

        stage("Build Docker") {
            steps {
               script {
                   builder = docker.build("${image_name}")
               }
            }
        }

        stage("Testing") {
            // when {
            //     expression {
            //         params.RUNTEST
            //     }
            // }
            steps {
                 script {
                     builder.inside {
                         sh 'Success'
                     }
                 }
            }
        }

        stage("Push Image") {
            // when {
            //     expression {
            //         params.DEPLOY == "Yes"
            //     }
            // }
            steps {
                 script {
                     builder.push()
                 }
            }
        }
    }
}