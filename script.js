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
    suggested: true,
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
    accent: "#b998ff",
    suggested: true,
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
    accent: "#73b8ff",
    suggested: true,
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
    accent: "#e6d2ff",
    suggested: true,
  },
  {
    id: "zip",
    name: "Zip",
    category: "LinkedIn Games",
    site: "LinkedIn",
    domain: "linkedin.com",
    url: "https://www.linkedin.com/games/zip",
    resultType: "time",
    placeholder: "Example: 01:42",
    accent: "#71b7fb",
  },
  {
    id: "tango",
    name: "Tango",
    category: "LinkedIn Games",
    site: "LinkedIn",
    domain: "linkedin.com",
    url: "https://www.linkedin.com/games/tango",
    resultType: "time",
    placeholder: "Example: 03:20",
    accent: "#f4c56b",
  },
  {
    id: "queens",
    name: "Queens",
    category: "LinkedIn Games",
    site: "LinkedIn",
    domain: "linkedin.com",
    url: "https://www.linkedin.com/games/queens",
    resultType: "time",
    placeholder: "Example: 02:10",
    accent: "#caa7ff",
  },
  {
    id: "pinpoint",
    name: "Pinpoint",
    category: "LinkedIn Games",
    site: "LinkedIn",
    domain: "linkedin.com",
    url: "https://www.linkedin.com/games/pinpoint",
    resultType: "score",
    placeholder: "Example: 3/5",
    accent: "#8ee0ff",
  },
  {
    id: "crossclimb",
    name: "Crossclimb",
    category: "LinkedIn Games",
    site: "LinkedIn",
    domain: "linkedin.com",
    url: "https://www.linkedin.com/games/crossclimb",
    resultType: "time",
    placeholder: "Example: 04:10",
    accent: "#96e6a1",
  },
  {
    id: "mini-sudoku",
    name: "Mini Sudoku",
    category: "LinkedIn Games",
    site: "LinkedIn",
    domain: "linkedin.com",
    url: "https://www.linkedin.com/games/mini-sudoku",
    resultType: "time",
    placeholder: "Example: 05:30",
    accent: "#ffb084",
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
    accent: "#7bdff2",
    suggested: true,
  },
  {
    id: "waffle",
    name: "Waffle",
    category: "Word / Guessing",
    site: "Waffle",
    domain: "wafflegame.net",
    url: "https://wafflegame.net",
    resultType: "moves",
    placeholder: "Example: 5 stars",
    accent: "#f7d46d",
  },
  {
    id: "loldle",
    name: "LoLdle",
    category: "Word / Guessing",
    site: "LoLdle",
    domain: "loldle.net",
    url: "https://loldle.net",
    resultType: "score",
    placeholder: "Example: 3/5",
    accent: "#d6a75d",
  },
  {
    id: "timeguessr",
    name: "TimeGuessr",
    category: "Visual / Logic",
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
    accent: "#ff90d0",
  },
  {
    id: "framed",
    name: "Framed",
    category: "Media / Pop Culture",
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
    category: "Media / Pop Culture",
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
    category: "Media / Pop Culture",
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
];

const DEFAULT_SELECTED = [
  "wordle",
  "connections",
  "strands",
  "pips",
  "contexto",
];
const STORAGE_KEY = "dailyhub-v2-state";
const TODAY_KEY = toDateKey(new Date());

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

