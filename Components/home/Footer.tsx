import Link from 'next/link'
import React from 'react'
import {useTranslation} from 'next-i18next'
import Image from "next/image";
import {useSelector} from "react-redux";
import {getSetings} from "@/Store/Slices/User";


function Footer() {
    const {i18n, t} = useTranslation('common')

    const servicesContactInfo = useSelector(getSetings)


    return (
        <div>

            <footer className="site-footer footer-dark">

                <div className="footer-top">
                    <div className="container">
                        <div className="row">

                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                                <div className="widget widget_about">
                                    <div style={{width: 200}} className="logo-footer clearfix p-b15">
                                        <Link style={{width: '100%'}} href="/" className="sx-text-primary"><Image
                                            width={100} height={100}
                                            src="/static/images/logotype-white.png"
                                            style={{
                                                height: '54px',
                                                objectFit: 'contain',
                                                width: '100%'
                                            }}
                                            alt="image"/> </Link>
                                    </div>
                                    <div className="widget_about-call-section">
                                        <div className="sx-f-call-icon"><i className="flaticon-telephone"></i></div>
                                        <div className="sx-f-call-section">
                                            <span></span>
                                            <Link href="tel:+55(990)66622">+55 (990) 666 22</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 col-6 col">

                                <div className="widget widget_services">
                                    <h4 className="sx-f-title">{t("footeruseful")}</h4>
                                    <ul>
                                        <li><Link href="/domen">{t("footerdomen")}</Link></li>
                                        <li><Link href="/hosting">{t("footerhosting")}</Link></li>
                                        <li><Link href="/portfolio">{t("footer-websayt")}</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-2 col-lg-6 col-md-6 col-sm-6 col-12 col footer-col-3">
                                <div className="widget widget_info">
                                    <h4 className="sx-f-title">{t("footer-company")}</h4>
                                    <ul>

                                        <li>
                                            <div className="widget-info-icon">
                                                <i className="flaticon-email"></i>
                                            </div>
                                            <div className="widget-info-detail">
                                                <p>{t("footer-email")}</p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="widget-info-icon">
                                                <i className="flaticon-maps-and-flags"></i>
                                            </div>
                                            <div className="widget-info-detail">
                                                <p>{t("footer-adress")}</p>
                                            </div>


                                        </li>
                                    </ul>
                                </div>
                            </div>


                        </div>
                    </div>


                </div>

                <div className="sx-f-bottom-section">
                    <div className="sx-f-social">
                        <ul>

                            {servicesContactInfo?.map(item => {
                                if (item.title === 'facebook' || item.title === 'whatsapp' || item.title === 'instagram') {
                                    return <li key={item.id}>
                                        <Link target={'_blank'} href={item.link}>
                                            <i style={{fontSize: '18px'}} className={"fab fa-" + item.title}></i>
                                        </Link>
                                    </li>
                                }
                                return null
                            })}

                            {/*<li>*/}
                            {/*    <Link href="https://www.facebook.com/">*/}
                            {/*        <i className="flaticon-facebook"></i>*/}
                            {/*    </Link>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <Link href="https://twitter.com/">*/}
                            {/*        <i className="flaticon-twitter"></i>*/}
                            {/*    </Link>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <Link href="https://www.linkedin.com/">*/}
                            {/*        <i className="flaticon-linkedin"></i>*/}
                            {/*    </Link>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <Link href="https://www.instagram.com/">*/}
                            {/*        <i className="flaticon-instagram"></i>*/}
                            {/*    </Link>*/}
                            {/*</li>*/}
                        </ul>
                    </div>
                    <div className="sx-f-copy">
                        © 2023 <Link href="/"> Qeydiyyat.az </Link>
                        {t("footerhuquq")}
                    </div>
                </div>

            </footer>
        </div>
    )
}

export default Footer
