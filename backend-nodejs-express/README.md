
```bash
# Make NodeJs directory and go to NodeJs
mkdir backend-nodejs-express
```

```bash
# Run npm init to initialize the Node application.
npm init -y
```

```bash
# Install the required dependencies:
npm i express mongoose cors body-parser
```

```bash
# Start the server using the following command.
node index.js
```


```bash
docker build -t rsalgadoc/backend-todo-list .
```
# Debido a que el build en AWS se queda pegado, por se una instancia muy pequeña, subir a DockerHub con el siguiente comando:
```bash
docker push rsalgadoc/backend-todo-list
```

```bash
docker run -d --name backend-todo-list -p 3001:3000 --restart always rsalgadoc/backend-todo-list
```


curl http://localhost:3001/tasks