import { Button } from './ui/button';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-800/95 backdrop-blur-sm border-b border-slate-700">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src="/images/logo.png" alt="RS Brasileiro Team" className="h-8 w-auto" />
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#inicio" className="text-gray-300 hover:text-green-400 transition-colors">
            Início
          </a>
          <a href="#sobre-coach" className="text-gray-300 hover:text-green-400 transition-colors">
            Conheça Rodrigo Brasileiro
          </a>
          <a href="#resultados" className="text-gray-300 hover:text-green-400 transition-colors">
            Resultados
          </a>
          <a href="#oferta" className="text-gray-300 hover:text-green-400 transition-colors">
            Oferta
          </a>
        </nav>
        
        <Button 
          asChild
          className="bg-green-500 hover:bg-green-600 text-black"
        >
          <a 
            href="https://payfast.greenn.com.br/138970"
            target="_blank"
            rel="noopener noreferrer"
          >
            Adquirir Agora
          </a>
        </Button>
      </div>
    </header>
  );
}
