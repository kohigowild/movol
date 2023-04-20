import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { TypeModal } from "@/interface/modal";
import { StarIcon } from "@heroicons/react/24/outline";
import { NoPoster } from "@/utils/hooks";

export default function ResultModal({ isOpen, closeModal, info }: TypeModal) {
    const router = useRouter();
    const handleItemClick = (id: number, title: string) => {
        router.push({
            pathname: `/movies/${title}/${id}`,
        });
    };

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title as="h3" className="text-lg font-bold leading-6 text-gray-900">
                                    Search Results
                                </Dialog.Title>
                                <div className="mt-2">
                                    <div className="text-sm sm:text-lg mb-2">Click the card to go to the Details page.</div>
                                    {info?.slice(0, 3).map((movie: any) => (
                                        <div className="w-full pr-4 mb-4 cursor-pointer" key={movie.id} onClick={() => handleItemClick(movie.id, movie.original_title)}>
                                            <div className="flex rounded-lg m-h-64 p-2 transform hover:-translate-y-2 transition duration-300">
                                                <figure className="relative h-[116px] w-[116px] flex align-center">
                                                    <Image src={NoPoster(movie.poster_path)} alt={movie.original_title} className="ml-auto mr-auto rounded-lg object-cover" fill />
                                                </figure>
                                                <div className="w-2/3 rounded-b-lg p-4 flex flex-col">
                                                    <h5 className="text-black text-xl font-bold leading-none truncate">{movie.original_title}</h5>
                                                    <div className="text-xs text-black font-light mb-2 mt-2 truncate">{movie.overview}</div>
                                                    <div className="flex">
                                                        <div className="mr-2 rounded-md backdrop-blur-md bg-indigo-600/60 shadow px-1 py-1 text-xs text-white truncate flex">
                                                            <StarIcon className="mr-1 h-3 w-3 mt-[2px] stroke-indigo-600 fill-indigo-600" aria-hidden="true" />
                                                            <div className="px-1">{movie.vote_average.toFixed(1)}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-4 flex justify-end">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-900 hover:bg-indigo-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        onClick={closeModal}
                                    >
                                        Close
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
