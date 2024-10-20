import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import NextImage from "next/image";
import { BsDot } from "react-icons/bs";
import giftBoxIcon from "/public/icons/giftBoxIcon.svg";

interface ProductCardProps {
    product: {
        id: string,
        breed?: string,
        gender?: string,
        age?: string,
        price?: string,
        image: string,
        name?: string,
        product?: string,
        size?: string,
        description?: string,
    };
    isPetsCard?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, isPetsCard }) => {
    return (
        <Card className="w-full max-w-[280px]" radius="md" shadow="md">
            <CardBody className="p-[8px]">
                <Image src={product.image} alt={product.name} className="w-full aspect-square object-cover rounded-lg" />
            </CardBody>
            <CardFooter className="w-full flex flex-col justify-start items-start gap-y-[4px] pb-5">
                <p className="font-bold">
                    {isPetsCard ? product.id + " - " + product.breed : product.name}
                </p>
                <div className="flex gap-x-[4px] text-gray-700">
                    <small>
                        {isPetsCard ? "Gene " : "Product "}
                        <span className="font-semibold">{isPetsCard ? product.gender : product.product}</span>
                    </small>
                    {
                        product.age || product.size ? (
                            <>
                                <BsDot />
                                <small>
                                    {isPetsCard ? "Age " : "Size "}
                                    <span className="font-semibold">{isPetsCard ? product.age : product.size}</span>
                                </small>
                            </>
                        ) : ''
                    }
                </div>
                <p className="font-bold">{product.price}</p>

                {product.description && (
                    <div className="w-full rounded-lg bg-secondary bg-opacity-40 px-[10px] py-[8px] flex justify-start items-center gap-x-[2px] font-semibold text-primary">
                        <NextImage src={giftBoxIcon} alt="giftBoxIcon" width={20} height={20} />
                        <BsDot />
                        <p>
                            {product.description}
                        </p>
                    </div>
                )}
            </CardFooter>
        </Card >
    );
};

export default ProductCard;