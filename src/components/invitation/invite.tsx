"use client";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod"
import { InvitationSchema, TInvitationFormValues } from "@/types/invitation";
import { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import ReusableFormRow from "../reusable/reusable-formrow";
import { inviteFriendsApi } from "@/services/invitation";
import { Loader2 } from "lucide-react";
import ReusableInput from "../reusable/reusable-input";



export default function InviteFriend() {

    const [open, setOpen] = useState<boolean>(false);

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<TInvitationFormValues>({
        resolver: zodResolver(InvitationSchema),
        mode: "onChange",
    });

    const { mutate: inviteFriends, isPending } = inviteFriendsApi(setOpen, reset)


    const onSubmit = handleSubmit((data: TInvitationFormValues) => {
        inviteFriends(data)
    });


    return (
        <>
            <Dialog open={open} onOpenChange={setOpen} >
                <DialogTrigger asChild>
                    <Button variant="outline">Invite Friend</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Invite Friend</DialogTitle>
                        <DialogDescription>
                            Invite your friend to join this platform.
                        </DialogDescription>
                    </DialogHeader>
                    <form
                        onSubmit={(e: FormEvent) => {
                            e.preventDefault(), onSubmit(e);
                        }}
                    >
                        <div className="grid gap-4 py-4">
                            <ReusableFormRow
                                name={"firstName"}
                                label={"First Name"}
                                required={true}
                                errors={errors.firstName}
                            >
                                <ReusableInput<TInvitationFormValues>
                                    control={control}
                                    name={"firstName"}
                                    type={"text"}
                                    placeholder={"Enter First Name"}
                                />
                            </ReusableFormRow>
                            <ReusableFormRow
                                name={"lastName"}
                                label={"Last Name"}
                                required={true}
                                errors={errors.lastName}
                            >
                                <ReusableInput<TInvitationFormValues>
                                    control={control}
                                    name={"lastName"}
                                    type={"text"}
                                    placeholder={"Enter Last Name"}
                                />
                            </ReusableFormRow>
                            <ReusableFormRow
                                name={"email"}
                                label={"Email"}
                                required={true}
                                errors={errors.email}
                            >
                                <ReusableInput<TInvitationFormValues>
                                    control={control}
                                    name={"email"}
                                    type={"email"}
                                    placeholder={"Enter email"}
                                />
                            </ReusableFormRow>
                            {/* <ReusableFormRow
                                name={"invitees"}
                                label={"Invitees"}
                                required={true}
                                errors={errors.invitees}
                            >
                                <ReusableMultiInput tags={emails} setTags={setEmails} placeholder={"Enter Emails"} />
                            </ReusableFormRow> */}
                        </div>
                        <DialogFooter>
                            <Button disabled={isPending} type="submit">{isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                : "Submit"}</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog >
        </>
    );
}


// const validEmails: string[] = [];
// const invalidEmails: string[] = [];
// emails?.forEach((tag: Tag) => {
//     const email = tag.text.trim();
//     if (validateEmail(email)) {
//         validEmails.push(email);
//     } else {
//         invalidEmails.push(email);
//     }
// });
// if (validEmails.length === 0) {
//     toast({
//         title: "Email Required",
//         description: "Add atleast one email",
//         duration: 5000,
//     });
//     return;
// }
// if (invalidEmails.length > 0) {
//     toast({
//         title: "Invalid Emails",
//         description: "Please enter valid email addresses.",
//         duration: 5000,
//     });
//     return;
// }