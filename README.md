# todo-list-app-mean


# Crear la app con Angular

Para ver si esta instaldo Angular CLI ejecutar lo siguiente:

```bash
ng version
```


     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/


Angular CLI: 19.2.12
Node: 22.15.0
Package Manager: npm 11.3.0
OS: win32 x64

Si no esta intalado Angular CLI, ejecutar lo siguiente, 

```bash
npm install -g @angular/cli
```

Create Project and change directory


```bash
ng new frontend-angular-app

cd .\frontend-angular-app\
```

### Steup Tailwind

1. Install talwind CSS

```bash
npm install -D tailwindcss @tailwindcss/postcss postcss autoprefixer
```

Configure PostCSS Plugins
Create a .postcssrc.json file in the root of your project and add the @tailwindcss/postcss plugin to your PostCSS configuration.

```js
//.postcssrc.json
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
```

Import Tailwind CSS
Add an @import to ./src/styles.css that imports Tailwind CSS.

```css
styles.css
@import "tailwindcss";
```

```bash
ng g s service/webrequest
```

```bash
ng g c components/todo-add
```


```bash
ng serve --open
```