import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const works = [
    {
      title: "Преступление и наказание",
      year: "1866",
      description: "Психологический роман о студенте Раскольникове и его теории о праве сильной личности на преступление."
    },
    {
      title: "Идиот",
      year: "1869",
      description: "История князя Мышкина — человека, чья доброта и честность оказываются чужими в современном обществе."
    },
    {
      title: "Братья Карамазовы",
      year: "1880",
      description: "Философский роман о семье Карамазовых, их страстях, вере и поиске истины."
    },
    {
      title: "Бесы",
      year: "1872",
      description: "Роман о нигилизме и революционном движении в России, предупреждение о последствиях радикальных идей."
    }
  ];

  const quotes = [
    {
      text: "Красота спасёт мир",
      source: "Идиот"
    },
    {
      text: "Свобода не в том, чтобы сдерживать себя, а в том, чтобы владеть собой",
      source: "Бесы"
    },
    {
      text: "Боль и страдание всегда обязательны для широкого сознания и глубокого сердца",
      source: "Преступление и наказание"
    },
    {
      text: "Если Бога нет, то всё позволено",
      source: "Братья Карамазовы"
    }
  ];

  const biography = [
    {
      year: "1821",
      event: "Родился в Москве в семье врача"
    },
    {
      year: "1849",
      event: "Арестован по делу петрашевцев, приговорён к смертной казни"
    },
    {
      year: "1854",
      event: "Освобождён из каторги в Омске"
    },
    {
      year: "1866",
      event: "Опубликован роман «Преступление и наказание»"
    },
    {
      year: "1880",
      event: "Завершён роман «Братья Карамазовы»"
    },
    {
      year: "1881",
      event: "Скончался в Санкт-Петербурге"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      <div className="border-b-4 border-[#8B4513] bg-gradient-to-b from-[#8B4513] to-[#A0522D] text-[#F5F5DC] py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-1 bg-[#D4AF37]"></div>
            <Icon name="BookOpen" className="text-[#D4AF37]" size={24} />
            <div className="w-16 h-1 bg-[#D4AF37]"></div>
          </div>
        </div>
      </div>

      <section className="container mx-auto px-4 py-16 animate-fade-in">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-[#8B4513] transform rotate-3 rounded-lg opacity-20"></div>
            <img 
              src="https://cdn.poehali.dev/projects/366bee73-760f-4598-ba95-d5d7557b10f7/files/3a091b34-db6a-4243-8f31-b0d8d90c3ebd.jpg"
              alt="Фёдор Михайлович Достоевский"
              className="relative rounded-lg shadow-2xl border-8 border-[#8B4513] w-full"
            />
          </div>
          <div className="space-y-6">
            <div className="border-l-4 border-[#D4AF37] pl-6">
              <h1 className="text-6xl md:text-7xl font-bold text-[#8B4513] mb-2">
                Ф.М. Достоевский
              </h1>
              <p className="text-2xl text-[#A0522D] font-serif">
                Великий русский писатель
              </p>
              <p className="text-lg text-muted-foreground mt-4">
                1821 — 1881
              </p>
            </div>
            <blockquote className="border-l-4 border-[#8B4513] pl-6 py-4 bg-white/30 rounded-r-lg">
              <p className="text-xl italic text-[#1A1A1A] leading-relaxed">
                "Человек есть тайна. Её надо разгадать, и ежели будешь её разгадывать всю жизнь, 
                то не говори, что потерял время"
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4 py-8">
          <div className="w-32 h-0.5 bg-[#D4AF37]"></div>
          <Icon name="Feather" className="text-[#8B4513]" size={32} />
          <div className="w-32 h-0.5 bg-[#D4AF37]"></div>
        </div>
      </div>

      <section id="biography" className="container mx-auto px-4 py-16">
        <h2 className="text-5xl font-bold text-center text-[#8B4513] mb-12">
          Биография
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {biography.map((item, index) => (
            <div 
              key={index}
              className="flex gap-6 items-start animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0 w-24">
                <div className="bg-[#8B4513] text-[#F5F5DC] px-4 py-2 rounded-lg text-center font-bold text-lg">
                  {item.year}
                </div>
              </div>
              <Card className="flex-grow border-2 border-[#D4AF37] bg-white/60">
                <CardContent className="pt-6">
                  <p className="text-lg text-[#1A1A1A]">{item.event}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4 py-8">
          <div className="w-32 h-0.5 bg-[#D4AF37]"></div>
          <Icon name="BookMarked" className="text-[#8B4513]" size={32} />
          <div className="w-32 h-0.5 bg-[#D4AF37]"></div>
        </div>
      </div>

      <section id="works" className="container mx-auto px-4 py-16 bg-gradient-to-b from-transparent to-[#8B4513]/5">
        <h2 className="text-5xl font-bold text-center text-[#8B4513] mb-12">
          Произведения
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {works.map((work, index) => (
            <Card 
              key={index}
              className="border-4 border-[#8B4513] bg-white/80 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader className="bg-[#8B4513] text-[#F5F5DC]">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-2xl font-bold">
                    {work.title}
                  </CardTitle>
                  <span className="bg-[#D4AF37] text-[#1A1A1A] px-3 py-1 rounded-full text-sm font-bold">
                    {work.year}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-[#1A1A1A] leading-relaxed">
                  {work.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4 py-8">
          <div className="w-32 h-0.5 bg-[#D4AF37]"></div>
          <Icon name="Quote" className="text-[#8B4513]" size={32} />
          <div className="w-32 h-0.5 bg-[#D4AF37]"></div>
        </div>
      </div>

      <section id="quotes" className="container mx-auto px-4 py-16">
        <h2 className="text-5xl font-bold text-center text-[#8B4513] mb-12">
          Цитаты
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {quotes.map((quote, index) => (
            <Card 
              key={index}
              className="border-l-8 border-[#D4AF37] bg-white/70 hover:bg-white/90 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6 space-y-4">
                <div className="flex justify-center mb-4">
                  <Icon name="Quote" className="text-[#D4AF37]" size={48} />
                </div>
                <p className="text-xl italic text-[#1A1A1A] leading-relaxed text-center">
                  "{quote.text}"
                </p>
                <Separator className="bg-[#D4AF37]" />
                <p className="text-sm text-[#8B4513] text-right font-semibold">
                  — {quote.source}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="gallery" className="container mx-auto px-4 py-16 bg-gradient-to-b from-[#8B4513]/5 to-transparent">
        <h2 className="text-5xl font-bold text-center text-[#8B4513] mb-12">
          Галерея
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3].map((item) => (
            <Card 
              key={item}
              className="border-4 border-[#8B4513] overflow-hidden hover:shadow-2xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${item * 0.1}s` }}
            >
              <div className="aspect-square bg-gradient-to-br from-[#D4AF37]/20 to-[#8B4513]/20 flex items-center justify-center">
                <Icon name="Image" className="text-[#8B4513]" size={64} />
              </div>
              <CardContent className="pt-4 bg-white/80">
                <p className="text-center text-[#8B4513] font-semibold">
                  Историческая фотография {item}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className="border-t-4 border-[#8B4513] bg-gradient-to-b from-[#A0522D] to-[#8B4513] text-[#F5F5DC] py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-1 bg-[#D4AF37]"></div>
              <Icon name="BookOpen" className="text-[#D4AF37]" size={32} />
              <div className="w-16 h-1 bg-[#D4AF37]"></div>
            </div>
            <h3 className="text-3xl font-bold">Ф.М. Достоевский</h3>
            <p className="text-lg opacity-90">
              Великий русский писатель и мыслитель
            </p>
            <p className="text-sm opacity-75 pt-4">
              © 2024 Литературная страница, посвящённая Фёдору Михайловичу Достоевскому
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
