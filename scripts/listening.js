const lastfm = "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=analvore&api_key=fab3381e36419cce3f2e7e6bb13b5dc0&limit=1&format=json&nowplaying=true";

function callLastFM() {
    fetch(lastfm).then (response => {
        if (!response.ok) {
            var pooperror = "last.fm api error: " + response.status
            var poopimgb64 = "data:image/webp;base64,UklGRn4BAABXRUJQVlA4WAoAAAAQAAAAPwAAPwAAQUxQSAsBAAABDzD/ERECcrb/aZufw6wOoNor9BjOKF2BmcK6xQvkyRzlyiXfOgHJxSszV5KbESL6PwEAwCGPQEiZG6ISywoinqQqEcKTLMF9GAoh8UHxzaWSZlMMKd49KJYFeFBVlSY1no5rHKMaBbjjGVA4qtquH0gNoNoIcgMAbwQBgDvMH+W70hKtMjsYwzftMjv4bXyXKNuOfjO3RO3t6BdzC0V7OZrpNQrFzn00023ML3Seo5mN4PRC51rxYbpRcyX4/EFY1FyJXh8SBMyse90jAM0+n9tRwCwOV6MAaLGMaDUJmi0C3AItAhAVHFkAbrL4IABGZkCD0giy8DVwA/WHZklj9o3+q/9UU9RkNQAAVlA4IEwAAAAwBQCdASpAAEAAPpE6l0eloyIhMAgAsBIJaQAAW+s27S2zBIvkyE3sfqncZMDBRB6yAAD+/EOTrsvu/T1ANP/qEsf+3ML/qoAAAAAA"
            poop = document.createElement('p')
            poop.id = "lastfmp"
            poop.textContent = pooperror
            poopimg = document.createElement('img')
            poopimg.id = "lastfmimg"
            poopimg.src = poopimgb64
            document.getElementById("lastfmp").replaceWith(poop)
            document.getElementById("lastfmimg").replaceWith(poopimg)
            throw new Error("api error status:" + response.status)
        } else {
            return response.json();
        }
    }).then(data => {
        var track = data.recenttracks.track[0]
        var trackurl = track.url
        var trackname = track.name
        var trackartist = track.artist['#text']
        var trackimg = track.image[1]["#text"]

        if (track.image[1]["#text"] == "" || track.image[1]["#text"] == "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png") {
            var trackimg = "data:image/webp;base64,UklGRvoAAABXRUJQVlA4WAoAAAAQAAAAPwAAPwAAQUxQSKUAAAABDzD/ERECjm3tqaqD/miClToMhymlxKGju0zJBsAU0tGmw59dqXh9RP8ngA8aD9roQsBeq6+Er6G+Q3YC2K6SoJ1o31SL8hkJ0wI4K18+a+WVANxebjHAbMQRkGj7PmcmpBNhnyj59idxMejYi9wI0ANg4q5KAR2zVgJMzMq7tqAzGanLGCaTkZcQmHQGngSNtr4Bo3MCOnXqXwmY1KndAFPnfwYAVlA4IC4AAACQAwCdASpAAEAAPpFIoEwlpCMiIggAsBIJaQAAEDdTUAV4hbkAAP74zvV4AAAA"
        }else{
            var trackimg = track.image[1]["#text"]
        }

        if (track["@attr"] == undefined) {
            lastfmp = document.createElement('p')
            lastfmp.id = "lastfmp"
            lastfmp.textContent = "song last listened to:"
        }else{
            lastfmp = document.createElement('p')
            lastfmp.id = "lastfmp"
            lastfmp.textContent = "currently listening to:"
        }
        
        lastfmdiv = document.getElementById('lastfm')

        lastfmlink = document.createElement('a')
        lastfmlink.textContent = trackartist + " - " + trackname
        lastfmlink.target = "_blank"
        lastfmlink.href = trackurl
        lastfmlink.id = "lastfmlink"

        lastfmimg = document.createElement('img')
        lastfmimg.id = "lastfmimg"
        lastfmimg.src = trackimg

        if (document.body.contains(document.getElementById('lastfmp')) == true) {
            document.getElementById("lastfmp").replaceWith(lastfmp)
            document.getElementById("lastfmimg").replaceWith(lastfmimg)
            document.getElementById("lastfmlink").replaceWith(lastfmlink)
        } else{
            lastfmdiv.appendChild(lastfmp)
            lastfmdiv.appendChild(lastfmimg)
            lastfmdiv.appendChild(lastfmlink)
        }
    })
};
callLastFM();
setInterval (function () {
    callLastFM();
}, 5000);
