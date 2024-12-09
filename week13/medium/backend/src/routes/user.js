import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { sign } from 'hono/jwt';
import { Hono } from 'hono';
import { signUpInput, signInInput } from '@nikhil_thakur_code/medium-common';
export const userRouter = new Hono();
userRouter.post('/signup', async (c) => {
    const body = await c.req.json();
    const { success } = signUpInput.safeParse(body);
    if (!success) {
        c.status(411);
        return c.json({
            message: "Inputs Are Incorect"
        });
    }
    if (!c.env.DATABASE_URL) {
        console.error("DATABASE_URL is undefined. Please check the environment variables.");
        return c.text("Internal Server Error: Database URL not set", 500);
    }
    const prisma = new PrismaClient({
        datasources: {
            db: { url: c.env.DATABASE_URL },
        },
    }).$extends(withAccelerate());
    try {
        const user = await prisma.user.create({
            data: {
                username: body.username,
                name: body.name,
                password: body.password,
            },
        });
        const token = await sign({
            id: user.id
        }, c.env.JWT_SECRET);
        return c.text(token);
    }
    catch (err) {
        console.error("Error creating user:", err);
        c.status(411);
        return c.text("User Already Exists");
    }
    finally {
        await prisma.$disconnect();
    }
});
userRouter.post('/signin', async (c) => {
    const body = await c.req.json();
    const { success } = signInInput.safeParse(body);
    if (!success) {
        c.status(411);
        return c.json({
            message: "Inputs Are Incorect"
        });
    }
    if (!c.env.DATABASE_URL) {
        return c.text("Internal Server Error: Database URL not set", 500);
    }
    const prisma = new PrismaClient({
        datasources: {
            db: { url: c.env.DATABASE_URL },
        },
    }).$extends(withAccelerate());
    try {
        const user = await prisma.user.findFirst({
            where: {
                username: body.username,
                password: body.password,
            },
        });
        if (!user) {
            c.status(403);
            return c.text("Wrong Credentials");
        }
        const token = await sign({
            id: user.id
        }, c.env.JWT_SECRET);
        return c.text(token);
    }
    catch (err) {
        console.error("Error creating user:", err);
        c.status(411);
        return c.text("User Already Exists");
    }
    finally {
        await prisma.$disconnect();
    }
});
