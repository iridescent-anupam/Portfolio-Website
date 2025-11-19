// Playful decorative stickers and elements
export function CreativeStickers() {
  return (
    <>
      {/* Floating stickers - positioned absolutely throughout */}
      <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
        {/* Top right star */}
        <div className="absolute top-24 right-12 animate-spin-slow">
          <div className="w-16 h-16 bg-yellow-400 rotate-12" style={{
            clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
          }}></div>
        </div>

        {/* Left arrow sticker */}
        <div className="absolute top-1/4 left-8 -rotate-12">
          <div className="bg-pink-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
            ← Cool stuff!
          </div>
        </div>

        {/* Bottom right circle */}
        <div className="absolute bottom-32 right-24 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 blur-xl"></div>

        {/* Middle smiley */}
        <div className="absolute top-1/2 right-8 text-6xl opacity-10 rotate-12">
          ✨
        </div>
      </div>
    </>
  );
}
