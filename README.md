Pasos para ejecutar el proyecto

Instalar las dependencias de angular

Version de Angular utilizada en el proyecto
v17.3.0

Version de Node  utlizada en el proyecto
v20.16.0

Una vez clonado el repositorio deberas:
comandos: para migrar las tablas a la db.
       npx sequelize-cli db:migrate
comando Insertar los datos iniciales en las tablas
       npx sequelize-cli db:seed:all

Se recomienda ulitzar el gestor de Base de Datos MYSQL o si utilizad otro debera cambiar la conexion en el archivo confi.js en el backend
