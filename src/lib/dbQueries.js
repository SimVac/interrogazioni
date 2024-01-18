import db from './db';
import helper from './helper';

export async function getMaterie(){
  const rows = await db.query(
    "SELECT * FROM materia"
  );
  const data = helper.emptyOrRows(rows);

  return data
}

export async function getMateria(endpoint){
  const rows = await db.query(
    "SELECT * FROM materia WHERE endpoint=?",
    [endpoint]
  );
  const data = helper.emptyOrRows(rows);

  return data.length > 0 ? data[0] : null;
}

export async function getElencoMateria(endpoint){
  const rows = await db.query(
    "SELECT s.id, s.nome, s.cognome, i.interrogato, i.offerto " + 
    "FROM e_interrogato i " +
    "INNER JOIN studente s ON i.id_studente = s.id " +
    "INNER JOIN materia m ON m.endpoint = ? " +
    "WHERE i.id_materia = m.id " +
    "ORDER BY i.posizione;",
    [endpoint]
  );
  const data = helper.emptyOrRows(rows);

  return data
}

export async function updateOrdine(studente, materia){
  if (!studente || !materia) return;
  await db.query(
    "UPDATE e_interrogato " +
    "SET posizione=?, interrogato=?, offerto=? " +
    "WHERE id_studente=? AND id_materia=?",
    [studente.posizione, studente.interrogato, studente.offerto, studente.id, materia.id]
  )
}

export async function updateMateriaAttivo(attivo, id){
  await db.query(
    "UPDATE materia SET attivo=? WHERE id=?",
    [attivo, id]
  )
}

export async function getUltimoAvviso(){
  const rows = await db.query(
    "SELECT * FROM avviso ORDER BY preferito DESC, avviso.data DESC LIMIT 1"
  )

  const data = helper.emptyOrRows(rows);

  return data.length > 0 ? data[0] : null;
}

export async function getAvvisi(){
  const rows = await db.query(
    "SELECT * FROM avviso ORDER BY preferito DESC, avviso.data DESC"
  )

  const data = helper.emptyOrRows(rows);

  return data;
}

export async function addAvviso(avviso){
  if (!avviso) return;
  await db.query(
    "INSERT INTO avviso (titolo, descrizione, data, preferito) VALUES (?, ?, NOW(), 0)",
    [avviso.titolo, avviso.descrizione]
  )
}

export async function deleteAvviso(id){
  await db.query(
    "DELETE FROM avviso WHERE id=?",
    [id]
  )
}

export async function updateAvvisoPreferito(id, preferito){
  await db.query(
    "UPDATE avviso SET preferito=? WHERE id=?",
    [preferito, id]
  );
}