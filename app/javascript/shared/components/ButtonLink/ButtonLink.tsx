import React, {FC, ReactNode} from 'react';
import {RouterLink} from "../Link/Link";
import {cn} from "../../utils/utils";

interface Props {
    children: ReactNode
    url: string
    theme?: "default" | "edit"
}

const ButtonLink: FC<Props> = ({children, url, theme = "default"}) => {
    return (
        <RouterLink url={url} classnames={cn(`button-link button-link-${theme}`)}>{children}</RouterLink>
    );
};

export default ButtonLink;