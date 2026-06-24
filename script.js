
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


searchBtn.addEventListener("click", async (e) => {
    const searchTerm = searchInput.value.trim()
    searchInput.value = ""
    const data = await fetchData(searchTerm)
    renderProfile(data)   
})
async function fetchData(username) {
    const apiUrl = `https://api.github.com/users/${username}`
    try {
        const res = await fetch(apiUrl)
        if (!res.ok) {
            throw new Error("Failed to fetch data!")
        }
        const data = await res.json()
        return data

    }
    catch (err) {
        console.log(err)
    }
}

async function renderProfile(data) {
    nameElement.textContent = data.name
    usernameElement.textContent = `@${data.login}`
    avatar.src = data.avatar_url
    followers.textContent = data.followers
    locationElement.textContent = data.location
    profileLink.href = data.html_url
    profileContainer.classList.remove("hidden")

    // 
    followers.textContent = data.followers
    following.textContent = data.following
    repos.textContent = data.public_repos
    gists.textContent = data.public_gists
    joinedDateElement.textContent = new Date(data.created_at).toLocaleDateString("en-US",{
        month:"short",
        day:"numeric",
        year:"numeric",
    })
    companyElement.textContent = data.company?data.company:"No Company"
    blogElement.href = data.blog?data.blog:"No Blog"
    blogElement.textContent = data.name.toLowerCase().replaceAll(" ","")
    twitterElement.href = data.twitter_username?data.twitter_username:"No Twitter"
    twitterElement.textContent = data.twitter_username?data.twitter_username.toLowerCase().replaceAll(" ",""):"User Not Found"

}
