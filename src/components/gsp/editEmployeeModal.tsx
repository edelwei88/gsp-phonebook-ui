"use client";
import { useState } from "react";
import Image from "next/image";
import CloseIcon from "./svg/Close";
import TrashIcon from "./svg/TrashBin";
import SaveChanges from "./svg/SaveChanges";

export default function EditEmployeeModal({
  onClose,
}: {
  employee: any;
  onClose: () => void;
}) {
  const [code, setCode] = useState("");

  const handleSendCode = () => {
    console.log("Введенный код:", code);
  };

  return (
    <>
      <div
        className="fixed bg-onyx opacity-75 inset-0 z-40 pointer-events-auto"
        onClick={onClose}
      ></div>

      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="flex place-content-center w-4/5">
          <div className="w-2/3 rounded-xl bg-white dark:bg-charcoal shadow-lg transition-all duration-300 hover:shadow-xl relative">
            <div className="absolute top-4 right-4 flex space-x-4">
              <button className="text-gray-600 dark:text-aliceblue">
                <SaveChanges />
              </button>
              <button
                onClick={onClose}
                className="text-gray-600 dark:text-aliceblue"
              >
                <CloseIcon />
              </button>
            </div>

            <div className="flex p-6 justify-start bg-alice dark:bg-onyxlight rounded-t-xl">
              <div className="relative h-20 w-20 ml-10 overflow-hidden rounded-full border-4 border-gray-400 dark:border-azul">
                <Image
                  src="/"
                  alt="Фото"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <div className="px-20 py-4 text-center">
                <h3 className="text-xl font-bold text-gray-800 dark:text-aliceblue">
                  ФИО
                </h3>
                <div className="flex justify-start space-x-2 text-sm text-gray-500 dark:text-aliceblue">
                  <p>Должность</p>
                </div>
              </div>
            </div>

            <div className="px-5 py-4 m-10">
              <div className="flex flex-col space-y-4">
                <div className="flex justify-between">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-aliceblue">
                    Мобильный телефон (личный)
                  </h3>
                  <div className="flex items-center space-x-28">
                    <input
                      type="text"
                      placeholder="+ 7 999 888 77 66"
                      className="border border-gray-300 rounded-lg p-2 w-96 text-gray-600"
                    />
                    <button>
                      <TrashIcon />
                    </button>
                  </div>
                </div>

                <div className="flex justify-between">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-aliceblue">
                    Городской телефон
                  </h3>
                  <div className="flex items-center space-x-28">
                    <input
                      type="text"
                      placeholder="+ 7 999 888 77 66"
                      className="border border-gray-300 rounded-lg p-2 w-96 text-gray-600 dark:text-aliceblue"
                    />
                    <button>
                      <TrashIcon />
                    </button>
                  </div>
                </div>

                <div className="flex justify-between">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-aliceblue">
                    Рабочее место
                  </h3>
                  <div className="flex items-center space-x-28">
                    <input
                      type="text"
                      placeholder="1"
                      className="border border-gray-300 rounded-lg p-2 w-96 text-gray-600"
                    />
                    <button>
                      <TrashIcon />
                    </button>
                  </div>
                </div>

                <div className="flex justify-between">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-aliceblue">
                    Адрес Адрес
                  </h3>
                  <div className="flex items-center space-x-28">
                    <input
                      type="text"
                      placeholder="Адрес"
                      className="border border-gray-300 rounded-lg p-2 w-96 text-gray-600 dark:text-aliceblue"
                    />
                    <button>
                      <TrashIcon />
                    </button>
                  </div>
                </div>

                <div className="flex justify-center items-center">
                  <input
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Введите код"
                    className="border border-gray-300 rounded-lg p-2"
                  />
                  <button
                    onClick={handleSendCode}
                    className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                  >
                    Отправить
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
