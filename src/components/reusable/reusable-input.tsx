import { Controller } from "react-hook-form";
import { Input } from "../ui/input";
import { IReusableInput } from "@/types/reusable";



export default function ReusableInput({ control, name, required, type, placeholder, validationRules }: IReusableInput) {
    return (
        <>
            <Controller
                control={control}
                name={name}
                rules={{
                    ...(required && { required: `${name} is required` })
                    ...validationRules
                }}
                render={({ field }) => (
                    <>
                        <Input type={type} placeholder={placeholder} {...field} />
                    </>
                )}
            />
        </>
    )
}