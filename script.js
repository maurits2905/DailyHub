const STORAGE_KEY = "dailyPuzzleHub.v1";
const todayKey = () => new Date().toISOString().slice(0, 10);

const baseGames = [
  { id: "wordle", name: "Wordle", category: "NYT Games", url: "https://www.nytimes.com/games/wordle/index.html", resultType: "score", icon: "🟩", suggested: true },
  { id: "connections", name: "Connections", category: "NYT Games", url: "https://www.nytimes.com/games/connections", resultType: "mistakes", icon: "🧩", suggested: true },
  { id: "strands", name: "Strands", category: "NYT Games", url: "https://www.nytimes.com/games/strands", resultType: "simple", icon: "🧵", suggested: true },
  { id: "pips", name: "Pips", category: "NYT Games", url: "https://www.nytimes.com/games/pips", resultType: "time", icon: "🎲", suggested: true },
  { id: "contexto", name: "Contexto", category: "Word / Guessing", url: "https://contexto.me", resultType: "guesses", icon: "🔎", suggested: true },
  { id: "zip", name: "Zip", category: "LinkedIn Games", url: "https://www.linkedin.com/games", resultType: "simple", icon: "〽️", suggested: true },
  { id: "tango", name: "Tango", category: "LinkedIn Games", url: "https://www.linkedin.com/games", resultType: "simple", icon: "🌓", suggested: true },
  { id: "queens", name: "Queens", category: "LinkedIn Games", url: "https://www.linkedin.com/games", resultType: "simple", icon: "♛", suggested: true },
  { id: "patches", name: "Patches", category: "LinkedIn Games", url: "https://www.linkedin.com/games", resultType: "simple", icon: "🧶", suggested: true },
  { id: "timeguessr", name: "TimeGuessr", category: "Visual / Logic", url: "https://timeguessr.com/roundonedaily", resultType: "score", icon: "🕰️", suggested: false },
  { id: "loldle", name: "LoLdle", category: "Pop Culture", url: "https://loldle.net/classic", resultType: "guesses", icon: "⚔️", suggested: false },
  { id: "soundle", name: "Soundle", category: "Media / Pop Culture", url: "https://soundle.game/", resultType: "guesses", icon: "🎧", suggested: false },
  { id: "framed", name: "Framed", category: "Media / Pop Culture", url: "https://framed.wtf/", resultType: "score", icon: "🎬", suggested: false },
  { id: "colorfle", name: "Colorfle", category: "Visual / Logic", url: "https://colorfle.com/", resultType: "score", icon: "🎨", suggested: false },
  { id: "gamedle", name: "Gamedle", category: "Media / Pop Culture", url: "https://www.gamedle.wtf/", resultType: "guesses", icon: "🎮", suggested: false },
  { id: "waffle", name: "Waffle", category: "Word / Guessing", url: "https://wafflegame.net/", resultType: "moves", icon: "🧇", suggested: false },
  { id: "bezzerwisser", name: "Bezzerwisser", category: "Quiz / Knowledge", url: "https://politiken.dk/underholdning/bezzerwizzer/", resultType: "simple", icon: "🧠", suggested: false }
];

const defaultState = {
  selectedIds: ["wordle", "connections", "strands", "pips", "contexto"],
  customGames: [],
  days: {},
  goalMode: "flexible",
  filter: "all"
};

let state = loadState();
let activeFilter = state.filter || "all";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return { ...defaultState, ...saved, days: saved?.days || {}, customGames: saved?.customGames || [] };
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  state.filter = activeFilter;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function allGames() {
  return [...baseGames, ...state.customGames];
}

function today() {
  const key = todayKey();
  if (!state.days[key]) state.days[key] = { games: {}, note: "" };
  return state.days[key];
}

function selectedGames() {
  const ids = new Set(state.selectedIds);
  return allGames().filter((game) => ids.has(game.id));
}

function getGameStatus(gameId) {
  const day = today();
  if (!day.games[gameId]) day.games[gameId] = { done: false, result: "" };
  return day.games[gameId];
}

