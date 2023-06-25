export interface serviceResponceInterface {
    alt: string;
    content: string;
    created_at: string;
    icon: string;
    id: number;
    title: string;

    translations: serviceTranslationInterfaceItem[];
}

export interface Statistic {
    id: 1;
    number: string;
    title: string;
    translations: serviceTranslationStatistic[];
}

export interface serviceDetail {
    title: string;
    content: string;

}

export interface serviceTeam {
    image: "Molestiae excepteur";
    alt: string;
    content: string;
    created_at: string;
    icon: string;
    id: number;
    title: string;
    translations: serviceTranslationTeam[];
}

export interface servicesCompanyLogo {
    id: 1;
    image: string;
    link: string;
    icon: string;
    translations: serviceTranslationCompanyLogo;
}

export interface servicesWhyChoose {
    img: string;
    content: string;
    created_at: string;
    icon: string;
    id: number;
    title: string;
    translations: serviceTranslationWhyChoose[];
}

export interface servicesSlider {
    id: 3;
    image: string;
    title: string;
    content: string;
    alt: "Quae quo Nam et et";
    icon: string;
    translations: serviceTranslationSlider[];
}

export interface servicesCarouselBlog {
    id: 4;
    image?: string;
    title: string;
    content: string;
    slug: string;
    created_at: string;
    alt: string;
    translations: serviceTranslationCarouselBlog[];
}

export interface servicesCarouselPortfolio {
    link: string;
    id: 4;
    image: string;
    title: string;
    content: string;
    slug: string;
    alt: string;
    icon: string;
    created_at: string;
    translations: serviceTranslationCarouselPortfolio[];
}


export interface servicesFag {
    id: 1;
    title?: string;
    content?: string;
    translations: serviceTranslationFag[];
}

export interface servicesContact {
    id: 1;
    title: string;
    link: string;
    icon: string;
    translations: serviceTranslationContact[];
}

export interface servicesContactInfo {
    id: string;
    title: string;
    link: string;
    translations: serviceTranslationContactInfo[];
}

export interface servicesPricing {
    component: any;
    id: 1;
    status: string;
    image: string;
    most_popular: 0;
    title: string;
    monthlyPrice: string;
    annualyPrice: string;
    data: string;
    users: string;
    gb: string;
    numbermonth: string;
    numberannu: string;
    exchange: string;
    locale: string;

    translations: serviceTranslationPricing[];
}

interface serviceTranslationPricing {
    id: 1;
    title: string;
    image: string;
    link: string;
    content: string;
    locale: string;
    component: string;
    monthlyPrice: number;
    annualyPrice: number;
    exchange: string;

}

interface serviceTranslationContactInfo {
    id: 2;
    image: string;
    link: string;
    title: string;
    content: string;
    locale: string;
}

interface serviceTranslationContact {
    id: 2;
    image?: string;
    link?: string;
    title?: string;
    content?: string;
    number?: string;
    locale?: string;
    icon?: string;
}

interface serviceTranslationFag {
    id: 1;
    title?: string;
    content?: string;
    alt: string;
    locale: string;
}

interface serviceTranslationCarouselBlog {
    id: 4;
    image: string;
    title: string;
    content: string;
    created_at: "2023-05-22T06:58:17.000000Z";
    slug: string;
    locale: string;
    alt: "Earum impedit qui f";
}

interface serviceTranslationSlider {
    alt: "Quae quo Nam et et";
    content: string;
    id: number;
    locale: string;
    service_id: number;
    title: string;
}

interface serviceTranslationInterfaceItem {
    alt: string;
    content: string;
    id: number;
    locale: string;
    service_id: number;
    title: string;
}

interface serviceTranslationWhyChoose {
    alt: string;
    content: string;
    id: number;
    locale: string;
    service_id: number;
    title: string;
}

interface serviceTranslationTeam {
    alt: "Molestiae excepteur";
    content: string;
    id: number;
    locale: string;
    service_id: number;
    name: string;
    img: string;
    title: string;
}

interface serviceTranslationCompanyLogo {
    id: 1;
    image: string;
    link: string;
    icon: string;
}

interface serviceTranslationCarouselPortfolio {
    id: 4;
    image: string;
    locale: "Laborum Omnis quae";
    created_at: "2023-05-23T08:02:34.000000Z";
    title: string;
    content: string;
}

interface serviceTranslationStatistic {
    id: 1;
    statistic_id: 1;
    title: string;
    locale: string;
}


export interface domainItem {
    "id": number,
    "title": string,
    "price": number,
    "domain_time_increase_price": string,
    "transfer_price": string,
    "exchange": string,
}

export interface domainValid {
    "domain_registered": 'yes' | 'no',
}