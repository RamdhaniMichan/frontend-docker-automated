pipeline {
    agent any

    parameters {
        string(name: 'DOCKERHUB', defaultValue: 'nameDockerID', description: 'DockerID')
        booleanParam(name: 'RUNTEST', defaultValue: 'false', description: 'Not Running')
        choice(name: 'DEPLOY', choices: ["Yes", "No"], description: 'Build Run')
    }

    stages {

        stage("Build") {
            steps {
                echo "Hello"
            }
        }

        stage("Testing") {
            when {
                expression {
                    params.RUNTEST
                }
            }
            steps {
                 echo "Hello"
            }
        }

        stage("Deploy") {
            when {
                expression {
                    params.DEPLOY == "Yes"
                }
            }
            steps {
                 echo "Hello"
            }
        }
    }
}