const routes = {
  "/": "pages/home.page.html",
  "/messenger": "pages/messenger.page.html",
  "/profile": "pages/profile.page.html",
  "/edit-profile": "pages/edit-profile.page.html",
  "/shop": "pages/shop.page.html",
  "/monetisasi": "pages/monetisasi.page.html"
};

// Render function
async function renderRoute() {
  const path = window.location.pathname;
  const page = routes[path] || "pages/home.page.html";
  const res = await fetch(page);
  const html = await res.text();
  document.getElementById("app").innerHTML = html;
}

// Listen navigation
window.addEventListener("popstate", renderRoute);

// Navigate to
window.navigate = function (path) {
  history.pushState({}, "", path);
  renderRoute();
};

// Initial render
renderRoute();
