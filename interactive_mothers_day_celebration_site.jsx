export default function MothersDayInteractiveSite() {
  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-b from-pink-200 via-rose-100 to-yellow-100 relative font-sans">
      {/* Floating Balloons */}
      {[...Array(18)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-bounce"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${3 + Math.random() * 5}s`,
          }}
        >
          <div className="w-12 h-16 bg-pink-400 rounded-full shadow-xl relative">
            <div className="absolute left-1/2 top-full w-[2px] h-10 bg-gray-500" />
          </div>
        </div>
      ))}

      {/* Confetti Burst */}
      {[...Array(120)].map((_, i) => (
        <div
          key={`confetti-${i}`}
          className="absolute animate-ping rounded-full"
          style={{
            width: `${4 + Math.random() * 10}px`,
            height: `${4 + Math.random() * 10}px`,
            backgroundColor: [
              '#ff4d6d',
              '#ffd166',
              '#06d6a0',
              '#118ab2',
              '#ef476f',
            ][Math.floor(Math.random() * 5)],
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${1 + Math.random() * 3}s`,
          }}
        />
      ))}

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20">
        <div className="backdrop-blur-xl bg-white/30 p-8 rounded-[40px] shadow-2xl border border-white/50 max-w-2xl animate-pulse">
          <h1 className="text-5xl md:text-7xl font-extrabold text-rose-600 drop-shadow-lg mb-6">
            Happy Mother’s Day 💖
          </h1>

          <p className="text-lg md:text-2xl text-gray-700 leading-relaxed mb-6">
            To the most amazing woman in the world — thank you for your endless
            love, strength, hugs, sacrifices, and smiles 🌸
          </p>

          <button
            onClick={() => {
              const audio = new Audio(
                'https://www.soundjay.com/human/sounds/applause-8.mp3'
              );
              audio.play();
              alert('✨ You are loved more than words can express! ✨');
            }}
            className="bg-rose-500 hover:bg-rose-600 transition-all duration-300 text-white px-8 py-4 rounded-full text-xl shadow-2xl hover:scale-110 active:scale-95"
          >
            Tap for a Surprise 🎁
          </button>
        </div>
      </div>

      {/* Floating Hearts */}
      {[...Array(35)].map((_, i) => (
        <div
          key={`heart-${i}`}
          className="absolute text-pink-500 animate-pulse"
          style={{
            fontSize: `${20 + Math.random() * 30}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${2 + Math.random() * 5}s`,
          }}
        >
          ❤️
        </div>
      ))}

      {/* Interactive Photo Cards */}
      <div className="relative z-10 px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {[
          {
            title: 'Endless Love 💕',
            img: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop',
            desc: 'A mother’s love is forever and unconditional.',
          },
          {
            title: 'Warm Hugs 🤗',
            img: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1200&auto=format&fit=crop',
            desc: 'No place feels safer than a mother’s embrace.',
          },
          {
            title: 'Superhero Mom 🦸‍♀️',
            img: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=1200&auto=format&fit=crop',
            desc: 'She makes the impossible look easy every day.',
          },
          {
            title: 'Memories 🌸',
            img: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1200&auto=format&fit=crop',
            desc: 'Every memory with mom becomes a treasure.',
          },
        ].map((card, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-[35px] shadow-2xl hover:scale-105 transition-all duration-500 bg-white/30 backdrop-blur-lg border border-white/50"
          >
            <img
              src={card.img}
              alt={card.title}
              className="h-80 w-full object-cover group-hover:scale-110 transition-all duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

            <div className="absolute bottom-0 p-6 text-white">
              <h2 className="text-3xl font-bold mb-2">{card.title}</h2>
              <p className="text-lg opacity-90">{card.desc}</p>
            </div>

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
              <button
                onClick={() => alert('💖 Moms make life beautiful 💖')}
                className="bg-white text-rose-500 font-bold px-6 py-3 rounded-full shadow-2xl hover:scale-110 transition"
              >
                Send Love 💌
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Graffiti Love Wall */}
      <div className="relative z-10 py-16 px-6">
        <div className="max-w-5xl mx-auto bg-white/20 backdrop-blur-xl rounded-[40px] p-10 shadow-2xl border border-white/50">
          <h2 className="text-5xl font-extrabold text-center text-rose-600 mb-10">
            Love Graffiti Wall 🎨
          </h2>

          <div className="flex flex-wrap justify-center gap-5 text-2xl md:text-4xl font-black">
            {[
              'BEST MOM ❤️',
              'QUEEN 👑',
              'MY HERO 🌟',
              'SUPER MOM 💪',
              'FOREVER LOVE 💕',
              'THANK YOU 🌸',
              'MOM = MAGIC ✨',
            ].map((word, i) => (
              <div
                key={i}
                className="rotate-[-5deg] hover:rotate-6 hover:scale-125 transition-all duration-300 px-5 py-3 rounded-2xl shadow-xl cursor-pointer"
                style={{
                  backgroundColor: [
                    '#ffafcc',
                    '#ffd6a5',
                    '#caffbf',
                    '#9bf6ff',
                    '#bdb2ff',
                  ][i % 5],
                }}
              >
                {word}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Memory Button */}
      <div className="relative z-10 flex justify-center pb-20 px-6">
        <button
          onClick={() => {
            document.body.style.background =
              'linear-gradient(to bottom, #ffcad4, #f8edeb, #ffe5ec)';
            alert('🌷 Every moment with Mom is a blessing 🌷');
          }}
          className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-rose-500 to-orange-400 text-white px-10 py-5 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce"
        >
          Create Magical Moments ✨
        </button>
      </div>

      {/* Footer */}
      <div className="relative z-10 text-center py-8 text-gray-700 font-semibold text-lg">
        Made with ❤️ for the most wonderful moms in the world.
      </div>
    </div>
  );
}