let state = loadState();
let activeFilter = "all";
let selectedCalendarDate = TODAY_KEY;
let allGames = [...GAME_LIBRARY, ...state.customGames];

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  const base = {
    selectedGames: DEFAULT_SELECTED,
    goalMode: "flexible",
    days: {},
    customGames: [],
  };
  if (!saved) return base;
  try {
    return { ...base, ...JSON.parse(saved) };
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
    .map((id) => allGames.find((game) => game.id === id))
    .filter(Boolean);
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
    : state.selectedGames;
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

function formatDate(key) {
  const date = new Date(`${key}T12:00:00`);
  return date.toLocaleDateString(undefined, {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
}

function updateHeader() {
  const now = new Date();
  const hour = now.getHours();
  const greeting =
    hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
  $("#greeting").textContent = greeting;
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
      : `${Math.max(stats.goal - stats.completed, 0)} more needed for today’s goal`
    : "Choose games to begin";
  $("#goal-label").textContent =
    state.goalMode === "strict"
      ? "Strict goal"
      : state.goalMode === "relaxed"
        ? "Relaxed goal"
        : "Flexible goal";
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

function calculateStreaks() {
  const keys = Object.keys(state.days).sort();
  let best = 0;
  let run = 0;
  for (const key of keys) {
    const stats = dayStats(key);
    if (stats.goalMet) {
      run += 1;
      best = Math.max(best, run);
    } else {
      run = 0;
    }
  }

  let current = 0;
  let cursor = new Date(`${TODAY_KEY}T12:00:00`);
  for (let i = 0; i < 365; i++) {
    const key = toDateKey(cursor);
    const stats = dayStats(key);
    if (!stats.goalMet) break;
    current += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return { current, best };
}

function logoFor(game) {
  const favicon = `https://www.google.com/s2/favicons?sz=64&domain=${encodeURIComponent(game.domain)}`;
  const initials =
    game.site?.slice(0, 2).toUpperCase() || game.name.slice(0, 2).toUpperCase();
  return `<span class="site-logo" title="${escapeHtml(game.site || game.name)}"><img src="${favicon}" alt="" onerror="this.remove(); this.parentElement.textContent='${initials}'"></span>`;
}

function renderTodayGames() {
  const container = $("#today-games");
  const empty = $("#empty-today");
  const day = getDay();
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
    card.style.setProperty("--accent", game.accent || "#ffd779");
    card.innerHTML = `
      <div class="game-top">
        <div class="game-title-row">
          ${logoFor(game)}
          <span>
            <h3>${escapeHtml(game.name)}</h3>
            <span class="game-category">${escapeHtml(game.category)}</span>
          </span>
        </div>
        <span class="status-pill ${done ? "done" : ""}">${done ? "Done" : "Open"}</span>
      </div>
      <div class="result-wrap">
        <label for="result-${game.id}">Result</label>
        <input id="result-${game.id}" data-result="${game.id}" placeholder="${escapeHtml(game.placeholder || "Optional result")}" value="${escapeHtml(value)}" />
      </div>
      <div class="game-actions">
        <a class="play-link" href="${game.url}" target="_blank" rel="noopener noreferrer">Play ↗</a>
        <button class="done-btn ${done ? "is-done" : ""}" data-done="${game.id}">${done ? "Undo" : "Mark done"}</button>
      </div>
    `;
    container.appendChild(card);
  });

  $$("[data-result]").forEach((input) => {
    input.addEventListener("input", (event) => {
      const id = event.target.dataset.result;
      getDay().results[id] = event.target.value;
      saveState();
      renderCalendar();
      renderSelectedDay();
    });
  });

  $$("[data-done]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.done;
      const day = getDay();
      day.selectedSnapshot = [...state.selectedGames];
      day.goalMode = state.goalMode;
      day.completed[id] = !day.completed[id];
      saveAndRender();
    });
  });
}

function renderCalendar() {
  const grid = $("#calendar-grid");
  grid.innerHTML = "";

  const today = new Date(`${TODAY_KEY}T12:00:00`);
  const year = today.getFullYear();
  const month = today.getMonth();
  const first = new Date(year, month, 1, 12);
  const start = new Date(first);
  const mondayIndex = (first.getDay() + 6) % 7;
  start.setDate(first.getDate() - mondayIndex);

  let goalDays = 0;
  let activeDays = 0;

  for (let i = 0; i < 42; i++) {
    const date = new Date(start);
    date.setDate(start.getDate() + i);
    const key = toDateKey(date);
    const stats = dayStats(key);
    const inMonth = date.getMonth() === month;
    if (inMonth && stats.total > 0 && state.days[key]) activeDays += 1;
    if (inMonth && stats.goalMet) goalDays += 1;

    const cell = document.createElement("button");
    cell.className = `day-cell ${inMonth ? "" : "is-out"} ${key === TODAY_KEY ? "is-today" : ""} ${key === selectedCalendarDate ? "is-selected" : ""} ${stats.goalMet ? "goal-met" : ""}`;
    cell.style.setProperty("--fill", `${stats.percent}%`);
    cell.dataset.date = key;
    cell.innerHTML = `<span class="day-num">${date.getDate()}</span><span class="day-score">${stats.completed}/${stats.total}</span>`;
    cell.addEventListener("click", () => {
      selectedCalendarDate = key;
      renderCalendar();
      renderSelectedDay();
    });
    grid.appendChild(cell);
  }

  const monthName = today.toLocaleDateString(undefined, { month: "long" });
  $("#month-summary").textContent =
    `${goalDays} goal day${goalDays === 1 ? "" : "s"} in ${monthName}`;
  $("#month-detail").textContent = activeDays
    ? `${activeDays} tracked day${activeDays === 1 ? "" : "s"} this month`
    : "No tracked days this month yet";
}

