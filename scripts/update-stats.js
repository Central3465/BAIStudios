fetch("https://games.roproxy.com/v1/games?universeIds=7004758240").then( (response) => {
    return response.json();
}
).then(data => {
    document.getElementById("006-count").innerHTML = `<i class=\"fa-solid fa-person\"></i> ${data.data[3].playing.toLocaleString('en', {
        useGrouping: true
    })} Players`;
    document.getElementById("006-visits").innerHTML = `<i class="fa-solid fa-circle-play"></i> ${data.data[3].visits.toLocaleString('en', {
        useGrouping: true
    })} Visits`;
    document.getElementById("006-favourites").innerHTML = `<i class="fa-solid fa-star"></i> ${data.data[3].favoritedCount.toLocaleString('en', {
        useGrouping: true
    })} Favourites`;
}
)
