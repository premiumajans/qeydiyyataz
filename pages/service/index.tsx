import React, {useState} from 'react'
import {servicesPricing} from '@/interfaces/generalResponses';
import {useTranslation} from "next-i18next";
import Link from "next/link";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import Head from "next/head";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";


function index({services, servicesPricing}: { services: servicesPricing[], servicesPricing: servicesPricing[] }) {
    const [showMonthly, setShowMonthly] = useState(false);
    const {i18n, t} = useTranslation('common')

    const [serviceDetail, setDetail] = useState<servicesPricing[]>([])
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return <>
        <Head>
            <title>{t('navservice')}</title>
        </Head>
        <div>


            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    <h5 className="modal-title"
                        id="exampleModalLongTitle">{serviceDetail?.translations?.find(item => item.locale === i18n.language)?.title}</h5>
                </ModalHeader>
                <ModalBody>
                    {serviceDetail?.translations?.find(item => item.locale === i18n.language)?.content}
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>
                        {t('cancel')}
                    </Button>
                </ModalFooter>
            </Modal>


            <div className="page-wraper">
                <div className="page-content">

                    <div data-aos='fade-up' data-aos-duration="700" className="full-landing-image sx-bnr-inr overlay-wraper  bg-top-center"
                         style={{backgroundImage: "url(/static/images/vid-2-bg.jpg)"}}

                    >
                        <div className="overlay-main bg-white opacity-0"></div>

                        <div className="container">
                            <div data-aos='fade-up' data-aos-duration="700" className="sx-bnr-inr-entry">
                                <div className="banner-title-outer">
                                    <div className="banner-title-name">
                                        <span className="sx-bnr-sm-title"></span>
                                        <h2 className="sx-title"></h2>
                                    </div>

                                    <div>
                                        <ul data-aos='fade-up' data-aos-duration="700"
                                            className="sx-breadcrumb breadcrumb-style-2">
                                            <li><Link href="index.html">{t('navhome')}</Link></li>
                                            <li>{t('navservice')}</li>
                                        </ul>
                                    </div>


                                </div>

                            </div>
                        </div>

                    </div>


                    <div className="section-full p-t110 p-b80 sx-why-chooseus-outer sx-bg-light bg-cover"
                         style={{backgroundImage: "url(images/vid-2-bg.jpg)"}}>
                        <div className="container">


                            <div data-aos='fade-up' data-aos-duration="700" className="section-head center">
                                {/* <div className="sx-head-s-title">Why Choose Us</div> */}
                                <div className="sx-head-l-title">
                                    <h2 className="sx-title">{t("footerservice")}</h2>
                                </div>
                            </div>


                            <div className="section-content">
                                <div className="sx-our-services-bx">
                                    <div className="row">

                                        {services.map(item => {

                                            return <div data-aos='fade-up' data-aos-duration="700" key={item.id}
                                                        className="col-lg-4 col-md-6 wow fadeInDown"
                                                        data-wow-duration="1000ms">
                                                <div className="sx-service-bx-1">

                                                    <div className="sx-icon-box-wraper">
                                                        <div className="sx-service-bx-icon scale-in-center">
                                                            <span className="sx-text-primary"><i
                                                                className={item.icon}></i></span>
                                                        </div>
                                                        <div className="icon-content">
                                                            <h4 className="sx-tilte">{item.translations.find(item => item.locale == i18n.language)?.title}</h4>
                                                            <div className="sx-center-btn">

                                                                <div onClick={() => {
                                                                    setDetail(item)
                                                                    toggle()
                                                                }} data-toggle="modal"
                                                                     data-target="#exampleModalCenter"
                                                                     className="site-button-circle">
                                                                    <i className="fa fa-long-arrow-right"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        })}


                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    {/* Pricing Table */}

                    <div className="container">
                        <h1 data-aos='fade-up' data-aos-duration="700">{t("our-pricing")}</h1>


                        <div data-aos='fade-up' data-aos-duration="700" className="toggle-container">
                            <span>{t("monthly")}</span>
                            <span>

                <input onChange={() => setShowMonthly(!showMonthly)}
                       hidden type="checkbox" name="toggle" id="toggle" defaultChecked={false}/>
                <label htmlFor="toggle">
                  <div className="ball"></div>
                </label>

              </span>
                            <span>{t("annualy")}</span>
                        </div>


                        <div id="flexy" className={"flex " + (showMonthly ? 'show-monthly' : '')}>
                            {servicesPricing.map(item => {
                                return <div data-aos='fade-up' data-aos-duration="700"
                                            className={"price-box " + (item.title === "Orta" ? 'purple' : '')}>
                                    <h4>{item.translations.find(item => item.locale == i18n.language)?.title}</h4>
                                    <p>
                                        <span
                                            className="monthly">{item.translations.find(item => item.locale == i18n.language)?.monthlyPrice} {item.translations.find(item => item.locale == i18n.language)?.exchange}</span>
                                        <span
                                            className="annually">{item.translations.find(item => item.locale == i18n.language)?.annualyPrice} {item.translations.find(item => item.locale == i18n.language)?.exchange}</span>

                                    </p>
                                    <ul>
                                        {item.component.map((item: { translations: any[]; }) => {
                                            return <li>{item.translations.find((item: {
                                                locale: string;
                                            }) => item.locale == i18n.language)?.title}</li>
                                        })}


                                    </ul>

                                    <Link href='/contact'>
                                        <button>{t("order")}</button>
                                    </Link>


                                </div>

                            })}


                        </div>

                    </div>


                </div>


            </div>


        </div>

    </>
}


export async function getServerSideProps(context:any) {

    const services = await fetch('https://admin.qeydiyyat.az/api/why-choose-us')

    const servicesPricing = await fetch('https://admin.qeydiyyat.az/api/packages')

    return {
        props: {
            services: await services.json(),
            servicesPricing: await servicesPricing.json(),
            ...(await serverSideTranslations(context.locale, ["common"])),

        }
    }
}

export default index
