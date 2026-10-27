export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/573109876543"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Atención rápida por WhatsApp"
      title="Atención rápida por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-xl transition-all duration-300 hover:scale-110 focus:outline-hidden"
      style={{ backgroundColor: 'rgb(37, 211, 102)', boxShadow: '0 4px 14px rgba(37, 211, 102, 0.45)' }}
    >
      <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white" />
      </span>
      <svg className="w-8 h-8 fill-current text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.45 1.28 4.95L2 22l5.25-1.38c1.45.79 3.08 1.22 4.79 1.22 5.52 0 10-4.48 10-10s-4.48-10-10-10zm0 18.27c-1.52 0-3-.41-4.3-1.18l-.31-.18-3.19.84.85-3.11-.2-.32a8.23 8.23 0 0 1-1.28-4.32c0-4.57 3.71-8.27 8.28-8.27 4.56 0 8.27 3.7 8.27 8.27 0 4.56-3.71 8.27-8.28 8.27zm4.54-6.19c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08 0 1.22.89 2.41 1.02 2.58.13.17 1.76 2.68 4.26 3.76.6.26 1.06.41 1.42.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29z" />
      </svg>
    </a>
  )
}