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
    site: "Dordle",
    domain: "zaratustra.itch.io",
    url: "https://zaratustra.itch.io/dordle",
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
    id: "moviedle",
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
];

const DEFAULT_SELECTED = [
  "wordle",
  "connections",
  "strands",
  "pips",
  "contexto",
];
const STORAGE_KEY = "dailyhub-v3-state";
const LEGACY_KEYS = ["dailyhub-v2-state", "dailyhub-state"];
const TODAY_KEY = toDateKey(new Date());
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

let state = loadState();
let activeFilter = "all";
let selectedCalendarDate = TODAY_KEY;
let calendarCursor = new Date();
calendarCursor.setDate(1);
calendarCursor.setHours(12, 0, 0, 0);
let allGames = [...GAME_LIBRARY, ...state.customGames];

function loadState() {
  const base = {
    selectedGames: DEFAULT_SELECTED,
    goalMode: "flexible",
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
      goalMode: state.goalMode,
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
function getGoal(total, mode = state.goalMode) {
  if (!total) return 0;
  if (mode === "strict") return total;
  if (mode === "relaxed") return 1;
  return Math.ceil(total * 0.8);
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
  const goal = getGoal(total, day?.goalMode || state.goalMode);
  const percent = total ? Math.round((completed / total) * 100) : 0;
  return {
    total,
    completed,
    goal,
    percent,
    goalMet: total > 0 && completed >= goal,
    snapshot,
  };
}
function logoFor(game) {
  const domain = game.domain || domainFromUrl(game.url);
  const favicon = `https://www.google.com/s2/favicons?sz=64&domain=${encodeURIComponent(domain)}`;
  const initials = (game.site || game.name).slice(0, 2).toUpperCase();
  return `<span class="site-logo" title="${escapeHtml(game.site || game.name)}"><img src="${favicon}" alt="" onerror="this.remove();this.parentElement.textContent='${escapeHtml(initials)}'"></span>`;
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
      ? "Goal completed for today"
      : `${Math.max(stats.goal - stats.completed, 0)} more needed`
    : "Choose games to begin";
  $("#goal-label").textContent =
    state.goalMode === "strict"
      ? "Strict goal"
      : state.goalMode === "relaxed"
        ? "Relaxed goal"
        : "Flexible goal";
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
  $("#goal-mode").value = state.goalMode;
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
  empty.classList.toggle("hidden", selectedGames().length > 0);

  games.forEach((game) => {
    const done = Boolean(day.completed[game.id]);
    const value = day.results[game.id] || "";
    const card = document.createElement("article");
    card.className = `game-card ${done ? "done" : ""}`;
    card.style.setProperty("--accent", game.accent || "#ffd36e");
    card.innerHTML = `
      <div class="game-top">
        <div class="game-title-row">
          ${logoFor(game)}
          <span>
            <h3>${escapeHtml(game.name)}</h3>
            <span class="game-category">${escapeHtml(game.category)}</span>
          </span>
        </div>
        <span class="status-pill ${done ? "done" : ""}">${done ? "Done" : game.site || "Open"}</span>
      </div>
      <div class="result-wrap">
        <label for="result-${escapeHtml(game.id)}">Result</label>
        <input id="result-${escapeHtml(game.id)}" data-result="${escapeHtml(game.id)}" placeholder="${escapeHtml(game.placeholder || "Optional result")}" value="${escapeHtml(value)}" />
      </div>
      <div class="game-actions">
        <a class="play-link" href="${escapeHtml(game.url)}" target="_blank" rel="noopener noreferrer">Play</a>
        <button class="done-btn ${done ? "is-done" : ""}" data-done="${escapeHtml(game.id)}">${done ? "Undo" : "Mark done"}</button>
      </div>`;
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
  $$("[data-done]").forEach((button) =>
    button.addEventListener("click", () => {
      const day = getDay();
      day.selectedSnapshot = [...state.selectedGames];
      day.goalMode = state.goalMode;
      day.completed[button.dataset.done] = !day.completed[button.dataset.done];
      saveAndRender();
    }),
  );
}
function renderCalendar() {
  const grid = $("#calendar-grid");
  grid.innerHTML = "";
  const year = calendarCursor.getFullYear();
  const month = calendarCursor.getMonth();
  const first = new Date(year, month, 1, 12);
  const start = new Date(first);
  start.setDate(first.getDate() - ((first.getDay() + 6) % 7));

  let goalDays = 0,
    activeDays = 0,
    completedSum = 0,
    percentSum = 0;
  for (let i = 0; i < 42; i++) {
    const date = new Date(start);
    date.setDate(start.getDate() + i);
    const key = toDateKey(date);
    const stats = dayStats(key);
    const inMonth = date.getMonth() === month;
    if (inMonth && state.days[key] && stats.total > 0) {
      activeDays++;
      completedSum += stats.completed;
      percentSum += stats.percent;
    }
    if (inMonth && stats.goalMet) goalDays++;
    const cell = document.createElement("button");
    cell.className = `day-cell ${inMonth ? "" : "is-out"} ${key === TODAY_KEY ? "is-today" : ""} ${key === selectedCalendarDate ? "is-selected" : ""} ${stats.goalMet ? "goal-met" : ""}`;
    cell.style.setProperty("--fill", `${stats.percent}%`);
    cell.dataset.date = key;
    cell.innerHTML = `<span class="day-num">${date.getDate()}</span><span class="day-score">${stats.total ? `${stats.completed}/${stats.total}` : ""}</span>`;
    cell.addEventListener("click", () => {
      selectedCalendarDate = key;
      renderCalendar();
      renderSelectedDay();
    });
    grid.appendChild(cell);
  }
  $("#calendar-month").textContent = calendarCursor.toLocaleDateString(
    undefined,
    { month: "long", year: "numeric" },
  );
  $("#month-goal-days").textContent = String(goalDays);
  $("#month-completed").textContent = String(completedSum);
  $("#month-rate").textContent = activeDays
    ? `${Math.round(percentSum / activeDays)}%`
    : "0%";
}
function renderSelectedDay() {
  const stats = dayStats(selectedCalendarDate);
  const day = state.days[selectedCalendarDate];
  $("#day-title").textContent = formatDate(selectedCalendarDate, true);
  $("#day-subtitle").textContent = stats.total
    ? stats.goalMet
      ? "Daily goal was completed."
      : "Daily goal was not completed yet."
    : "No tracked games for this day.";
  $("#day-completed").textContent = stats.total
    ? `${stats.completed}/${stats.total}`
    : "-";
  $("#day-goal").textContent = stats.total ? `${stats.goal}` : "-";
  $("#day-percent").textContent = stats.total ? `${stats.percent}%` : "-";
  const results = $("#day-results");
  results.innerHTML = "";
  if (!stats.total) {
    results.innerHTML = `<div class="day-result"><span>No games</span><small>Select today's date after tracking something.</small></div>`;
    return;
  }
  stats.snapshot.forEach((id) => {
    const game = gameById(id);
    const done = Boolean(day?.completed?.[id]);
    const value = day?.results?.[id];
    const row = document.createElement("div");
    row.className = "day-result";
    row.innerHTML = `<span>${logoFor(game)} ${escapeHtml(game.name)}</span><small>${done ? "Done" : "Left"}${value ? ` · ${escapeHtml(value)}` : ""}</small>`;
    results.appendChild(row);
  });
}
function populateCategories() {
  const select = $("#library-category");
  const current = select.value || "all";
  const categories = [...new Set(allGames.map((g) => g.category))].sort();
  select.innerHTML =
    `<option value="all">All categories</option>` +
    categories
      .map(
        (cat) =>
          `<option value="${escapeHtml(cat)}">${escapeHtml(cat)}</option>`,
      )
      .join("");
  select.value = categories.includes(current) ? current : "all";
}
function renderLibrary() {
  populateCategories();
  const search = $("#library-search").value.trim().toLowerCase();
  const category = $("#library-category").value;
  const list = $("#library-list");
  list.innerHTML = "";
  const games = allGames
    .filter((game) => {
      const haystack =
        `${game.name} ${game.category} ${game.site} ${game.domain}`.toLowerCase();
      return (
        (!search || haystack.includes(search)) &&
        (category === "all" || game.category === category)
      );
    })
    .sort(
      (a, b) =>
        a.category.localeCompare(b.category) || a.name.localeCompare(b.name),
    );
  if (!games.length) {
    list.innerHTML = `<div class="empty-state"><h3>No games found</h3><p>Try another search or add a custom game.</p></div>`;
    return;
  }
  games.forEach((game) => {
    const selected = state.selectedGames.includes(game.id);
    const row = document.createElement("div");
    row.className = "library-row";
    row.innerHTML = `
      <div class="library-info">
        ${logoFor(game)}
        <div>
          <strong>${escapeHtml(game.name)}</strong>
          <small>${escapeHtml(game.category)} · ${escapeHtml(game.site || game.domain || "Custom")}</small>
        </div>
      </div>
      <button class="toggle ${selected ? "on" : ""}" data-toggle-game="${escapeHtml(game.id)}" aria-label="Toggle ${escapeHtml(game.name)}"></button>`;
    list.appendChild(row);
  });
  $$("[data-toggle-game]").forEach((button) =>
    button.addEventListener("click", () => {
      const id = button.dataset.toggleGame;
      if (state.selectedGames.includes(id))
        state.selectedGames = state.selectedGames.filter(
          (gameId) => gameId !== id,
        );
      else state.selectedGames.push(id);
      getDay().selectedSnapshot = [...state.selectedGames];
      saveAndRender();
      renderLibrary();
    }),
  );
}
function generateSummary() {
  const stats = dayStats();
  const day = getDay();
  const lines = [
    `DailyHub · ${formatDate(TODAY_KEY, true)}`,
    "",
    `Completed: ${stats.completed} / ${stats.total}`,
    `Goal: ${stats.goalMet ? "complete" : "not complete"} (${state.goalMode})`,
    "",
  ];
  selectedGames().forEach((game) => {
    const done = day.completed[game.id] ? "✅" : "⬜";
    const result = day.results[game.id] ? ` · ${day.results[game.id]}` : "";
    lines.push(`${done} ${game.name}${result}`);
  });
  return lines.join("\n");
}
function saveAndRender() {
  saveState();
  renderProgress();
  renderStats();
  renderTodayGames();
  renderCalendar();
  renderSelectedDay();
}
function openModal(id) {
  $(id).classList.remove("hidden");
}
function closeModal(id) {
  $(id).classList.add("hidden");
}
function playNext() {
  const day = getDay();
  const next =
    selectedGames().find((game) => !day.completed[game.id]) ||
    selectedGames()[0];
  if (next) window.open(next.url, "_blank", "noopener,noreferrer");
  else openModal("#library-modal");
}

function bindEvents() {
  $$("[data-scroll]").forEach((btn) =>
    btn.addEventListener("click", () =>
      document
        .getElementById(btn.dataset.scroll)
        .scrollIntoView({ behavior: "smooth" }),
    ),
  );
  $("#open-library").addEventListener("click", () => {
    renderLibrary();
    openModal("#library-modal");
  });
  $("#open-library-hero").addEventListener("click", () => {
    renderLibrary();
    openModal("#library-modal");
  });
  $("#empty-open-library").addEventListener("click", () => {
    renderLibrary();
    openModal("#library-modal");
  });
  $("#close-library").addEventListener("click", () =>
    closeModal("#library-modal"),
  );
  $("#play-next").addEventListener("click", playNext);
  $("#open-all-left").addEventListener("click", () =>
    selectedGames()
      .filter((g) => !getDay().completed[g.id])
      .slice(0, 8)
      .forEach((g) => window.open(g.url, "_blank", "noopener,noreferrer")),
  );
  $("#reset-today").addEventListener("click", () => {
    if (!confirm("Reset today's progress?")) return;
    delete state.days[TODAY_KEY];
    selectedCalendarDate = TODAY_KEY;
    saveAndRender();
  });
  $("#goal-mode").addEventListener("change", (event) => {
    state.goalMode = event.target.value;
    const day = getDay();
    day.goalMode = state.goalMode;
    day.selectedSnapshot = [...state.selectedGames];
    saveAndRender();
  });
  $$("[data-filter]").forEach((button) =>
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      $$("[data-filter]").forEach((b) =>
        b.classList.toggle("active", b === button),
      );
      renderTodayGames();
    }),
  );
  $("#library-search").addEventListener("input", renderLibrary);
  $("#library-category").addEventListener("change", renderLibrary);
  $("#select-suggested").addEventListener("click", () => {
    state.selectedGames = [...DEFAULT_SELECTED];
    getDay().selectedSnapshot = [...state.selectedGames];
    saveAndRender();
    renderLibrary();
  });
  $("#custom-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const name = $("#custom-name").value.trim();
    const url = $("#custom-url").value.trim();
    const category = $("#custom-category").value.trim() || "Custom";
    const resultType = $("#custom-result").value;
    const id = `custom-${Date.now()}`;
    const game = {
      id,
      name,
      category,
      site: name,
      domain: domainFromUrl(url),
      url,
      resultType,
      placeholder: "Optional result",
      accent: "#ffd36e",
    };
    state.customGames.push(game);
    state.selectedGames.push(id);
    allGames = [...GAME_LIBRARY, ...state.customGames];
    event.target.reset();
    saveAndRender();
    renderLibrary();
  });
  $("#prev-month").addEventListener("click", () => {
    calendarCursor.setMonth(calendarCursor.getMonth() - 1);
    renderCalendar();
  });
  $("#next-month").addEventListener("click", () => {
    calendarCursor.setMonth(calendarCursor.getMonth() + 1);
    renderCalendar();
  });
  $("#open-summary").addEventListener("click", () => {
    $("#summary-text").value = generateSummary();
    openModal("#summary-modal");
  });
  $("#close-summary").addEventListener("click", () =>
    closeModal("#summary-modal"),
  );
  $("#copy-summary").addEventListener("click", async () => {
    $("#summary-text").select();
    try {
      await navigator.clipboard.writeText($("#summary-text").value);
    } catch {
      document.execCommand("copy");
    }
    $("#copy-summary").textContent = "Copied";
    setTimeout(() => ($("#copy-summary").textContent = "Copy summary"), 1100);
  });
  $$(".modal-backdrop").forEach((backdrop) =>
    backdrop.addEventListener("click", (event) => {
      if (event.target === backdrop) backdrop.classList.add("hidden");
    }),
  );
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape")
      $$(".modal-backdrop").forEach((m) => m.classList.add("hidden"));
  });
}

function init() {
  updateHeader();
  bindEvents();
  saveAndRender();
}
init();
