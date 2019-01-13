
def app

node ('registry') {    

    stage('Clone repository') {
        checkout scm
    }

    stage('Build image') {
/*        app = docker.build("main-proxy:1.0.0")*/
        stash name: "first-stash"
    }

    stage('Test image') {
/*        app.inside {
            sh 'echo "Tests passed"'
        }*/
    }

}

node ('registry') {    

    stage('Push image') {
        unstash "first-stash"
        try {
            sh "docker stop main-nginx"
            sh "docker rm main-nginx"
        } catch (Exception _) {
            echo "no container to stop"
        }
        try {
            sh "docker stop main-master"
            sh "docker rm main-master"
        } catch (Exception _) {
            echo "no container to stop"
        }
        try {
            sh "docker rmi main-nginx:1.0.0"
        } catch (Exception _) {
            echo "no container to stop"
        }
        try {
            sh "docker rmi main-master:1.0.0"
        } catch (Exception _) {
            echo "no container to stop"
        }
        sh "docker-compose up -d"
    }
    
}