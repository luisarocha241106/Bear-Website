# 🐻 Guía de Comandos de Git

¡Hola, parce! Acá te dejo todos los comandos de Git que vas a necesitar pa' arrancar en programación. ¡Pilas que es más fácil de lo que parece! 💪

---

## 📦 Configuración Inicial

Antes de empezar, toca configurar tu nombre y correo en Git. Esto se hace una sola vez.

```bash
# Configurar tu nombre
git config --global user.name "Tu Nombre"

# Configurar tu correo
git config --global user.email "tucorreo@ejemplo.com"

# Ver toda la configuración
git config --list
```

---

## 🚀 Crear y Clonar Repositorios

```bash
# Iniciar un repositorio nuevo en la carpeta donde estás
git init

# Clonar (descargar) un repositorio que ya existe en internet
git clone https://github.com/usuario/repositorio.git
```

---

## 📋 Ver el Estado del Proyecto

```bash
# Ver qué archivos cambiaron, cuáles están listos pa' guardar, etc.
git status

# Ver el estado de forma cortica
git status -s
```

---

## ➕ Agregar Archivos (Staging)

Antes de guardar los cambios, toca decirle a Git cuáles archivos querés incluir.

```bash
# Agregar un archivo específico
git add nombre-del-archivo.txt

# Agregar todos los archivos que cambiaron
git add .

# Agregar todos los archivos de una carpeta
git add carpeta/
```

---

## 💾 Guardar Cambios (Commit)

Un commit es como tomar una "foto" de tu proyecto en ese momento.

```bash
# Guardar los cambios con un mensaje que explique qué hiciste
git commit -m "Acá escribís qué cambio hiciste"

# Agregar todos los archivos modificados y hacer commit de una vez
git commit -am "Mensaje del cambio"

# Cambiar el mensaje del último commit (si te equivocaste)
git commit --amend -m "Nuevo mensaje corregido"
```

---

## 📜 Ver el Historial

```bash
# Ver todos los commits que se han hecho
git log

# Ver el historial de forma cortica (una línea por commit)
git log --oneline

# Ver el historial con un gráfico bonito de las ramas
git log --oneline --graph --all

# Ver los cambios de un commit específico
git show id-del-commit
```

---

## 🌿 Ramas (Branches)

Las ramas son como versiones paralelas de tu proyecto. ¡Súper útiles pa' trabajar sin dañar lo que ya funciona!

```bash
# Ver todas las ramas que tenés
git branch

# Crear una rama nueva
git branch nombre-de-la-rama

# Cambiar a otra rama
git checkout nombre-de-la-rama

# Crear una rama nueva y cambiarse a ella de una vez
git checkout -b nombre-de-la-rama

# También podés usar switch (más nuevo y más fácil)
git switch nombre-de-la-rama

# Crear rama y cambiarse con switch
git switch -c nombre-de-la-rama

# Borrar una rama (cuando ya no la necesitás)
git branch -d nombre-de-la-rama

# Borrar una rama a la fuerza (si Git te dice que no la ha mergeado)
git branch -D nombre-de-la-rama

# Renombrar la rama en la que estás
git branch -m nuevo-nombre
```

---

## 🔀 Unir Ramas (Merge)

```bash
# Primero te pasás a la rama donde querés traer los cambios
git checkout main

# Luego unís la otra rama
git merge nombre-de-la-rama
```

> **Ojo parce:** Si hay conflictos, Git te avisa. Toca abrir los archivos, arreglar las partes que chocan, y después hacer `git add` y `git commit`.

---

## 🔄 Rebase

```bash
# Rebase: otra forma de integrar cambios (reorganiza el historial)
git rebase nombre-de-la-rama

# Si hay conflictos durante el rebase, después de arreglarlos:
git rebase --continue

# Si querés cancelar el rebase
git rebase --abort
```

---

## ☁️ Trabajar con Repositorios Remotos (GitHub, GitLab, etc.)

