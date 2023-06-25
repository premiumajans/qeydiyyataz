import React from 'react';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {serviceTeam} from "@/interfaces/generalResponses";
import {useTranslation} from "next-i18next";
import parse from 'react-html-parser'
import Image from "next/image";
import Link from "next/link";
const PortfolItem = ({servicesCarouselBlog}: { servicesCarouselBlog: serviceTeam }) => {
    const {t,i18n} = useTranslation('common')
    return <>
        <div className="page-content">
            <div data-aos='fade-up' data-aos-duration="700" className="full-landing-image sx-bnr-inr overlay-wraper  bg-top-center"
                 style={{backgroundImage: "url(/static/images/banner/bnr-7.jpg)"}}>
                <div className="overlay-main bg-white opacity-0"></div>

                <div className="container">
                    <div className="sx-bnr-inr-entry">
                        <div className="banner-title-outer">

                            <div data-aos='fade-up' data-aos-duration="700">
                                <ul  className="sx-breadcrumb breadcrumb-style-2">
                                    <li><Link href="/">{t('home-page')}</Link></li>
                                    <li>{t('navblog')}</li>
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>


            </div>


            <div className="section-full p-t110 mobile-page-padding">

                <div className="container">

                    <div data-aos='fade-up' data-aos-duration="700" className="sx-pic-l">
                        <Image style={{
                            width:'90%',
                            maxHeight:600,
                            objectFit:'cover'
                        }} width={1200} height={1200} src={process.env['NEXT_PUBLIC_MAIN_PATH'] + servicesCarouselBlog?.image} alt={servicesCarouselBlog.alt}/>
                    </div>
                    <div className="section-content">
                        <div data-aos='fade-up' data-aos-duration="700" className="section-head left">
                            <div className="sx-head-l-title">
                                <h2 className="sx-title">{servicesCarouselBlog.translations.find(item => item.locale === i18n?.language)?.title}</h2>
                            </div>
                        </div>
                        <div data-aos='fade-up' data-aos-duration="700" className="sx-our-service-info m-b30">

                            {parse(servicesCarouselBlog.translations.find(item => item.locale === i18n?.language)?.content)}

                        </div>

                    </div>

                </div>

            </div>

        </div>
    </>
};

export default PortfolItem;


export async function getServerSideProps(context: any) {
    const servicesCarouselBlog = await fetch(`https://admin.qeydiyyat.az/api/blog/${context.query.id}`).then(res => res.json())
    return {
        props: {
            servicesCarouselBlog,
            ...(await serverSideTranslations(context.locale, ["common"])),

        }
    }
}