const lastfm = "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=analvore&api_key=fab3381e36419cce3f2e7e6bb13b5dc0&limit=1&format=json&nowplaying=true";

function callLastFM() {
    fetch(lastfm).then (response => {
        if (!response.ok) {
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
