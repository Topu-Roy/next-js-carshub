"use client";

import React, { Fragment } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";

import { CarProps } from "@/types";

interface CarDetailsModalProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

function CarDetailsModal({ isOpen, closeModal, car }: CarDetailsModalProps) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className={"relative z-10"} onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto ">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-200"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className={
                    "relative w-full p-4 max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white text-left shadow-xl transition-all flex flex-col gap-5"
                  }
                >
                  <button
                    type="button"
                    onClick={closeModal}
                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-blue-200 rounded-full"
                  >
                    <Image
                      src={"/close.svg"}
                      alt="close modal"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>
                  <div className="flex-1 flex flex-col gap-3">
                    <div className="relative w-full bg-[url('/pattern.png')] h-40 bg-cover bg-center rounded-xl">
                      <Image
                        src={"/hero.png"}
                        alt="car model"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-1 relative w-full h-24 bg-blue-100 rounded-lg">
                        <Image
                          src={"/hero.png"}
                          alt="car model"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-blue-100 rounded-lg">
                        <Image
                          src={"/hero.png"}
                          alt="car model"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-blue-100 rounded-lg">
                        <Image
                          src={"/hero.png"}
                          alt="car model"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col gap-2">
                    <h2>
                      {car.make} {car.model}
                    </h2>

                    <div className="mt-3 flex flex-wrap gap-4">
                      {Object.entries(car).map(([key, value]) => (
                        <div
                          className="flex justify-between gap-5 w-full text-right"
                          key={key}
                        >
                          <h4 className="capitalize text-gray-600">
                            {key.split("_").join(" ")}
                          </h4>
                          <p className="">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default CarDetailsModal;
