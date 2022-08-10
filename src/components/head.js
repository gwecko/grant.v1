import React from "react";
import { siteMetadata } from "../../gatsby-config";

export const Head = ({children}) => (
    <>
        <title>{siteMetadata.title}</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="robots" content="all" />
        <meta name="description" content={siteMetadata.description} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"></meta>
        {children}
    </>
)

