"use client";
import { useState } from "react";
import Image from "next/image";
import CloseIcon from "../gsp/Close";
import EditIcon from "../gsp/Edit";
import CopyIcon from "../gsp/Copy";

export default function EmployeeModal({
  employee,
  onClose,
}: {
  employee: any;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="flex place-content-center w-4/5">
        <div className="w-2/3 rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl mt-20 relative">
          <div className="absolute top-4 right-4 flex space-x-4">
            <button
              onClick={() => console.log("Редактировать")}
              className="text-gray-600 hover:text-gray-800"
            >
              <EditIcon />
            </button>
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-gray-800"
            >
              <CloseIcon />
            </button>
          </div>

          <div className="flex p-6 justify-start bg-alice rounded-t-xl">
            <div className="relative h-20 w-20 ml-10 overflow-hidden rounded-full border-4 border-gray-400">
              <Image
                src="/"
                alt="Фото"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <div className="px-20 py-4 text-center">
              <h3 className="text-xl font-bold text-gray-800">
                {employee.FullNameRus}
              </h3>
              <div className="flex justify-start space-x-2 text-sm text-gray-500">
                <p>Должность</p>
              </div>
            </div>
          </div>

          <div className="px-5 py-4 m-10">
            <div className="flex flex-col space-y-4">
              <div className="flex justify-between">
                <h3 className="text-lg font-bold text-gray-800">Организация</h3>
                <p className="text-gray-600">{employee.DepartmentID}</p>
              </div>

              <div className="flex justify-between">
                <h3 className="text-lg font-bold text-gray-800">
                  Подразделение
                </h3>
                <p className="text-gray-600">{employee.OrganizationID}</p>
              </div>

              <div className="flex justify-between">
                <h3 className="text-lg font-bold text-gray-800">Префикс</h3>
                <p className="text-gray-600">{employee.Boolet}</p>
              </div>

              <div className="flex justify-between">
                <h3 className="text-lg font-bold text-gray-800">
                  Городской номер
                </h3>
                <p className="text-gray-600"></p>
              </div>

              <div className="flex justify-between">
                <h3 className="text-lg font-bold text-gray-800">
                  Мобильный (рабочий)
                </h3>
                <p className="text-gray-600">{employee.Phone}</p>
              </div>

              <div className="flex justify-between">
                <h3 className="text-lg font-bold text-gray-800">
                  Мобильный (личный)
                </h3>
                <div className="flex items-center space-x-2">
                  <p className="text-gray-600">{employee.Mobile}</p>
                  <button>
                    <CopyIcon />
                  </button>
                </div>
              </div>

              <div className="flex justify-between">
                <h3 className="text-lg font-bold text-gray-800">E-mail</h3>
                <div className="flex items-center space-x-2">
                  <p className="text-gray-600">{employee.Email}</p>
                  <button>
                    <CopyIcon />
                  </button>
                </div>
              </div>

              <div className="flex justify-between">
                <h3 className="text-lg font-bold text-gray-800">
                  Рабочее место
                </h3>
                <p className="text-gray-600">{employee.Workplace}</p>
              </div>

              <div className="flex justify-between">
                <h3 className="text-lg font-bold text-gray-800">Адрес</h3>
                <p className="text-gray-600">{employee.Address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
