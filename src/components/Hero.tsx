import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/861c59a2-182d-40d2-afb6-9fec71dc3d64/files/53f9385c-874d-4fb8-959d-f7918daaf9c8.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block mb-4">
            <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold tracking-wider">
              НОВАЯ КОЛЛЕКЦИЯ 2024
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            ТВОЙ СТИЛЬ
            <br />
            <span className="text-primary">ТВОИ КРОССОВКИ</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
            Эксклюзивные модели от мировых брендов. 
            Будь в тренде с SNEAKERHEAD!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg font-bold">
              Смотреть каталог
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="text-lg font-bold">
              Новинки
              <Icon name="Sparkles" className="ml-2" size={20} />
            </Button>
          </div>
          
          <div className="mt-12 flex flex-wrap gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Icon name="Truck" size={20} className="text-primary" />
              <span className="font-medium">Бесплатная доставка</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="ShieldCheck" size={20} className="text-primary" />
              <span className="font-medium">Гарантия качества</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="RefreshCw" size={20} className="text-primary" />
              <span className="font-medium">Обмен 30 дней</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
