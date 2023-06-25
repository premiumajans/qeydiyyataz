import React from 'react'
import {useTranslation} from 'next-i18next';
import {useRouter} from 'next/router';
import Link from 'next/link';
import {CarouselPortfolio} from "@/interfaces/props";
import Head from "next/head";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

function index({servicesCarouselPortfolio}:{servicesCarouselPortfolio:CarouselPortfolio[]}) {
    const router = useRouter();
    const {i18n, t} = useTranslation('common')


    return <>
        <Head>
            <title>{t('navportfolio')}</title>
        </Head>
        <div>


            <div className="page-content">

                <div data-aos='fade-up' data-aos-duration="700" className="full-landing-image sx-bnr-inr overlay-wraper  bg-top-center"
                     style={{backgroundImage: "url(/static/images/banner/bnr-4.jpg)"}}>
                    <div className="overlay-main bg-white opacity-0"></div>

                    <div className="container">
                        <div data-aos='fade-up' data-aos-duration="700" className="sx-bnr-inr-entry">
                            <div className="banner-title-outer">
                                <div className="banner-title-name">
                                    <span className="sx-bnr-sm-title"></span>
                                    <h2 className="sx-title">{t("navportfolio")}</h2>
                                </div>

                                <div>
                                    <ul data-aos='fade-up' data-aos-duration="700"
                                        className="sx-breadcrumb breadcrumb-style-2">
                                        <li><Link href="index.html">{t("navhome")}</Link></li>
                                        <li>{t("navportfolio")}</li>
                                    </ul>
                                </div>


                            </div>

                        </div>
                    </div>


                </div>

                <div className="section-full p-t100 p-b70 sx-bg-light mobile-page-padding">

                    <div className="container">
                        <div className="section-content">



                            <div className="masonry-outer mfp-gallery news-grid clearfix row">
                                {Array.isArray(servicesCarouselPortfolio.data) && servicesCarouselPortfolio?.data.map(item => {
                                    return <Link className={'col-lg-6 col-md-6 col-sm-12'} key={item.id} href={item.link}>
                                        <div data-aos='fade-up' data-aos-duration="700"
                                             className="masonry-item  m-b30">
                                            <div className="sx-case-study-bx sx-overlay-effect">

                                                <div className="sx-case-media sx-img-overlay">
                                                    <Link href="/portfolio"><img
                                                        src={`https://admin.qeydiyyat.az/${item.image}`} alt=""/></Link>
                                                    <Link href="/portfolio" className="sx-case-link"><i
                                                        className="flaticon-up-right-arrow"></i></Link>
                                                </div>

                                                <div className="sx-case-info">
                                                    <div
                                                        className="sx-s-title">{item.translations.find(item => item.locale == i18n.language)?.title}</div>
                                                    <a className="sx-l-title" href="/portfolio">
                                                        <h2 className="sx-title">{item.translations.find(item => item.locale == i18n.language)?.content}</h2>
                                                    </a>
                                                    <div className="sx-case-readmore">
                                                        <Link href="/portfolio" title="READ MORE" rel="bookmark"
                                                              className="site-button icon"><i
                                                            className="fa  fa-long-arrow-right"></i>Read More</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                })}


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default index


export async  function getServerSideProps(context:any) {

    const servicesCarouselPortfolio = await fetch('https://admin.qeydiyyat.az/api/portfolio')

    return {
        props: {
            servicesCarouselPortfolio: await servicesCarouselPortfolio.json(),
            ...(await serverSideTranslations(context.locale, ["common"])),
        }
    }
}
