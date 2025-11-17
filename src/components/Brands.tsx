import { Card } from "@/components/ui/card";

const Brands = () => {
  const brands = [
    { name: "Nike", logo: "swoosh" },
    { name: "Adidas", logo: "three-stripes" },
    { name: "Puma", logo: "cat" },
    { name: "Reebok", logo: "delta" },
    { name: "New Balance", logo: "nb" },
    { name: "Vans", logo: "off-the-wall" }
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-2">ТОПОВЫЕ БРЕНДЫ</h2>
          <p className="text-muted-foreground">Официальные коллекции от лидеров индустрии</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {brands.map((brand) => (
            <Card
              key={brand.name}
              className="aspect-square flex items-center justify-center p-6 hover:scale-105 transition-transform cursor-pointer border-2 hover:border-primary"
            >
              <div className="text-center">
                <div className="text-4xl font-black mb-2">{brand.name.charAt(0)}</div>
                <p className="text-sm font-bold">{brand.name}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
