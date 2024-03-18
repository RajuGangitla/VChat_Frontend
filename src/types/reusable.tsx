

export interface IReusableInput {
    control: any
    name: string
    required: boolean
    type: string
    placeholder: string
    validationRules?: Record<string, any>
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