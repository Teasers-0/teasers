import ProductCard from "./ProductCard";

const Products = () => {
  const products = [
    {
      name: "Sweet Start 🎁",
      price: 499,
      originalPrice: 699,
      items: [
        "Box of Premium Chocolates",
        "Handwritten Love Note",
        "Rose Petals Confetti",
        "Gift Wrapped with Ribbon",
      ],
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500&h=500&fit=crop",
    },
    {
      name: "Love Bundle 💝",
      price: 999,
      originalPrice: 1299,
      items: [
        "Premium Chocolate Box",
        "Fresh Red Roses (6 stems)",
        "Cute Teddy Bear",
        "Personalized Photo Card",
        "Premium Gift Box",
      ],
      popular: true,
      image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500&h=500&fit=crop",
    },
    {
      name: "Ultimate Romance 👑",
      price: 1999,
      originalPrice: 2499,
      items: [
        "Luxury Chocolate Assortment",
        "Fresh Rose Bouquet (12 stems)",
        "Giant Teddy Bear",
        "Couple Hoodie Set",
        "Personalized Video Message",
        "Premium Wooden Gift Box",
      ],
      image: "https://images.unsplash.com/photo-1582142306909-195724d33ffc?w=500&h=500&fit=crop",
    },
  ];

  return (
    <section id="products" className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Choose Your Love Package</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            Gift Hampers for Every Budget 🎀
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From sweet gestures to grand surprises — we've got the perfect gift for your special someone.
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
          🎯 All prices inclusive of campus delivery • 📦 Gift wrapping included
        </p>
      </div>
    </section>
  );
};

export default Products;