function renderSelectedDay() {
  const stats = dayStats(selectedCalendarDate);
  const day = state.days[selectedCalendarDate];
  $("#day-title").textContent = formatDate(selectedCalendarDate);
  $("#day-subtitle").textContent = stats.total
    ? stats.goalMet
      ? "Goal reached. Nice run."
      : "Goal not reached yet."
    : "No selected games were tracked for this day.";
  $("#day-completed").textContent = `${stats.completed}/${stats.total}`;
  $("#day-goal").textContent = stats.goalMet
    ? "Reached"
    : `${stats.goal} needed`;
  $("#day-games-count").textContent = String(stats.total);

  const results = $("#day-results");
  results.innerHTML = "";
  stats.snapshot.forEach((id) => {
    const game = allGames.find((item) => item.id === id);
    if (!game) return;
    const row = document.createElement("div");
    const done = Boolean(day?.completed?.[id]);
    const result = day?.results?.[id];
    row.className = "day-result-row";
    row.innerHTML = `<span>${done ? "✅" : "⬜"} ${escapeHtml(game.name)}</span><strong>${escapeHtml(result || (done ? "Done" : "-"))}</strong>`;
    results.appendChild(row);
  });
}

function renderLibrary() {
  const categorySelect = $("#library-category");
  const current = categorySelect.value || "all";
  const categories = [...new Set(allGames.map((game) => game.category))].sort();
  categorySelect.innerHTML =
    `<option value="all">All categories</option>` +
    categories
      .map(
        (category) =>
          `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`,
      )
      .join("");
  categorySelect.value = categories.includes(current) ? current : "all";

  const query = $("#library-search").value.trim().toLowerCase();
  const category = categorySelect.value;
  const list = $("#library-list");

  const games = allGames.filter((game) => {
    const matchesSearch =
      !query ||
      [game.name, game.category, game.site]
        .join(" ")
        .toLowerCase()
        .includes(query);
    const matchesCategory = category === "all" || game.category === category;
    return matchesSearch && matchesCategory;
  });

  list.innerHTML = games
    .map((game) => {
      const selected = state.selectedGames.includes(game.id);
      return `
      <div class="library-row">
        ${logoFor(game)}
        <span>
          <strong>${escapeHtml(game.name)}</strong>
          <span>${escapeHtml(game.category)} · ${escapeHtml(game.site || game.domain)} · ${escapeHtml(game.resultType)}</span>
        </span>
        <button class="toggle ${selected ? "on" : ""}" data-toggle-game="${game.id}" aria-label="Toggle ${escapeHtml(game.name)}"></button>
      </div>
    `;
    })
    .join("");

  $$("[data-toggle-game]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.toggleGame;
      if (state.selectedGames.includes(id)) {
        state.selectedGames = state.selectedGames.filter(
          (gameId) => gameId !== id,
        );
      } else {
        state.selectedGames.push(id);
      }
      getDay().selectedSnapshot = [...state.selectedGames];
      saveAndRender();
      renderLibrary();
    });
  });
}

function generateSummary() {
  const stats = dayStats();
  const day = getDay();
  const lines = [
    `DailyHub · ${formatDate(TODAY_KEY)}`,
    "",
    `Completed: ${stats.completed} / ${stats.total}`,
    `Goal: ${stats.goalMet ? "Reached" : `${stats.goal} needed`}`,
    "",
  ];
  selectedGames().forEach((game) => {
    const done = day.completed[game.id] ? "✅" : "⬜";
    const result = day.results[game.id] ? ` · ${day.results[game.id]}` : "";
    lines.push(`${done} ${game.name}${result}`);
  });
  return lines.join("\n");
}

