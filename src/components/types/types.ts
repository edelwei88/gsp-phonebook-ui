export interface Item {
  ID: string;
  Name: string;
  Children?: Item[];
}

// export interface dataWithUniqueFields{
//     ID: string,
//     Children:
// }

export interface User {
    Index: number,
    ID: string,
    FullNameRus: string,
    DepartmentID: string,
    Boleet: number,
    Email: string,
    Photo: string,
    Phone: string,
    Mobile: string,
    Address: string,
    WorkPlace: string
}

export interface Payload{
  items:User[],
  total:number,
  page: number,
  size: number,
  pages: number
}