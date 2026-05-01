const GAME_LIBRARY = [
  {
    id: "wordle",
    name: "Wordle",
    category: "NYT Games",
    site: "NYT",
    domain: "nytimes.com",
    url: "https://www.nytimes.com/games/wordle/index.html",
    resultType: "score",
    placeholder: "Example: 4/6",
    accent: "#6aaa64",
  },
  {
    id: "connections",
    name: "Connections",
    category: "NYT Games",
    site: "NYT",
    domain: "nytimes.com",
    url: "https://www.nytimes.com/games/connections",
    resultType: "mistakes",
    placeholder: "Example: 1 mistake",
    accent: "#b39ddb",
  },
  {
    id: "strands",
    name: "Strands",
    category: "NYT Games",
    site: "NYT",
    domain: "nytimes.com",
    url: "https://www.nytimes.com/games/strands",
    resultType: "simple",
    placeholder: "Optional result",
    accent: "#6aa9ff",
  },
  {
    id: "pips",
    name: "Pips",
    category: "NYT Games",
    site: "NYT",
    domain: "nytimes.com",
    url: "https://www.nytimes.com/games/pips",
    resultType: "time",
    placeholder: "Example: 02:14",
    accent: "#c2b7ff",
  },

  {
    id: "zip",
    name: "Zip",
    category: "LinkedIn Games",
    site: "LinkedIn",
    domain: "linkedin.com",
    url: "https://www.linkedin.com/games/zip/",
    resultType: "time",
    placeholder: "Example: 01:32",
    accent: "#70b5f9",
  },
  {
    id: "tango",
    name: "Tango",
    category: "LinkedIn Games",
    site: "LinkedIn",
    domain: "linkedin.com",
    url: "https://www.linkedin.com/games/tango/",
    resultType: "time",
    placeholder: "Example: 03:20",
    accent: "#70b5f9",
  },
  {
    id: "queens",
    name: "Queens",
    category: "LinkedIn Games",
    site: "LinkedIn",
    domain: "linkedin.com",
    url: "https://www.linkedin.com/games/queens/",
    resultType: "time",
    placeholder: "Example: 02:45",
    accent: "#70b5f9",
  },
  {
    id: "patches",
    name: "Patches",
    category: "LinkedIn Games",
    site: "LinkedIn",
    domain: "linkedin.com",
    url: "https://www.linkedin.com/games/patches/",
    resultType: "time",
    placeholder: "Example: 04:12",
    accent: "#70b5f9",
  },

  {
    id: "contexto",
    name: "Contexto",
    category: "Word / Guessing",
    site: "Contexto",
    domain: "contexto.me",
    url: "https://contexto.me",
    resultType: "guesses",
    placeholder: "Example: 78 guesses",
    accent: "#8fd3ff",
  },
  {
    id: "waffle",
    name: "Waffle",
    category: "Word / Guessing",
    site: "Waffle",
    domain: "wafflegame.net",
    url: "https://wafflegame.net",
    resultType: "moves",
    placeholder: "Example: 3 stars",
    accent: "#ffd36e",
  },
  {
    id: "loldle",
    name: "LoLdle",
    category: "Video Games",
    site: "LoLdle",
    domain: "loldle.net",
    url: "https://loldle.net",
    resultType: "score",
    placeholder: "Example: 2/6",
    accent: "#d6b05d",
  },
  {
    id: "timeguessr",
    name: "TimeGuessr",
    category: "Geography",
    site: "TimeGuessr",
    domain: "timeguessr.com",
    url: "https://timeguessr.com",
    resultType: "score",
    placeholder: "Example: 4260",
    accent: "#9ed1ff",
  },
  {
    id: "colorfle",
    name: "Colorfle",
    category: "Visual / Logic",
    site: "Colorfle",
    domain: "colorfle.com",
    url: "https://colorfle.com",
    resultType: "score",
    placeholder: "Example: 4/6",
    accent: "#ff8fd8",
  },
  {
    id: "framed",
    name: "Framed",
    category: "Movies & TV",
    site: "Framed",
    domain: "framed.wtf",
    url: "https://framed.wtf",
    resultType: "score",
    placeholder: "Example: 2/6",
    accent: "#d9d9d9",
  },
  {
    id: "soundle",
    name: "Soundle",
    category: "Music",
    site: "Soundle",
    domain: "soundle.app",
    url: "https://soundle.app",
    resultType: "score",
    placeholder: "Example: 4/6",
    accent: "#9f8cff",
  },
  {
    id: "gamedle",
    name: "Gamedle",
    category: "Video Games",
    site: "Gamedle",
    domain: "gamedle.wtf",
    url: "https://gamedle.wtf",
    resultType: "score",
    placeholder: "Example: 3/6",
    accent: "#ff8c8c",
  },
  {
    id: "bezzerwizzer",
    name: "Bezzerwizzer",
    category: "Quiz / Knowledge",
    site: "Politiken",
    domain: "politiken.dk",
    url: "https://politiken.dk/underholdning/bezzerwizzer/",
    resultType: "simple",
    placeholder: "Optional result",
    accent: "#ff7f50",
  },
  {
    id: "listdle",
    name: "Listdle",
    category: "Discover",
    site: "Listdle",
    domain: "listdle.com",
    url: "https://listdle.com/",
    resultType: "simple",
    placeholder: "Found a new game?",
    accent: "#ffd36e",
  },

  {
    id: "dordle",
    name: "Dordle",
    category: "Word / Guessing",
    site: "Listdle",
    domain: "listdle.com",
    url: "https://listdle.com/games/dordle",
    resultType: "score",
    placeholder: "Example: 6/7",
    accent: "#7fd6a3",
  },
  {
    id: "quordle",
    name: "Quordle",
    category: "Word / Guessing",
    site: "Merriam-Webster",
    domain: "merriam-webster.com",
    url: "https://www.merriam-webster.com/games/quordle/",
    resultType: "score",
    placeholder: "Example: 7/9",
    accent: "#62b6ff",
  },
  {
    id: "octordle",
    name: "Octordle",
    category: "Word / Guessing",
    site: "Octordle",
    domain: "octordle.com",
    url: "https://octordle.com/",
    resultType: "score",
    placeholder: "Example: 11/13",
    accent: "#c79bff",
  },
  {
    id: "sedecordle",
    name: "Sedecordle",
    category: "Word / Guessing",
    site: "Sedecordle",
    domain: "sedecordle.com",
    url: "https://www.sedecordle.com/",
    resultType: "score",
    placeholder: "Example: 18/21",
    accent: "#f29cc1",
  },
  {
    id: "woodle",
    name: "Woodle",
    category: "Word / Guessing",
    site: "Listdle",
    domain: "listdle.com",
    url: "https://listdle.com/games/woodle",
    resultType: "score",
    placeholder: "Example: 5/6",
    accent: "#7ce0bd",
  },
  {
    id: "revertle",
    name: "Revertle",
    category: "Word / Guessing",
    site: "Revertle",
    domain: "revertle.com",
    url: "https://revertle.com/",
    resultType: "score",
    placeholder: "Example: 4/6",
    accent: "#ffb980",
  },
  {
    id: "semantle",
    name: "Semantle",
    category: "Word / Guessing",
    site: "Semantle",
    domain: "semantle.com",
    url: "https://semantle.com/",
    resultType: "guesses",
    placeholder: "Example: 92 guesses",
    accent: "#9de7c9",
  },
  {
    id: "crosswordle",
    name: "Crosswordle",
    category: "Word / Guessing",
    site: "Crosswordle",
    domain: "crosswordle.vercel.app",
    url: "https://crosswordle.vercel.app/",
    resultType: "score",
    placeholder: "Optional result",
    accent: "#a8c7ff",
  },
  {
    id: "squareword",
    name: "Squareword",
    category: "Word / Guessing",
    site: "Squareword",
    domain: "squareword.org",
    url: "https://squareword.org/",
    resultType: "score",
    placeholder: "Example: 8 guesses",
    accent: "#86d6ff",
  },
  {
    id: "reversle",
    name: "Reversle",
    category: "Word / Guessing",
    site: "Reversle",
    domain: "reversle.net",
    url: "https://reversle.net/",
    resultType: "score",
    placeholder: "Optional result",
    accent: "#ffc785",
  },
  {
    id: "absurdle",
    name: "Absurdle",
    category: "Word / Guessing",
    site: "Absurdle",
    domain: "qntm.org",
    url: "https://qntm.org/files/absurdle/absurdle.html",
    resultType: "guesses",
    placeholder: "Example: 9 guesses",
    accent: "#ff7a98",
  },
  {
    id: "daily-analogy",
    name: "Daily Analogy",
    category: "Word / Guessing",
    site: "Listdle",
    domain: "listdle.com",
    url: "https://listdle.com/games/daily-analogy",
    resultType: "score",
    placeholder: "Optional result",
    accent: "#a9e5ff",
  },
  {
    id: "cluno",
    name: "Cluno",
    category: "Word / Guessing",
    site: "Listdle",
    domain: "listdle.com",
    url: "https://listdle.com/games/cluno",
    resultType: "score",
    placeholder: "Hints used",
    accent: "#88e1a6",
  },
  {
    id: "matter",
    name: "Matter",
    category: "Word / Guessing",
    site: "Listdle",
    domain: "listdle.com",
    url: "https://listdle.com/games/matter",
    resultType: "score",
    placeholder: "Optional result",
    accent: "#d1d0ff",
  },
  {
    id: "cluecrush",
    name: "ClueCrush",
    category: "Word / Guessing",
    site: "ClueCrush",
    domain: "cluecrush.com",
    url: "https://cluecrush.com/",
    resultType: "mistakes",
    placeholder: "Example: 1 mistake",
    accent: "#b39ddb",
  },
  {
    id: "crissword",
    name: "CrissWord",
    category: "Word / Guessing",
    site: "Listdle",
    domain: "listdle.com",
    url: "https://listdle.com/games/crissword",
    resultType: "score",
    placeholder: "Optional result",
    accent: "#9ed1ff",
  },
  {
    id: "letroso",
    name: "Letroso",
    category: "Word / Guessing",
    site: "Letroso",
    domain: "letroso.com",
    url: "https://letroso.com/",
    resultType: "score",
    placeholder: "Example: 6/6",
    accent: "#ff9ac7",
  },

  {
    id: "worldle",
    name: "Worldle",
    category: "Geography",
    site: "Worldle",
    domain: "worldle.teuteuf.fr",
    url: "https://worldle.teuteuf.fr/",
    resultType: "score",
    placeholder: "Example: 3/6",
    accent: "#6fd0a8",
  },
  {
    id: "globle",
    name: "Globle",
    category: "Geography",
    site: "Globle",
    domain: "globle-game.com",
    url: "https://globle-game.com/",
    resultType: "guesses",
    placeholder: "Example: 6 guesses",
    accent: "#f59d6c",
  },
  {
    id: "travle",
    name: "Travle",
    category: "Geography",
    site: "Travle",
    domain: "travle.earth",
    url: "https://travle.earth/",
    resultType: "score",
    placeholder: "Example: +2",
    accent: "#82d6ff",
  },
  {
    id: "maptap",
    name: "MapTap",
    category: "Geography",
    site: "MapTap",
    domain: "maptap.gg",
    url: "https://maptap.gg",
    resultType: "score",
    placeholder: "Optional result",
    accent: "#9cd8ff",
  },
  {
    id: "citydle",
    name: "Citydle",
    category: "Geography",
    site: "Citydle",
    domain: "citydle.com",
    url: "https://citydle.com/",
    resultType: "guesses",
    placeholder: "Example: 4 guesses",
    accent: "#85e1cf",
  },

  {
    id: "nerdle",
    name: "Nerdle",
    category: "Math",
    site: "Nerdle",
    domain: "nerdlegame.com",
    url: "https://nerdlegame.com/",
    resultType: "score",
    placeholder: "Example: 4/6",
    accent: "#b68cff",
  },
  {
    id: "mathle",
    name: "Mathle",
    category: "Math",
    site: "Mathle",
    domain: "mathlegame.com",
    url: "https://www.mathlegame.com/",
    resultType: "score",
    placeholder: "Example: 3/5",
    accent: "#ffd36e",
  },
  {
    id: "mathler",
    name: "Mathler",
    category: "Math",
    site: "Mathler",
    domain: "mathler.com",
    url: "https://mathler.com/",
    resultType: "score",
    placeholder: "Example: 4/6",
    accent: "#ffcd75",
  },
  {
    id: "primel",
    name: "Primel",
    category: "Math",
    site: "Primel",
    domain: "converged.yt",
    url: "https://converged.yt/primel/",
    resultType: "score",
    placeholder: "Example: 4/6",
    accent: "#c0a6ff",
  },
  {
    id: "seque-ncd",
    name: "SEQUE-NCD",
    category: "Math",
    site: "Listdle",
    domain: "listdle.com",
    url: "https://listdle.com/games/seque-ncd",
    resultType: "score",
    placeholder: "Example: 2/3",
    accent: "#aeeaa2",
  },

  {
    id: "heardle",
    name: "Heardle",
    category: "Music",
    site: "Heardle",
    domain: "heardlewordle.io",
    url: "https://heardlewordle.io/",
    resultType: "score",
    placeholder: "Example: 3/6",
    accent: "#9ceea6",
  },
  {
    id: "bandle",
    name: "Bandle",
    category: "Music",
    site: "Bandle",
    domain: "bandle.app",
    url: "https://bandle.app/",
    resultType: "score",
    placeholder: "Example: 2/6",
    accent: "#ff9ac7",
  },
  {
    id: "spotle",
    name: "Spotle",
    category: "Music",
    site: "Spotle",
    domain: "spotle.io",
    url: "https://spotle.io/",
    resultType: "score",
    placeholder: "Example: 5/10",
    accent: "#75c6ff",
  },
  {
    id: "taylordle",
    name: "Taylordle",
    category: "Music",
    site: "Listdle",
    domain: "listdle.com",
    url: "https://listdle.com/games/taylordle",
    resultType: "score",
    placeholder: "Example: 4/6",
    accent: "#ffc0e0",
  },
  {
    id: "chordle",
    name: "Chordle",
    category: "Music",
    site: "Listdle",
    domain: "listdle.com",
    url: "https://listdle.com/games/chordle",
    resultType: "score",
    placeholder: "Example: 3/4",
    accent: "#bc9cff",
  },
  {
    id: "swiftle",
    name: "Swiftle",
    category: "Music",
    site: "Swiftle",
    domain: "techyonic.co",
    url: "https://techyonic.co/swiftle",
    resultType: "score",
    placeholder: "Example: 2/6",
    accent: "#ffb6d2",
  },
  {
    id: "byrdle",
    name: "Byrdle",
    category: "Music",
    site: "Byrdle",
    domain: "rbrignall.github.io",
    url: "https://rbrignall.github.io/byrdle/",
    resultType: "score",
    placeholder: "Example: 4/6",
    accent: "#a0e6ff",
  },
  {
    id: "songtosong",
    name: "SongToSong",
    category: "Music",
    site: "Listdle",
    domain: "listdle.com",
    url: "https://listdle.com/games/songtosong",
    resultType: "score",
    placeholder: "Optional result",
    accent: "#ffd36e",
  },

  {
    id: "framed-alt",
    name: "Framed",
    category: "Movies & TV",
    site: "Framed",
    domain: "framed.wtf",
    url: "https://framed.wtf",
    resultType: "score",
    placeholder: "Example: 2/6",
    accent: "#d9d9d9",
  },
  {
    id: "spotle-movie",
    name: "Spotle Movie",
    category: "Movies & TV",
    site: "Listdle",
    domain: "listdle.com",
    url: "https://listdle.com/games/spotle-movie",
    resultType: "score",
    placeholder: "Optional result",
    accent: "#ffb26e",
  },
  {
    id: "lordle",
    name: "Lordle of the Rings",
    category: "Movies & TV",
    site: "Lordle",
    domain: "digitaltolkien.github.io",
    url: "https://digitaltolkien.github.io/vue-wordle/",
    resultType: "score",
    placeholder: "Example: 4/6",
    accent: "#a9d86e",
  },
  {
    id: "swordle",
    name: "Swordle",
    category: "Movies & TV",
    site: "Listdle",
    domain: "listdle.com",
    url: "https://listdle.com/games/swordle",
    resultType: "score",
    placeholder: "Example: 4/6",
    accent: "#a3ccff",
  },
  {
    id: "star-wordle",
    name: "Star Wordle",
    category: "Movies & TV",
    site: "Listdle",
    domain: "listdle.com",
    url: "https://listdle.com/games/star-wordle",
    resultType: "score",
    placeholder: "Example: 4/6",
    accent: "#e9d27a",
  },
  {
    id: "bingewatcher",
    name: "BingeWatcher",
    category: "Movies & TV",
    site: "Listdle",
    domain: "listdle.com",
    url: "https://listdle.com/games/bingewatcher",
    resultType: "score",
    placeholder: "Optional result",
    accent: "#ff8f7a",
  },
  {
    id: "cinenoodle",
    name: "CineNerdle",
    category: "Movies & TV",
    site: "CineNerdle",
    domain: "cinenerdle2.app",
    url: "https://www.cinenerdle2.app/",
    resultType: "score",
    placeholder: "Optional result",
    accent: "#ff8f7a",
  },
  {
    id: "moviegrid",
    name: "MovieGrid",
    category: "Movies & TV",
    site: "MovieGrid",
    domain: "moviegrid.io",
    url: "https://moviegrid.io/",
    resultType: "score",
    placeholder: "Example: 8/9",
    accent: "#b5a7ff",
  },

  {
    id: "guessthegame",
    name: "Guess the Game",
    category: "Video Games",
    site: "Guess the Game",
    domain: "guessthe.game",
    url: "https://guessthe.game/",
    resultType: "score",
    placeholder: "Example: 4/6",
    accent: "#75e0b7",
  },
  {
    id: "squridle",
    name: "Squridle",
    category: "Video Games",
    site: "Squridle",
    domain: "squridle.com",
    url: "https://squridle.com/",
    resultType: "score",
    placeholder: "Example: 4/8",
    accent: "#81e4a4",
  },

  {
    id: "poeltl",
    name: "Poeltl",
    category: "Sports",
    site: "Poeltl",
    domain: "poeltl.dunk.town",
    url: "https://poeltl.dunk.town/",
    resultType: "guesses",
    placeholder: "Example: 5 guesses",
    accent: "#f6a76c",
  },
  {
    id: "pickle",
    name: "Pickle",
    category: "Sports",
    site: "Pickle",
    domain: "pickle.sport",
    url: "https://pickle.sport/",
    resultType: "guesses",
    placeholder: "Example: 4 guesses",
    accent: "#8ae37f",
  },
  {
    id: "hertl",
    name: "Hertl",
    category: "Sports",
    site: "Hertl",
    domain: "hertl.app",
    url: "https://www.hertl.app/",
    resultType: "guesses",
    placeholder: "Example: 4 guesses",
    accent: "#7ecbff",
  },
  {
    id: "cfbordle",
    name: "CFBordle",
    category: "Sports",
    site: "Listdle",
    domain: "listdle.com",
    url: "https://listdle.com/games/cfbordle",
    resultType: "score",
    placeholder: "Example: 4/6",
    accent: "#e7955d",
  },
  {
    id: "football-wordle",
    name: "Football Wordle",
    category: "Sports",
    site: "Listdle",
    domain: "listdle.com",
    url: "https://listdle.com/games/football-wordle",
    resultType: "score",
    placeholder: "Example: 4/6",
    accent: "#83df9a",
  },

  {
    id: "chronotrivia",
    name: "ChronoTrivia",
    category: "Quiz / Knowledge",
    site: "ChronoTrivia",
    domain: "chronotrivia.com",
    url: "https://listdle.com/games/chronotrivia",
    resultType: "score",
    placeholder: "Optional result",
    accent: "#ffd36e",
  },
  {
    id: "yearbook",
    name: "Yearbook",
    category: "Quiz / Knowledge",
    site: "Listdle",
    domain: "listdle.com",
    url: "https://listdle.com/games/yearbook",
    resultType: "score",
    placeholder: "Example: 1984",
    accent: "#a9d6ff",
  },
  {
    id: "yeardle",
    name: "Yeardle",
    category: "Quiz / Knowledge",
    site: "Yeardle",
    domain: "histordle.com",
    url: "https://histordle.com/yeardle/",
    resultType: "score",
    placeholder: "Example: 1974",
    accent: "#a9d6ff",
  },
  {
    id: "earlier",
    name: "Earlier",
    category: "Quiz / Knowledge",
    site: "Listdle",
    domain: "listdle.com",
    url: "https://listdle.com/games/play-earlier",
    resultType: "score",
    placeholder: "Example: 3/3",
    accent: "#e7c76b",
  },
  {
    id: "factle",
    name: "Factle",
    category: "Quiz / Knowledge",
    site: "Factle",
    domain: "factle.app",
    url: "https://factle.app/",
    resultType: "score",
    placeholder: "Example: 3/5",
    accent: "#ffd36e",
  },
  {
    id: "quizl",
    name: "Quizl",
    category: "Quiz / Knowledge",
    site: "Listdle",
    domain: "listdle.com",
    url: "https://listdle.com/games/quizl",
    resultType: "score",
    placeholder: "Optional result",
    accent: "#c7a6ff",
  },
  {
    id: "daily-orbs",
    name: "Daily Orbs",
    category: "Quiz / Knowledge",
    site: "Listdle",
    domain: "listdle.com",
    url: "https://listdle.com/games/daily-orbs",
    resultType: "score",
    placeholder: "Example: 6 orbs",
    accent: "#9ceeff",
  },
  {
    id: "magnitudle",
    name: "Magnitudle",
    category: "Quiz / Knowledge",
    site: "Listdle",
    domain: "listdle.com",
    url: "https://listdle.com/games/magnitudle",
    resultType: "score",
    placeholder: "Optional result",
    accent: "#ffb26e",
  },
  {
    id: "bernie-daily",
    name: "Bernie Daily",
    category: "Quiz / Knowledge",
    site: "Listdle",
    domain: "listdle.com",
    url: "https://listdle.com/games/bernie-daily",
    resultType: "score",
    placeholder: "Optional result",
    accent: "#eec37a",
  },
  {
    id: "murdle",
    name: "Murdle",
    category: "Logic",
    site: "Murdle",
    domain: "murdle.com",
    url: "https://murdle.com/",
    resultType: "simple",
    placeholder: "Optional result",
    accent: "#cc8cff",
  },
  {
    id: "flipart",
    name: "Flipart",
    category: "Visual / Logic",
    site: "Listdle",
    domain: "listdle.com",
    url: "https://listdle.com/games/flipart",
    resultType: "simple",
    placeholder: "Optional result",
    accent: "#ff91c8",
  },
  {
    id: "morsle",
    name: "Morsle",
    category: "Other",
    site: "Morsle",
    domain: "morsle.fun",
    url: "https://morsle.fun/",
    resultType: "score",
    placeholder: "Optional result",
    accent: "#ced7ff",
  },
  {
    id: "hexle",
    name: "Hexle",
    category: "Visual / Logic",
    site: "Hexle",
    domain: "hexle.com",
    url: "https://hexle.com/",
    resultType: "score",
    placeholder: "Example: 5/6",
    accent: "#ff91c8",
  },
  {
    id: "earthle",
    name: "Earthle",
    category: "Geography",
    site: "Earthle",
    domain: "earthle.world",
    url: "https://listdle.com/games/earthle",
    resultType: "score",
    placeholder: "Example: 3/6",
    accent: "#79dfa8",
  },
  {
    id: "capitalle",
    name: "Capitalle",
    category: "Geography",
    site: "Capitalle",
    domain: "listdle.com",
    url: "https://listdle.com/games/capitalle",
    resultType: "score",
    placeholder: "Example: 4/6",
    accent: "#8fd3ff",
  },
  {
    id: "geographly",
    name: "Geographly",
    category: "Geography",
    site: "Geographly",
    domain: "listdle.com",
    url: "https://listdle.com/games/geographly",
    resultType: "score",
    placeholder: "Optional result",
    accent: "#8ee0c6",
  },
  {
    id: "flagle",
    name: "Flagle",
    category: "Geography",
    site: "Flagle",
    domain: "flagle.io",
    url: "https://listdle.com/games/flagle",
    resultType: "score",
    placeholder: "Example: 5/6",
    accent: "#94c7ff",
  },
  {
    id: "erapin",
    name: "EraPin",
    category: "Geography",
    site: "EraPin",
    domain: "listdle.com",
    url: "https://listdle.com/games/erapin",
    resultType: "score",
    placeholder: "Example: 18750",
    accent: "#ffcc7a",
  },
  {
    id: "whenere",
    name: "Whenere",
    category: "Geography",
    site: "Whenere",
    domain: "listdle.com",
    url: "https://listdle.com/games/whenere",
    resultType: "score",
    placeholder: "Optional result",
    accent: "#b7d7ff",
  },
  {
    id: "quartiles",
    name: "Quartiles",
    category: "Word / Guessing",
    site: "Quartiles",
    domain: "listdle.com",
    url: "https://listdle.com/games/quartiles-word",
    resultType: "score",
    placeholder: "Example: 142 points",
    accent: "#ffd36e",
  },
  {
    id: "minute-cryptic",
    name: "Minute Cryptic",
    category: "Word / Guessing",
    site: "Minute Cryptic",
    domain: "minutecryptic.com",
    url: "https://listdle.com/games/minute-cryptic",
    resultType: "time",
    placeholder: "Example: 01:18",
    accent: "#d3b5ff",
  },
  {
    id: "betweenle",
    name: "Betweenle",
    category: "Word / Guessing",
    site: "Betweenle",
    domain: "betweenle.com",
    url: "https://listdle.com/games/betweenle",
    resultType: "guesses",
    placeholder: "Example: 18 guesses",
    accent: "#86d6ff",
  },
  {
    id: "pixletters",
    name: "Pixletters",
    category: "Word / Guessing",
    site: "Pixletters",
    domain: "listdle.com",
    url: "https://listdle.com/games/pixletters",
    resultType: "score",
    placeholder: "Optional result",
    accent: "#ff9ac7",
  },
  {
    id: "parseword",
    name: "Parseword",
    category: "Word / Guessing",
    site: "Parseword",
    domain: "listdle.com",
    url: "https://listdle.com/games/parseword",
    resultType: "score",
    placeholder: "Optional result",
    accent: "#b9e59a",
  },
  {
    id: "wordiply",
    name: "Wordiply",
    category: "Word / Guessing",
    site: "Wordiply",
    domain: "wordiply.com",
    url: "https://listdle.com/games/wordiply",
    resultType: "score",
    placeholder: "Example: 76%",
    accent: "#a7ccff",
  },
  {
    id: "quotesed",
    name: "Quotesed",
    category: "Movies & TV",
    site: "Quotesed",
    domain: "listdle.com",
    url: "https://listdle.com/games/quotesed",
    resultType: "score",
    placeholder: "Example: 3/6",
    accent: "#ffb26e",
  },
  {
    id: "episodle",
    name: "Episodle",
    category: "Movies & TV",
    site: "Episodle",
    domain: "listdle.com",
    url: "https://listdle.com/games/episodle",
    resultType: "score",
    placeholder: "Example: 4/6",
    accent: "#a2c7ff",
  },
  {
    id: "plot-hole",
    name: "Plot-Hole",
    category: "Movies & TV",
    site: "Plot-Hole",
    domain: "listdle.com",
    url: "https://listdle.com/games/plot-hole",
    resultType: "score",
    placeholder: "Optional result",
    accent: "#ff997a",
  },
  {
    id: "filmlink",
    name: "FilmLink",
    category: "Movies & TV",
    site: "FilmLink",
    domain: "listdle.com",
    url: "https://listdle.com/games/filmlink",
    resultType: "score",
    placeholder: "Example: 4 links",
    accent: "#cfb3ff",
  },
  {
    id: "marveldle",
    name: "Marveldle",
    category: "Movies & TV",
    site: "Marveldle",
    domain: "listdle.com",
    url: "https://listdle.com/games/marveldle",
    resultType: "score",
    placeholder: "Example: 5/8",
    accent: "#ff7070",
  },
  {
    id: "lostgamer",
    name: "Lostgamer",
    category: "Video Games",
    site: "Lostgamer",
    domain: "lostgamer.io",
    url: "https://listdle.com/games/lostgamer",
    resultType: "score",
    placeholder: "Optional result",
    accent: "#73d2ff",
  },
  {
    id: "pokedoku",
    name: "Pokedoku",
    category: "Video Games",
    site: "Pokedoku",
    domain: "pokedoku.com",
    url: "https://listdle.com/games/pokedoku",
    resultType: "score",
    placeholder: "Example: 8/9",
    accent: "#ffd36e",
  },
  {
    id: "wardle",
    name: "Wardle",
    category: "Video Games",
    site: "Wardle",
    domain: "listdle.com",
    url: "https://listdle.com/games/wardle",
    resultType: "score",
    placeholder: "Optional result",
    accent: "#91c9ff",
  },
  {
    id: "immaculate-grid",
    name: "Immaculate Grid",
    category: "Sports",
    site: "Sports Reference",
    domain: "immaculategrid.com",
    url: "https://listdle.com/games/immaculate-grid",
    resultType: "score",
    placeholder: "Example: 7/9",
    accent: "#8fe3a5",
  },
  {
    id: "who-are-ya",
    name: "Who Are Ya?",
    category: "Sports",
    site: "Who Are Ya",
    domain: "whoareya.io",
    url: "https://listdle.com/games/who-are-ya",
    resultType: "score",
    placeholder: "Example: 4/8",
    accent: "#75d99b",
  },
  {
    id: "nfl-wordle",
    name: "NFL Wordle",
    category: "Sports",
    site: "NFL Wordle",
    domain: "listdle.com",
    url: "https://listdle.com/games/nfl-wordle",
    resultType: "score",
    placeholder: "Example: 3/6",
    accent: "#83b7ff",
  },
  {
    id: "amountle",
    name: "Amountle",
    category: "Math",
    site: "Amountle",
    domain: "listdle.com",
    url: "https://listdle.com/games/amountle",
    resultType: "score",
    placeholder: "Optional result",
    accent: "#ffd36e",
  },
  {
    id: "nextup",
    name: "NextUp",
    category: "Math",
    site: "NextUp",
    domain: "listdle.com",
    url: "https://listdle.com/games/nextup",
    resultType: "score",
    placeholder: "Optional result",
    accent: "#aeeaa2",
  },
  {
    id: "cagey",
    name: "Cagey",
    category: "Math",
    site: "Cagey",
    domain: "listdle.com",
    url: "https://listdle.com/games/cagey",
    resultType: "score",
    placeholder: "Optional result",
    accent: "#d6b5ff",
  },
  {
    id: "musicle",
    name: "Musicle",
    category: "Music",
    site: "Musicle",
    domain: "listdle.com",
    url: "https://listdle.com/games/musicle",
    resultType: "score",
    placeholder: "Example: 2/3",
    accent: "#ffb3d6",
  },
  {
    id: "popidle",
    name: "PopIdle",
    category: "Music",
    site: "PopIdle",
    domain: "listdle.com",
    url: "https://listdle.com/games/popidle",
    resultType: "score",
    placeholder: "Optional result",
    accent: "#ffb980",
  },
  {
    id: "songdle",
    name: "Songdle",
    category: "Music",
    site: "Songdle",
    domain: "listdle.com",
    url: "https://listdle.com/games/songdle",
    resultType: "score",
    placeholder: "Optional result",
    accent: "#a1d6ff",
  },
  {
    id: "chess-daily",
    name: "Chess Daily",
    category: "Logic",
    site: "Chess Daily",
    domain: "listdle.com",
    url: "https://listdle.com/games/chess-daily",
    resultType: "simple",
    placeholder: "Optional result",
    accent: "#d0d0d0",
  },
  {
    id: "griductive",
    name: "Griductive",
    category: "Logic",
    site: "Griductive",
    domain: "listdle.com",
    url: "https://listdle.com/games/griductive",
    resultType: "simple",
    placeholder: "Optional result",
    accent: "#8fd3ff",
  },
  {
    id: "daily-sleuth",
    name: "Daily Sleuth",
    category: "Logic",
    site: "Daily Sleuth",
    domain: "listdle.com",
    url: "https://listdle.com/games/daily-sleuth",
    resultType: "simple",
    placeholder: "Optional result",
    accent: "#cc8cff",
  },
  {
    id: "redacted",
    name: "Redacted",
    category: "Logic",
    site: "Redacted",
    domain: "listdle.com",
    url: "https://listdle.com/games/redacted",
    resultType: "simple",
    placeholder: "Optional result",
    accent: "#ff7f8b",
  },
  {
    id: "brandle",
    name: "Brandle",
    category: "Visual / Logic",
    site: "Brandle",
    domain: "listdle.com",
    url: "https://listdle.com/games/brandle",
    resultType: "score",
    placeholder: "Example: 4/8",
    accent: "#ffd36e",
  },
  {
    id: "where-spoken",
    name: "WhereSpoken",
    category: "Other",
    site: "WhereSpoken",
    domain: "listdle.com",
    url: "https://listdle.com/games/wherespoken",
    resultType: "score",
    placeholder: "Optional result",
    accent: "#91c9ff",
  },
  {
    id: "daily-jig",
    name: "Daily Jig",
    category: "Other",
    site: "Daily Jig",
    domain: "listdle.com",
    url: "https://listdle.com/games/daily-jig",
    resultType: "time",
    placeholder: "Example: 04:40",
    accent: "#ffd36e",
  },
];

