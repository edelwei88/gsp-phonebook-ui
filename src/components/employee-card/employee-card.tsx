'use client'

import { X } from "lucide-react";
import React, { memo, useCallback } from "react";
import { EmployeeCardProps } from "@/types/components/employee-card";

export default memo(function EmployeeCard({isOpen, onClose, employee}: EmployeeCardProps){
    const handleBackdropClick = useCallback(
        (event: React.MouseEvent<HTMLDivElement>) => {
            if (event.target === event.currentTarget) {
                onClose();
            }
        },
        [onClose],
    );
    if (!isOpen || !employee) return null;

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

            <div className="px-6 py-4 border-b">
                <h2 className="text-xl font-bold">{employee.FullNameRus}</h2>
                <p className="text-sm text-muted-foreground">{employee.Workplace}</p>
            </div>

            <div className="px-6 py-4 space-y-4">
                <div>
                    <label className="text-sm font-medium">Должность:</label>
                    <p className="mt-1">{employee.Workplace}</p>
                </div>
                <div>
                    <label className="text-sm font-medium">Email:</label>
                    <p className="mt-1">{employee.Email}</p>
                </div>
                <div>
                    <label className="text-sm font-medium">Телефон:</label>
                    <p className="mt-1">{employee.Phone}</p>
                </div>
            </div>

            <div className='px-6 py-4 border-t flex justify-end'>
            <button
              onClick={onClose}
              className='cursor-pointer bg-primary text-primary-foreground px-4 py-2 rounded transition-colors duration-200'>
              Закрыть
            </button>
          </div>
          
            </div>
        </div>
        </>
    )
})
