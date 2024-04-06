import { Control, FieldValues } from "react-hook-form"


export interface IReusableInput<T extends FieldValues> {
    control: Control<T>
    name: keyof T
    type: string
    placeholder: string
}

export type Tag = {
    id: string;
    text: string;
}

export interface IReusableMultiInput {
    tags: Tag[];
    setTags: React.Dispatch<React.SetStateAction<Tag[]>>;
    placeholder: string;
    disabled?: boolean;
}