const DEFAULT_SELECTED = [
  "wordle",
  "connections",
  "strands",
  "pips",
  "contexto",
];
const STORAGE_KEY = "dailyhub-v6-state";
const LEGACY_KEYS = [
  "dailyhub-v5-state",
  "dailyhub-v4-state",
  "dailyhub-v3-state",
  "dailyhub-v2-state",
  "dailyhub-state",
];
const TODAY_KEY = toDateKey(new Date());
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

let state = loadState();
let activeFilter = "all";
let selectedCalendarDate = TODAY_KEY;
let calendarCursor = new Date();
calendarCursor.setDate(1);
calendarCursor.setHours(12, 0, 0, 0);
let allGames = dedupeGames([...GAME_LIBRARY, ...state.customGames]);

function dedupeGames(games) {
  const seenIds = new Set();
  const seenNames = new Set();
  return games.filter((game) => {
    const normalizedName = (game.name || game.id)
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "");
    if (seenIds.has(game.id) || seenNames.has(normalizedName)) return false;
    seenIds.add(game.id);
    seenNames.add(normalizedName);
    return true;
  });
}
function loadState() {
  const base = {
    selectedGames: DEFAULT_SELECTED,
    goalMode: "strict",
    days: {},
    customGames: [],
  };
  let saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    for (const key of LEGACY_KEYS) {
      const legacy = localStorage.getItem(key);
      if (legacy) {
        saved = legacy;
        break;
      }
    }
  }
  if (!saved) return base;
  try {
    const parsed = JSON.parse(saved);
    return { ...base, ...parsed, customGames: parsed.customGames || [] };
  } catch {
    return base;
  }
}
function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}
function toDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
function fromKey(key) {
  return new Date(`${key}T12:00:00`);
}
function escapeHtml(value = "") {
  return String(value).replace(
    /[&<>'"]/g,
    (ch) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#039;",
        '"': "&quot;",
      })[ch],
  );
}
function domainFromUrl(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "example.com";
  }
}
function getDay(key = TODAY_KEY) {
  if (!state.days[key]) {
    state.days[key] = {
      completed: {},
      results: {},
      selectedSnapshot: [...state.selectedGames],
      goalMode: "strict",
    };
  }
  return state.days[key];
}
function selectedGames() {
  return state.selectedGames
    .map((id) => allGames.find((g) => g.id === id))
    .filter(Boolean);
}
function gameById(id) {
  return (
    allGames.find((g) => g.id === id) || {
      id,
      name: id,
      category: "Unknown",
      site: "",
      domain: "example.com",
    }
  );
}
function categoryIcon(game) {
  const category = (game.category || "").toLowerCase();
  if (category.includes("nyt")) return "T";
  if (category.includes("linkedin")) return "in";
  if (category.includes("word")) return "Aa";
  if (category.includes("geography")) return "🌍";
  if (category.includes("music")) return "♪";
  if (category.includes("movie")) return "🎬";
  if (category.includes("video")) return "🎮";
  if (category.includes("sport")) return "🏆";
  if (category.includes("math")) return "#";
  if (category.includes("quiz")) return "?";
  if (category.includes("logic") || category.includes("visual")) return "◇";
  return (game.name || "?").slice(0, 2).toUpperCase();
}

