// Window Manager — the site's original, differentiating component.
// Implements just enough of a Windows 95-style window manager to be
// genuinely interactive: draggable windows, click-to-focus stacking order,
// a taskbar that mirrors open windows, a Start Menu toggle, a live clock,
// and a "Shut Down" easter egg screen. No libraries — plain DOM + events.

const state = {
  windows: new Map(), // id -> { el, titlebarEl, taskbarButtonEl }
  zCounter: 10,
  activeId: null,
};

function bringToFront(id) {
  const entry = state.windows.get(id);
  if (!entry) {
    return;
  }
  state.zCounter += 1;
  entry.el.style.zIndex = String(state.zCounter);
  state.windows.forEach((other, otherId) => {
    other.el.classList.toggle("win-window--active", otherId === id);
    other.el.classList.toggle("win-window--inactive", otherId !== id);
    other.taskbarButtonEl?.classList.toggle(
      "taskbar__window-button--active",
      otherId === id
    );
  });
  state.activeId = id;
}

function makeDraggable(windowEl, handleEl) {
  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  const onPointerMove = (event) => {
    if (!isDragging) {
      return;
    }
    const desktopRect = windowEl.parentElement.getBoundingClientRect();
    let newLeft = event.clientX - desktopRect.left - offsetX;
    let newTop = event.clientY - desktopRect.top - offsetY;
    newLeft = Math.max(0, Math.min(newLeft, desktopRect.width - 80));
    newTop = Math.max(0, Math.min(newTop, desktopRect.height - 40));
    windowEl.style.left = `${newLeft}px`;
    windowEl.style.top = `${newTop}px`;
  };

  const onPointerUp = () => {
    isDragging = false;
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("pointerup", onPointerUp);
  };

  handleEl.addEventListener("pointerdown", (event) => {
    if (event.target.closest(".win-window__control")) {
      return;
    }
    isDragging = true;
    const rect = windowEl.getBoundingClientRect();
    offsetX = event.clientX - rect.left;
    offsetY = event.clientY - rect.top;
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
  });
}

function createTaskbarButton(id, title, taskbarListEl) {
  const item = document.createElement("li");
  const button = document.createElement("button");
  button.type = "button";
  button.className = "taskbar__window-button bevel-out";
  button.textContent = title;
  button.addEventListener("click", () => {
    const entry = state.windows.get(id);
    if (!entry) {
      return;
    }
    const isCurrentlyActive = state.activeId === id;
    const isHidden = entry.el.hasAttribute("hidden");
    if (isHidden) {
      entry.el.removeAttribute("hidden");
      bringToFront(id);
    } else if (isCurrentlyActive) {
      entry.el.setAttribute("hidden", "");
    } else {
      bringToFront(id);
    }
  });
  item.appendChild(button);
  taskbarListEl.appendChild(item);
  return button;
}

/**
 * Registers an already-in-the-DOM window element with the manager: wires
 * up dragging, focus-on-click, the close button, and a matching taskbar
 * button. Returns nothing; state is tracked internally by window id.
 */
export function registerWindow({ id, windowEl, taskbarListEl, title }) {
  const titlebar = windowEl.querySelector(".win-window__titlebar");
  const closeButton = windowEl.querySelector('[data-action="close"]');
  const minimizeButton = windowEl.querySelector('[data-action="minimize"]');
  const maximizeButton = windowEl.querySelector('[data-action="maximize"]');

  const taskbarButtonEl = createTaskbarButton(id, title, taskbarListEl);

  state.windows.set(id, {
    el: windowEl,
    titlebarEl: titlebar,
    taskbarButtonEl,
    isMaximized: false,
    restoreRect: null,
  });

  makeDraggable(windowEl, titlebar);

  windowEl.addEventListener("pointerdown", () => bringToFront(id));

  closeButton?.addEventListener("click", () => {
    windowEl.setAttribute("hidden", "");
  });

  minimizeButton?.addEventListener("click", (event) => {
    event.stopPropagation();
    windowEl.setAttribute("hidden", "");
  });

  maximizeButton?.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleMaximize(id);
  });

  bringToFront(id);
}

function toggleMaximize(id) {
  const entry = state.windows.get(id);
  if (!entry) {
    return;
  }
  const { el } = entry;
  const desktopEl = el.parentElement;

  if (!entry.isMaximized) {
    entry.restoreRect = {
      top: el.style.top,
      left: el.style.left,
      width: el.style.width,
      height: el.style.height,
    };
    const desktopRect = desktopEl.getBoundingClientRect();
    el.style.top = "0px";
    el.style.left = "0px";
    el.style.width = `${desktopRect.width}px`;
    el.style.height = `${desktopRect.height}px`;
    entry.isMaximized = true;
  } else {
    const r = entry.restoreRect;
    el.style.top = r.top || "80px";
    el.style.left = r.left || "80px";
    el.style.width = r.width || "";
    el.style.height = r.height || "";
    entry.isMaximized = false;
  }
  bringToFront(id);
}

export function openWindow(id) {
  const entry = state.windows.get(id);
  if (!entry) {
    return;
  }
  entry.el.removeAttribute("hidden");
  bringToFront(id);
}

export function initStartMenu({ startButtonSelector, startMenuSelector }) {
  const startButton = document.querySelector(startButtonSelector);
  const startMenu = document.querySelector(startMenuSelector);

  if (!startButton || !startMenu) {
    return;
  }

  startButton.addEventListener("click", (event) => {
    event.stopPropagation();
    startMenu.toggleAttribute("hidden");
  });

  document.addEventListener("click", (event) => {
    if (!startMenu.hasAttribute("hidden") && !startMenu.contains(event.target)) {
      startMenu.setAttribute("hidden", "");
    }
  });

  startMenu.querySelectorAll("[data-open-window]").forEach((menuItem) => {
    menuItem.addEventListener("click", () => {
      openWindow(menuItem.dataset.openWindow);
      startMenu.setAttribute("hidden", "");
    });
  });
}

export function initShutdown({ shutdownTriggerSelector, shutdownScreenSelector }) {
  const trigger = document.querySelector(shutdownTriggerSelector);
  const screen = document.querySelector(shutdownScreenSelector);

  if (!trigger || !screen) {
    return;
  }

  trigger.addEventListener("click", () => {
    screen.removeAttribute("hidden");
  });

  screen.addEventListener("click", () => {
    screen.setAttribute("hidden", "");
  });
}

export function initClock(clockSelector) {
  const clockEl = document.querySelector(clockSelector);
  if (!clockEl) {
    return;
  }

  const update = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours === 0 ? 12 : hours;
    clockEl.textContent = `${hours}:${minutes} ${period}`;
  };

  update();
  setInterval(update, 1000 * 15);
}