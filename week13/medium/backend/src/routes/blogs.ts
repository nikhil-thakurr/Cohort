import { Prisma, PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from "hono/jwt";
import { Hono } from "hono";
import { auth } from "hono/utils/basic-auth";
import { createBlogInput, updateBlogInput } from "@nikhil_thakur_code/medium-common";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

blogRouter.use("/*", async (c, next) => {
  try {
    const authHeader = c.req.header("authorization") || "";

    // Extract the token from the "Bearer <token>" format
    if (!authHeader.startsWith("Bearer ")) {
      c.status(403);
      return c.json({ message: "You are not authorized" });
    }

    const token = authHeader.substring(7); // Remove "Bearer " prefix

    // Verify the token using the JWT secret
    const user = await verify(token, c.env.JWT_SECRET);

    if (user) {
      c.set("userId", user.id as string); // Typecast `user.id` to `string`
      await next();
    } else {
      c.status(403);
      return c.json({ message: "You are not authorized" });
    }
  } catch (err) {
    console.error("Authorization error:", err);
    c.status(403);
    return c.json({ message: "You are not authorized" });
  }
});

blogRouter.post("/", async (c) => {
  const body =await c.req.json();
  const {success} =createBlogInput.safeParse(body);

  if(!success){
    c.status(411);
    return c.json({
      message:"Inputs Are Incorect"
    })
  }
  const authorId = c.get("userId");

  const prisma = new PrismaClient({
    datasources: {
      db: { url: c.env.DATABASE_URL },
    },
  }).$extends(withAccelerate());

  const blog = await prisma.blog.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: Number(authorId),
    },
  });

  return c.json({
    id:blog.id
  })
});

blogRouter.put("/",async(c)=>{
    const body =await c.req.json();
    const {success} =updateBlogInput.safeParse(body);

    if(!success){
      c.status(411);
      return c.json({
        message:"Inputs Are Incorect"
      })
    }
  const prisma = new PrismaClient({
    datasources: {
      db: { url: c.env.DATABASE_URL },
    },
  }).$extends(withAccelerate());

  const blog = await prisma.blog.update({
    where:{
        id:body.id
    },
    data: {
      title: body.title,
      content: body.content
    },
  });

  return c.json({
    id:blog.id
  })

})



blogRouter.get("/mass",async (c)=>{
    const prisma = new PrismaClient({
        datasources: {
          db: { url: c.env.DATABASE_URL },
        },
      }).$extends(withAccelerate());

      const blogs = await prisma.blog.findMany({
        select:{
          title:true,
          content:true,
          id:true,
          authorId:true,
          author:{
            select:{
              name:true,
            }
          }
        }
      });

      return c.json({
        blogs
      })
})

blogRouter.get("/userBlogs",async (c)=>{

  const prisma = new PrismaClient({
    datasources: {
      db: { url: c.env.DATABASE_URL },
    },
  }).$extends(withAccelerate());

  const userid = c.get("userId");

  console.log(userid)
   try{
    const blog = await prisma.user.findMany({

      where:{
        id:Number(userid)
      },
      select:{
        name:true,
        blogs :true
      }

    })
    return c.json(blog);


   }
   catch(err){
     c.status(400);
     return c.json({
      message: "Something Went Wrong : "+ err
     })
   }
})


blogRouter.get("/:id",async(c)=>{
    const id = c.req.param("id");

  const prisma = new PrismaClient({
    datasources: {
      db: { url: c.env.DATABASE_URL },
    },
  }).$extends(withAccelerate());

  try{
    const blog = await prisma.blog.findFirst({
        where: {
          id:Number(id)
        },
        select:{
          title:true,
          content:true,
          author:{
            select:{
              name:true
            }
          }
        }
      });
    
      return c.json({
        blog
      })

  }
  catch(e){
    c.status(411);
    return c.json({
        message:"Some error occured  " + e
      })
  }

 
})


blogRouter.delete("/:id",async(c)=>{

  const id = c.req.param("id");
  const prisma = new PrismaClient({
    datasources: {
      db: { url: c.env.DATABASE_URL },
    },
  }).$extends(withAccelerate());


  try{

    const user = await prisma.blog.delete({
      where :{
        id : Number(id)
      }
    })

    return c.text("Blog deleted Successfully")

  }
  catch(err){
    c.status(400);
    return c.text("Some Error Occured" +err);
  }

})



