import React from "react";
import { siteMetadata } from "../../gatsby-config";


export const Head = ({children }) => {
    // const { title: defaultTitle, description: defaultDescription, siteUrl } = useSiteMetadata()
    const seo = {
        title: siteMetadata.title,
        description: siteMetadata.description,
        url: siteMetadata.siteUrl,
    }

    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
            <meta name="robots" content="all" />
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"></meta>
            {children}
        </>
    )
}