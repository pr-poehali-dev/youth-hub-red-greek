import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const [selectedPlace, setSelectedPlace] = useState<string | null>(null);

  const trendyPlaces = [
    { id: 1, name: 'Арт-пространство "Точка"', category: 'Культура', lat: 55.7558, lng: 37.6173, discount: '30%', icon: 'Palette' },
    { id: 2, name: 'Скейт-парк "Экстрим"', category: 'Спорт', lat: 55.7612, lng: 37.6098, discount: 'Бесплатно', icon: 'Bike' },
    { id: 3, name: 'Музей науки', category: 'Образование', lat: 55.7489, lng: 37.6234, discount: 'Бесплатно', icon: 'Lightbulb' },
    { id: 4, name: 'Коворкинг "Старт"', category: 'Работа', lat: 55.7589, lng: 37.6289, discount: '50%', icon: 'Laptop' },
  ];

  const fastFoodPartners = [
    { id: 1, name: 'Вкусно и точка', logo: '🍔', cashback: '10%', locations: 45 },
    { id: 2, name: 'Dodо Pizza', logo: '🍕', cashback: '15%', locations: 32 },
    { id: 3, name: 'KFC', logo: '🍗', cashback: '12%', locations: 28 },
    { id: 4, name: 'Burger King', logo: '👑', cashback: '10%', locations: 38 },
  ];

  const recentTransactions = [
    { id: 1, place: 'Вкусно и точка', amount: -450, date: '27 дек', cashback: +45 },
    { id: 2, place: 'Арт-пространство "Точка"', amount: -0, date: '25 дек', cashback: 0 },
    { id: 3, place: 'Dodо Pizza', amount: -680, date: '23 дек', cashback: +102 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <header className="mb-8 animate-fade-in">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg">
                <Icon name="CreditCard" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Молодежная карта</h1>
                <p className="text-sm text-muted-foreground">Твой доступ к городу</p>
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <Icon name="Menu" size={24} />
            </Button>
          </div>

          <Card className="bg-gradient-to-br from-primary via-primary to-secondary p-8 shadow-2xl border-0 relative overflow-hidden animate-scale-in">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl -ml-24 -mb-24"></div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <div className="flex gap-4">
                  <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24'%3E%3Crect width='24' height='24' fill='white' rx='4'/%3E%3C/svg%3E" alt="Госуслуги" className="w-12 h-12 bg-white rounded-lg" />
                  <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24'%3E%3Crect width='24' height='24' fill='white' rx='4'/%3E%3C/svg%3E" alt="Минпросвещения" className="w-12 h-12 bg-white rounded-lg" />
                  <div className="text-4xl">🍔</div>
                </div>
                <Icon name="Contactless" className="text-white" size={32} />
              </div>

              <div className="mb-6">
                <p className="text-white/80 text-sm mb-2">Баланс карты</p>
                <p className="text-5xl font-bold text-white mb-1">25 000 ₽</p>
                <p className="text-white/70 text-sm">+850 ₽ кэшбэк в этом месяце</p>
              </div>

              <div className="flex justify-between items-end">
                <div>
                  <p className="text-white/70 text-xs mb-1">Номер карты</p>
                  <p className="text-white font-mono text-lg">•••• 4521</p>
                </div>
                <div className="text-right">
                  <p className="text-white/70 text-xs mb-1">Действует до</p>
                  <p className="text-white font-mono">12/28</p>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-3 gap-4 mt-6">
            <Button className="bg-white hover:bg-gray-50 text-foreground shadow-md h-auto py-4 flex-col gap-2">
              <Icon name="Plus" size={20} />
              <span className="text-xs">Пополнить</span>
            </Button>
            <Button className="bg-white hover:bg-gray-50 text-foreground shadow-md h-auto py-4 flex-col gap-2">
              <Icon name="History" size={20} />
              <span className="text-xs">История</span>
            </Button>
            <Button className="bg-white hover:bg-gray-50 text-foreground shadow-md h-auto py-4 flex-col gap-2">
              <Icon name="Gift" size={20} />
              <span className="text-xs">Бонусы</span>
            </Button>
          </div>
        </header>

        <Tabs defaultValue="places" className="animate-slide-up">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="places">
              <Icon name="MapPin" size={16} className="mr-2" />
              Места
            </TabsTrigger>
            <TabsTrigger value="food">
              <Icon name="UtensilsCrossed" size={16} className="mr-2" />
              Еда
            </TabsTrigger>
            <TabsTrigger value="activity">
              <Icon name="Activity" size={16} className="mr-2" />
              Активность
            </TabsTrigger>
          </TabsList>

          <TabsContent value="places" className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Трендовые места</h2>
              <Button variant="outline" size="sm">
                <Icon name="Map" size={16} className="mr-2" />
                На карте
              </Button>
            </div>

            <div className="relative bg-muted rounded-2xl p-6 mb-6 overflow-hidden h-64">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <Icon name="MapPin" size={48} className="mx-auto mb-2 opacity-30" />
                  <p className="text-sm">Интерактивная карта мест</p>
                  <p className="text-xs mt-1">Нажми на место для просмотра деталей</p>
                </div>
              </div>
              
              {trendyPlaces.map((place, index) => (
                <div
                  key={place.id}
                  onClick={() => setSelectedPlace(place.id.toString())}
                  className={`absolute w-10 h-10 bg-primary rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:scale-110 transition-transform ${
                    selectedPlace === place.id.toString() ? 'ring-4 ring-primary/30 scale-125' : ''
                  }`}
                  style={{
                    left: `${20 + index * 20}%`,
                    top: `${30 + (index % 2) * 30}%`,
                  }}
                >
                  <Icon name={place.icon as any} size={20} className="text-white" />
                </div>
              ))}
            </div>

            <div className="grid gap-4">
              {trendyPlaces.map((place) => (
                <Card
                  key={place.id}
                  className={`p-4 cursor-pointer transition-all hover:shadow-lg ${
                    selectedPlace === place.id.toString() ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => setSelectedPlace(place.id.toString())}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name={place.icon as any} size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold">{place.name}</h3>
                        <Badge variant="secondary" className="bg-secondary text-white">
                          {place.discount}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{place.category}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Icon name="MapPin" size={12} />
                        <span>2.3 км от тебя</span>
                      </div>
                    </div>
                    <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="food" className="space-y-4">
            <h2 className="text-xl font-bold mb-4">Партнеры-фастфуды</h2>
            
            <div className="grid grid-cols-2 gap-4">
              {fastFoodPartners.map((partner) => (
                <Card key={partner.id} className="p-5 hover:shadow-lg transition-shadow">
                  <div className="text-center">
                    <div className="text-5xl mb-3">{partner.logo}</div>
                    <h3 className="font-semibold mb-2">{partner.name}</h3>
                    <Badge className="mb-3 bg-secondary text-white">
                      Кэшбэк {partner.cashback}
                    </Badge>
                    <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                      <Icon name="Store" size={12} />
                      <span>{partner.locations} точек</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="activity" className="space-y-4">
            <h2 className="text-xl font-bold mb-4">Последние операции</h2>
            
            <div className="space-y-3">
              {recentTransactions.map((transaction) => (
                <Card key={transaction.id} className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon name="ShoppingBag" size={18} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{transaction.place}</p>
                        <p className="text-xs text-muted-foreground">{transaction.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{transaction.amount} ₽</p>
                      {transaction.cashback > 0 && (
                        <p className="text-xs text-secondary">+{transaction.cashback} ₽</p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-6 bg-gradient-to-br from-secondary/10 to-primary/10 border-secondary/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <Icon name="TrendingUp" size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Статистика за месяц</p>
                  <p className="text-sm text-muted-foreground">Сэкономлено: 2 450 ₽</p>
                  <p className="text-sm text-muted-foreground">Посещено мест: 12</p>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
