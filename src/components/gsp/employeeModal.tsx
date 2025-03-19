"use client";
import { Fragment, useEffect, useState } from "react";
import EmployeeInfo from "./employeeInfo";
import useFindPath from "./use-findPath";
import ModalHeader from "./modalHeader";
import EditEmployeeModal from "./editEmployeeModal";
import { Pencil, X } from "lucide-react";

export default function EmployeeModal({
  employee,
  onClose,
}: {
  employee: any;
  onClose: () => void;
}) {
  const [orgTree, setOrgTree] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const departmentPath = useFindPath(orgTree, employee.DepartmentID);

  function handleBackDropClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target == e.currentTarget) {
      onClose();
    }
  }

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/get_organization_tree")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setOrgTree(data);
      })
      .catch((error) => {
        console.error("Ошибка при загрузке данных:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleEditClick = () => {
    setIsEditModalOpen(true);
  };

  return (
    <Fragment>
      <div
        className="fixed bg-onyx opacity-75 inset-0 z-40 pointer-events-auto"
        onClick={handleBackDropClick}
      ></div>

      <div className="fixed inset-0 flex items-center justify-center z-50 overscroll-none pointer-events-none">
        <div className="w-1/3 rounded-xl bg-white dark:bg-onyxlight border-1 border-azul shadow-lg transition-all duration-300 hover:shadow-xl relative pointer-events-auto">
          <div className="absolute top-4 right-4 flex space-x-4">
            <button onClick={handleEditClick}>
              <Pencil />
            </button>
            <button onClick={onClose}>
              <X />
            </button>
          </div>

          <ModalHeader employee={employee} />

          <div className="px-5 py-2 ml-10 mr-10">
            <div className="flex flex-col space-y-2">
              <EmployeeInfo
                label="Организация"
                value={employee.DepartmentID}
                isCopy={false}
              />
              <EmployeeInfo
                label="Подразделение"
                value={employee.OrganizationID}
                isCopy={false}
              />
              <EmployeeInfo
                label="Префикс"
                value={employee.Boolet}
                isCopy={false}
              />
              <EmployeeInfo label="Городской номер" value="" isCopy={false} />
              <EmployeeInfo
                label="Мобильный (рабочий)"
                value={employee.Phone}
                isCopy={false}
              />
              <EmployeeInfo
                label="Мобильный (личный)"
                value={employee.Mobile}
                isCopy={true}
              />
              <EmployeeInfo
                label="E-mail"
                value={employee.Email}
                isCopy={true}
              />
              <EmployeeInfo
                label="Рабочее место"
                value={employee.Workplace}
                isCopy={false}
              />
              <EmployeeInfo
                label="Адрес"
                value={employee.Address}
                isCopy={false}
              />
            </div>
          </div>

          <div className="px-5 py-4">
            <div className="flex justify-between space-x-5">
              <div className="flex-1 text-center border-t-2 border-gray-300 pt-2">
                <div className="text-lg font-bold">Оргструктура сотрудника</div>
                <div></div>
              </div>
              <div className="flex-1 text-center border-t-2 border-gray-300 pt-2">
                <div className="text-lg font-bold">
                  Оргструктура подразделения
                </div>
                <div className="flex flex-col">
                  {isLoading ? (
                    <div>"Загрузка..." </div>
                  ) : (
                    departmentPath.map((item, index) => (
                      <div
                        key={index}
                        className="text-gray-600 dark:text-aliceblue"
                      >
                        {item}
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {isEditModalOpen && (
          <EditEmployeeModal
            employee={employee}
            onClose={() => setIsEditModalOpen(false)}
          />
        )}
      </div>
    </Fragment>
  );
}
