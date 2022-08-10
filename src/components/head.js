import React from "react";
import { siteMetadata } from "../../gatsby-config";


export const Head = ({children }) => {

    return (
        <>
            <meta http-equiv="content-language" content="en-us"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
            <title>{siteMetadata.title}</title>
            <meta name="description" content={siteMetadata.description} />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
            {children}
        </>
    )
}