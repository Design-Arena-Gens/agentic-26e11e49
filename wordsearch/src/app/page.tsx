export default function Home() {
  const featuredCategories = [
    {
      name: "Daily Challenge",
      description:
        "A fresh themed puzzle every sunrise. Track streaks and climb the leaderboard.",
      words: ["Aurora", "Glow", "Dawn", "Ray", "Sky"],
      difficulty: "Medium",
    },
    {
      name: "Kids Corner",
      description:
        "Short, colorful grids perfect for curious minds learning new words.",
      words: ["Apple", "Play", "Tree", "Book", "Blue"],
      difficulty: "Easy",
    },
    {
      name: "Brain Burners",
      description:
        "Twisty grids with backward diagonals, hidden hints, and mystery clues.",
      words: ["Cipher", "Maze", "Logic", "Quest", "Think"],
      difficulty: "Hard",
    },
  ];

  const featureHighlights = [
    {
      title: "Smart Generator",
      description:
        "Craft custom puzzles in seconds. Pick topics, sizes, difficulty, and share instantly.",
      icon: "⚡️",
    },
    {
      title: "Collaborative Play",
      description:
        "Invite friends to tackle the same puzzle in real-time or race the clock.",
      icon: "🎉",
    },
    {
      title: "Beautiful Analytics",
      description:
        "Visualize progress with streak tracking, heatmaps, and skill badges.",
      icon: "📊",
    },
  ];

  const sampleGrid = [
    ["C", "L", "U", "E", "S", "H", "I"],
    ["O", "Q", "U", "E", "S", "T", "S"],
    ["N", "E", "S", "T", "L", "E", "D"],
    ["U", "N", "R", "A", "V", "E", "L"],
    ["N", "I", "G", "M", "A", "S", "O"],
    ["D", "E", "C", "O", "D", "E", "R"],
    ["S", "E", "A", "R", "C", "H", "X"],
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute top-1/3 -left-16 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/4 translate-y-1/4 rounded-full bg-indigo-500/25 blur-3xl" />
      </div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.08),transparent_55%)]" />

      <header className="mx-auto max-w-6xl px-6 py-6">
        <nav className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 via-indigo-500 to-purple-500 text-xl font-bold">
              W
            </span>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-300">
                Word Search
              </span>
              <span className="text-lg font-semibold text-white">
                Puzzle Studio
              </span>
            </div>
          </div>
          <div className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
            <a className="transition hover:text-white" href="#categories">
              Categories
            </a>
            <a className="transition hover:text-white" href="#features">
              Features
            </a>
            <a className="transition hover:text-white" href="#community">
              Community
            </a>
            <a className="transition hover:text-white" href="#newsletter">
              Newsletter
            </a>
          </div>
          <div className="flex items-center gap-3">
            <button className="hidden rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/10 md:block">
              Sign in
            </button>
            <button className="rounded-full bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition hover:shadow-indigo-500/30">
              Play free
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section className="mx-auto flex max-w-6xl flex-col-reverse gap-14 px-6 pb-24 pt-12 md:flex-row md:items-center">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-sky-200">
              <span className="inline-flex h-2 w-2 rounded-full bg-sky-300" />
              New: Multiplayer races + puzzle builder
            </div>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Discover word search puzzles that spark curiosity and sharpen your mind.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-slate-300">
              Dive into handcrafted grids, themed collections, and smart generators. From classroom fun
              to late-night brain workouts, Puzzle Studio keeps every session fresh.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-white/30 transition hover:bg-slate-200">
                Start the Daily Challenge
              </button>
              <button className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10">
                Build your own puzzle
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <span className="text-xl">⭐️</span>
                <span> Loved by 120k+ players with 4.9/5 rating</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">🧩</span>
                <span>Over 2,500 curated puzzle themes</span>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 opacity-70 blur-2xl" />
              <div className="relative rounded-3xl border border-white/15 bg-slate-900/60 p-6 shadow-2xl shadow-indigo-900/50 backdrop-blur">
                <div className="flex items-center justify-between pb-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                      Puzzle Preview
                    </p>
                    <p className="text-sm font-medium text-white">Midnight Mystery</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-800 px-3 py-1">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      Live
                    </span>
                    <span className="rounded-full bg-slate-800 px-3 py-1">Expert</span>
                  </div>
                </div>
                <div className="space-y-1 rounded-2xl border border-white/10 bg-slate-900/80 p-4 shadow-inner shadow-black/40">
                  {sampleGrid.map((row, rowIndex) => (
                    <div key={`row-${rowIndex}`} className="grid grid-cols-7 gap-1">
                      {row.map((letter, colIndex) => {
                        const highlight =
                          rowIndex === 2 && colIndex > 1 && colIndex < 6
                            ? "bg-sky-500/40 text-white"
                            : rowIndex === colIndex
                              ? "bg-indigo-500/40 text-white"
                              : "bg-slate-800/80 text-slate-200";

                        return (
                          <span
                            key={`${rowIndex}-${colIndex}`}
                            className={`flex h-10 w-10 items-center justify-center rounded-xl text-lg font-semibold uppercase ${highlight} shadow-inner shadow-black/40`}
                          >
                            {letter}
                          </span>
                        );
                      })}
                    </div>
                  ))}
                </div>
                <div className="mt-5 grid gap-4 rounded-2xl bg-slate-900/70 p-4 text-sm text-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-white">Words to find</span>
                    <span className="rounded-full bg-slate-800 px-3 py-1 text-xs">6 left</span>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs uppercase tracking-wide text-slate-200">
                    {["Cipher", "Clue", "Moon", "Midnight", "Labyrinth", "Secret"].map((word) => (
                      <span
                        key={word}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                      >
                        {word}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 pt-2 text-xs text-slate-400">
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 font-medium text-emerald-400">
                      ✅ No hints used
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-purple-500/10 px-3 py-1 font-medium text-purple-300">
                      ⏱ 03:42 elapsed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="bg-slate-950/80 py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
                Why puzzle studio
              </p>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Fast puzzle creation, delightful gameplay, powerful insights.
              </h2>
              <p className="mt-4 text-base text-slate-300">
                Everything you need to design, share, and solve word searches with any audience.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {featureHighlights.map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-black/40 transition hover:-translate-y-1 hover:border-sky-400/30 hover:bg-slate-900/80"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/90 to-indigo-500/90 text-2xl">
                    {feature.icon}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{feature.description}</p>
                  <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-300 transition group-hover:text-white">
                    Learn more
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="categories" className="bg-slate-950 py-24">
          <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 md:flex-row md:items-start">
            <div className="flex-1 space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
                Featured collections
              </p>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Play through curated puzzle playlists tailored for every mood, age, and skill.
              </h2>
              <p className="text-base text-slate-300">
                Pick a category to dive into themed word hunts, or remix them into your own challenge.
                Each collection includes printable and interactive versions with optional timer mode.
              </p>
              <div className="grid gap-4 text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20 text-sky-200">
                    01
                  </span>
                  <p>Classroom-ready lesson plans for educators with answer keys.</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20 text-sky-200">
                    02
                  </span>
                  <p>Advanced players can unlock mirrored grids, hidden phrases, and cryptic clues.</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20 text-sky-200">
                    03
                  </span>
                  <p>Download printable PDFs or embed puzzles directly into your site.</p>
                </div>
              </div>
            </div>
            <div className="flex-1 space-y-6">
              {featuredCategories.map((category) => (
                <div
                  key={category.name}
                  className="group rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-black/40 transition hover:border-sky-400/30 hover:bg-slate-900/70"
                >
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-400">
                    <span>{category.difficulty}</span>
                    <span>Puzzle Playlist</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-white">{category.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{category.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2 text-xs uppercase tracking-wide text-slate-200">
                    {category.words.map((word) => (
                      <span
                        key={word}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                      >
                        {word}
                      </span>
                    ))}
                  </div>
                  <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-300 transition group-hover:text-white">
                    Browse puzzles
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="community" className="bg-slate-950/80 py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
              <div className="space-y-6">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
                  Community highlights
                </p>
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  Built for classrooms, families, clubs, and puzzle pros.
                </h2>
                <div className="grid gap-6 text-sm text-slate-300 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-inner shadow-black/30">
                    <p className="text-lg font-semibold text-white">Educator Toolkit</p>
                    <p className="mt-3 leading-6">
                      Assign puzzles, track class progress, and export printable answer keys in one
                      click.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-inner shadow-black/30">
                    <p className="text-lg font-semibold text-white">Puzzle Clubs</p>
                    <p className="mt-3 leading-6">
                      Host tournaments with live leaderboards and share puzzles with private URLs.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-inner shadow-black/30">
                    <p className="text-lg font-semibold text-white">Accessibility</p>
                    <p className="mt-3 leading-6">
                      High-contrast modes, keyboard-friendly navigation, and screen-reader optimized
                      clues.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-inner shadow-black/30">
                    <p className="text-lg font-semibold text-white">Offline Play</p>
                    <p className="mt-3 leading-6">
                      Download packs for road trips or rainy days with auto-sync when you are back
                      online.
                    </p>
                  </div>
                </div>
              </div>
              <aside className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900/40 to-slate-800 p-8 shadow-2xl shadow-black/40">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-200">
                  Player stories
                </p>
                <p className="mt-4 text-lg font-medium text-white">
                  “My students can&apos;t wait for puzzle time. The creator makes custom vocab sets a breeze,
                  and the analytics show exactly who needs extra help.”
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-500/40 text-lg font-bold">
                    SJ
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Sara Jenkins</p>
                    <p className="text-xs text-slate-300">5th Grade Teacher · Chicago, IL</p>
                  </div>
                </div>
                <div className="mt-8">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    Trusted by teams at
                  </p>
                  <div className="mt-4 grid grid-cols-3 gap-4 text-sm font-semibold text-slate-400">
                    <span className="rounded-lg border border-white/5 bg-white/5 px-3 py-2 text-center">
                      PuzzleCon
                    </span>
                    <span className="rounded-lg border border-white/5 bg-white/5 px-3 py-2 text-center">
                      LearnLab
                    </span>
                    <span className="rounded-lg border border-white/5 bg-white/5 px-3 py-2 text-center">
                      Brainspace
                    </span>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section
          id="newsletter"
          className="relative overflow-hidden bg-gradient-to-br from-sky-500 via-indigo-500 to-purple-500 py-24"
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.3),transparent_45%)]" />
          <div className="mx-auto max-w-4xl px-6 text-center text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.3em]">
              Weekly puzzle drops
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Join 25,000+ solvers getting exclusive bonus grids and strategy tips.
            </h2>
            <p className="mt-4 text-base text-white/80">
              Subscribe for handcrafted puzzle packs, behind-the-scenes creator notes, and community
              tournaments in your inbox every Friday.
            </p>
            <form className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
              <input
                type="email"
                required
                placeholder="Your email address"
                className="h-12 w-full max-w-md rounded-full border border-white/40 bg-white/10 px-5 text-base text-white placeholder:text-white/60 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/70"
              />
              <button
                type="submit"
                className="h-12 rounded-full bg-white px-6 text-sm font-semibold text-indigo-600 transition hover:bg-slate-100"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-xs text-white/70">
              No spam. Unsubscribe anytime, keep your bonus puzzles forever.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/90">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
              Word Search Puzzle Studio
            </p>
            <p className="mt-2 text-xs text-slate-500">
              Crafted for curious minds. © {new Date().getFullYear()} Puzzle Studio Labs.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-xs text-slate-400">
            <a className="transition hover:text-white" href="#">
              Privacy
            </a>
            <a className="transition hover:text-white" href="#">
              Terms
            </a>
            <a className="transition hover:text-white" href="#">
              Support
            </a>
            <a className="transition hover:text-white" href="#">
              Download app
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
