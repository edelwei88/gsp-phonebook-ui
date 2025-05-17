import { User } from "../api/user";

type EmployeeCardProps = {
    isOpen: boolean;
    onClose: () => void;
    employee: User | null;
}

export type {EmployeeCardProps};