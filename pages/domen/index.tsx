import React, {useState} from 'react'
import {Button, Form, FormGroup, Table} from "reactstrap";
import {domainItem, domainValid} from "@/interfaces/generalResponses";
import {useTranslation} from "next-i18next";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import Head from "next/head";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";


function index({domains}: { domains: domainItem[] }) {

    const [loading, setLoading] = useState(false)
    const [domainValid, setDomainValid] = useState<domainValid>()
    let schema = yup.object().shape({
        domain: yup.string().required(),
        domainZone: yup.string().required(),
    });

    const {
        handleSubmit,
        register,
        formState: {errors},
        setValue,
        reset
    } = useForm({resolver: yupResolver(schema), mode: "onChange"});

    const onSubmit = async (data: any) => {
        setDomainValid('')
        setLoading(true)
        fetch(`https://api.whoisfreaks.com/v1.0/whois?apiKey=37e1337bcba84a4dadb44edf7e009c70&whois=live&domainName=${data.domain + data.domainZone}`)
            .then(response => response.json())
            .then(data => {
                setLoading(false)
                setDomainValid(data)

            })
            .catch(error => {
                console.error('Error:', error);
            });
    };


    const {t} = useTranslation('common')
    return <>
        <Head>
            <title>{t('websiteDomen')}</title>
        </Head>
        <div className={'my-5'}>

            <section data-aos='fade-up' data-aos-duration="700" id="her2o">
                <div className="container">
                    <div className="searchwrapper">
                        <div className="searchbox">
                            <div className="row">
                                <Form noValidate={true} onSubmit={handleSubmit(onSubmit)}
                                      className={'d-flex align-items-center'}>
                                    <FormGroup className={'col-6'}>
                                        <input
                                            {...register('domain')}
                                            name="domain"
                                            placeholder={t('domain_name').toString()}
                                            type="email"
                                            className={`form-control ${errors.domain ? "is-invalid" : ""
                                            }`}
                                        />
                                    </FormGroup>
                                    <FormGroup className={'col-4'}>

                                        <select
                                            {...register('domainZone')}
                                            name="domainZone"
                                            className={`form-control ${errors.domainZone ? "is-invalid" : ""
                                            }`}
                                        >
                                            {domains.map(item => {
                                                return <option value={item.title}>{item.title}</option>
                                            })}
                                        </select>
                                    </FormGroup>

                                    <FormGroup style={{height: "100%"}} className={'col-2 d-flex align-items-center'}>
                                        <Button disabled={loading} color={'primary'} style={{height: "max-content"}}>
                                            {t('submit')}
                                        </Button>
                                    </FormGroup>
                                </Form>
                            </div>
                        </div>
                    </div>

                    {domainValid ? domainValid?.domain_registered === 'yes' ?
                        <div data-aos='fade-up' className="alert alert-danger" role="alert">
                            {t('bought')}
                        </div> : domainValid.domain_registered === 'no' ? <div data-aos='fade-up' className="alert alert-success" role="alert">
                            {t('free')}

                        </div>  : <div data-aos='fade-up' className="alert alert-danger" role="alert">
                            {t('invalid-value')}
                        </div> : ""}

                </div>

            </section>

            <section className={'container'} data-aos='fade-up' data-aos-duration="700">
                <Table hover>
                    <thead>
                    <tr className="table-primary">
                        <th>
                            {t('domain_name')}
                        </th>
                        <th>
                            {t('price')}
                        </th>
                        <th>
                            {t('domain_time_increase')}
                        </th>
                        <th>
                            {t('transfer')}
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {domains.map(item => {
                        return <tr className="table-primary">
                            <th scope="row">
                                {item.title}
                            </th>
                            <td>
                                {item.price} {item.exchange}
                            </td>
                            <td>
                                {item.domain_time_increase_price} {item.exchange}
                            </td>
                            <td>
                                {item.transfer_price} {item.exchange}

                            </td>
                        </tr>
                    })}

                    </tbody>
                </Table>

            </section>
        </div>
    </>
}

export default index


export async function getServerSideProps(context: any) {
    const domains = await fetch('https://admin.qeydiyyat.az/api/domain')
    return {
        props: {
            domains: await domains.json(),
            ...(await serverSideTranslations(context.locale, ["common"])),

        }
    }
}