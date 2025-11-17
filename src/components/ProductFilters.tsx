import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";

interface ProductFiltersProps {
  filters: {
    size: number[];
    color: string[];
    brand: string[];
    priceRange: number[];
  };
  setFilters: (filters: any) => void;
}

const ProductFilters = ({ filters, setFilters }: ProductFiltersProps) => {
  const sizes = [37, 38, 39, 40, 41, 42, 43, 44, 45, 46];
  const colors = ["Белый", "Черный", "Красный", "Синий", "Зеленый", "Серый"];
  const brands = ["Nike", "Adidas", "Puma", "Reebok", "New Balance", "Vans"];

  const toggleFilter = (type: 'size' | 'color' | 'brand', value: any) => {
    const currentValues = filters[type];
    const newValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value];
    
    setFilters({ ...filters, [type]: newValues });
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Размер</h3>
            <div className="grid grid-cols-5 gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => toggleFilter('size', size)}
                  className={`p-2 text-sm font-medium border-2 rounded-lg transition-all ${
                    filters.size.includes(size)
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border hover:border-primary'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Цвет</h3>
            <div className="space-y-3">
              {colors.map((color) => (
                <div key={color} className="flex items-center space-x-2">
                  <Checkbox
                    id={`color-${color}`}
                    checked={filters.color.includes(color)}
                    onCheckedChange={() => toggleFilter('color', color)}
                  />
                  <Label htmlFor={`color-${color}`} className="cursor-pointer">
                    {color}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Бренд</h3>
            <div className="space-y-3">
              {brands.map((brand) => (
                <div key={brand} className="flex items-center space-x-2">
                  <Checkbox
                    id={`brand-${brand}`}
                    checked={filters.brand.includes(brand)}
                    onCheckedChange={() => toggleFilter('brand', brand)}
                  />
                  <Label htmlFor={`brand-${brand}`} className="cursor-pointer">
                    {brand}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Цена</h3>
            <div className="space-y-4">
              <Slider
                min={0}
                max={50000}
                step={1000}
                value={filters.priceRange}
                onValueChange={(value) => setFilters({ ...filters, priceRange: value })}
                className="mt-2"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>{filters.priceRange[0].toLocaleString('ru-RU')} ₽</span>
                <span>{filters.priceRange[1].toLocaleString('ru-RU')} ₽</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductFilters;
