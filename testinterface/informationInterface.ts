export interface information {
  licenseno: string;
  Crno: string;
  nameen: string;
  namear: string;
  ownername: string;
  licensestartDate: string;
  licenseendDate: string;
  entitymobile: string;
  entityemail: string;
  Licenseauthorith: string;
  headoffice: string;
}

export interface address {
  unitno: string;
  buildingno: string;
  street: string;
  zone: string;
  municipality: string;
  pobox: string;
  website: string;
}
export interface focaldata {
  fqid: string;
  femail: string;
  fdesignation: string;
  fmobile: string;
}

export interface HIBData {
  HIB: {
    information: information;
    address: address;
    focaldata: focaldata;
  };
  TPA: {
    information: information;
    address: address;
    focaldata: focaldata;
  };
}

export interface Data {
  information: information;
  address: address;
  focaldata: focaldata;
}
