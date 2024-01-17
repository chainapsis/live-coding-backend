import express from "express";
import cors from "cors";
import { Solution } from "./solution";
// import mysql2 from "mysql2";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello Chainapsis!");
});

//------------------------------------------------------

/**
 * 1번 문제입니다.
 * /src/solution/solution.ts에서 solution_1_1, solution_1_2 함수를 구현해주세요.
 * Notion에 있는 문제 설명을 참고해주세요.
 */
app.get(
  "/solution/1-1",
  async (req: express.Request, res: express.Response) => {
    const solution = await Solution.solution_1_1();
    res.send(solution);
  },
);

app.post(
  "/solution/1-2",
  async (req: express.Request, res: express.Response) => {
    const solution = await Solution.solution_1_2();
    res.send(solution);
  },
);

//------------------------------------------------------

/**
 * 2번 문제입니다.
 * /src/solution/solution.ts에서 solution2 함수를 구현해주세요.
 * Notion에 있는 문제 설명을 참고해주세요.
 */
app.get("/solution/2", async (req: express.Request, res: express.Response) => {
    const solution = Solution.solution_2();
    res.send(solution);
});

//------------------------------------------------------

/**
 * 3번 문제입니다.
 * /src/solution/solution.ts에서 solution3 함수를 구현해주세요.
 * Notion에 있는 문제 설명을 참고해주세요.
 * 새로운 파일이 추가될 예정이고 해당 파일의 클래스를 구현해주시면 됩니다.
 */
app.get("/solution/3", async (req: express.Request, res: express.Response) => {
  const solution = Solution.solution_3();
  res.send(solution);
});

//------------------------------------------------------
