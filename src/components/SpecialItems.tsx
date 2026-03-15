import ProductCard from "./ProductCard";
import magicCup from "../assets/magic-cup.png";

const SpecialItems = () => {
    const products = [
        {
            name: "Magic Reveal Cup ☕",
            price: 349,
            originalPrice: 499,
            items: [
                "Magic Color Changing Mug",
                "Reveals Design with Hot Liquid",
                "High Quality Ceramic",
                "Perfect Surprise Gift",
            ],
            image: magicCup,
        },
        {
            name: "Teddy Pair",
            price: 499,
            items: [
                "Adorable Red & White Teddy Pair",
                "Cuddling with Heart",
                "Soft Plush Material",
                "Perfect for Any Occasion",
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
                "Beautiful Gifting Option",
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
            name: "Matching Bracelets",
            price: 149,
            items: [
                "Black & White Beaded Pair",
                "Heart Charm Detail",
                "Adjustable Size",
                "Perfect Duo Gift",
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
                "Elegant Keepsake",
            ],
            image: "/golden-rose.png",
        },
        {
            name: "Crystal Globe",
            price: 299,
            items: [
                "3D Engraved Couple Design",
                "LED Wooden Base",
                "Premium Crystal Glass",
                "Decorative Keepsake",
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
                        Surprise Add-Ons ✨
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Magical extras to make your celebration even more special
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
