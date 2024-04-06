import { z } from "zod";

export type TInvitation = {
    firstName: string;
    lastName: string;
    email: string;
};

export const InvitationSchema = z.object({
    firstName: z
        .string({
            required_error: "firstName is required"
        })
        .min(3, { message: "firstName must be atleast 3 characters" })
        .max(7, { message: "firstName must be atleast 7 characters" }),
    lastName: z
        .string({
            required_error: "lastName is required"
        })
        .min(3, { message: "lastName must be atleast 3 characters" })
        .max(7, { message: "lastName must be atleast 7 characters" }),
    email: z.string({
        required_error: "email is required"
    }).email()
});

export type TInvitationFormValues = z.infer<typeof InvitationSchema>

export type TEmail = {};
