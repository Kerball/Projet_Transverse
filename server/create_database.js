const articles = require('./data/articles.js')
const { Client } = require('pg')

const client = new Client({
  user: 'utilisateur',
  host: 'localhost',
  password: 'admin',
  database: 'postgres'
 })

client.connect()

async function run () {
  console.log('Début du schéma de la base de données')
  await client.query({
    text: `CREATE TABLE users
    (
        id serial PRIMARY KEY,
        email text,
        password text
    )`,
  })
  console.log('Table "users" créée')
  await client.query({
    text: `INSERT INTO users
    VALUES ($1, $2, $3)`,
    values: [1, 'admin', "$2b$10$G3Ll9eRk/6TNjhdFZpnpo.G5s/fkKQBdf8ae6MGdSN6/GfZQhka3O"]
  })
  console.log('Utilisateur "admin" généré')
  await client.query({
    text: `CREATE TABLE articles
    (
        id serial PRIMARY KEY,
        name text,
        description text,
        image text,
        style text
    )`,
  })
  console.log('Table "articles" créée')
  for (const article of articles) {
    await client.query({
      text: `INSERT INTO articles(name, description, image, style)
      VALUES ($1, $2, $3, $4)`,
      values: [article.name, article.description, article.image, article.style]
    })
  }
  console.log('Articles importés')
  console.log('Création de la base de données terminé')
  client.end()
}

run()