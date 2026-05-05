const apiKey = "YOUR_YOUTUBE_API_KEY"; 
const channelId = "UC";// UCijyeLaer-XqE2IwN8ZUPsw

async function loadVideos() {
  const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=6`;

  const res = await fetch(url);
  const data = await res.json();

  const container = document.getElementById("youtube-container");

  data.items.forEach(video => {
    if (video.id.videoId) {
      const videoCard = `
        <div class="card">
          <a href="https://www.youtube.com/watch?v=${video.id.videoId}" target="_blank">
            <img src="${video.snippet.thumbnails.medium.url}">
            <p>${video.snippet.title}</p>
          </a>
        </div>
      `;
      container.innerHTML += videoCard;
    }
  });
}

loadVideos();
