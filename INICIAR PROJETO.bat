@echo off
REM Abrir VS Code na raiz do projeto
start cmd /k "cd /d C:\Users\brain\Desktop\PROJETO && code ."

REM Backend
start cmd /k "cd /d C:\Users\brain\Desktop\PROJETO\backend\PecaFacil && mvnw spring-boot:run"

REM Frontend
start cmd /k "cd /d C:\Users\brain\Desktop\PROJETO\frontend && npm start"

REM Abrir no navegador
start http://localhost:4200