function formatDateLabel() {
  const date = new Date();
  return new Intl.DateTimeFormat("en-GB", { weekday: "long", day: "numeric", month: "long" }).format(date);
}

function updateGreeting() {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
  $("#greeting").textContent = greeting;
  $("#dateLabel").textContent = formatDateLabel();
}

function goalReached(done, total) {
  if (total === 0) return false;
  if (state.goalMode === "strict") return done === total;
  if (state.goalMode === "relaxed") return done >= 1;
  return done / total >= 0.8;
}

function goalText(done, total) {
  if (total === 0) return "Select games to begin";
  if (goalReached(done, total)) return "Daily goal reached ✨";
  if (state.goalMode === "strict") return `${total - done} left for a perfect day`;
  if (state.goalMode === "relaxed") return done === 0 ? "Complete one game to keep the streak" : "Goal reached";
  const needed = Math.ceil(total * 0.8);
  return `${Math.max(needed - done, 0)} more needed for today’s goal`;
}

function goalModeLabel() {
  return state.goalMode === "strict" ? "Strict goal" : state.goalMode === "relaxed" ? "Relaxed goal" : "Flexible goal";
}

function renderProgress() {
  const games = selectedGames();
  const total = games.length;
  const done = games.filter((game) => getGameStatus(game.id).done).length;
  const percent = total ? Math.round((done / total) * 100) : 0;

  $("#progressTitle").textContent = `${done} / ${total} done`;
  $("#progressPercent").textContent = `${percent}%`;
  $("#progressFill").style.width = `${percent}%`;
  $("#goalStatus").textContent = goalText(done, total);
  $("#goalModeLabel").textContent = goalModeLabel();
  $("#goalMode").value = state.goalMode;
}

function resultPlaceholder(type) {
  const map = {
    simple: "Optional note",
    score: "Example: 4/6 or 4260",
    guesses: "Example: 78 guesses",
    mistakes: "Example: 1 mistake",
    moves: "Example: 3 swaps left",
    time: "Example: 02:14"
  };
  return map[type] || "Optional result";
}

function renderGames() {
  const container = $("#selectedGames");
  let games = selectedGames();

  if (activeFilter === "open") games = games.filter((game) => !getGameStatus(game.id).done);
  if (activeFilter === "done") games = games.filter((game) => getGameStatus(game.id).done);

  if (!games.length) {
    container.innerHTML = `
      <div class="empty-state">
        <strong>No games here yet</strong>
        <p>Open the game library and select the daily games you want to track.</p>
      </div>`;
    return;
  }

  container.innerHTML = games.map((game, index) => {
    const status = getGameStatus(game.id);
    const doneClass = status.done ? "done" : "";
    const accent = ["rgba(248,196,108,.18)", "rgba(196,240,255,.16)", "rgba(164,243,181,.14)", "rgba(255,159,159,.13)"][index % 4];
    return `
      <article class="game-card ${doneClass}" style="--card-accent:${accent}">
        <div class="game-card-top">
          <div class="game-title">
            <div class="game-icon" aria-hidden="true">${game.icon || "✦"}</div>
            <div>
              <h3>${escapeHtml(game.name)}</h3>
              <p class="category">${escapeHtml(game.category)}</p>
            </div>
          </div>
          <span class="status-pill ${status.done ? "done" : ""}">${status.done ? "Done" : "Open"}</span>
        </div>
        <div class="result-row">
          <label for="result-${game.id}">Result</label>
          <input id="result-${game.id}" data-result-id="${game.id}" value="${escapeAttr(status.result || "")}" placeholder="${resultPlaceholder(game.resultType)}" />
        </div>
        <div class="game-actions">
          <a class="secondary-btn open-link" href="${escapeAttr(game.url)}" target="_blank" rel="noopener noreferrer">Play ↗</a>
          <button class="done-toggle ${status.done ? "is-done" : ""}" data-done-id="${game.id}" type="button">${status.done ? "Mark not done" : "Mark done"}</button>
        </div>
      </article>`;
  }).join("");
}

