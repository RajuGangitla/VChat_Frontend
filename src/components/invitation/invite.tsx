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
import { TInvitation } from "@/types/invitation";
import { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import ReusableFormRow from "../reusable/reusable-formrow";
import ReusableMultiInput from "../reusable/reusable-multi-input";
import { Tag } from "@/types/reusable";
import { toast } from "../ui/use-toast";
import { inviteFriendsApi } from "@/services/invitation";
import { Loader2 } from "lucide-react";



export default function InviteFriend() {

    const [emails, setEmails] = useState<Tag[]>([])
    const {
        register,
        control,
        setValue,
        handleSubmit,
        formState: { errors },
    } = useForm<TInvitation>();

    const { mutate: inviteFriends, isPending } = inviteFriendsApi()

    const validateEmail = (email: string): boolean => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const onSubmit = handleSubmit((data: TInvitation) => {
        const validEmails: string[] = [];
        const invalidEmails: string[] = [];
        emails?.forEach((tag: Tag) => {
            const email = tag.text.trim();
            if (validateEmail(email)) {
                validEmails.push(email);
            } else {
                invalidEmails.push(email);
            }
        });
        if (invalidEmails.length > 0) {
            toast({
                title: "Invalid Emails",
                description: "Please enter valid email addresses.",
                duration: 5000,
            });
            return;
        }
        data.invitees = validEmails;
        inviteFriends(data)
        console.log(data, "data")
    });

    return (
        <>
            <Dialog>
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
                                name={"invitees"}
                                label={"Invitees"}
                                required={true}
                                errors={errors.invitees}
                            >
                                <ReusableMultiInput tags={emails} setTags={setEmails} placeholder={"Enter Emails"} />
                            </ReusableFormRow>
                        </div>
                        <DialogFooter>
                            <Button disabled={isPending} type="submit">{isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                : "Submit"}</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    );
}
