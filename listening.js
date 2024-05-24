const lastfm = "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=analvore&api_key=fab3381e36419cce3f2e7e6bb13b5dc0&limit=1&format=json&nowplaying=true";

function callLastFM() {
    fetch(lastfm).then (response => {
        if (!response.ok) {
            var pooperror = "last.fm api error: " + response.status
            poop = document.createElement('p')
            poop.id = "lastfmp"
            poop.textContent = pooperror
            document.getElementById("lastfmp").replaceWith(poop)
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
            var trackimg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAFxGAABcRgEUlENBAAAAG3RFWHRTb2Z0d2FyZQBDZWxzeXMgU3R1ZGlvIFRvb2zBp+F8AAACjElEQVR4nO2bWXLDMAiG8fQivf+l2oM0oz654xLAP4tkeeGtDZu+IAmTZGmt0Z1leQAAAF7f1D4+aYkEkGwz/qpFBLAm+PqmQ8qDx15haflkYP4BOGqxo0SDtLTWdhe/NUbLl+utMTRfSA6SjrS90LUQES0/X/IhMMsejYgGnwgAcOaFawIDuOLiid63xXadt6sAIgaAH4I9ARx1/x9eAaMAI/F5DqcBkK0eLYfUFkDtPP6te3wqAFZZocERn544lmh+ygBYtoh/zZ8njiVTA/C2uBVVkALg2afexaMVkqmC9BnA9S37KgCIL2/eRB0AcB97C4zeEFMBsJK7DQDt/54tcHkAlv5e7MpDcGtfCkB6raICejZDXQFw8dwCPQagQwBowby6klQ8qPFeoCuATFe5laon1KEVkEmu18ygBEDVgXSETF0BI6QMwFnlAVDVCJ1VLl0BSON0egBrbxFtnKbYApXTJ008zxTDPxmyXvc8V2g2nvgpAJGGKNLySnO8aDNW1glGxtXoxAjJwfKH2qx24jdEPIMJLpHReLaahlcA1/U+HmdHYxF9zebtS1KRsRTyDlaOxxF/qI34LbFsGVeMvoYCqJjLZcbfkYOw6tyAKyBb5p6GJnKlDgWAAOK61XO/qjMDAhBpRyVf1sh8+78eFaDpdwWAnAPRRkjz59V1A9i7+6M3ReRzgG4AuFJVk7IHwGqxpa0R7WBdAKruW48vtBqi/qYHYCWv5Wb5PBRA1pflV4qB2HYHoNlVAPBclVIuPLbrEOw9LustErh/vxm6ykI98gBAtsCVBf7VmNakSDqIbqWg8aQ3VdwCVxbzEFwFHX1ZAaxubnvWWK2v9jcSH5Xnt8MPgJsD+AXjNhO9pUWHaQAAAABJRU5ErkJggg=="
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
