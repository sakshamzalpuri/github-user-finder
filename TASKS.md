# GitHub User Finder — Task Tracker

## Core Setup
- [x] Project folder created
- [x] `index.html` structure
- [x] `style.css` base styles
- [x] `script.js` file created
- [x] Font Awesome icons linked
- [x] Poppins font linked
- [x] `.gitignore` added
- [x] Pushed to GitHub

---

## HTML
- [x] Header (logo + title + subtitle)
- [x] Search bar + Search button
- [x] Profile card shell (avatar, name, bio, location, date)
- [x] Stats row (followers, following, repos, gists)
- [x] Social links row (company, blog, twitter)
- [x] Repos section with grid container
- [x] Error state container
- [x] Skeleton loading structure
- [x] Search history chips container
- [x] Language filter dropdown

---

## CSS
- [x] Color variables (`--bg`, `--bg-card`, `--border`, `--accent`, `--teal`)
- [x] `.hidden` utility class (display: none)
- [x] Header styles
- [x] Search bar styles
- [x] Search button (purple — accent only)
- [x] Profile card layout
- [x] Avatar with teal border
- [x] Stats row
- [x] Social/additional info row
- [x] "View Profile" outline button
- [x] Repo card styles + hover effect
- [x] Error card styles
- [x] Skeleton shimmer animation
- [x] History chips styles
- [x] Language filter dropdown styles
- [x] Language color dot (`.lang-dot`)
- [x] Responsive mobile layout

---

## JavaScript

### DOM Selectors
- [x] All profile fields selected
- [x] `gists` element selected

### Search
- [x] Button click triggers `fetchData()`
- [x] Input cleared after search
- [ ] Enter key also triggers search
- [ ] Empty input validation (show message if no username typed)

### API — fetchData()
- [x] `GET /users/{username}` profile fetch
- [x] Error thrown if `res.ok` is false
- [ ] `GET /users/{username}/repos` repos fetch
- [ ] Both fetched together with `Promise.all`

### renderProfile(data)
- [x] `data.name` → name element
- [x] `data.login` → username element
- [x] `data.avatar_url` → avatar src
- [x] `data.followers` → followers count
- [x] `data.following` → following count
- [x] `data.public_repos` → repos count
- [x] `data.public_gists` → gists count
- [x] `data.html_url` → View Profile link href
- [x] `data.location` → location text
- [x] `data.created_at` → formatted join date
- [x] `data.company` → company text (with null check)
- [x] `data.blog` → blog link href (with null check)
- [x] `data.twitter_username` → twitter text (with null check)
- [x] Profile container `.hidden` removed on load
- [ ] `data.bio` → bio text (with null check) — missing!
- [ ] Duplicate `followers.textContent` on line 52 & 58 — remove line 52
- [ ] `blogElement.textContent` shows wrong value (shows name, not blog URL)
- [ ] `twitterElement.href` should be full URL not just username

### renderRepos(repos)
- [ ] `renderRepos()` function written
- [ ] `GET /users/{username}/repos` called
- [ ] Repos sorted by stars (descending)
- [ ] Each repo card built dynamically
- [ ] Repo name with link to GitHub
- [ ] Repo description (hidden if null)
- [ ] Language color dot (using color map)
- [ ] Star count shown
- [ ] Fork count shown
- [ ] "No repos" message if empty

### Error Handling
- [ ] Error container shown when user not found
- [ ] Profile container hidden on error
- [ ] Error message shows the searched username
- [ ] Retry button clears error and refocuses input

### Skeleton Loading
- [ ] Skeleton shown while fetching
- [ ] Skeleton hidden after data loads
- [ ] Skeleton hidden on error too

### Language Filter
- [ ] Dropdown populated from fetched repos
- [ ] On select → filter repo cards shown
- [ ] "All Languages" resets filter

### Search History (localStorage)
- [ ] Username saved to localStorage on search
- [ ] Max 8 recent searches stored
- [ ] History chips rendered below search bar
- [ ] Clicking chip → searches that username
- [ ] × on chip removes that entry
- [ ] "Clear history" button removes all

---

## Polish
- [ ] Language color map added (top 20 languages)
- [ ] GitHub Pages deployment
- [ ] README.md added

---

## Progress

```
HTML          ██████████  100%
CSS           ██████████  100%
JS — Selectors ██████████  100%
JS — Fetch    █████░░░░░   50%  (repos fetch missing)
JS — Render   ███████░░░   70%  (bio missing, 3 small bugs)
JS — Features ░░░░░░░░░░    0%  (error, skeleton, history, filter)
```
