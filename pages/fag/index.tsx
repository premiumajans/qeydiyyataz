import Link from 'next/link'
import React, {useState} from 'react'
import {useTranslation} from 'next-i18next'
import {Accordion, AccordionBody, AccordionHeader, AccordionItem} from "reactstrap";
import {servicesFag} from "@/interfaces/generalResponses";
import Head from "next/head";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

function index({faq}: { faq: servicesFag[] }) {
    const [open, setOpen] = useState('');
    const toggle = (id) => {
        if (open === id) {
            setOpen('');
        } else {
            setOpen(id);
        }
    };

    const {i18n, t} = useTranslation('common')

    return <>
        <Head>
        <title>FAQ</title>
        </Head>
        <div>

            <div className="page-wraper">


                <div  className="page-content">

                    <div data-aos='fade-up' data-aos-duration="700" className="full-landing-image sx-bnr-inr overlay-wraper  bg-top-center"
                         style={{backgroundImage: "url(/static/images/banner/bnr-7.jpg)"}}>
                        <div className="overlay-main bg-white opacity-0"></div>

                        <div className="container">
                            <div className="sx-bnr-inr-entry">
                                <div data-aos='fade-up' data-aos-duration="700" className="banner-title-outer">
                                    <div className="banner-title-name">

                                        <h2 className="sx-title">FAQ</h2>
                                    </div>

                                    <div>
                                        <ul className="sx-breadcrumb breadcrumb-style-2">
                                            <li><Link href="/">{t("navhome")}</Link></li>
                                            <li>FAQ</li>
                                        </ul>
                                    </div>


                                </div>

                            </div>
                        </div>


                    </div>

                    <div  className="section-full  p-t100 p-b0 sx-bg-white sx-faq--outer">
                        <div className="container">
                            <div className="aon-faq-row-section">

                                <div className="sx-faq-style-1-wrap">


                                    <div className="tab-content">
                                        <div className="tab-pane fade show active" id="day_1" role="tabpanel">
                                            <div className="aon-faq-content">
                                                <div className="row">
                                                    <div data-aos='fade-up' data-aos-duration="700" className="col-lg-7 col-md-12">
                                                        <div className="sx-acdn-style-1-section">
                                                            <Accordion flush open={open} toggle={toggle}>
                                                                {faq.map((item, i ) => {
                                                                    const translated = item.translations.find((item) => item.locale === i18n.language)
                                                                    return <AccordionItem  key={item.id}>
                                                                        <AccordionHeader targetId={i.toString()}>{translated?.title}</AccordionHeader>
                                                                        <AccordionBody style={{textAlign:'justify'}} accordionId={i.toString()}>
                                                                            {translated?.content}
                                                                        </AccordionBody>
                                                                    </AccordionItem>
                                                                })}
                                                            </Accordion>
                                                        </div>
                                                    </div>
                                                    <div data-aos='fade-up' data-aos-duration="700" className="col-lg-5 col-md-12">
                                                        <div className="aon-faq-1-media">
                                                            <img src="/static/images/faq-img-1.jpg" alt="#"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
}

export default index


export async function getServerSideProps(context:any) {
    const faq = await fetch('https://admin.qeydiyyat.az/api/faq')
    return {
        props: {
            faq: await faq.json(),
            ...(await serverSideTranslations(context.locale, ["common"])),

        }
    }
}