function openSummary() {
  $("#summary-text").value = generateSummary();
  $("#summary-modal").classList.remove("hidden");
}

function saveAndRender() {
  saveState();
  allGames = [...GAME_LIBRARY, ...state.customGames];
  renderProgress();
  renderStats();
  renderTodayGames();
  renderCalendar();
  renderSelectedDay();
}

function escapeHtml(value) {
  return String(value ?? "").replace(
    /[&<>'"]/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[
        char
      ],
  );
}

function initEvents() {
  $("#goal-mode").addEventListener("change", (event) => {
    state.goalMode = event.target.value;
    getDay().goalMode = state.goalMode;
    saveAndRender();
  });

  $$(".seg").forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      $$(".seg").forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      renderTodayGames();
    });
  });

  $$("[data-scroll]").forEach((button) => {
    button.addEventListener("click", () =>
      document
        .getElementById(button.dataset.scroll)
        .scrollIntoView({ behavior: "smooth", block: "start" }),
    );
  });

  ["#open-library", "#open-library-hero", "#empty-open-library"].forEach(
    (selector) => {
      $(selector).addEventListener("click", () => {
        renderLibrary();
        $("#library-modal").classList.remove("hidden");
      });
    },
  );
  $("#close-library").addEventListener("click", () =>
    $("#library-modal").classList.add("hidden"),
  );
  $("#library-modal").addEventListener("click", (event) => {
    if (event.target.id === "library-modal")
      $("#library-modal").classList.add("hidden");
  });
  $("#library-search").addEventListener("input", renderLibrary);
  $("#library-category").addEventListener("change", renderLibrary);

  $("#select-suggested").addEventListener("click", () => {
    state.selectedGames = GAME_LIBRARY.filter((game) => game.suggested).map(
      (game) => game.id,
    );
    getDay().selectedSnapshot = [...state.selectedGames];
    saveAndRender();
    renderLibrary();
  });

  $("#custom-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const name = $("#custom-name").value.trim();
    const url = $("#custom-url").value.trim();
    const category = $("#custom-category").value.trim() || "Custom";
    if (!name || !url) return;
    const domain = new URL(url).hostname.replace(/^www\./, "");
    const id = `custom-${Date.now()}`;
    const game = {
      id,
      name,
      url,
      category,
      site: name,
      domain,
      resultType: $("#custom-result").value,
      placeholder: "Optional result",
      accent: "#ffd779",
    };
    state.customGames.push(game);
    state.selectedGames.push(id);
    event.target.reset();
    saveAndRender();
    renderLibrary();
  });

  $("#reset-today").addEventListener("click", () => {
    if (!confirm("Reset today’s completions and results?")) return;
    delete state.days[TODAY_KEY];
    getDay();
    saveAndRender();
  });

  $("#play-next").addEventListener("click", () => {
    const day = getDay();
    const next =
      selectedGames().find((game) => !day.completed[game.id]) ||
      selectedGames()[0];
    if (next) window.open(next.url, "_blank", "noopener,noreferrer");
  });

  $("#open-summary").addEventListener("click", openSummary);
  $("#close-summary").addEventListener("click", () =>
    $("#summary-modal").classList.add("hidden"),
  );
  $("#summary-modal").addEventListener("click", (event) => {
    if (event.target.id === "summary-modal")
      $("#summary-modal").classList.add("hidden");
  });
  $("#copy-summary").addEventListener("click", async () => {
    const text = $("#summary-text").value;
    try {
      await navigator.clipboard.writeText(text);
      $("#copy-summary").textContent = "Copied";
      setTimeout(() => ($("#copy-summary").textContent = "Copy summary"), 1200);
    } catch {
      $("#summary-text").select();
      document.execCommand("copy");
    }
  });
}

function init() {
  getDay().selectedSnapshot = getDay().selectedSnapshot?.length
    ? getDay().selectedSnapshot
    : [...state.selectedGames];
  getDay().goalMode = getDay().goalMode || state.goalMode;
  updateHeader();
  initEvents();
  saveAndRender();
}

init();
