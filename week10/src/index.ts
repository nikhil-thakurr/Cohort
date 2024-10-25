import {Client} from 'pg'

const client = new Client ({
    connectionString:"postgresql://Practise1_owner:9xB8IQyAYtXs@ep-rapid-mode-a5pb59xz.us-east-2.aws.neon.tech/Practise1?sslmode=require"
});



async function createTable(){

    await client.connect();

    const res = await client.query(`
    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );`)

    console.log(res);

}

async function insertValue(){
    await client.connect();


    const res = await client.query(`
     INSERT INTO  users (username,email,password) values(
        'nikhil','nik@gmail.com','nik')
    `)

    console.log(res);

}

// const query = 'Select * from users where email = $1';
// const res = await client.query(query , ["nikhil@gmail.com"]);
insertValue();

//createTable();