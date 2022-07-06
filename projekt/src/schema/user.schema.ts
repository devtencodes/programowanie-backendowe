import { object, string } from "zod";
export const createUserSchema = object({
    body: object({
        name: string({
            required_error: "Name is required",
        }),
        password: string({
            required_error: "Password is required",
        }).min(6, "Password must be at least 6 characters long"),
        passwordConfirmation: string({
            required_error: "Password confirmation is required",
        }),
        email: string({
            required_error: "Email is required",
        }).email("This email is not valid, please try again"),
    }).refine((data) => data.password === data.passwordConfirmation, {
        message: "Passwords don't match. Please try again.",
        path: ["passwordConfirmation"],
    }),
});
