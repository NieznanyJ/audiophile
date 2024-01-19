import { useState, useEffect, useRef } from "react";

function QuantityChanger({
    handleQuantity = () => {},
    quantity,
    setQuantity = () => {},
    type = "normal",
}: {
    handleQuantity: (mode: string) => void;
    quantity: number;
    setQuantity: (quantity: number) => void;
    type?: "normal" | "cart";
}) {
    const [editing, setEditing] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleEditing = () => {
        setEditing(!editing);
    };

    const handleQuantityForm = (e: React.FormEvent) => {
        e.preventDefault();
        if (
            parseInt(e.currentTarget.children[0].innerHTML) === 0 ||
            parseInt(e.currentTarget.children[0].innerHTML) < 0
        ) {
            setQuantity(1);
        } else if (parseInt(e.currentTarget.children[0].innerHTML) > 99) {
            setQuantity(99);
        } else {
            setQuantity(parseInt(e.currentTarget.children[0].innerHTML));
        }

        setEditing(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                inputRef.current &&
                !inputRef.current.contains(event.target as Node)
            ) {
                if (parseInt(inputRef.current.value) === 0) {
                    setQuantity(1);
                } else if (parseInt(inputRef.current.value) > 99) {
                    setQuantity(99);
                } else {
                    setQuantity(parseInt(inputRef.current.value));
                }
                setEditing(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="add-to-cart">
            <span
                onClick={() => {
                    handleQuantity("decrement");
                }}
            >
                -
            </span>
            {editing && type === "normal" ? (
                <form onSubmit={handleQuantityForm}>
                    <input
                        ref={inputRef}
                        className="edit-quantity-input"
                        type="number"
                        defaultValue={quantity}
                    />
                </form>
            ) : (
                <span onClick={handleEditing}>{quantity}</span>
            )}
            <span
                onClick={() => {
                    handleQuantity("increment");
                }}
            >
                +
            </span>
        </div>
    );
}

export default QuantityChanger;
