import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import {useTranslation} from 'next-i18next';
import dynamic from 'next/dynamic';
import CustomLanguageDropdown from "@/Components/CustomLanguageDropdown/CustomLanguageDropdown";
import {useSelector} from "react-redux";
import {getSetings} from "@/Store/Slices/User";


function Nav() {
    const {i18n, t} = useTranslation('common')
    const [menu, setMenu] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const servicesContactInfo = useSelector(getSetings)

    useEffect(() => {
        const handleSubmit = (e: any) => {
            if (e.target.scrollingElement.scrollTop > 150) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        if (window !== undefined) {
            window.addEventListener('scroll', handleSubmit)
        }

        return () => {
            window.removeEventListener('scroll', handleSubmit)
        }
    }, [])


    return <>

        <div>
            <div className="page-wraper">

                <header className={"header-style1 site-header  mobile-sider-drawer-menu " + (menu ? 'active' : '')}>

                    <div className={"sticky-header main-bar-wraper navbar-expand-lg " + (scrolled ? 'is-fixed' : '')}>
                        <div className={"main-bar " + (scrolled ? 'color-fill' : '')}>

                            <div className="container clearfix">
                                <div className="logo-header">
                                    <div className="logo-header-inner logo-header-one">
                                        <Link href="/">
                                            <img src="/static/images/logotypeaa.png" alt="logo"/>
                                        </Link>
                                    </div>
                                </div>


                                <div className="extra-nav">
                                    <div className="extra-cell">
                                        <ul className="list-unstyled social-bx d-flex  align-items-center"
                                            style={{color: 'blue'}}>

                                            {servicesContactInfo?.map(item => {
                                                if (item.title === 'facebook' || item.title === 'whatsapp' || item.title === 'instagram') {
                                                    return <li key={item.id}>
                                                        <Link href={item.link}>
                                                            <i style={{fontSize: '16px'}}
                                                               className={"fab fa-" + item.title}></i>
                                                        </Link>
                                                    </li>
                                                }
                                                return null
                                            })}


                                            <li className="field-lang ml-3 lang">
                                                <CustomLanguageDropdown direction={'down'}/>
                                            </li>


                                        </ul>

                                        <button onClick={() => setMenu(!menu)} id="mobile-side-drawer"
                                                data-target=".header-nav" data-toggle="collapse"
                                                type="button" className="navbar-toggler collapsed">
                                            <span className="sr-only">Toggle navigation</span>
                                            <span className="icon-bar icon-bar-first"></span>
                                            <span className="icon-bar icon-bar-two"></span>
                                            <span className="icon-bar icon-bar-three"></span>
                                        </button>
                                    </div>
                                </div>

                                <div style={{height: '110% !important'}}
                                     className="header-nav navbar-collapse collapse d-flex justify-content-center collapse ">
                                    <ul className=" nav navbar-nav ">
                                        <li className={'has-child'}>
                                            <Link onClick={() => setMenu(false)}
                                                  href="/service">{t("navservice")}</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={() => setMenu(false)}
                                                          href="/domen">{t("websiteDomen")}</Link></li>
                                                <li><Link onClick={() => setMenu(false)}
                                                          href="/service">{t("websiteHosting")}</Link></li>
                                                <li><Link onClick={() => setMenu(false)}
                                                          href="/portfolio">{t("websiteWeb")}</Link></li>

                                            </ul>
                                        </li>

                                        <li><Link onClick={() => setMenu(false)}
                                                  href="/portfolio">{t("navportfolio")}</Link></li>

                                        <li>
                                            <Link onClick={() => setMenu(false)} href="/fag">{t("fag-about")}</Link>
                                        </li>
                                        <li><Link onClick={() => setMenu(false)}
                                                  href="/contact">{t("navcontact")}</Link></li>
                                        <li>   {menu ? <CustomLanguageDropdown direction={'down'}/> : ''}</li>
                                    </ul>
                                </div>


                            </div>
                        </div>
                    </div>
                </header>

            </div>
        </div>
        <button style={scrolled ? {display: 'block'} : {}} onClick={() => window.scrollTo(0, 0)} className="scroltop">
            <span className="fa fa-angle-up  relative" id="btn-vibrate"></span></button>
    </>

}

export default dynamic(() => Promise.resolve(Nav), {ssr: false});

