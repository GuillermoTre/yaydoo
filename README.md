# yaydoo
Ejercicio
En una empresa Fintech se necesita de una API que pueda proveer a la empresa de los recursos necesarios para que su equipo de soporte pueda consultar los movimientos de las cuentas de sus usuarios.
Se espera contar con los siguientes recursos para poder cumplir con el requerimiento:
•   Login de usuarios, el password se envía en formato md5.
•   Agregar clientes nuevos
•   Eliminar clientes
•   Lista de clientes con sus respectivas cuentas
•   Lista de transacciones por cliente
•   Cada lista se puede filtrar por fecha de registro

Instrucciones:

Instalar postgres
-puede ser instalado desde la siguiente liga https://www.postgresql.org/download/

Crear base de datos
-en psql correr el comando CREATE DATABASE dbyaydoo o configurar archivo centralConfig en la carpeta de config para apuntar a una base de datos existente

installar dependencias
-correr el comando npm install en la terminal.

crear tablas en base de datos
-correr el comando npm run migrate

llenar tablas para facilitar uso
-correr comando npm run seed

Iniciar backend
-correr comando node app.js, backend estara escuchando el puerto 3010

Endpoints:

---------------------------------------------

endpoint: /admin/createClient

method: post

params: necesita de un body formato {"name": "testing", "password": "test" }

---------------------------------------------

endpoint: /admin/deleteClient

method: delete

params: body format {"client_id": 2}

---------------------------------------------

endpoint: /client/login

method: post

params: {"name": "Doe", "password": "test"}

---------------------------------------------

endpoint:/client/account/:client_id

method: get

params: en url indicar client id ejem, /client/account/1

---------------------------------------------

endpoint:/client/account/:client_id/:date

method: get

params:en url indicar client id ejem, /client/account/1/2021-08-21

---------------------------------------------

endpoint:/client/transaction/:client_id'

method: get

params:en url indicar client id ejem, /client/transaction/1

---------------------------------------------

endpoint: /client/transaction/:client_id/:date

method: get

params: en url indicar client id ejem, /client/transaction/1/2021-08-21

---------------------------------------------
