
const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("search-btn");
const profileContainer = document.getElementById("profile-container");
const errorContainer = document.getElementById("error-container");
const avatar = document.getElementById("avatar");
const nameElement = document.getElementById("name");
const usernameElement = document.getElementById("username");
const bioElement = document.getElementById("bio");
const locationElement = document.getElementById("location");
const joinedDateElement = document.getElementById("joined-date");
const profileLink = document.getElementById("profile-link");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const repos = document.getElementById("repos");
const companyElement = document.getElementById("company");
const blogElement = document.getElementById("blog");
const twitterElement = document.getElementById("twitter");
const companyContainer = document.getElementById("company-container");
const blogContainer = document.getElementById("blog-container");
const twitterContainer = document.getElementById("twitter-container");
const reposContainer = document.getElementById("repos-container");
const gists = document.getElementById("gists")

const handleSearch = async () => {
    const searchTerm = searchInput.value.trim()

    // 1 - INput validation
    if (!searchTerm) {
        renderError("Please enter a GitHub Username")
        return
    }

    // 
    const data = await fetchData(searchTerm)
    searchInput.value = ""

    // 2 - Handle API Response
    if (data) {
        errorContainer.classList.add("hidden")
        profileContainer.classList.remove("hidden")
        renderProfile(data)
    }
    else {
        profileContainer.classList.add("hidden")
        renderError(`User "${searchTerm}" not found.`)
    }
}

searchBtn.addEventListener("click", handleSearch)

// 3 - Allowing Enter key to search
searchBtn.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        handleSearch()
    }
})

async function fetchData(username) {
    const profileUrl = `https://api.github.com/users/${username}`
    const repoUrl = `https://api.github.com/users/${username}/repos`
    try {
        
    }
    catch (err) {
        console.error("Fetch Error", err)
        return null
    }
}

function renderError(message) {
    errorContainer.classList.remove("hidden")
    errorContainer.querySelector(".error-message").textContent = message
    console.log(errorContainer)
}

function renderProfile(data) {
    // 5 - Render profile info
    avatar.src = data.avatar_url
    nameElement.textContent = data.name || data.login
    usernameElement.textContent = `@${data.login}`
    profileLink.href = data.html_url
    bioElement.textContent = data.bio || "This user has no bio"
    joinedDateElement.textContent = new Date(data.created_at).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    })

    // 6 - Render Stats
    followers.textContent = data.followers
    following.textContent = data.following
    gists.textContent = data.public_gists
    repos.textContent = data.public_repos

    // 7 - Render Optional info
    locationElement.parentElement.classList.toggle("hidden", !data.location)
    locationElement.textContent = data.location

    companyContainer.classList.toggle('hidden', !data.company);
    companyElement.textContent = data.company;

    blogContainer.classList.toggle("hidden",!data.blog)
    blogElement.href = data.blog ? (data.blog.startsWith('http') ? data.blog : `//${data.blog}`) : '#';
    blogElement.textContent =  data.blog || '';
   
     twitterContainer.classList.toggle('hidden', !data.twitter_username);
    twitterElement.href = data.twitter_username ? `<https://twitter.com/${data.twitter_username}>` : '#';
    twitterElement.textContent = data.twitter_username ? `@${data.twitter_username}` : '';

}