function renderStats() {
  const streaks = calculateStreaks();
  $("#currentStreak").textContent = `${streaks.current} ${streaks.current === 1 ? "day" : "days"}`;
  $("#bestStreak").textContent = `${streaks.best} ${streaks.best === 1 ? "day" : "days"}`;
  $("#trackedDays").textContent = Object.keys(state.days).length;
}

function dayGoalReached(dateKey) {
  const games = selectedGames();
  const day = state.days[dateKey];
  if (!day || !games.length) return false;
  const done = games.filter((game) => day.games?.[game.id]?.done).length;
  return goalReached(done, games.length);
}

function calculateStreaks() {
  const keys = Object.keys(state.days).sort();
  let best = 0;
  let run = 0;
  for (const key of keys) {
    if (dayGoalReached(key)) {
      run += 1;
      best = Math.max(best, run);
    } else {
      run = 0;
    }
  }

  let current = 0;
  const cursor = new Date();
  for (let i = 0; i < 365; i++) {
    const key = cursor.toISOString().slice(0, 10);
    if (dayGoalReached(key)) current += 1;
    else break;
    cursor.setDate(cursor.getDate() - 1);
  }
  return { current, best };
}

function renderHeatmap() {
  const container = $("#heatmap");
  const cells = [];
  const now = new Date();
  const games = selectedGames();

  for (let i = 27; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(now.getDate() - i);
    const key = date.toISOString().slice(0, 10);
    const day = state.days[key];
    const done = games.filter((game) => day?.games?.[game.id]?.done).length;
    const percent = games.length ? done / games.length : 0;
    const level = percent >= 0.8 ? 3 : percent > 0.35 ? 2 : percent > 0 ? 1 : 0;
    const label = new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "2-digit" }).format(date);
    cells.push(`<div class="day-cell ${key === todayKey() ? "today" : ""}" data-level="${level}" title="${label}: ${done}/${games.length}">${date.getDate()}</div>`);
  }
  container.innerHTML = cells.join("");
}

function renderLibrary() {
  const search = $("#searchGames").value?.toLowerCase() || "";
  const selected = new Set(state.selectedIds);
  const games = allGames().filter((game) => `${game.name} ${game.category}`.toLowerCase().includes(search));
  const grouped = games.reduce((acc, game) => {
    acc[game.category] ||= [];
    acc[game.category].push(game);
    return acc;
  }, {});

  $("#libraryList").innerHTML = Object.entries(grouped).map(([category, items]) => `
    <div class="library-group">
      <p class="eyebrow">${escapeHtml(category)}</p>
      ${items.map(game => `
        <div class="library-item">
          <div class="library-meta">
            <div class="game-icon" aria-hidden="true">${game.icon || "✦"}</div>
            <div class="library-info">
              <strong>${escapeHtml(game.name)}</strong>
              <span>${escapeHtml(resultPlaceholder(game.resultType))}</span>
            </div>
          </div>
          <button class="switch ${selected.has(game.id) ? "on" : ""}" data-select-id="${game.id}" aria-label="Toggle ${escapeAttr(game.name)}" type="button"></button>
        </div>`).join("")}
    </div>`).join("");
}

function renderNote() {
  $("#dailyNote").value = today().note || "";
}

function renderAll() {
  updateGreeting();
  renderProgress();
  renderGames();
  renderStats();
  renderHeatmap();
  renderLibrary();
  renderNote();
  $$(".chip").forEach((chip) => chip.classList.toggle("active", chip.dataset.filter === activeFilter));
  saveState();
}

function startNextGame() {
  const next = selectedGames().find((game) => !getGameStatus(game.id).done) || selectedGames()[0];
  if (next) window.open(next.url, "_blank", "noopener,noreferrer");
  else $("#libraryDialog").showModal();
}

