'use client';
import {useState} from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import EmployeeModal from './employeeModal';
export default function EmployeeTableWrapper({users}: {users: User[]}) {
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const handleEmployeeClick = (employee: any) => {
        setSelectedEmployee(employee);
    };

    const closeModal = () => {
        setSelectedEmployee(null);
    };

    return (
        <>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className='bg-columbia'>ФИО</TableHead>
                        <TableHead className='rounded-tl-[15px] text-center text-jet'>
                            ФИО
                        </TableHead>
                        <TableHead className='bg-columbia text-jet'>
                            ФИО
                        </TableHead>
                        <TableHead className='bg-columbia'>ФИО</TableHead>
                    </TableRow>
                </TableHeader>
            </Table>
            <Table>
                <TableHeader>
                    <TableRow className='bg-columbia'>
                        <TableHead className='rounded-tl-[15px] text-center text-jet'>
                            ФИО
                        </TableHead>
                        <TableHead className='text-center text-jet'>
                            Должность
                        </TableHead>
                        <TableHead className='text-center text-jet'>
                            Почта
                        </TableHead>
                        <TableHead className='rounded-tr-[15px] text-center text-jet'>
                            Телефон
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users.map((user: any) => (
                        <TableRow key={user.ID}>
                            <TableCell
                                className='cursor-pointer hover:underline'
                                onClick={() => handleEmployeeClick(user)}
                            >
                                {user.FullNameRus}
                            </TableCell>
                            <TableCell>{user.Workplace}</TableCell>
                            <TableCell>{user.Email}</TableCell>
                            <TableCell>
                                ({user.Phone.substring(0, 2)}){' '}
                                {user.Phone.substring(2, 4)}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {selectedEmployee && (
                <EmployeeModal
                    employee={selectedEmployee}
                    onClose={closeModal}
                />
            )}
        </>
    );
}
