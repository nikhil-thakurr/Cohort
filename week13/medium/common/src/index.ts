import zod from "zod";

export const signUpInput =zod.object({
    username : zod.string().email(),
    password : zod.string().min(6),
    name:zod.string().optional()
})


export const signInInput =zod.object({
    password : zod.string().min(6),
    name:zod.string().optional()
})

export const createBlogInput =zod.object({
    title : zod.string(),
    content:zod.string()
})

export const updateBlogInput =zod.object({
    title : zod.string(),
    content:zod.string(),
    id:zod.number()
})


export type SignedUpInput = zod.infer<typeof signUpInput>
export type SignInInput = zod.infer<typeof signInInput>
export type CreateBlogInput = zod.infer<typeof createBlogInput>
export type UpdateBlogInput = zod.infer<typeof updateBlogInput>