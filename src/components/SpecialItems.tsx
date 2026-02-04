import ProductCard from "./ProductCard";
import magicCup from "../assets/magic-cup.png";

const SpecialItems = () => {
    const products = [
        {
            name: "Love Magic Cup ☕",
            price: 349,
            originalPrice: 499,
            items: [
                "Magic Color Changing Mug",
                "Reveals Design with Hot Liquid",
                "High Quality Ceramic",
                "Perfect Valentine Gift",
            ],
            image: magicCup,
        },
        {
            name: "Love Teddies",
            price: 499,
            items: [
                "Adorable Red & White Teddy Pair",
                "Cuddling with Heart",
                "Soft Plush Material",
                "Perfect Valentine's Day Gift",
            ],
            image: "/love-teddies.png",
        },
        {
            name: "Teddy Basket",
            price: 499,
            items: [
                "Red & White Teddy Bears",
                "Decorative Tricycle Basket",
                "Heart & Ribbon Details",
                "Romantic Valentine Gift",
            ],
            image: "/teddy-basket.png",
        },
        {
            name: "Pink Teddy Basket",
            price: 399,
            items: [
                "Adorable Pink Teddy Pair",
                "Red Heart Basket",
                "Soft & Cuddly",
                "Perfect Love Gift",
            ],
            image: "/pink-teddy-basket.png",
        },
        {
            name: "Strawberry Bunny",
            price: 399,
            items: [
                "Cute Strawberry Design",
                "Soft Plush Bunny",
                "Zipper Pouch Inside",
                "Adorable Gift Item",
            ],
            image: "/strawberry-bunny.png",
        },
        {
            name: "Cute Panda",
            price: 499,
            items: [
                "Adorable Panda Plush",
                "Festive Striped Scarf",
                "Soft & Cuddly",
                "Perfect Companion Gift",
            ],
            image: "/cute-panda.png",
        },
        {
            name: "Matching Love Bracelets",
            price: 149,
            items: [
                "Black & White Beaded Pair",
                "Heart Charm Detail",
                "Adjustable Size",
                "Perfect Couple Gift",
            ],
            image: "/matching-bracelets.png",
        },
        {
            name: "Golden Rose",
            price: 169,
            items: [
                "Elegant Red & Gold Rose",
                "Premium Gift Box",
                "Long-lasting Keepsake",
                "Symbol of Eternal Love",
            ],
            image: "/golden-rose.png",
        },
        {
            name: "Crystal Love Globe",
            price: 299,
            items: [
                "3D Engraved Couple Design",
                "LED Wooden Base",
                "Premium Crystal Glass",
                "Romantic Decorative Piece",
            ],
            image: "/crystal-love-globe.png",
        },
    ];

    return (
        <section id="special-items" className="py-16 px-4 bg-secondary/30">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <span className="text-primary font-medium text-sm uppercase tracking-wider">Special Additions</span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
                        Love Essentials 💖
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Magical gifts to make your celebration even more special
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
                    {products.map((product) => (
                        <div key={product.name} className="w-full md:w-[350px]">
                            <ProductCard {...product} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SpecialItems;
