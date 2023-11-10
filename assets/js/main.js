function closeSearch(el) {
  el.classList.add('hidden');
}

function openSearch() {
  document.getElementById('search-modal').classList.remove('hidden');
  document.getElementById('search-modal-input').focus();
}

async function search(el, event) {
  if (event.key === "Escape") {
    closeSearch(document.getElementById('search-modal'));
  } else {
    const term = el.value;
    const search = await pagefind.debouncedSearch(term);
    const results = await Promise.all(search.results.slice(0, 10).map(r => r.data()))
    let resultsDiv = document.getElementById('search-results');
    resultsDiv.textContent = '';
    if (results && results.length) {
      for (let result of results) {
        let rdiv = document.createElement('div');
        rdiv.innerHTML = `
<div class="flex flex-col">
<a href="${result.url}"><div class="font-display mb-2">${result.meta.title}</div></a>
<p onclick="location.href='${result.url}';" class="cursor-pointer">${result.excerpt}</p>
</div>
        `
        rdiv.classList.add('search-item');
        resultsDiv.appendChild(rdiv);
      }
    } else {
      if (term) {
        resultsDiv.textContent = `No results found for search term "${term}"`;
      } else {
        resultsDiv.textContent = `Enter a search term`;
      }
    }
  }
}

function toggleNav() {
  let menu = document.querySelector("#nav-menu-mobile");
  let openIcon = document.querySelector("#nav-toggle-closed")
  let closeIcon = document.querySelector("#nav-toggle-open")
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden")
    menu.classList.add("flex");
    openIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden");
  } else {
    menu.classList.remove("flex")
    menu.classList.add("hidden");
    openIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  }
}