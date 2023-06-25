import type {AppProps} from "next/app";
import {wrapper} from "../Store/store";
import React, {useEffect, useState} from "react";
import Nav from "@/Components/home/Nav";
import Footer from "@/Components/home/Footer";
import '../styles/gloabal.scss'
import Aos from "aos";
import {appWithTranslation, useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import LoadingWraper from "@/Components/LoadingWraper/LoadingWraper";
import {useDispatch} from "react-redux";
import {setSettings} from "@/Store/Slices/User";


function App({Component, pageProps}: AppProps) {
    const {i18n} = useTranslation('common')
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        Aos.init()

        fetch("https://admin.qeydiyyat.az/api/contact-info")
            .then(res => res.json())
            .then(res => dispatch(setSettings(res)))
    }, [])


    useEffect(() => {
        const handleRouteChange = () => {
            setLoading(true)
        };

        const handleRouteComplete = () => {
            setLoading(false)
        };

        router.events.on('routeChangeStart', handleRouteChange)
        router.events.on('routeChangeComplete', handleRouteComplete)// If the component is unmounted, unsubscribe

        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
        }
    }, [router])


    return (
        <>
            <meta charSet="utf-8"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>

            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta
                name="description"
                content={'Hosting və Domen satışı, Web-saytların yığılması'}
            />
            <meta name="author" content="Bəybala Muxtarov, Elgiz İsmayılov"/>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, minimum-scale=1.0, shrink-to-fit=no"
            />
            <meta property="og:site_name" content="Qeydiyyat.az"/>
            <meta property="og:locale" content={i18n.language}/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            {loading ? <LoadingWraper/> : <>
                <Nav/>
                <Component {...pageProps} />
                <Footer/>
            </>}
        </>
    );

}

export default appWithTranslation(wrapper.withRedux(App));
