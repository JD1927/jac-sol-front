export interface GenericModel {
  id: number;
  name: string;
}

export interface DocumentType {
  id: number;
  name: string;
  nameCode: string;
}

export interface Role {
  id: number;
  name: string;
}

export interface Gender {
  id: number;
  name: string;
  nameCode: string;
}

export interface HealthcareType {
  id: number;
  name: string;
}

export interface Healthcare {
  id: number;
  name: string;
}

export interface Committee {
  id: number;
  name: string;
}

export interface AcademicLevel {
  id: number;
  name: string;
}

export interface ContactNumber {
  personId: number;
  contactNumber: number;
}

export interface Person {
  id?: number;
  documentId: string;
  name: string;
  dateBirth: string;
  age: number;
  address: string;
  email: string;
  documentType?: DocumentType;
  documentTypeId: number;
  role?: Role;
  roleId: number;
  gender: Gender;
  genderId: number;
  healthcareType?: HealthcareType;
  healthcareTypeId: number;
  healthcare?: Healthcare;
  healthcareId: number;
  committee?: Committee;
  committeeId?: number;
  academicLevel?: AcademicLevel;
  academicLevelId: number;
  contactNumber: ContactNumber[];
  relative?: Person;
  relativeId?: number;
}
