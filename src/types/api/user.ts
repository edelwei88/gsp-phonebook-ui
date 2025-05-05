type User = {
  Index: number;
  ID: string;
  FullNameRus: string;
  DepartmentID: string;
  OrganizationID: string;
  Boleet: number;
  Email: string;
  Photo: string;
  Phone: string;
  Mobile: string;
  Address: string;
  Workplace: string;
};

type EmployeesResponse = {
  items: User[];
  total: number;
  page: number;
  size: number;
  pages: number;
};

export type { User, EmployeesResponse };
