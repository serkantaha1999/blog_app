import clsx from "clsx";
import {ClassValue} from "clsx";

export const cn = (...inputs: ClassValue[]) => {
    return clsx(inputs)
}