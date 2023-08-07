import express from 'express';
import cors from 'cors';
import { Solution } from './solution';
import mysql from 'mysql';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

/**
 * DB 연결하는 테스트 부분입니다.
 */
// 최대한 이 부분은 수정하지 마시고 root로 접속해서 사용해주세요.
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : process.env.MYSQL_ROOT_USER, // 그럼에도 불구하고 다른 USER로 하시고 싶은 경우 .env파일 변경 후 process.env.MYSQL_USER로 수정해주시면 됩니다.
  password : process.env.MYSQL_ROOT_PASSWORD, // 다른 USER로 하시고 싶은 경우 .env파일 변경 후 process.env.MYSQL_PASSWORD로 수정해주시면 됩니다.
  database : process.env.MYSQL_DATABASE,
  port     : 3306
});

connection.connect();

connection.query('SELECT * from employees', (error, rows) => {
  if (error) throw error;
  console.log('User info is: ', rows);
});

// connection.end();
// DB 연결 테스트 끝

app.get('/', (req: express.Request, res: express.Response)=>{
    res.send('Hello Chainapsis!');
});

//------------------------------------------------------

/**
 * 1번 문제입니다.
 * /src/solution/solution.ts에서 getSolution1 함수를 구현해주세요.
 * Notion에 있는 문제 설명을 참고해주세요.
 */
app.get('/solution/1-a', async (req: express.Request, res: express.Response)=>{
    const solution = await Solution.solution1();
    res.send(solution);
});

//------------------------------------------------------

/**
 * 2번 문제입니다.
 * /src/solution/solution.ts에서 solution2 함수를 구현해주세요.
 * Notion에 있는 문제 설명을 참고해주세요.
 */
app.get('/solution/2', async (req: express.Request, res: express.Response)=>{
    const solution = await Solution.solution2();
    res.send(solution);
});

//------------------------------------------------------

/**
 * 3번 문제입니다.
 * /src/solution/solution.ts에서 solution3 함수를 구현해주세요.
 * Notion에 있는 문제 설명을 참고해주세요.
 */
app.get('/solution/3', async (req: express.Request, res: express.Response)=>{
    const solution = await Solution.solution3();
    res.send(solution);
});

//------------------------------------------------------

/**
 * 4번 문제입니다.
 * /src/solution/solution.ts에서 solution4 함수를 구현해주세요.
 * Notion에 있는 문제 설명을 참고해주세요.
 */
app.get('/solution/4', async (req: express.Request, res: express.Response)=>{
    const solution = await Solution.solution4();
    res.send(solution);
});