```bash
# Ver los repositorios remotos que tenés configurados
git remote -v

# Agregar un repositorio remoto
git remote add origin https://github.com/usuario/repositorio.git

# Subir tus cambios al repositorio remoto
git push origin nombre-de-la-rama

# Subir y que la rama quede conectada pa' la próxima vez
git push -u origin nombre-de-la-rama

# Después de usar -u, solo necesitás:
git push

# Descargar los cambios del repositorio remoto
git pull

# Descargar los cambios sin hacer merge automático
git fetch

# Ver info del remoto
git remote show origin

# Cambiar la URL del remoto
git remote set-url origin nueva-url

# Eliminar un remoto
git remote remove origin
```

---

## ↩️ Deshacer Cambios

¡Tranqui! En Git casi todo se puede devolver.

```bash
# Descartar los cambios en un archivo (volver a como estaba en el último commit)
git checkout -- nombre-del-archivo

# Forma más nueva de descartar cambios
git restore nombre-del-archivo

# Quitar un archivo del staging (después de git add) pero sin perder cambios
git reset nombre-del-archivo

# Forma más nueva
git restore --staged nombre-del-archivo

# Devolver el proyecto al estado de un commit anterior (sin borrar historial)
git revert id-del-commit

# Volver a un commit anterior y BORRAR todo lo que vino después (¡pilas con este!)
git reset --hard id-del-commit

# Volver a un commit anterior pero mantener los cambios en staging
git reset --soft id-del-commit
```

---

## 📦 Stash (Guardar Cambios Temporalmente)

Cuando tenés cambios sin guardar y necesitás cambiar de rama.

```bash
# Guardar los cambios temporalmente
git stash

# Guardar con un mensaje pa' acordarte qué era
git stash save "mensaje descriptivo"

# Ver la lista de stashes guardados
git stash list

# Recuperar el último stash guardado
git stash pop

# Recuperar un stash específico
git stash pop stash@{número}

# Aplicar un stash sin borrarlo de la lista
git stash apply

# Borrar todos los stashes
git stash clear

# Borrar un stash específico
git stash drop stash@{número}
```

---

## 🔍 Comparar Cambios (Diff)

```bash
# Ver los cambios que hiciste y todavía no agregaste con git add
git diff

# Ver los cambios que ya están en staging
git diff --staged

# Comparar dos ramas
git diff rama1..rama2

# Comparar dos commits
git diff id-commit1..id-commit2
```

---

## 🏷️ Etiquetas (Tags)

Pa' marcar versiones importantes de tu proyecto.

```bash
# Ver todas las etiquetas
git tag

# Crear una etiqueta simple
git tag v1.0

# Crear una etiqueta con mensaje
git tag -a v1.0 -m "Primera versión estable"

# Subir las etiquetas al remoto
git push origin --tags

# Borrar una etiqueta local
git tag -d v1.0

# Borrar una etiqueta del remoto
git push origin --delete v1.0
```

---

## 🍒 Cherry Pick

Pa' traer un commit específico de otra rama sin hacer merge de todo.

```bash
git cherry-pick id-del-commit
```

---

## 📁 .gitignore

Si hay archivos que no querés que Git rastree (como contraseñas, node_modules, etc.), creá un archivo llamado `.gitignore` en la raíz del proyecto:

```
# Ignorar la carpeta node_modules
node_modules/

# Ignorar archivos .env (contraseñas y claves)
.env

# Ignorar archivos de log
*.log

# Ignorar carpeta de build
dist/
build/
```

---

## 🆘 Ayuda

```bash
# Ver la ayuda general de Git
git help

# Ver la ayuda de un comando específico
git help commit
git help push
```

---

## 💡 Tips Pa' que No Se Te Olvide

1. **Hacé commits seguido** — Es mejor tener muchos commits pequeños que uno gigante.
2. **Escribí mensajes claros** — Tu yo del futuro te lo va a agradecer.
3. **Usá ramas** — Nunca trabajes directo en `main` si podés evitarlo.
4. **Hacé `git pull` antes de `git push`** — Pa' que no hayan conflictos.
5. **No le tengás miedo a Git** — Si algo se daña, casi siempre se puede arreglar. 🫶

---

> _"El que no arriesga un huevo, no tiene un pollo"_ 🐣
>
> ¡Dale con toda, mi amor! Vas a ser una dura programando. 💻✨
