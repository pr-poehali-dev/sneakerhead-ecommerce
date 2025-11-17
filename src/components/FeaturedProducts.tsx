import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import ProductFilters from "@/components/ProductFilters";

interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  colors: string[];
  sizes: number[];
  isNew: boolean;
  isSale: boolean;
  discount?: number;
}

const mockProducts: Product[] = [
  {
    id: 1,
    name: "Air Max Classic",
    brand: "Nike",
    price: 12990,
    image: "https://cdn.poehali.dev/projects/861c59a2-182d-40d2-afb6-9fec71dc3d64/files/d19dbb35-13ce-4b9f-9669-c8a0fbf5b08b.jpg",
    colors: ["Белый", "Черный"],
    sizes: [39, 40, 41, 42, 43, 44],
    isNew: true,
    isSale: false
  },
  {
    id: 2,
    name: "Street Runner Pro",
    brand: "Adidas",
    price: 8990,
    image: "https://cdn.poehali.dev/projects/861c59a2-182d-40d2-afb6-9fec71dc3d64/files/f85e36ba-54b5-461d-ba73-970317262983.jpg",
    colors: ["Красный", "Черный"],
    sizes: [40, 41, 42, 43],
    isNew: false,
    isSale: true,
    discount: 30
  },
  {
    id: 3,
    name: "Urban Style",
    brand: "Puma",
    price: 7490,
    image: "https://cdn.poehali.dev/projects/861c59a2-182d-40d2-afb6-9fec71dc3d64/files/d19dbb35-13ce-4b9f-9669-c8a0fbf5b08b.jpg",
    colors: ["Синий", "Белый"],
    sizes: [39, 40, 41, 42],
    isNew: true,
    isSale: false
  },
  {
    id: 4,
    name: "Sport Elite",
    brand: "Reebok",
    price: 9990,
    image: "https://cdn.poehali.dev/projects/861c59a2-182d-40d2-afb6-9fec71dc3d64/files/f85e36ba-54b5-461d-ba73-970317262983.jpg",
    colors: ["Черный", "Серый"],
    sizes: [41, 42, 43, 44],
    isNew: false,
    isSale: false
  }
];

interface FeaturedProductsProps {
  filters: {
    size: number[];
    color: string[];
    brand: string[];
    priceRange: number[];
  };
  setFilters: (filters: any) => void;
}

const FeaturedProducts = ({ filters, setFilters }: FeaturedProductsProps) => {
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = mockProducts.filter(product => {
    if (filters.size.length > 0 && !filters.size.some(size => product.sizes.includes(size))) {
      return false;
    }
    if (filters.color.length > 0 && !filters.color.some(color => product.colors.includes(color))) {
      return false;
    }
    if (filters.brand.length > 0 && !filters.brand.includes(product.brand)) {
      return false;
    }
    if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
      return false;
    }
    return true;
  });

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-4xl font-black mb-2">ПОПУЛЯРНЫЕ МОДЕЛИ</h2>
            <p className="text-muted-foreground">Хиты продаж в этом сезоне</p>
          </div>
          
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="font-bold"
          >
            <Icon name="SlidersHorizontal" className="mr-2" size={20} />
            Фильтры
          </Button>
        </div>

        {showFilters && (
          <div className="mb-8">
            <ProductFilters filters={filters} setFilters={setFilters} />
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden border-2 hover:border-primary transition-all">
              <CardContent className="p-0 relative">
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="absolute top-2 right-2 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold">
                      NEW
                    </span>
                  )}
                  {product.isSale && (
                    <span className="bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-xs font-bold">
                      -{product.discount}%
                    </span>
                  )}
                </div>

                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Icon name="Heart" size={18} />
                </Button>

                <div className="p-4">
                  <p className="text-sm text-muted-foreground mb-1">{product.brand}</p>
                  <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <p className="text-2xl font-black text-primary">
                      {product.price.toLocaleString('ru-RU')} ₽
                    </p>
                  </div>

                  <div className="flex gap-1 mb-2">
                    {product.colors.slice(0, 3).map((color, idx) => (
                      <div
                        key={idx}
                        className="w-6 h-6 rounded-full border-2 border-border"
                        style={{
                          backgroundColor: color === "Белый" ? "#fff" : 
                                         color === "Черный" ? "#000" : 
                                         color === "Красный" ? "#ff0000" :
                                         color === "Синий" ? "#0000ff" : 
                                         color === "Серый" ? "#808080" : "#ccc"
                        }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="p-4 pt-0">
                <Button className="w-full font-bold">
                  В корзину
                  <Icon name="ShoppingCart" className="ml-2" size={18} />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <Icon name="Package" size={48} className="mx-auto mb-4 text-muted-foreground" />
            <p className="text-xl text-muted-foreground">Товары не найдены</p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => setFilters({ size: [], color: [], brand: [], priceRange: [0, 50000] })}
            >
              Сбросить фильтры
            </Button>
          </div>
        )}

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="font-bold">
            Показать больше
            <Icon name="ChevronDown" className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
