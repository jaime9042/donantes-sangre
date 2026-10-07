import { useState } from "react";
import "./App.css";

function App() {
  const [donantes, setDonantes] = useState(() => {
    try {
      const guardados = localStorage.getItem("donantes-sprint1");
      const registros = guardados ? JSON.parse(guardados) : [];
      return Array.isArray(registros) ? registros : [];
    } catch {
      return [];
    }
  });

  const [mensaje, setMensaje] = useState("");

  function registrarDonante(evento) {
    evento.preventDefault();

    const formulario = evento.currentTarget;
    const datos = new FormData(formulario);
    const nombre = datos.get("nombre").trim();

    if (!nombre) {
      setMensaje("Escribe el nombre del donante.");
      return;
    }

    let id;

    do {
      id = crypto.randomUUID().replaceAll("-", "").toUpperCase();
    } while (donantes.some((donante) => donante.id === id));

    const nuevoDonante = {
      id,
      nombre,
      telefono: datos.get("telefono").trim(),
      abo: datos.get("abo"),
      rhD: datos.get("rhD"),
      C: datos.get("C"),
      c: datos.get("c"),
      E: datos.get("E"),
      e: datos.get("e"),
    };

    const nuevosRegistros = [...donantes, nuevoDonante];

    try {
      localStorage.setItem(
        "donantes-sprint1",
        JSON.stringify(nuevosRegistros)
      );
    } catch {
      setMensaje(
        "No se pudo guardar. Revisa el almacenamiento del navegador."
      );
      return;
    }

    setDonantes(nuevosRegistros);
    setMensaje(`Donante registrado y guardado: ${nuevoDonante.nombre}`);
    formulario.reset();
  }

  return (
    <main className="contenedor">
      <header className="encabezado">
        <h1>Donantes de sangre con fenotipo extendido</h1>
        <p>Registro de donantes — Sprint 1</p>
      </header>

      <section className="tarjeta">
        <h2>Registrar donante</h2>
        <p>Utiliza datos ficticios para esta práctica.</p>

        <form onSubmit={registrarDonante}>
          <div className="campos">
            <label>
              Nombre completo *
              <input name="nombre" type="text" required />
            </label>

            <label>
              Teléfono
              <input name="telefono" type="tel" />
            </label>

            <label>
              Grupo ABO *
              <select name="abo" required defaultValue="">
                <option value="" disabled>Selecciona</option>
                {["A", "B", "AB", "O"].map((grupo) => (
                  <option key={grupo} value={grupo}>
                    {grupo}
                  </option>
                ))}
              </select>
            </label>

            <label>
              RhD *
              <select name="rhD" required defaultValue="">
                <option value="" disabled>Selecciona</option>
                <option value="+">Positivo</option>
                <option value="-">Negativo</option>
              </select>
            </label>
          </div>

          <h3>Fenotipo Rh</h3>

          <div className="campos">
            {["C", "c", "E", "e"].map((antigeno) => (
              <label key={antigeno}>
                Antígeno {antigeno} *
                <select name={antigeno} required defaultValue="">
                  <option value="" disabled>Selecciona</option>
                  <option value="+">Positivo</option>
                  <option value="-">Negativo</option>
                </select>
              </label>
            ))}
          </div>

          <p>El ID se genera automáticamente al registrar.</p>
          <button type="submit">Registrar donante</button>
          <p role="status">{mensaje}</p>
        </form>
      </section>

      <section className="tarjeta">
        <h2>Donantes guardados ({donantes.length})</h2>
        <p>Los registros se guardan en este navegador.</p>

        {donantes.length === 0 ? (
          <p>Todavía no hay donantes registrados.</p>
        ) : (
          <div className="tabla-contenedor">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Teléfono</th>
                  <th>ABO</th>
                  <th>RhD</th>
                  <th>C</th>
                  <th>c</th>
                  <th>E</th>
                  <th>e</th>
                </tr>
              </thead>

              <tbody>
                {donantes.map((donante) => (
                  <tr key={donante.id}>
                    <td>{donante.id}</td>
                    <td>{donante.nombre}</td>
                    <td>{donante.telefono || "Sin teléfono"}</td>
                    <td>{donante.abo}</td>
                    <td>{donante.rhD}</td>
                    <td>{donante.C}</td>
                    <td>{donante.c}</td>
                    <td>{donante.E}</td>
                    <td>{donante.e}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;