function getGoal(total) {
  return total || 0;
}
function completionLevel(percent, total) {
  if (!total) return "empty";
  if (percent === 100) return "perfect";
  if (percent >= 75) return "high";
  if (percent >= 40) return "mid";
  if (percent > 0) return "low";
  return "none";
}
function dayStats(key = TODAY_KEY) {
  const day = state.days[key];
  const snapshot = day?.selectedSnapshot?.length
    ? day.selectedSnapshot
    : key === TODAY_KEY
      ? state.selectedGames
      : [];
  const total = snapshot.length;
  const completed = snapshot.filter((id) => day?.completed?.[id]).length;
  const goal = getGoal(total);
  const percent = total ? Math.round((completed / total) * 100) : 0;
  return {
    total,
    completed,
    goal,
    percent,
    goalMet: total > 0 && completed === total,
    snapshot,
    level: completionLevel(percent, total),
  };
}
function logoFor(game, size = "") {
  const domain = game.domain || domainFromUrl(game.url);
  const fallback = categoryIcon(game);
  const special = {
    "nytimes.com": "https://www.nytimes.com/favicon.ico",
    "linkedin.com": "https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca",
    "listdle.com": "https://listdle.com/favicon.ico",
  };
  const favicon =
    special[domain] ||
    `https://www.google.com/s2/favicons?sz=64&domain=${encodeURIComponent(domain)}`;
  return `<span class="site-logo ${size}" title="${escapeHtml(game.site || game.name)}" data-fallback="${escapeHtml(fallback)}"><span class="logo-fallback">${escapeHtml(fallback)}</span><img src="${favicon}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove();this.parentElement.classList.add('no-img')"></span>`;
}
function formatDate(key, long = false) {
  const date = fromKey(key);
  return date.toLocaleDateString(
    undefined,
    long
      ? { weekday: "long", day: "numeric", month: "long", year: "numeric" }
      : { weekday: "short", day: "numeric", month: "short" },
  );
}
function toast(message) {
  const el = $("#toast");
  el.textContent = message;
  el.classList.remove("hidden");
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => el.classList.add("hidden"), 2200);
}

