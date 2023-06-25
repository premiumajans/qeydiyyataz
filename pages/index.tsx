import React, {useState} from 'react'
import Link from "next/link";
import {useTranslation} from "next-i18next";
import Service from '@/Components/home/Service';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import Companylogo from '@/Components/home/Companylogo';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from 'next/dynamic';
import Image from "next/image";
import {serviceTeam} from "@/interfaces/generalResponses";
import Head from "next/head";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";


const Slider = dynamic(() => import('react-slick'), {ssr: false})
const CountUp = dynamic(() => import('react-countup'), {ssr: false})

function index({
                   service,
                   servicesWhyChoose,
                   servicesSlider,
                   servicesCompanyLogo,
                   servicesCarouselBlog,
                   statistic,
                   servicesPricing
               }) {
    const {i18n, t} = useTranslation('common')
    const [showMonthly, setShowMonthly] = useState(true);
    const [serviceDetail, setServiceDetail] = useState<serviceTeam>()

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);


    const settings1 = {
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };


    const settings2 = {
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    const settingsMain = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true
        fade: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    dots: true,
                }
            },
        ]
    };

    function SampleNextArrow(props) {
        const {className, style, onClick} = props;
        return (
            <div data-aos="fade-left"
                 data-aos-anchor="#example-anchor"
                 data-aos-offset="500"
                 data-aos-duration="500"
                 data-aos-delay="600"
                 className={className}
                 style={{...style, display: "block", background: "none"}}
                 onClick={onClick}
            >
                <div className="swiper-button-next"></div>
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const {className, style, onClick} = props;
        return (
            <div data-aos="fade-right"
                 data-aos-anchor="#example-anchor"
                 data-aos-offset="500"
                 data-aos-duration="500"
                 data-aos-delay="600"
                 className={className}
                 style={{...style, display: "block", background: "none"}}
                 onClick={onClick}
            >
                <div className="swiper-button-prev"></div>
            </div>
        );
    }

    return <>

        <Head>
            <title>Qeydiyyat.az</title>
        </Head>

        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    <h5 className="modal-title"
                        id="exampleModalLongTitle">{serviceDetail?.translations.find(item => item.locale === i18n.language)?.title}</h5>
                </ModalHeader>
                <ModalBody>
                    {serviceDetail?.translations.find(item => item.locale === i18n.language)?.content}
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>
                        {t('cancel')}
                    </Button>
                </ModalFooter>
            </Modal>

            <div className="sx-bnr-1-wrap-outer">

                <div>
                    <Slider {...settingsMain} nextArrow={<SampleNextArrow/>} prevArrow={<SamplePrevArrow/>}>
                        {servicesSlider.map(item => {
                            return <div data-aos='fade-up' data-aos-duration="700" key={item.id}
                                        className="sx-bnr-1-wrap swiper-slide overlay-overlay">
                                <div className={'image-container'} style={{
                                    opacity: 0.5,
                                    backgroundColor: 'black',
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    background: `url(https://admin.qeydiyyat.az/${item.image}) 100% / cover no-repeat`
                                }}></div>

                                <div className="container">
                                    <div data-aos="fade-right"
                                         data-aos-anchor="#example-anchor"
                                         data-aos-offset="500"
                                         data-aos-duration="500"
                                         data-aos-delay="700" style={{
                                        position: 'absolute',
                                        width: '70%',
                                        top: '50%',
                                        left: '50%',
                                        textAlign: 'left',
                                        transform: 'translate(-50%,-50%)'
                                    }}>
                                        <h2 className="sx-bnr-1-large-title">{item.translations.find(item => item.locale == i18n.language)?.title}</h2>
                                        <div
                                            className="sx-bnr-1-info">{item.translations.find(item => item.locale == i18n.language)?.content}</div>
                                        {/*<div className="sx-bnr-readmore">*/}
                                        {/*    <Link href="/about" className="site-button sx-btn-primary icon">*/}
                                        {/*        <i className={item.icon}></i>*/}
                                        {/*        {item.translations.find(item => item.locale == i18n.language)?.content}*/}
                                        {/*    </Link>*/}
                                        {/*</div>*/}

                                    </div>
                                </div>
                            </div>


                        })}
                    </Slider>


                </div>

            </div>


            <div className="page-content">

                <div className="section-full sx-our-services-outer sx-bg-light mt-5">
                    <div className="container">


                        <div data-aos='fade-up' data-aos-duration="700" className="section-head center">
                            <div className="sx-head-l-title">
                                <h2 className="sx-title">{t("our-service")}</h2>
                            </div>
                        </div>

                        <div className="section-content">
                            <div className="sx-our-services-bx">
                                <div className="row">

                                    {service.map(item => {

                                        return <div data-aos='fade-up' data-aos-duration="700" onClick={() => {
                                            toggle()
                                            setServiceDetail(item)
                                        }} key={item.id} className="col-lg-4 col-md-6 wow fadeInDown"
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
                                                            <div onClick={() => setServiceDetail(item)}
                                                                 data-toggle="modal"
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

                <div className="section-full  p-t110 p-b80 sx-bg-white sx-about-bx1-outer">
                    <div className="container">
                        <div className="section-content">


                            <div className="counter-blocks">
                                <div className="row when-item-four">
                                    <div className='d-flex flex-wrap'>
                                        {(statistic.map(item => {
                                                return <div key={item.id}
                                                            className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                                    <div className="sx-count">
                                                        <h2 className="sx-title">
                                                            <span className="sx-cont-before">+</span>

                                                            <CountUp data-aos='fade-up' data-aos-duration="700"
                                                                     enableScrollSpy scrollSpyOnce start={0}
                                                                     end={item.number} duration={2}/>
                                                            <span className="sx-cont-after"></span>
                                                        </h2>
                                                        <div
                                                            className="sx-count-info">{item?.translations.find(item => item.locale === i18n.language)?.title}</div>
                                                    </div>
                                                </div>
                                            })
                                        )}
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

                <div className="section-full p-t110 p-b80 sx-why-chooseus-outer sx-bg-light bg-cover"
                     style={{backgroundImage: "url(static/images/background/bg-1.jpg)"}}>
                    <div className="container">


                        <div data-aos='fade-up' data-aos-duration="700" className="section-head center">
                            <div className="sx-head-l-title">
                                <h2 className="sx-title">{t("our-work-service")}</h2>
                            </div>
                        </div>

                        <div className="section-content">
                            <div className="sx-icon-bx-wrap">
                                <div className="row">
                                    {servicesWhyChoose.map(item => {
                                        return <div data-aos='fade-up' data-aos-duration="700" key={item.id}
                                                    className="col-lg-4 col-md-6 wow fadeInDown my-3"
                                                    data-wow-duration="1000ms">
                                            <div style={{height: '100%'}} onClick={() => setServiceDetail(item)}
                                                 data-toggle="modal"
                                                 data-target="#exampleModalCenter">
                                                <Service icon={item.icon}
                                                         head={item.translations.find(item => item.locale == i18n.language)?.title}
                                                />
                                            </div>
                                        </div>
                                    })}


                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Pricing Table */}

                <div className="pricing py-4">
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


                        <div id="flexy"
                             className={"d-flex justify-content-center " + (showMonthly ? 'show-monthly' : '')}>
                            {servicesPricing.map(item => {
                                return <div data-aos='fade-up' data-aos-duration="700" key={item.id}
                                            className={"price-box  " + (item.title === "Orta" ? 'purple' : '')}>
                                    <h4>{item.translations.find(item => item.locale == i18n.language)?.title}</h4>
                                    <p>
                                    <span
                                        className="monthly">{item.translations.find(item => item.locale == i18n.language)?.monthlyPrice} {item.translations.find(item => item.locale == i18n.language)?.exchange}</span>
                                        <span
                                            className="annually">{item.translations.find(item => item.locale == i18n.language)?.annualyPrice} {item.translations.find(item => item.locale == i18n.language)?.exchange}</span>

                                    </p>
                                    <ul>
                                        {item.component.map((item: { translations: any[] }) => {
                                            return <li key={item.id}>{item.translations.find((item: {
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


                <div className="section-full p-t110 p-b80 sx-bg-primary sx-client-logo-2-outer">

                    <div className="container">

                        <div data-aos='fade-up' data-aos-duration="700" className="section-content">
                            <div className="client-logo-pic2-wrap">
                                <div className="row justify-content-center grid-5 ">
                                    <Slider {...settings1}>
                                        {servicesCompanyLogo.map(item => {
                                            return <div key={item.id}>
                                                <Link href={item.link}> <Companylogo
                                                    src={`https://admin.qeydiyyat.az/${item.image}`}/></Link>
                                            </div>
                                        })}
                                    </Slider>


                                </div>
                            </div>
                        </div>

                    </div>


                </div>


                <div className="section-full p-t110 p-b80 sx-bg-white sx-latest-blog-outer wow fadeInDown"
                     data-wow-duration="1000ms">
                    <div className="container">


                        <div className="section-head center">

                            <div data-aos='fade-up' data-aos-duration="700" className="sx-head-l-title">
                                <h2 className="sx-title">{t("latestNew")}</h2>
                            </div>
                        </div>

                        <div data-aos='fade-up' data-aos-duration="700">

                            <Slider {...settings2}>

                                {servicesCarouselBlog?.length > 0 && servicesCarouselBlog?.map(item => {
                                    const currentTime = new Date(item.created_at)
                                    return <Link key={item.id} href={`/blog/${item.id}`}>

                                        <div className="item p-3">

                                            <div className="sx-latest-post-st-1">

                                                <div className="sx-post-media sx-img-effect img-reflection">
                                                    <Image width={450} height={450}
                                                           src={`https://admin.qeydiyyat.az/${item.image}`} alt=""/>

                                                </div>

                                                <div className="sx-post-info p-t30">
                                                    <div className="sx-post-meta ">
                                                        <ul>

                                                            <li className="post-date"><Link
                                                                href={`/blog/${item.id}`}>
                                                                <i className="fa fa-calendar"></i> {currentTime.toLocaleDateString('fr-CH')}
                                                            </Link>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                    <div className="sx-post-title ">
                                                        <h4 className={item.translations.find(item => item.locale == i18n.language)?.title}>
                                                            <Link
                                                                href={`/blog/${item.id}`}>{item.translations.find(item => item.locale == i18n.language)?.title}</Link>
                                                        </h4>
                                                    </div>
                                                    <div className="sx-post-readmore">
                                                        <Link href={`/blog/${item.id}`} title="READ MORE" rel="bookmark"
                                                              className="site-button icon"><i
                                                            className="fa  fa-long-arrow-right"></i>{t("readMore")}
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </Link>


                                })}
                            </Slider>
                        </div>


                    </div>


                </div>


            </div>
        </div>
    </>
}


export default index

export async function getServerSideProps(context: any) {
    const servicesCarouselPortfolio = await fetch('https://admin.qeydiyyat.az/api/portfolio').then(res => res.json())
    const servicesCarouselBlog = await fetch('https://admin.qeydiyyat.az/api/blog').then(res => res.json())
    const servicesCompanyLogo = await fetch('https://admin.qeydiyyat.az/api/partner').then(res => res.json())
    const servicesSlider = await fetch('https://admin.qeydiyyat.az/api/slider').then(res => res.json())
    const servicesWhyChoose = await fetch('https://admin.qeydiyyat.az/api/why-choose-us').then(res => res.json())
    const service = await fetch('https://admin.qeydiyyat.az/api/service').then(res => res.json())
    const statistic = await fetch('https://admin.qeydiyyat.az/api/statistic').then(res => res.json())

    const servicesPricing = await fetch('https://admin.qeydiyyat.az/api/packages').then(res => res.json())


    return {
        props: {
            service,
            servicesWhyChoose,
            servicesSlider,
            servicesCompanyLogo,
            servicesCarouselBlog: servicesCarouselBlog.blogs,
            servicesCarouselPortfolio,
            statistic,
            servicesPricing,
            ...(await serverSideTranslations(context.locale, ["common"])),

        }
    }
}




