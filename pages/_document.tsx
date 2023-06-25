import {Head, Html, Main, NextScript} from 'next/document'
import Script from 'next/script'
import {useTranslation} from "next-i18next";

export default function Document() {
    const {i18n, t} = useTranslation('common')

    return (
        <Html lang="">
            <Head>
                <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png"/>

                {/* <!-- META --> */}

                {/* <!-- FAVICONS ICON --> */}
                <link rel="icon" href="/static/images/favicon.ico" type="image/x-icon"/>
                <link
                    rel="shortcut icon"
                    type="/static/image/x-icon"
                    href="/static/images/favicon.png"
                />


                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
                />
                <link rel="stylesheet"
                      href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
                      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                      crossOrigin="anonymous"></link>
                <link rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                      integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
                      crossOrigin="anonymous" referrerPolicy="no-referrer"/>

                <link rel="stylesheet" href="/static/css/owl.carousel.min.css"/>
                <link rel="stylesheet" href="/static/css/magnific-popup.min.css"/>
                <link rel="stylesheet" href="/static/css/loader.min.css"/>
                <link rel="stylesheet" href="/static/css/flaticon.min.css"/>
                <link rel="stylesheet" href="/static/css/animate.css"/>
                <link rel="stylesheet" href="/static/css/feather.css"/>
                <link rel="stylesheet" href="/static/css/lc_lightbox.css"/>
                <link rel="stylesheet" href="/static/css/swiper-bundle.min.css"/>
                <link rel="stylesheet" href="/static/css/style.css"/>
                <link
                    href="https://fonts.googleapis.com/css?family=Roboto+Condensed&text=%21%22%23%24%25%26%27%28%29%30+,-./0123456789:;%3C=%3E%3F@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`%E2%82%AC„‘’“”™©®°µ±÷abcdefghijklmnopqrstuvwxyz{|}~%C3%9C%C3%96%C4%9E%C4%B0%C6%8F%C3%87%C5%9E%C3%BC%C3%B6%C4%9F%C4%B1%C9%99%C3%A7%C5%9F"
                    rel="stylesheet"></link>


                <script defer src="/static/js/jquery-3.6.1.min.js.js"></script>
                <script defer src="/static/js/popper.min.js"></script>
                <script defer src="/static/js/magnific-popup.min.js"></script>
                <script defer src="/static/js/waypoints.min.js"></script>
                <script defer src="/static/js/counterup.min.js"></script>
                <script defer src="/static/js/waypoints-sticky.min.js"></script>
                <script defer src="/static/js/isotope.pkgd.min.js"></script>
                <script defer src="/static/js/imagesloaded.pkgd.min.js"></script>
                <script defer src="/static/js/owl.carousel.min.js"></script>
                <script defer src="/static/js/theia-sticky-sidebar.js"></script>
                <script defer src="/static/js/wow.js"></script>
                <script defer src="/static/js/lc_lightbox.lite.js"></script>
                <script defer src="/static/js/swiper-bundle.min.js"></script>
                <script defer src="/static/js/custom.js"></script>
                <meta charSet="utf-8"/>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"
                />

                <meta
                    name="description"
                    content="Most Powerful &amp; Comprehensive Bootstrap 5 HTML Admin Dashboard Template built for developers!"
                />
                <meta
                    name="keywords"
                    content="dashboard, bootstrap 5 dashboard, bootstrap 5 design, bootstrap 5"
                />
                <Script id="Google-Tag-Manager">
                    {
                        "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='../../../../www.googletagmanager.com/gtm5445.html?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5DDHKGP');"
                    }
                </Script>


            </Head>

            <body data-aos-easing="slide" data-aos-duration="800" data-aos-delay="0">
            <noscript>
                <iframe
                    src="https://www.googletagmanager.com/ns.html?id=GTM-5DDHKGP"
                    height="0"
                    width="0"
                    style={{display: "none", visibility: "hidden"}}
                ></iframe>
            </noscript>


            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}


