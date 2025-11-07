import { Button } from './ui/button';

export function StickyCTAMobile() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-green-500 p-3 shadow-lg md:hidden">
      <Button 
        asChild
        className="w-full bg-black hover:bg-gray-800 text-white text-lg py-3"
      >
        <a 
          href="https://payfast.greenn.com.br/138970"
          target="_blank"
          rel="noopener noreferrer"
        >
          Começar por R$ 147,00
        </a>
      </Button>
    </div>
  );
}
