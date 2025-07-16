import { Button, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import type { ProductType } from '../types/ProductType';
import type React from 'react';

type ModalProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    product?: ProductType;
    isAvailable: number | boolean;
}

function ProductViewModal({ open, setOpen, product, isAvailable }: ModalProps) {

    if (!product) return null; // Early return if product is undefined

    const { productId, productName, image, description, quantity, price, discount, specialPrice } = product;
    const handleClickOpen = () => {
        setOpen(true)
    }

    return (
        <>
            <Dialog open={open} as="div" className="relative z-10" onClose={() => setOpen(false)} __demoMode>
                <DialogBackdrop className="fixed inset-0 bg-gray-500/75 transition-opacity" />
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel
                            transition
                            className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all md:max-w-[620px] md:min-w-[620px] w-full"
                        >
                            {image && (
                                <div className='flex justify-center aspect-[3/2]'>
                                    <img src={image} alt={productName} />
                                </div>
                            )}
                            <div className='px-6 pt-10 pb-2'>

                                <DialogTitle as="h1" className="lg:text-3xl sm:text-2xl text-xl font-semibold font-display leading-6 text-gray-800 mb-4">{productName}</DialogTitle>

                                <div className='space-y-2 text-gray-700 pb-4'>
                                    <div className='flex items-center justify-between gap-2'>
                                        {specialPrice ? (
                                            <div className="flex items-center gap-2">
                                                <span className="text-gray-400 line-through">${Number(price).toFixed(2)}</span>
                                                <span className="sm:text-xl font-bold text-slate-700">${Number(specialPrice).toFixed(2)}</span>
                                            </div>
                                        ) : (
                                            <span className="text-xl font-bold text-slate-700">{"  "}${Number(price).toFixed(2)}</span>
                                        )}

                                        {isAvailable ? (
                                            <p>In stock</p>
                                        ) : (
                                            <p>Out of stock</p>
                                        )
                                        }
                                    </div>
                                </div>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    )
}

export default ProductViewModal;
