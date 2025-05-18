'use client'

import { UserIcon, X } from "lucide-react";
import React, { memo, useCallback } from "react";
import { EmployeeCardProps } from "@/types/components/employee-card";
import { getDepartmentPath } from "@/types/components/organization";

export default memo(function EmployeeCard({isOpen, onClose, employee, organizations}: EmployeeCardProps){
    const handleBackdropClick = useCallback(
        (event: React.MouseEvent<HTMLDivElement>) => {
            if (event.target === event.currentTarget) {
                onClose();
            }
        },
        [onClose],
    );
    if (!isOpen || !employee) return null;

    const departmentPath = getDepartmentPath(organizations, employee.DepartmentID);
    const organizationPath = getDepartmentPath(organizations, employee.OrganizationID);

    return(
        <>
        <div
        onClick={handleBackdropClick}
        className='fixed inset-0 bg-background opacity-75 z-40 pointer-events-auto'
        />

        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
            <div className="w-full md:w-2/3 lg:w-1/3 rounded-xl bg-background border-1 border-azul shadow-lg relative pointer-events-auto max-h-[90vh] overflow-y-auto">
            <button
            onClick={onClose}
            className="cursor-poiner absolute top-4 right-4 hover:text-gray-900"
            aria-label="Закрыть">
                <X size={24}/>
            </button>

            <div className="px-6 py-4 border-b flex items-start gap-4">
                <div className="w-20 h-20 rounded-xl bg-gray-100 border-2 border-azul flex items-center justify-center overflow-hidden">
                    {employee.Photo ? (
                        <img 
                            src={employee.Photo} 
                            alt={employee.FullNameRus} 
                            className="w-full h-full object-cover"
                        /> 
                    ) : (
                       <UserIcon className="w-10 h-10 text-gray-400"/> 
                    )}
                </div>
                <div className="flex-1">
                    <h2 className="text-xl font-bold">{employee.FullNameRus}</h2>
                    <p className="text-sm text-muted-foreground mt-1">{employee.Workplace}</p>
                </div>
            </div>

            <div className="px-6 py-4 space-y-1">
                <div className="grid grid-cols-[120px_1fr] gap-4items-center">
                    <label className="text-sm font-medium">Организация:</label>
                    <p>{employee.OrganizationID}</p>
                </div>
                <div className="grid grid-cols-[120px_1fr] gap-4items-center">
                    <label className="text-sm font-medium">Подразделение:</label>
                    <p>{employee.DepartmentID}</p>
                </div>
                <div className="grid grid-cols-[120px_1fr] gap-4items-center">
                    <label className="text-sm font-medium">Префикс:</label>
                    <p>{employee.Phone}</p>
                </div>
                <div className="grid grid-cols-[120px_1fr] gap-4items-center">
                    <label className="text-sm font-medium">Телефон:</label>
                    <p>{employee.Phone}</p>
                </div>
                <div className="grid grid-cols-[120px_1fr] gap-4items-center">
                    <label className="text-sm font-medium">Городской номер:</label>
                    <p>{employee.Phone}</p>
                </div>
                <div className="grid grid-cols-[120px_1fr] gap-4items-center">
                    <label className="text-sm font-medium">Мобильный (рабочий):</label>
                    <p>{employee.Mobile}</p>
                </div>
                <div className="grid grid-cols-[120px_1fr] gap-4items-center">
                    <label className="text-sm font-medium">Мобильный (личный):</label>
                    <p>{employee.Mobile}</p>
                </div>
                <div className="grid grid-cols-[120px_1fr] gap-4items-center">
                    <label className="text-sm font-medium">Email:</label>
                    <p>{employee.Email}</p>
                </div>
                <div className="grid grid-cols-[120px_1fr] gap-4items-center">
                    <label className="text-sm font-medium">Рабочее место:</label>
                    <p>{employee.Workplace}</p>
                </div>
                <div className="grid grid-cols-[120px_1fr] gap-4items-center">
                    <label className="text-sm font-medium">Адрес:</label>
                    <p>{employee.Address}</p>
                </div>
            </div>

            <div className="px-6 py-4 border-t">
                <div className="space-y-1">
                    <div className="space-y-1">
                        <div className="flex flex-col">
                            <span className="text-xs text-muted-foreground">Организация:</span>
                            <span className="text-sm">{organizationPath}</span>
                        </div>
                        
                        <div className="flex flex-col">
                            <span className="text-xs text-muted-foreground">Подразделение:</span>
                            <span className="text-sm">{departmentPath}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-6 py-4 border-t flex justify-end'>
            <button
              onClick={onClose}
              className='cursor-pointer bg-primary text-primary-foreground px-4 py-2 rounded transition-colors duration-200'>
              Редактировать
            </button>
          </div>
          
            </div>
        </div>
        </>
    )
})
