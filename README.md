# Donantes de sangre con fenotipo extendido

Proyecto académico desarrollado en React y Vite.

Autor: Jaime Uribe Vázquez.

## Objetivo del Sprint 1

Registrar donantes con un identificador único y capturar
su grupo ABO, RhD y fenotipo Rh (C, c, E, e).

## Historias implementadas

- HU01: Registrar donante.
- HU02: Generar ID único del donante.
- HU03: Registrar grupo ABO y RhD.
- HU04: Registrar fenotipo Rh (C, c, E, e).

## Funcionalidades

- Formulario con campos obligatorios.
- Generación automática de ID y comprobación de duplicados
  entre los registros cargados.
- Captura de resultados positivos o negativos por antígeno.
- Visualización de los registros.
- Almacenamiento local mediante localStorage.

## Ejecutar el proyecto

1. Instalar las dependencias: `npm install`
2. Iniciar el servidor de desarrollo: `npm run dev`
3. Abrir la dirección que indique la terminal.

## Verificación

- `npm run build`: genera la versión de producción.
- `npm run lint`: revisa el código con ESLint.

Pruebas manuales realizadas:
- Registro de dos donantes con ID diferentes.
- Permanencia de los registros e ID al recargar.
- Bloqueo del envío con campos obligatorios vacíos.

## Planeación

Historias seleccionadas: HU01, HU02, HU03 y HU04.
Estimación: 14 puntos de historia y 33 horas.
Duración prevista: 5 días.

Tablero:
https://trello.com/b/gLLo9jVc/donantes-de-sangre-con-fenotipo-extendido-scrum

## Alcance y limitaciones

Prototipo académico para utilizar con datos ficticios.
Los registros se conservan únicamente en el navegador
y origen donde se capturaron. No se comparten entre
dispositivos y pueden perderse al borrar los datos del navegador.

Esta versión no incluye servidor, base de datos compartida
ni autenticación. No determina compatibilidad transfusional.