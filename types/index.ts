import { MouseEventHandler } from "react";

export interface CustomButtonInterface {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>
}