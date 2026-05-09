import img1 from './assets/1.jpeg'
import img2 from './assets/2.JPG'
import img3 from './assets/3.jpg'
import img4 from './assets/4.jpg'
import img5 from './assets/5.jpeg'
import img6 from './assets/6.jpg'
import img7 from './assets/7.jpg'
import img8 from './assets/8.jpg'
import img9 from './assets/9.jpg'
import img10 from './assets/10.jpeg'
import img11 from './assets/11.jpeg'

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
              // Play celebration sound
              const audio = new Audio(
                'https://www.soundjay.com/human/sounds/applause-8.mp3'
              )
              audio.play()

              // Create fullscreen confetti explosion
              for (let i = 0; i < 250; i++) {
                const confetti = document.createElement('div')

                confetti.className =
                  'fixed top-0 left-1/2 w-3 h-3 rounded-full z-[9999] pointer-events-none'

                confetti.style.backgroundColor = [
                  '#ff4d6d',
                  '#ffd166',
                  '#06d6a0',
                  '#118ab2',
                  '#ef476f',
                  '#ffffff',
                  '#ff99c8',
                ][Math.floor(Math.random() * 7)]

                confetti.style.transform = `translateX(-50%)`
                confetti.style.left = `${Math.random() * 100}%`
                confetti.style.top = `-20px`

                confetti.animate(
                  [
                    {
                      transform: `translateY(0px) rotate(0deg)`,
                      opacity: 1,
                    },
                    {
                      transform: `translateY(${
                        window.innerHeight + 200
                      }px) translateX(${Math.random() * 400 - 200}px)
                      rotate(${Math.random() * 720}deg)`,
                      opacity: 0,
                    },
                  ],
                  {
                    duration: 2500 + Math.random() * 2000,
                    easing: 'cubic-bezier(.17,.67,.83,.67)',
                  }
                )

                document.body.appendChild(confetti)

                setTimeout(() => {
                  confetti.remove()
                }, 5000)
              }

              // Scroll to Memory Lane
              const memorySection = document.getElementById('memory-lane')

              if (memorySection) {
                memorySection.scrollIntoView({
                  behavior: 'smooth',
                })
              }
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

      {/* Scrollable Memory Lane */}
      <div id="memory-lane" className="relative z-10 py-10">
        <h2 className="text-5xl font-extrabold text-center text-rose-600 mb-8 drop-shadow-lg">
          Memory Lane 🌸
        </h2>

        <div className="flex gap-6 overflow-x-auto px-6 snap-x snap-mandatory scrollbar-hide pb-6">
          {[
            {
              title: 'Your Warm Hugs 🤗',
              year: '2010',
              img: img1,
              desc: 'Every hug from you felt like home.',
            },
            {
              title: 'Summer holidaysss in ramnad',
              year: '2013',
              img: img2,
              desc: 'Good food,cartoon and movies',
            },
            
            {
              title: 'Yet another mothers day ',
              year: '2021',
              img: img4,
              desc: 'But your love for us remained the same',
            },
            {
              title: 'Madurai daysss',
              year: '2021',
              img: img5,
              desc: 'Always ha ha ha around you',
            },
            {
              title: 'Back to ramnad from hostel 😣',
              year: '2021',
              img: img6,
              desc: 'Precious times with you',
            },
            {
              title: 'Gowtham Lodge Daysss',
              year: '2021',
              img: img7,
              desc: 'Exploring coimbatore together',
            },
            {
              title: 'Hostel visitsss',
              year: '2021',
              img: img8,
              desc: 'All the efforts you took to make sweets for us to make us feel at home🤗',
            },
            {
              title: 'Diwali together',
              year: '2021',
              img: img9,
              desc: 'When all of us are together happiness blooms',
            },
            {
              title: 'Back to home from college',
              year: '2021',
              img: img10,
              desc: 'The place where you are makes it home😍',
            },
            {
              title: 'Cozy kodai daysss',
              year: '2021',
              img: img11,
              desc: 'We will celebrate you always,forever',
            },
          ].map((memory, index) => (
            <div
              key={index}
              className="min-w-[85%] snap-center relative rounded-[35px] overflow-hidden shadow-2xl bg-white/20 backdrop-blur-xl border border-white/40"
            >
              <div className="relative h-[500px]">
                <img
                  src={memory.img}
                  alt={memory.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* <div className="absolute top-5 left-5 bg-white/30 backdrop-blur-lg px-4 py-2 rounded-full text-white font-bold shadow-lg">
                  {memory.year}
                </div> */}

                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-4xl font-extrabold mb-3">
                    {memory.title}
                  </h3>

                  <p className="text-lg opacity-90 leading-relaxed">
                    {memory.desc}
                  </p>

                  <button
                    onClick={() => {
                      const overlay = document.createElement('div')

                      overlay.className =
                        'fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4'

                      overlay.innerHTML = `
                        <div class="relative w-full max-w-md animate-[fadeIn_0.4s_ease]">
                          <img
                            src="${memory.img}"
                            class="w-full max-h-[85vh] object-contain rounded-[30px] shadow-2xl border-4 border-white"
                          />

                          <button
                            id="closeMemory"
                            class="absolute -top-3 -right-3 bg-white text-black w-12 h-12 rounded-full text-2xl font-bold shadow-xl"
                          >
                            ✕
                          </button>
                        </div>
                      `

                      document.body.appendChild(overlay)

                      document
                        .getElementById('closeMemory')
                        .addEventListener('click', () => {
                          overlay.remove()
                        })

                      overlay.addEventListener('click', (e) => {
                        if (e.target === overlay) overlay.remove()
                      })
                    }}
                    className="mt-5 bg-white text-rose-500 font-bold px-6 py-3 rounded-full shadow-2xl active:scale-95 transition"
                  >
                    Relive Memory ✨
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
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
              'PRETTIEST 🌟',
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
            const overlay = document.createElement('div')

            overlay.className =
              'fixed inset-0 bg-black/70 backdrop-blur-md z-[9999] flex items-center justify-center px-6'

            overlay.innerHTML = `
              <div class="relative bg-gradient-to-br from-pink-400 via-rose-300 to-yellow-200 w-full max-w-md rounded-[40px] shadow-[0_0_60px_rgba(255,255,255,0.5)] overflow-hidden animate-[fadeIn_0.5s_ease] border-4 border-white">

                <!-- Floating Hearts -->
                <div class="absolute inset-0 overflow-hidden">
                  ${Array.from({ length: 25 })
                    .map(
                      (_, i) => `
                    <div
                      style="
                        position:absolute;
                        left:${Math.random() * 100}%;
                        top:${Math.random() * 100}%;
                        font-size:${20 + Math.random() * 25}px;
                        animation: pulse ${
                          1 + Math.random() * 3
                        }s infinite;
                      "
                    >
                      💖
                    </div>
                  `
                    )
                    .join('')}
                </div>

                <div class="relative z-10 p-8 text-center text-white">

                  <div class="text-7xl mb-4 animate-bounce">
                    🌸
                  </div>

                  <h2 class="text-4xl font-extrabold mb-4 drop-shadow-lg">
                    To The Best Mom Ever 💕
                  </h2>

                  <p class="text-lg leading-relaxed mb-6 text-white/95">
                    Every smile, every hug, every sacrifice...
                    made life more beautiful.
                    <br/><br/>
                    Thank you for being our safe place,
                    our happiness, and our forever home ✨


                  </p>


                  <div class="flex justify-center gap-3 mb-6 text-3xl">
                    ✨ 💖 🌸 👑 🌷
                  </div>

                  <button
                    id="closeMagic"
                    class="bg-white text-rose-500 font-bold px-8 py-4 rounded-full shadow-2xl text-lg active:scale-95 transition"
                  >
                    PS: Love You Mom 💌 From Amaran, Amruthiyu and Sowparnika
                  </button>
                </div>
              </div>
            `

            document.body.appendChild(overlay)

            document
              .getElementById('closeMagic')
              .addEventListener('click', () => {
                overlay.remove()
              })

            overlay.addEventListener('click', (e) => {
              if (e.target === overlay) overlay.remove()
            })
          }}
          className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-rose-500 to-orange-400 text-white px-10 py-5 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce"
        >
          Create Magical Moments ✨
        </button>
      </div>

      {/* Footer */}
      <div className="relative z-10 text-center py-8 text-gray-700 font-semibold text-lg">
        Made with ❤️ for the most wonderful mom in the world.
      </div>
    </div>
  );
}
