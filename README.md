# 🍋 Lemoncode - Master Continuo - Módulo 7: REST API

Este repositorio contiene la solución de los ejercicios entregables del laboratorio del Módulo 7 (REST API) del Master Front-End Continuo de Lemoncode.

## 👤 Información del Estudiante

* **Nombre Completo:** Cristian Moreno

---

## 📂 Estructura del Módulo

El módulo se ha organizado en un proyecto:

| Directorio | Proyecto | Descripción |
| :--- | :--- | :--- |
| `src` | Rick & Morty Characters | Aplicación de gestión de personajes de Rick & Morty |

---

## 📋 Contenido del Proyecto

### Rick & Morty Characters

Proyecto de React que implementa una aplicación de gestión de personajes de la serie Rick & Morty con API REST.

**Características principales:**
- Lista de personajes consumida desde API REST
- Detalle de personaje con navegación
- Campo editable para guardar "bestSentence" del personaje
- Servidor mock local para simular escrituras (PUT)

**Estructura:**
```
src/
├── scenes/
│   ├── character-collection.scene.tsx
│   └── character.scene.tsx
├── pods/
│   ├── character-collection/
│   │   ├── api/
│   │   │   ├── character-collection.api.ts
│   │   │   └── character-collection.api-model.ts
│   │   ├── character-collection.component.tsx
│   │   ├── character-collection.container.tsx
│   │   ├── character-collection.hook.ts
│   │   ├── character-collection.mapper.ts
│   │   ├── character-collection.vm.ts
│   │   └── components/
│   │       └── character-card.component.tsx
│   └── character/
│       ├── api/
│       │   ├── character.api.ts
│       │   └── character.api-model.ts
│       ├── character.component.tsx
│       ├── character.container.tsx
│       ├── character.hook.ts
│       ├── character.mapper.ts
│       └── character.vm.ts
├── core/
│   └── router/
│       ├── routes.ts
│       └── router.component.tsx
└── layouts/
    └── app.layout.tsx
```

**APIs utilizadas:**
- Rick and Morty API: `https://rickandmortyapi.com/api/character`
- Servidor mock local: `http://localhost:3000/api/character` (carpeta server)

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
- Patrón Container/Component
- Separación de capas (pods, scenes, API)
- Servidor mock con Hono

| Tecnología | Descripción |
|------------|-------------|
| **React 19** | Framework principal para la interfaz de usuario |
| **TypeScript** | Tipado estático |
| **Vite** | Build tool y servidor de desarrollo |
| **React Router** | Enrutamiento y navegación |
| **MUI** | Biblioteca de componentes |
| **Emotion** | Sistema de estilos |
| **Hono** | Framework para servidor mock |

---

## 🛠️ Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo y mock
npm start
```

---

## 📝 Ejercicios

### Ejercicio 1
- Consumir API de Rick & Morty para obtener lista de personajes
- Mostrar detalles del personaje al navegar

### Ejercicio 2
- Cambiar endpoints al servidor mock local
- Implementar guardado de campo `bestSentence` (PUT)