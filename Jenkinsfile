def dockerhub = "michan11/frontend-vue"
def image_name = "${dockerhub}:${BRANCH_NAME}"
def builder

pipeline {
    agent any

    parameters {
        choice(name: 'DEPLOY', choices: ["DEVELOPMENT", "PRODUCTION"], description: 'Build App To Server')
    }

    stages {

        stage("Installing") {
            steps {
                nodejs("node14") {
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
            steps {
                 script {
                     builder.inside {
                         sh 'echo Success Testing Image'
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
                     if (params.DEPLOY == "DEVELOPMENT") {
                        builder.push()
                     }

                     if (params.DEPLOY == "PRODUCTION") {
                        builder.push()
                     }
                 }
            }
        }

        stage("Deploy") {
            steps {
                script {
                    if (params.DEPLOY == "DEVELOPMENT") {
                        sshPublisher(
                            publishers: [
                                sshPublisherDesc(
                                    configName: 'develop',
                                    verbose: true,
                                    transfers: [
                                        sshTransfer(
                                            execCommand : "docker rmi ${image_name}; cd config-image; docker-compose up -d;",
                                            execTimeout: 1200000
                                        )
                                    ]
                                )
                            ]
                        )
                    }

                    if (params.DEPLOY == "PRODUCTION") {
                        sshPublisher(
                            publishers: [
                                sshPublisherDesc(
                                    configName: 'develop',
                                    verbose: true,
                                    transfers: [
                                        sshTransfer(
                                            execCommand : "docker rmi ${image_name}; cd config-image; docker-compose up -d;",
                                            execTimeout: 1200000
                                        )
                                    ]
                                )
                            ]
                        )
                    }
                }
            }
        }
    }
}