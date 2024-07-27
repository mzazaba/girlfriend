document.addEventListener('DOMContentLoaded', function() {
    const musicIcon = document.getElementById('music-icon');
    const backgroundMusic = document.getElementById('background-music');
    let musicPlaying = false; // 记录音乐是否正在播放
    let musicCurrentTime = 0; // 记录音乐当前播放时间

    // 点击音乐图标控制音乐播放与暂停
    musicIcon.addEventListener('click', function() {
        if (!musicPlaying) { // 如果音乐没有播放
            playMusic();
        } else { // 如果音乐正在播放
            pauseMusic();
        }
    });

    // 播放音乐函数
    function playMusic() {
        backgroundMusic.currentTime = musicCurrentTime; // 设置音乐播放时间为记录的时间点
        backgroundMusic.play(); // 播放音乐
        musicPlaying = true; // 更新音乐状态为正在播放
        musicIcon.classList.add('playing'); // 添加播放时的样式
    }

    // 暂停音乐函数
    function pauseMusic() {
        backgroundMusic.pause(); // 暂停音乐
        musicCurrentTime = backgroundMusic.currentTime; // 记录当前音乐播放时间
        musicPlaying = false; // 更新音乐状态为暂停
        musicIcon.classList.remove('playing'); // 移除播放时的样式
    }

    // 监听音乐播放状态变化
    backgroundMusic.addEventListener('playing', function() {
        musicPlaying = true;
        musicIcon.classList.add('playing');
    });

    backgroundMusic.addEventListener('pause', function() {
        musicPlaying = false;
        musicIcon.classList.remove('playing');
    });
});
