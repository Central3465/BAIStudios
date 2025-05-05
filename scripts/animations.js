let statsPlayed = false

let Visits = 0
let GroupMembers = 0
let DiscordMembers = 0

function PlayStats() {
    statsPlayed = true

    let i = 0;
    let b = 0;
    let c = 0;
    let d = 0;

    while (i<Visits+1) {
        visitsLoop(i);
        i += 1
    }

    while (b<GroupMembers+1) {
        membersLoop(b)
        b += 1
    }

    while (c<3+1) {
        gamesLoop(c)
        c += 1
    }

    while (d<DiscordMembers+1) {
        discordLoop(d)
        d += 1
    }

    function visitsLoop(i){
        setTimeout(function(){
            document.getElementById("visits-index").innerHTML = `<center>${i}M+</center>`;
        }, 10 * i)
    }  

    function membersLoop(b){
        setTimeout(function(){
            document.getElementById("members-index").innerHTML = `<center>${b}M+</center>`;
        }, 10 * b)
    }      
    
    function gamesLoop(c){
        setTimeout(function(){
            document.getElementById("games-index").innerHTML = `<center>${c}</center>`;
        }, 200 * c) 
    }

    function discordLoop(d){
        setTimeout(function(){
            document.getElementById("discord-index").innerHTML = `<center>${d}K+</center>`;
        }, 10 * d) 
    }
}

$(window).scroll(function(){
    // Arrow Opacity Handler 

    document.getElementById("arrow").style.opacity = 2 - $(window).scrollTop() / 250;

    // Stats Animation Handler

    if (!statsPlayed) {
        if (($(window).scrollTop() / 250) >= 2.4) {
            if (Visits == 0) {
                setTimeout(function(){
                    PlayStats()
                }, 1000)               
            } else {
                PlayStats()
            }          
        }
    }
});


fetch("https://games.roproxy.com/v1/games?universeIds=2111380968,1742264997,6246146179")
    .then((response) => {
      return response.json();
    }).then(data => {
        console.log(data)

        Visits += data.data[0].visits
        Visits += data.data[1].visits
        Visits += data.data[2].visits

        Visits = Math.round(Visits / 1000000)

        console.log(Visits)
        
        document.getElementById("006-count").innerHTML = `<i class=\"fa-solid fa-person\"></i> ${data.data[0].playing.toLocaleString('en', {useGrouping:true})} Players`;
        document.getElementById("glacier-count").innerHTML = `<i class=\"fa-solid fa-person\"></i> ${data.data[2].playing.toLocaleString('en', {useGrouping:true})} Players`;
        document.getElementById("scp-count").innerHTML = `<i class=\"fa-solid fa-person\"></i> ${data.data[1].playing.toLocaleString('en', {useGrouping:true})} Players`;

        document.getElementById("006-visits").innerHTML = `<i class="fa-solid fa-circle-play"></i> ${data.data[0].visits.toLocaleString('en', {useGrouping:true})} Visits`;
        document.getElementById("006-favourites").innerHTML = `<i class="fa-solid fa-star"></i>${data.data[0].favoritedCount.toLocaleString('en', {useGrouping:true})} Favourites`;
    
        document.getElementById("scp-visits").innerHTML = `<i class="fa-solid fa-circle-play"></i> ${data.data[1].visits.toLocaleString('en', {useGrouping:true})} Visits`;
        document.getElementById("scp-favourites").innerHTML = `<i class="fa-solid fa-star"></i> ${data.data[1].favoritedCount.toLocaleString('en', {useGrouping:true})} Favourites`;
            
        document.getElementById("glacier-visits").innerHTML = `<i class="fa-solid fa-circle-play"></i> ${data.data[2].visits.toLocaleString('en', {useGrouping:true})} Visits`;
        document.getElementById("glacier-favourites").innerHTML = `<i class="fa-solid fa-star"></i> ${data.data[2].favoritedCount.toLocaleString('en', {useGrouping:true})} Favourites`;
    })

fetch("https://groups.roproxy.com/v1/groups/5479038")
    .then((response) => {
      return response.json();
    }).then(data => {
        GroupMembers += Math.round(data.memberCount / 1000000)
    })

fetch("https://groups.roproxy.com/v1/groups/4965800")
    .then((response) => {
      return response.json();
    }).then(data => {       
        GroupMembers += Math.round(data.memberCount / 1000000)
    })


fetch("https://discord.com/api/v9/invites/nc?with_counts=true&with_expiration=true")
    .then((response) => {
      return response.json();
    }).then(data => {
        DiscordMembers += Math.round(data.approximate_member_count / 1000)   
    })

fetch("https://discord.com/api/v9/invites/scprp?with_counts=true&with_expiration=true")
    .then((response) => {
      return response.json();
    }).then(data => {
        DiscordMembers += Math.round(data.approximate_member_count / 1000)
        console.log(DiscordMembers)   
    })