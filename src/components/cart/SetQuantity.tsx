type SetQuantityProps = {
    quantity: number;
    cardCounter: boolean;
    handleQtyIncrease: () => void;
    handleQtyDecrease: () => void;
};

const SetQuantity = ({ quantity, cardCounter, handleQtyIncrease, handleQtyDecrease }: SetQuantityProps) => {
    const btnStyles: string = "border-[1.2px] border-slate-800 cursor-pointer px-3 py-1 rounded";
    return (
        <div className="flex gap-8 items-center">
            {cardCounter ? null : <div className="font-semibold">QUANTITY</div>}
            <div className="flex md:flex-row flex-col gap-4 items-center lg:text-[22px] text-sm">
                <button
                    disabled={quantity <= 1}
                    className={btnStyles}
                    onClick={handleQtyDecrease}>
                    -
                </button>
                <div>{quantity}</div>
                <button
                    onClick={handleQtyIncrease}
                    className={btnStyles}>
                    +
                </button>
            </div>
        </div >
    )
}

export default SetQuantity;
