import clsx from "clsx";
import {ClassValue} from "clsx";

export const cn = (...inputs: ClassValue[]) => {
    return clsx(inputs)
}

export const formatDate = (date: string) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const [year, month, day] = date.split("T")[0].split("-");
    return `${months[parseInt(month, 10) - 1]} ${parseInt(day, 10)}, ${year}`;
}
