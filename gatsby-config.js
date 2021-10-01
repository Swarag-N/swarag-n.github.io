module.exports = {
    siteMetadata: {
        description: "Personal page of Swarag Narayanasetty",
        locale: "en",
        title: "Swarag Narayanasetty",
        formspreeEndpoint: "https://formspree.io/f/xzbywedl",
        showThemeLogo: false
    },
    plugins: [
        {
            resolve: "@wkocjan/gatsby-theme-intro",
            options: {
                basePath: "/",
                contentPath: "content/",
                showThemeLogo: false,
                theme: "dark-blue",
            },
        },
    ],
}