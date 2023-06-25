import axios from "axios";
import React from "react";
import {useTranslation} from "next-i18next";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {servicesContactInfo} from "@/interfaces/generalResponses";
import Swal from "sweetalert2";
import Link from "next/link";
import Head from "next/head";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

function Index({servicesContactInfo}: { servicesContactInfo: servicesContactInfo[] }) {

    const {t, i18n} = useTranslation("common");

    let schema = yup.object().shape({
        name: yup.string().required(t('name-required').toString()).min(3, t('name-min-3').toString()),
        email: yup.string().email(t('email-valid').toString()).required(t('email-required').toString()).min(3,t('email-min-3').toString()),
        phone: yup.string().required(t('phone-required').toString()).min(3,t('phone-min-3').toString()),
        subject: yup.string(),
        message: yup.string().required(t('message-required').toString()),
    });

    const {
        handleSubmit,
        register,
        formState: {errors},
        reset
    } = useForm({resolver: yupResolver(schema), mode: "onChange"});

    const onSubmit = async (data: any) => {
        axios
            .post("https://admin.qeydiyyat.az/api/contact", data)
            .then((res) => Swal.fire(`${t('success')}`, "", "success").then(() => {
                    reset()
                })
            )
            .catch((error) => Swal.fire(`failed`, "", "error"));
    };



    return <>
        <Head>
            <title>{t('navcontact')}</title>
        </Head>
        <div>
            <div data-aos='fade-up' data-aos-duration="700" className="page-wraper">
                <div className="page-content">
                    <div
                        className="full-landing-image sx-bnr-inr overlay-wraper  bg-top-center"
                        style={{backgroundImage: "url(/static/images/banner/bnr-6.jpg)"}}
                    >
                        <div className="overlay-main bg-white opacity-0"></div>

                        <div className="container">
                            <div className="sx-bnr-inr-entry">
                                <div className="banner-title-outer">
                                    <div className="banner-title-name">
                                        <span className="sx-bnr-sm-title"></span>
                                        <h2 className="sx-title" data-aos='fade-up'
                                            data-aos-duration="700">{t("navcontact")}</h2>
                                    </div>

                                    <div>
                                        <ul data-aos='fade-up' data-aos-duration="700"
                                            className="sx-breadcrumb breadcrumb-style-2">
                                            <li>
                                                <Link href="/">{t("navhome")}</Link>
                                            </li>
                                            <li>{t("navcontact")}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div data-aos='fade-up' data-aos-duration="700"
                         className="section-full p-t110 p-b80 sx-bg-white sx-ourteam-outer ">
                        <div className="container">
                            {/* <!-- GOOGLE MAP & CONTACT FORM --> */}
                            <div className="section-content">
                                {/* <!-- CONTACT FORM--> */}
                                <div className="row justify-content-center">
                                    <div className="col-lg-8 col-md-12  m-b30">
                                        <div className="contact-info">
                                            <div style={{padding: 0, marginTop:30}} className="section-head left">
                                                <div style={{fontWeight: 'bold',fontSize:25}}
                                                     className="sx-head-s-title">{t("navcontact")}</div>

                                            </div>

                                            <div className="row sx-contact-form-icon-bx">
                                                {servicesContactInfo.map((item) => {
                                                    if(item.title === 'facebook' || item.title === 'whatsapp' || item.title === 'instagram') {
                                                        return null
                                                    }
                                                    return (
                                                        <div key={item.id} data-aos='fade-up' data-aos-duration="700"
                                                             className="col-lg-6 col-md-6 m-b30">
                                                            <div className="sx-icon-bx-5 align-items-center">
                                                                <div className="sx-media">
                                                                    <i className={item.title === 'phone-1' || item.title === 'phone-2' ? "flaticon-telephone" : item.title === 'place-1' || item.title === 'place-2' ? 'flaticon-map-location' : item.title === 'email' ? 'flaticon-email-2' : '' }></i>
                                                                </div>
                                                                <div style={{textAlign: 'left'}}
                                                                     className="sx-icon-bx-info">
                                                                    <a
                                                                        href=""
                                                                        className="sx-icon-bx-title"
                                                                    >
                                                                        {item.link}
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    );
                                                })}

                                            </div>
                                        </div>
                                    </div>

                                    {/* CONTACT FORM USE */}
                                    <div data-aos='fade-up' data-aos-duration="700"
                                         className="col-lg-4 col-md-12 m-b30">
                                        <div className="contact-home1-right">
                                            <div className="contact-home-1-form sx-bg-light">
                                                <h4 className="sx-title" data-aos='fade-up'
                                                    data-aos-duration="700">{t("footertitle")}</h4>
                                                <form data-aos='fade-up' data-aos-duration="700"
                                                      onSubmit={handleSubmit(onSubmit)}
                                                      className="cons-contact-form2 form-transparent"
                                                      method="post"
                                                >
                                                    <div className="input input-animate">
                                                        <input
                                                            {...register("name")}
                                                            type="text"
                                                            name="name"
                                                            id="name"
                                                            data-msg-required="Please enter your name."
                                                            placeholder={t('name').toString()}
                                                            className={`form-control ${errors.name ? "is-invalid" : ""
                                                            }`}
                                                        />
                                                        <span className="spin"></span>
                                                        {errors.name ? (
                                                            <div
                                                                className="fv-plugins-message-container invalid-feedback">
                                                                <div>{errors.name?.message as string}</div>
                                                            </div>
                                                        ) : (
                                                            ""
                                                        )}

                                                    </div>

                                                    <div className="input input-animate">
                                                        <input
                                                            {...register("email")}
                                                            type="email"
                                                            name="email"
                                                            id="email"
                                                            data-msg-required="Please enter your email."
                                                            placeholder={t('email').toString()}
                                                            className={`form-control ${errors.email ? "is-invalid" : ""
                                                            }`}
                                                        />
                                                        <span className="spin"></span>
                                                        {errors.name ? (
                                                            <div
                                                                className="fv-plugins-message-container invalid-feedback">
                                                                <div>{errors.email?.message as string}</div>
                                                            </div>
                                                        ) : (
                                                            ""
                                                        )}
                                                    </div>

                                                    <div className="input input-animate">
                                                        <input
                                                            {...register("phone")}
                                                            type="text"
                                                            name="phone"
                                                            id="Phone"
                                                            data-msg-required="Please enter your phone."
                                                            placeholder={t('phone').toString()}
                                                            className={`form-control ${errors.phone ? "is-invalid" : ""
                                                            }`}
                                                        />
                                                        <span className="spin"></span>
                                                        {errors.name ? (
                                                            <div
                                                                className="fv-plugins-message-container invalid-feedback">
                                                                <div>{errors.phone?.message as string}</div>
                                                            </div>
                                                        ) : (
                                                            ""
                                                        )}
                                                    </div>
                                                    <div className="input input-animate">
                                                        <input
                                                            {...register("subject")}
                                                            type="text"
                                                            name="subject"
                                                            id="subject"
                                                            data-msg-required="Please enter your subject."
                                                            placeholder={t("subject").toString()}
                                                            className={`form-control 
                                                            `}
                                                        />
                                                        <span className="spin"></span>
                                                    </div>

                                                    <div className="input textarea input-animate">
                                                    <textarea
                                                        {...register("message")}
                                                        name="message"
                                                        id="message"
                                                        data-msg-required="Please enter your message."
                                                        placeholder={t('message').toString()}
                                                        className={`form-control ${errors.message ? "is-invalid" : ""
                                                        }`}
                                                    ></textarea>
                                                        <span className="spin"></span>
                                                        {errors.name ? (
                                                            <div
                                                                className="fv-plugins-message-container invalid-feedback">
                                                                <div>{errors.message?.message as string}</div>
                                                            </div>
                                                        ) : (
                                                            ""
                                                        )}
                                                    </div>

                                                    <div data-aos='fade-left' data-aos-duration="700"
                                                         className="sx-btn-center text-center ">
                                                        <button
                                                            type="submit"
                                                            className="site-button sx-btn-primary icon sx-btn-lg"
                                                        >
                                                            <i className="fa  fa-long-arrow-right"></i>
                                                            {t('send-message')}
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="gmap-outline map-grayscle" style={{height: "50%"}}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1947.31406146628!2d50.04011644017404!3d40.422994990796866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4030613ed16b9d29%3A0xcf136a8ba933f75a!2zMS1jaSBkw7ZuZ8mZLCBCYWvEsQ!5e0!3m2!1sru!2saz!4v1687692953466!5m2!1sru!2saz"
                            width="600" height="450"  loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Index;


export async function getServerSideProps(context:any) {
    const servicesContactInfo = await fetch("https://admin.qeydiyyat.az/api/contact-info")

    return {
        props: {
            servicesContactInfo: await servicesContactInfo.json(),
            ...(await serverSideTranslations(context.locale, ["common"])),

        }
    }
}
