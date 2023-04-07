/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('batters').del()
  await knex('batters').insert([
    {id: 1, user_id: 1, first_name: 'Aaron', last_name: "Judge", AVG: .331, HR: 62, RBI: 131, OPS: 1.111, image: "https://firebasestorage.googleapis.com/v0/b/mlb-card-collection.appspot.com/o/AJudge.jpeg?alt=media&token=150a10b7-66e4-40d8-a9d4-107c0c1f2190"},
    {id: 2, user_id: 1, first_name: 'Albert', last_name: "Pujols", AVG: .270, HR: 24, RBI: 68, OPS: .895, image: "https://firebasestorage.googleapis.com/v0/b/mlb-card-collection.appspot.com/o/APujols.jpeg?alt=media&token=23068396-87ea-4680-b6bb-ca0fc273a748"},
    {id: 3, user_id: 1, first_name: 'Jose', last_name: "Altuve", AVG: .300, HR: 28, RBI: 57, OPS: .921, image: "https://firebasestorage.googleapis.com/v0/b/mlb-card-collection.appspot.com/o/JAltuve.jpeg?alt=media&token=3d350d4e-c839-465f-aceb-3561d366992c"},
    {id: 4, user_id: 1, first_name: 'Shohei', last_name: "Ohtani", AVG: .273, HR: 34, RBI: 95, OPS: .356, image: "https://firebasestorage.googleapis.com/v0/b/mlb-card-collection.appspot.com/o/SOhtani.jpeg?alt=media&token=b144ad55-e7d5-4bc0-b26a-18d1686d3e51"}
  ]);
};
