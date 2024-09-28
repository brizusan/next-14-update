# DEV APP

1. Levantar la base de datos
```js
 docer compose up -d
```
2. Crear una copia del .env
3. Reemplazar las variables de entorno
4. Ejecutar el comando : `npm i`
5. Ejecutar los comandos de prisma

## PRISMA
```js
npx prisma init // inicializar
npx prisma migrate // tomar cambios modelos
npx prisma generate 
```
6. Ejecutar Seed para llenar la base de datos : `npx prisma db seed`