videoUrl = "https://player.vimeo.com/video/356035233";
password = "portfolio";
state = {
    isLoaded: false
};

openVideo = () => {
    let videoKey = `${this.state.videoUrl}${this.state.password}`;
    axios.get(videoKey).then(this.state.isLoaded === true);
};




<script src="https://fast.wistia.com/embed/medias/zejsug121b" async></script>
    <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
    <div
        className="wistia_responsive_padding"
        style={{ padding: (92.5, 0, 0, 0), position: 'relative' }}
    >
        <div
            className="wistia_responsive_wrapper"
            style={{ height: 100, left: 0, position: 'absolute', top: 0, width: 100 }}
        >
            <div
                class="wistia_embed wistia_async_zejsug121b"
                videoFoam="true"
                style={{ height: 100, position: 'relative', width: 100 }}
            >
                &nbsp;
							</div>
        </div>
    </div>