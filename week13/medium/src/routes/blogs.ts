import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import { Hono } from 'hono'


export const blogRouter = new Hono<{
    Bindings :{
      DATABASE_URL : string,
      JWT_SECRET : string
    }
  }>()

  blogRouter.use("/*",(c,next)=>{
    next();
  })



blogRouter.post('/',async (c) => {
const prisma = new PrismaClient({
    datasources: {
    db: { url: c.env.DATABASE_URL },
    },
}).$extends(withAccelerate());


} )