function generateSummary() {
  const games = selectedGames();
  const done = games.filter((game) => getGameStatus(game.id).done).length;
  const date = new Intl.DateTimeFormat("en-GB", { dateStyle: "medium" }).format(new Date());
  const lines = [`Daily Puzzle Run - ${date}`, "", `Completed: ${done} / ${games.length}`, `Goal: ${goalModeLabel()}`, ""];
  games.forEach((game) => {
    const status = getGameStatus(game.id);
    const result = status.result ? `: ${status.result}` : "";
    lines.push(`${status.done ? "✅" : "⬜"} ${game.name}${result}`);
  });
  if (today().note) lines.push("", `Note: ${today().note}`);
  return lines.join("\n");
}

function resetToday() {
  if (!confirm("Reset today’s progress? Your game library and history from other days will stay.")) return;
  state.days[todayKey()] = { games: {}, note: "" };
  renderAll();
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/`/g, "&#96;");
}

$("#settingsBtn").addEventListener("click", () => { renderLibrary(); $("#libraryDialog").showModal(); });
$("#closeLibraryBtn").addEventListener("click", () => $("#libraryDialog").close());
$("#customGameBtn").addEventListener("click", () => $("#customDialog").showModal());
$("#closeCustomBtn").addEventListener("click", () => $("#customDialog").close());
$("#summaryBtn").addEventListener("click", () => { $("#summaryText").value = generateSummary(); $("#copyToast").textContent = ""; $("#summaryDialog").showModal(); });
$("#closeSummaryBtn").addEventListener("click", () => $("#summaryDialog").close());
$("#startNextBtn").addEventListener("click", startNextGame);
$("#resetTodayBtn").addEventListener("click", resetToday);
$("#searchGames").addEventListener("input", renderLibrary);

$("#goalMode").addEventListener("change", (event) => {
  state.goalMode = event.target.value;
  renderAll();
});

$("#dailyNote").addEventListener("input", (event) => {
  today().note = event.target.value;
  saveState();
});

$("#selectSuggestedBtn").addEventListener("click", () => {
  const customSelected = state.selectedIds.filter((id) => state.customGames.some((game) => game.id === id));
  state.selectedIds = [...baseGames.filter((game) => game.suggested).map((game) => game.id), ...customSelected];
  renderAll();
});

$("#libraryList").addEventListener("click", (event) => {
  const button = event.target.closest("[data-select-id]");
  if (!button) return;
  const id = button.dataset.selectId;
  const set = new Set(state.selectedIds);
  set.has(id) ? set.delete(id) : set.add(id);
  state.selectedIds = Array.from(set);
  renderAll();
});

$("#selectedGames").addEventListener("click", (event) => {
  const button = event.target.closest("[data-done-id]");
  if (!button) return;
  const status = getGameStatus(button.dataset.doneId);
  status.done = !status.done;
  renderAll();
});

$("#selectedGames").addEventListener("input", (event) => {
  const input = event.target.closest("[data-result-id]");
  if (!input) return;
  getGameStatus(input.dataset.resultId).result = input.value;
  saveState();
});

$("#customGameForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = $("#customName").value.trim();
  const url = $("#customUrl").value.trim();
  const category = $("#customCategory").value.trim() || "Custom";
  const resultType = $("#customResultType").value;
  if (!name || !url) return;
  const id = `custom-${crypto.randomUUID ? crypto.randomUUID() : Date.now()}`;
  const game = { id, name, url, category, resultType, icon: "✨", suggested: false };
  state.customGames.push(game);
  state.selectedIds.push(id);
  event.target.reset();
  $("#customDialog").close();
  renderAll();
});

$("#copySummaryBtn").addEventListener("click", async () => {
  const text = $("#summaryText").value;
  try {
    await navigator.clipboard.writeText(text);
    $("#copyToast").textContent = "Copied to clipboard.";
  } catch {
    $("#summaryText").select();
    document.execCommand("copy");
    $("#copyToast").textContent = "Copied.";
  }
});

$$(".chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    activeFilter = chip.dataset.filter;
    renderAll();
  });
});

renderAll();
