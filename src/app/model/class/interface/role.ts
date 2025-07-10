export interface IRole {
  roleId: number;
  role: string;
}

export interface IDesignation {
  designationId: number;
  designation: string;
}

export interface APIResponseModel {
  message: string;
  result: boolean;
  data: any;
}

export interface IClient {
  clientId: number;
  contactPersonName: string;
  companyName: string;
  address: string;
  city: string;
  pincode: string;
  state: string;
  employeeStrength: number;
  gstNo: string;
  contactNo: string;
  regNo: string;
}

export interface IClientProject {
  id: number;
  // clientProjectId: 0;
  projectName: string;
  startDate: '2025-01-01';
  expectedEndDate: '2026-01-01';
  leadByEmpId: 0;
  completedDate: '2025-10-10';
  contactPerson: string;
  contactPersonContactNo: string;
  totalEmpWorking: 0;
  projectCost: 0;
  projectDetails: string;
  contactPersonEmailId: string;
  clientId: 0;
}
export interface Employee {
  empId: string;
  empName: string;
  empCode: string;
  empDesignation: string;
  role: string;
  id: number;
}

export interface Environment {
  API_URL: string;
}