function updateHeader() {
  const now = new Date();
  const hour = now.getHours();
  $("#greeting").textContent =
    hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
  $("#date-pill").textContent = now.toLocaleDateString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
  const count = selectedGames().length;
  $("#selected-count-label").textContent =
    `${count} game${count === 1 ? "" : "s"} selected`;
}
function renderProgress() {
  const stats = dayStats();
  $("#progress-title").textContent = `${stats.completed} / ${stats.total} done`;
  $("#progress-fill").style.width = `${stats.percent}%`;
  $("#progress-ring").style.background =
    `conic-gradient(var(--gold) ${stats.percent * 3.6}deg, rgba(255,255,255,0.11) 0deg)`;
  $("#progress-ring span").textContent = `${stats.percent}%`;
  $("#goal-needed").textContent = stats.total
    ? stats.goalMet
      ? "All tasks completed"
      : `${Math.max(stats.total - stats.completed, 0)} left today`
    : "Choose games to begin";
  $("#goal-label").textContent = "All selected games";
}
function calculateStreaks() {
  const keys = Object.keys(state.days).sort();
  let best = 0,
    run = 0;
  for (const key of keys) {
    const stats = dayStats(key);
    if (stats.goalMet) {
      run++;
      best = Math.max(best, run);
    } else {
      run = 0;
    }
  }
  let current = 0;
  const cursor = fromKey(TODAY_KEY);
  for (let i = 0; i < 365; i++) {
    const key = toDateKey(cursor);
    const stats = dayStats(key);
    if (!stats.goalMet) break;
    current++;
    cursor.setDate(cursor.getDate() - 1);
  }
  return { current, best };
}
function renderStats() {
  const { current, best } = calculateStreaks();
  $("#current-streak").textContent =
    `${current} day${current === 1 ? "" : "s"}`;
  $("#best-streak").textContent = `${best} day${best === 1 ? "" : "s"}`;
  const total = Object.values(state.days).reduce(
    (sum, day) =>
      sum + Object.values(day.completed || {}).filter(Boolean).length,
    0,
  );
  $("#total-completions").textContent = String(total);
  const label = $("#daily-goal-label");
  if (label)
    label.textContent = selectedGames().length
      ? `${selectedGames().length} task${selectedGames().length === 1 ? "" : "s"}`
      : "All tasks";
}
function renderTodayGames() {
  const container = $("#today-games");
  const empty = $("#empty-today");
  const day = getDay();
  day.selectedSnapshot = [...state.selectedGames];
  day.goalMode = state.goalMode;

  let games = selectedGames();
  if (activeFilter === "left")
    games = games.filter((game) => !day.completed[game.id]);
  if (activeFilter === "done")
    games = games.filter((game) => day.completed[game.id]);

  container.innerHTML = "";
  const totalSelected = selectedGames().length;
  if (!totalSelected) {
    empty.classList.remove("hidden");
    empty.innerHTML = `<h3>No games selected yet</h3><p>Choose the games that should count toward your daily progress.</p><button class="btn primary" id="empty-open-library">Choose games</button>`;
    $("#empty-open-library")?.addEventListener("click", () =>
      $("#library-modal").classList.remove("hidden"),
    );
  } else if (!games.length) {
    empty.classList.remove("hidden");
    empty.innerHTML =
      activeFilter === "left"
        ? `<h3>All done for today</h3><p>There are no unfinished games left. Nice work. Switch to All or Done to review your run.</p>`
        : `<h3>No games here yet</h3><p>Complete a game and it will show up here.</p>`;
  } else {
    empty.classList.add("hidden");
  }

  games.forEach((game, index) => {
    const done = Boolean(day.completed[game.id]);
    const value = day.results[game.id] || "";
    const label = value ? resultLabel(value, game) : "Completed";
    const card = document.createElement("article");
    card.className = `game-card roadmap-card ${done ? "done done-compact-card" : ""}`;
    card.style.setProperty("--accent", game.accent || "#ffd36e");
    if (done) {
      card.innerHTML = `
        <div class="step-badge" aria-hidden="true">${index + 1}</div>
        <div class="done-showcase">
          <div class="done-logo">${logoFor(game, "xl")}</div>
          <div class="done-copy">
            <span class="kicker done-kicker">Completed</span>
            <h3>${escapeHtml(game.name)}</h3>
            <span class="game-category">${escapeHtml(game.category)}</span>
            ${value ? `<strong class="done-result-chip">${escapeHtml(label)}</strong>` : ""}
          </div>
        </div>
        <div class="done-card-actions">
          <button class="done-btn is-done" data-done="${escapeHtml(game.id)}">Undo</button>
        </div>`;
    } else {
      card.innerHTML = `
        <div class="step-badge" aria-hidden="true">${index + 1}</div>
        <div class="game-top">
          <div class="game-title-row">
            ${logoFor(game)}
            <span>
              <h3>${escapeHtml(game.name)}</h3>
              <span class="game-category">${escapeHtml(game.category)}</span>
            </span>
          </div>
          <span class="status-pill">${escapeHtml(game.site || "Open")}</span>
        </div>
        <div class="result-wrap">
          <label for="result-${escapeHtml(game.id)}">Result</label>
          <div class="result-line">
            <textarea id="result-${escapeHtml(game.id)}" data-result="${escapeHtml(game.id)}" rows="4" placeholder="${escapeHtml(game.placeholder || "Paste or type result")}">${escapeHtml(value)}</textarea>
            <button class="paste-btn" type="button" data-paste="${escapeHtml(game.id)}" title="Paste copied result">Paste</button>
          </div>
        </div>
        <div class="game-actions">
          <a class="play-link" href="${escapeHtml(game.url)}" target="_blank" rel="noopener noreferrer"><span>▶</span> Play</a>
          <button class="done-btn" data-done="${escapeHtml(game.id)}">Mark complete</button>
        </div>`;
    }
    container.appendChild(card);
  });

  $$("[data-result]").forEach((input) =>
    input.addEventListener("input", (event) => {
      const id = event.target.dataset.result;
      const day = getDay();
      day.selectedSnapshot = [...state.selectedGames];
      day.goalMode = state.goalMode;
      day.results[id] = event.target.value;
      saveState();
      renderCalendar();
      renderSelectedDay();
    }),
  );
  $$("[data-paste]").forEach((button) =>
    button.addEventListener("click", async () => {
      const id = button.dataset.paste;
      try {
        const text = await navigator.clipboard.readText();
        if (!text.trim()) return toast("Clipboard is empty");
        const day = getDay();
        day.selectedSnapshot = [...state.selectedGames];
        day.goalMode = state.goalMode;
        day.results[id] = text.trim();
        saveState();
        updateCompletion(id, true);
        toast("Result pasted and marked complete");
      } catch {
        toast("Paste is blocked. Click the result field and press Ctrl+V.");
      }
    }),
  );
  $$("[data-done]").forEach((button) =>
    button.addEventListener("click", () => {
      const day = getDay();
      day.selectedSnapshot = [...state.selectedGames];
      day.goalMode = state.goalMode;
      const id = button.dataset.done;
      updateCompletion(id, !day.completed[id]);
    }),
  );
}
function renderCalendar() {
  const grid = $("#calendar-grid");
  grid.innerHTML = "";
  const year = calendarCursor.getFullYear();
  const month = calendarCursor.getMonth();
  $("#calendar-month").textContent = calendarCursor.toLocaleDateString(
    undefined,
    { month: "long", year: "numeric" },
  );

  const first = new Date(year, month, 1, 12);
  const start = new Date(first);
  const weekday = (first.getDay() + 6) % 7;
  start.setDate(first.getDate() - weekday);

  let monthGoalDays = 0;
  let monthCompleted = 0;
  let monthPossible = 0;
  let perfectDays = 0;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  for (let d = 1; d <= daysInMonth; d++) {
    const key = toDateKey(new Date(year, month, d, 12));
    const s = dayStats(key);
    if (s.total > 0 || state.days[key]) {
      monthCompleted += s.completed;
      monthPossible += s.total;
      if (s.goalMet) monthGoalDays++;
      if (s.total > 0 && s.completed === s.total) perfectDays++;
    }
  }
  $("#month-goal-days").textContent = String(monthGoalDays);
  $("#month-completed").textContent = String(monthCompleted);
  $("#month-rate").textContent = monthPossible
    ? `${Math.round((monthCompleted / monthPossible) * 100)}%`
    : "0%";
  $("#month-perfect").textContent = String(perfectDays);

  for (let i = 0; i < 42; i++) {
    const date = new Date(start);
    date.setDate(start.getDate() + i);
    const key = toDateKey(date);
    const stats = dayStats(key);
    const cell = document.createElement("button");
    cell.className = "day-cell";
    if (date.getMonth() !== month) cell.classList.add("is-out");
    if (key === TODAY_KEY) cell.classList.add("is-today");
    if (key === selectedCalendarDate) cell.classList.add("is-selected");
    if (stats.goalMet) {
      cell.classList.add("goal-met");
      cell.classList.add("completion-perfect");
    }
    cell.classList.add(`completion-${stats.level}`);
    cell.style.setProperty("--fill", `${stats.percent}%`);
    cell.innerHTML = `<span class="day-num">${date.getDate()}</span><span class="day-score">${stats.total ? `${stats.completed}/${stats.total}` : ""}</span>`;
    cell.addEventListener("click", () => {
      selectedCalendarDate = key;
      renderCalendar();
      renderSelectedDay();
    });
    grid.appendChild(cell);
  }
}
function renderSelectedDay() {
  const stats = dayStats(selectedCalendarDate);
  const day = state.days[selectedCalendarDate];
  $("#day-title").textContent = formatDate(selectedCalendarDate, true);
  $("#day-subtitle").textContent = stats.goalMet
    ? "All selected games were completed."
    : "Still missing selected games for this day.";
  $("#day-completed").textContent = stats.total
    ? `${stats.completed}/${stats.total}`
    : "-";
  $("#day-goal").textContent = stats.total ? String(stats.goal) : "-";
  $("#day-percent").textContent = stats.total ? `${stats.percent}%` : "-";
  const results = $("#day-results");
  results.innerHTML = "";
  if (!stats.snapshot.length) {
    results.innerHTML = `<div class="day-result"><span class="day-result-title"><strong>No games tracked</strong></span><small>-</small></div>`;
    return;
  }
  stats.snapshot.forEach((id) => {
    const game = gameById(id);
    const done = Boolean(day?.completed?.[id]);
    const result = day?.results?.[id];
    const row = document.createElement("div");
    row.className = `day-result ${done ? "done" : "left"}`;
    row.innerHTML = `<span class="day-result-title">${logoFor(game, "mini")}<strong>${escapeHtml(game.name)}</strong></span><small>${done ? "Done" : "Not done"}${result ? ` · ${escapeHtml(resultLabel(result, game))}` : ""}</small>`;
    results.appendChild(row);
  });
}
function renderLibrary() {
  const categorySelect = $("#library-category");
  const current = categorySelect.value || "all";
  const categories = [...new Set(allGames.map((g) => g.category))].sort();
  categorySelect.innerHTML =
    `<option value="all">All categories</option>` +
    categories
      .map((c) => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`)
      .join("");
  categorySelect.value = categories.includes(current) ? current : "all";

  const search = $("#library-search").value.trim().toLowerCase();
  const category = categorySelect.value;
  const list = $("#library-list");
  const games = allGames
    .filter((game) => category === "all" || game.category === category)
    .filter(
      (game) =>
        !search ||
        [game.name, game.site, game.category, game.domain]
          .join(" ")
          .toLowerCase()
          .includes(search),
    )
    .sort(
      (a, b) =>
        Number(state.selectedGames.includes(b.id)) -
          Number(state.selectedGames.includes(a.id)) ||
        a.category.localeCompare(b.category) ||
        a.name.localeCompare(b.name),
    );

  list.innerHTML =
    games
      .map((game) => {
        const selected = state.selectedGames.includes(game.id);
        return `<div class="library-row">
      <div class="library-info">
        ${logoFor(game)}
        <span>
          <strong>${escapeHtml(game.name)}</strong>
          <small>${escapeHtml(game.category)} · ${escapeHtml(game.site || game.domain || "Daily game")}</small>
        </span>
      </div>
      <button class="toggle ${selected ? "on" : ""}" data-toggle-game="${escapeHtml(game.id)}" aria-label="Toggle ${escapeHtml(game.name)}"></button>
    </div>`;
      })
      .join("") ||
    `<div class="empty-state"><h3>No matches</h3><p>Try another search or add it as a custom game.</p></div>`;

  $$("[data-toggle-game]").forEach((button) =>
    button.addEventListener("click", () => {
      const id = button.dataset.toggleGame;
      if (state.selectedGames.includes(id)) {
        state.selectedGames = state.selectedGames.filter(
          (gameId) => gameId !== id,
        );
      } else {
        state.selectedGames.push(id);
      }
      const day = getDay();
      day.selectedSnapshot = [...state.selectedGames];
      day.goalMode = state.goalMode;
      saveState();
      renderAll();
    }),
  );
}

function isEmojiBoardLine(line) {
  const clean = String(line || "").trim();
  if (!clean) return false;
  if (/[A-Za-zÆØÅæøå]/.test(clean)) return false;
  if (/https?:\/\/|www\.|\.com|\.net|\.dk|lnkd\.in/i.test(clean)) return false;
  const emojiMatches =
    clean.match(/[⬛⬜🟩🟨🟦🟪🟥🟧🟫🟠🟡🟢🔵🟣⚫⚪🟤⭐★☆👑🛑🧶🏁🔥]|[0-9]️⃣/g) ||
    [];
  const allowed = clean.replace(
    /[⬛⬜🟩🟨🟦🟪🟥🟧🟫🟠🟡🟢🔵🟣⚫⚪🟤⭐★☆👑🛑🧶🏁🔥]|[0-9]️⃣|[0-9]|\s|\||:|\.|,/g,
    "",
  );
  return emojiMatches.length >= 1 && allowed.length === 0;
}
function extractScore(text, game = {}, lines = []) {
  const scoreMatch = text.match(/(?:^|\s)([xX\d]+\s*\/\s*\d+)(?:\s|$)/);
  const puzzleMatch = text.match(/Puzzle\s*#?\s*([\d.,]+)/i);
  const hashMatch = text.match(/#\s*([\w-]*\d[\w-]*)/i);
  const timeMatch = text.match(/\b(\d{1,2}:\d{2})\b/);
  const guessMatch = text.match(/(\d+)\s*(?:guesses|guess)/i);
  const percentMatch = text.match(/\b(\d{1,3})%\b/);
  if (scoreMatch) return scoreMatch[1].replace(/\s+/g, "");
  if (puzzleMatch) return `Puzzle #${puzzleMatch[1]}`;
  if (hashMatch && timeMatch) return `#${hashMatch[1]} · ${timeMatch[1]}`;
  if (hashMatch) return `#${hashMatch[1]}`;
  if (guessMatch) return `${guessMatch[1]} guesses`;
  if (timeMatch) return timeMatch[1];
  if (percentMatch) return `${percentMatch[1]}%`;
  const firstUseful = lines.find(
    (line) =>
      line &&
      !isEmojiBoardLine(line) &&
      !/https?:\/\/|www\.|\.com|\.net|\.dk|lnkd\.in/i.test(line),
  );
  return firstUseful && firstUseful.length <= 42 ? firstUseful : "Saved result";
}
function parseSharedResult(raw, game = {}) {
  const text = String(raw || "")
    .replace(/\r\n/g, "\n")
    .trim();
  if (!text)
    return {
      raw: "",
      label: "",
      grid: [],
      hasShareBlock: false,
      compactLines: [],
    };
  const lines = text
    .split("\n")
    .map((line) => line.trimEnd())
    .filter((line) => line.trim().length);
  const grid = lines.filter(isEmojiBoardLine);
  const label = extractScore(text, game, lines);
  const compactLines = [];
  if (label && label !== "Saved result") compactLines.push(label);
  grid.forEach((line) => compactLines.push(line.trim()));
  if (!grid.length && label === "Saved result" && lines[0])
    compactLines.push(lines[0].slice(0, 80));
  return {
    raw: text,
    label,
    grid,
    hasShareBlock: lines.length > 1 || grid.length > 0,
    compactLines,
  };
}
function resultLabel(raw, game) {
  return parseSharedResult(raw, game).label || "No result saved";
}
function resultPreviewHtml(raw, game) {
  const parsed = parseSharedResult(raw, game);
  if (!parsed.raw) return "";
  const grid = parsed.grid;
  const label = parsed.label;
  if (grid.length) {
    return `<div class="share-preview compact-preview">${label ? `<div class="share-preview-title">${escapeHtml(label)}</div>` : ""}<pre>${escapeHtml(grid.join("\n"))}</pre></div>`;
  }
  if (label && label !== "Saved result") {
    return `<div class="share-preview text-only compact-preview">${escapeHtml(label)}</div>`;
  }
  return "";
}
function compactResultForShare(raw, game) {
  const parsed = parseSharedResult(raw, game);
  const lines = [];
  if (parsed.label && parsed.label !== "Saved result") lines.push(parsed.label);
  parsed.grid.forEach((line) => lines.push(line));
  if (!lines.length && parsed.raw)
    lines.push(
      parsed.raw.split("\n").find(Boolean)?.slice(0, 80) || "Saved result",
    );
  return lines;
}
function dailyHubLink() {
  if (location.protocol === "http:" || location.protocol === "https:")
    return location.origin + location.pathname;
  return "https://maurits2905.github.io/DailyHub/";
}
function celebrateGameComplete() {
  launchConfetti({ count: 58, power: 1, text: "Nice!" });
}
function celebratePerfectRun() {
  launchConfetti({ count: 190, power: 1.7, text: "Perfect run!" });
  const overlay = $("#perfect-modal");
  if (overlay) overlay.classList.remove("hidden");
}
function launchConfetti({ count = 80, power = 1, text = "" } = {}) {
  const layer = $("#confetti-layer");
  if (!layer) return;
  const colors = [
    "#ffd36e",
    "#89e5a5",
    "#8fd3ff",
    "#ff8fd8",
    "#ffffff",
    "#b39ddb",
  ];
  for (let i = 0; i < count; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.setProperty("--x", `${(Math.random() - 0.5) * 560 * power}px`);
    piece.style.setProperty("--r", `${(Math.random() * 720 - 360) * power}deg`);
    piece.style.setProperty("--d", `${1.1 + Math.random() * 1.35}s`);
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.width = `${6 + Math.random() * 9}px`;
    piece.style.height = `${8 + Math.random() * 16}px`;
    piece.style.borderRadius = Math.random() > 0.55 ? "999px" : "4px";
    layer.appendChild(piece);
    setTimeout(() => piece.remove(), 3000);
  }
  if (text) {
    const pop = document.createElement("div");
    pop.className = "celebration-pop";
    pop.textContent = text;
    layer.appendChild(pop);
    setTimeout(() => pop.remove(), 1700);
  }
}
function updateCompletion(id, completed) {
  const before = dayStats();
  const day = getDay();
  const wasDone = Boolean(day.completed[id]);
  day.selectedSnapshot = [...state.selectedGames];
  day.goalMode = state.goalMode;
  day.completed[id] = completed;
  saveState();
  const after = dayStats();
  renderAll();
  if (!wasDone && completed) {
    if (
      after.total > 0 &&
      after.completed === after.total &&
      before.completed < before.total
    )
      celebratePerfectRun();
    else celebrateGameComplete();
  }
}

function buildSummary() {
  const stats = dayStats();
  const day = getDay();
  const lines = [];
  lines.push(`DailyHub · ${formatDate(TODAY_KEY, false)}`);
  lines.push(`${stats.completed}/${stats.total} completed · ${stats.percent}%`);
  lines.push(`Open DailyHub: ${dailyHubLink()}`);
  lines.push("");
  lines.push("Results");
  selectedGames().forEach((game) => {
    const done = Boolean(day.completed[game.id]);
    const rawResult = (day.results[game.id] || "").trim();
    if (!done && !rawResult) {
      lines.push(`⬜ ${game.name}`);
      return;
    }
    const compact = rawResult ? compactResultForShare(rawResult, game) : [];
    const first = compact[0];
    lines.push(
      `${done ? "✅" : "⬜"} ${game.name}${first ? ` · ${first}` : ""}`,
    );
    compact.slice(1).forEach((line) => lines.push(`   ${line}`));
  });
  return lines.join("\n");
}
function openSummary() {
  $("#summary-text").textContent = buildSummary();
  $("#summary-modal").classList.remove("hidden");
}
function renderAll() {
  updateHeader();
  renderProgress();
  renderStats();
  renderTodayGames();
  renderCalendar();
  renderSelectedDay();
  renderLibrary();
}
function playNext() {
  const day = getDay();
  const next =
    selectedGames().find((game) => !day.completed[game.id]) ||
    selectedGames()[0];
  if (next) window.open(next.url, "_blank", "noopener,noreferrer");
  else $("#library-modal").classList.remove("hidden");
}
function openAllLeft() {
  const day = getDay();
  const next = selectedGames().find((game) => !day.completed[game.id]);
  if (next) window.open(next.url, "_blank", "noopener,noreferrer");
  else {
    activeFilter = "left";
    $$(".seg").forEach((btn) =>
      btn.classList.toggle("active", btn.dataset.filter === "left"),
    );
    renderTodayGames();
    toast("No games left for today");
  }
}

function bindEvents() {
  $$("[data-scroll]").forEach((button) =>
    button.addEventListener("click", () => {
      const target = document.getElementById(button.dataset.scroll);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    }),
  );
  ["#open-library", "#open-library-hero", "#empty-open-library"].forEach(
    (selector) =>
      $(selector)?.addEventListener("click", () =>
        $("#library-modal").classList.remove("hidden"),
      ),
  );
  $("#close-library").addEventListener("click", () =>
    $("#library-modal").classList.add("hidden"),
  );
  ["#open-summary", "#open-summary-hero"].forEach((selector) =>
    $(selector)?.addEventListener("click", openSummary),
  );
  $("#close-summary").addEventListener("click", () =>
    $("#summary-modal").classList.add("hidden"),
  );
  $("#open-about")?.addEventListener("click", () =>
    $("#about-modal").classList.remove("hidden"),
  );
  $("#close-about")?.addEventListener("click", () =>
    $("#about-modal").classList.add("hidden"),
  );
  $("#close-perfect")?.addEventListener("click", () =>
    $("#perfect-modal").classList.add("hidden"),
  );
  $("#perfect-share")?.addEventListener("click", () => {
    $("#perfect-modal").classList.add("hidden");
    openSummary();
  });
  $("#play-next").addEventListener("click", playNext);
  $("#open-all-left").addEventListener("click", openAllLeft);
  function copiedFeedback(button, label = "Copied ✓") {
    const original = button.textContent;
    button.textContent = label;
    button.classList.add("copied");
    setTimeout(() => {
      button.textContent = original;
      button.classList.remove("copied");
    }, 1400);
  }
  $("#copy-summary").addEventListener("click", async (event) => {
    try {
      await navigator.clipboard.writeText(buildSummary());
      copiedFeedback(event.currentTarget);
      toast("Summary copied");
    } catch {
      const temp = document.createElement("textarea");
      temp.value = buildSummary();
      temp.setAttribute("readonly", "");
      temp.style.position = "fixed";
      temp.style.left = "-9999px";
      document.body.appendChild(temp);
      temp.select();
      document.execCommand("copy");
      temp.remove();
      copiedFeedback(event.currentTarget);
      toast("Summary copied");
    }
  });
  $("#reset-today").addEventListener("click", () => {
    if (!confirm("Reset today’s progress?")) return;
    state.days[TODAY_KEY] = {
      completed: {},
      results: {},
      selectedSnapshot: [...state.selectedGames],
      goalMode: "strict",
    };
    saveState();
    renderAll();
  });
  $$(".seg").forEach((button) =>
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      $$(".seg").forEach((btn) =>
        btn.classList.toggle("active", btn === button),
      );
      renderTodayGames();
    }),
  );
  $("#prev-month").addEventListener("click", () => {
    calendarCursor.setMonth(calendarCursor.getMonth() - 1);
    renderCalendar();
  });
  $("#next-month").addEventListener("click", () => {
    calendarCursor.setMonth(calendarCursor.getMonth() + 1);
    renderCalendar();
  });
  $("#library-search").addEventListener("input", renderLibrary);
  $("#library-category").addEventListener("change", renderLibrary);
  $("#select-suggested").addEventListener("click", () => {
    state.selectedGames = [...DEFAULT_SELECTED];
    const day = getDay();
    day.selectedSnapshot = [...state.selectedGames];
    day.goalMode = state.goalMode;
    saveState();
    renderAll();
  });
  $("#custom-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const name = $("#custom-name").value.trim();
    const url = $("#custom-url").value.trim();
    const category = $("#custom-category").value.trim() || "Custom";
    const resultType = $("#custom-result").value;
    if (!name || !url) return;
    const id = `custom-${name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")}-${Date.now().toString(36)}`;
    const game = {
      id,
      name,
      category,
      site: domainFromUrl(url),
      domain: domainFromUrl(url),
      url,
      resultType,
      placeholder: "Optional result",
      accent: "#ffd36e",
    };
    state.customGames.push(game);
    state.selectedGames.push(id);
    allGames = dedupeGames([...GAME_LIBRARY, ...state.customGames]);
    event.target.reset();
    saveState();
    renderAll();
    toast("Game added");
  });
  $$(".modal-backdrop").forEach((backdrop) =>
    backdrop.addEventListener("click", (event) => {
      if (event.target === backdrop) backdrop.classList.add("hidden");
    }),
  );
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      $("#library-modal").classList.add("hidden");
      $("#summary-modal").classList.add("hidden");
    }
  });
}

bindEvents();
getDay();
renderAll();
