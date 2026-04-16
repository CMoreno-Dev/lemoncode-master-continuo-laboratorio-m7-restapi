# 🍋 Lemoncode - Master Continuo - Módulo 7: REST API

Este repositorio contiene la solución de los ejercicios entregables del laboratorio del Módulo 7 (REST API) del Master Front-End Continuo de Lemoncode.

## 👤 Información del Estudiante

* **Nombre Completo:** Cristian Moreno

---

## 📂 Estructura del Módulo

El módulo contiene dos proyectos:
- `restapi/` - Ejercicio obligatorio y opcional (REST API)
- `graphql/` - Ejercicio opcional (GraphQL)

---

## 📋 Contenido del Proyecto

### Rick & Morty Characters (restapi)

Proyecto de React que implementa una aplicación de gestión de personajes de la serie Rick & Morty con API REST.

**Características principales:**
- Lista de personajes consumida desde API REST
- Detalle de personaje con navegación
- Campo editable para guardar "bestSentence" del personaje
- Servidor mock local para simular escrituras (PUT)

**Estructura:** Proyectos `restapi/` y `graphql/`

**APIs utilizadas:**
- Rick and Morty API: `https://rickandmortyapi.com/api/character`
- Servidor mock local: `http://localhost:3000/api/character`

---

## 🚀 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm start` | Inicia la app y el servidor mock |
| `npm run start:dev` | Inicia el servidor de desarrollo (http://localhost:8080) |
| `npm run start:server` | Inicia el servidor mock (http://localhost:3000) |
| `npm run build` | Genera la build de producción |

---

## 📦 Tecnologías Utilizadas

**Conceptos practicados:**
- React con TypeScript
- Fetch API para consumo de REST API
- React Router para navegación
- Separación de capas (pods, scenes, API)
- Servidor mock con Hono

| Tecnología | Descripción |
|------------|-------------|
| **React 19** | Framework principal para la interfaz de usuario |
| **TypeScript** | Tipado estático |
| **Vite** | Build tool y servidor de desarrollo |
| **React Router 7** | Enrutamiento y navegación |
| **MUI** | Biblioteca de componentes |
| **Hono** | Framework para servidor mock |

---

## 🛠️ Instalación

```bash
# Instalar dependencias
cd restapi
npm install

# Iniciar servidor de desarrollo y mock
npm start
```
