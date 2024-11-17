import { Hono } from 'hono'
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blogs';
import { cors } from 'hono/cors';


const app = new Hono<{
  Bindings :{
    DATABASE_URL : string,
    JWT_SECRET : string
  }
}>()

app.use("/*",cors());
app.route("/api/v1/user",userRouter);
app.route("/api/v1/blog",blogRouter);

//In cloudfare we cannot globally access env but it is present inside c so either use a middleware or put it in inside every route

export default app
