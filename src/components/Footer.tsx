import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-black mb-4 text-primary">SNEAKERHEAD</div>
            <p className="text-sm text-background/70 mb-4">
              Твой путеводитель в мире модных кроссовок. 
              Только оригинальная продукция от мировых брендов.
            </p>
            <div className="flex gap-3">
              <Button size="icon" variant="secondary" className="rounded-full">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button size="icon" variant="secondary" className="rounded-full">
                <Icon name="Twitter" size={20} />
              </Button>
              <Button size="icon" variant="secondary" className="rounded-full">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button size="icon" variant="secondary" className="rounded-full">
                <Icon name="Youtube" size={20} />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Покупателям</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link to="/catalog" className="hover:text-primary transition-colors">Каталог</Link></li>
              <li><Link to="/new" className="hover:text-primary transition-colors">Новинки</Link></li>
              <li><Link to="/sale" className="hover:text-primary transition-colors">Распродажа</Link></li>
              <li><Link to="/brands" className="hover:text-primary transition-colors">Бренды</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Информация</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link to="/delivery" className="hover:text-primary transition-colors">Доставка</Link></li>
              <li><Link to="/payment" className="hover:text-primary transition-colors">Оплата</Link></li>
              <li><Link to="/return" className="hover:text-primary transition-colors">Возврат</Link></li>
              <li><Link to="/contacts" className="hover:text-primary transition-colors">Контакты</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Подписка на новости</h3>
            <p className="text-sm text-background/70 mb-4">
              Получай первым информацию о новинках и акциях
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Email" 
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
              />
              <Button className="font-bold">
                <Icon name="Send" size={18} />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/70">
          <p>© 2024 SNEAKERHEAD. Все права защищены.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
