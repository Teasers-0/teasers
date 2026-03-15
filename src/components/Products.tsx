import ProductCard from "./ProductCard";
import hamper399 from "../assets/399-hamper.jpg";
import hamper899 from "../assets/899-hamper.png";
import hamper1299 from "../assets/1299-hamper.jpg";

const Products = () => {
  const products = [
    {
      name: "Surprise Starter 🎁",
      price: 399,
      originalPrice: 599,
      items: [
        "Cadbury Silk",
        "Rose",
        "Teddy",
        "Small Ring",
        "Greeting Card",
      ],
      image: hamper399,
    },
    {
      name: "The Classic Hamper 🎀",
      price: 899,
      originalPrice: 1199,
      items: [
        "Cadbury Silk",
        "KitKat",
        "Teddy",
        "Greeting Card",
        "Pair of Bracelet",
        "Special Card",
        "Golden Rose",
      ],
      popular: true,
      image: hamper899,
    },
    {
      name: "The Premium Hamper 💎",
      price: 1299,
      originalPrice: 1699,
      items: [
        "Special Cadbury",
        "Red-Golden Rose",
        "T-shirt",
        "Teddy",
        "Greeting Card",
        "Personalized Card",
      ],
      image: hamper1299,
    },
  ];

  return (
    <section id="products" className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Complete Gift Packages</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            Premium Gift Hampers 🎀
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            All-in-one curated hampers — flowers, chocolates, teddy & more in one beautiful package!
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>

        {/* Bottom Note */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          🎯 All prices inclusive of campus delivery • 📦 Gift wrapping included • 💳 Pay via PhonePe
        </p>
      </div>
    </section>
  );
};

export default Products;
