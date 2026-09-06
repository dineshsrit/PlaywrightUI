import { hibPage } from '../Pages/hibpage';

export interface information
{
    licenseno: string;
    Crno: string;
    nameen: string;
    namear: string;
    ownername: string;
    licensestartDate: string;
    licenseendDate: string;
    entitymobile:string
    entityemail:string
    Licenseauthorith:string
    headoffice:string
}

export interface HIBData
{
    HIB:{
        information:information
    }
}