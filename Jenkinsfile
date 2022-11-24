pipeline {
    agent any
    tools {nodejs "NodeJS"}
    
       stages {
            stage('Dependencies') {
                steps {
                    sh 'npm i'
                    }
            }
            stage('e2e Tests') {
                steps {
               sh 'npx cypress run --spec "cypress/e2e/mytests/*"'
           }
       }
    }
    
    post {
        always {
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll:true, reportDir: 'cypress/report', reportFiles: 'index.html',
                        reportName: 'HTML Report', reportTitles:''])
        }
    }
    
}