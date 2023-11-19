let playbtn = document.getElementById('play-btn');
var pausebtn = document.getElementById('pause-btn');
var music = document.getElementById('music');
function playMusic() {
    music.play();
    playbtn.style.display = 'none';
    pausebtn.style.display = 'flex';
}

function pauseMusic() {
    music.pause();
    playbtn.style.display = 'flex';
    pausebtn.style.display = 'none';
}

/**Tạo ảnh avt ngẫu nhiên */
var randNum = Math.floor(Math.random() * 3);
let avt = document.getElementById('avt');

function randAvt() {
    if (randNum === 0) {
        var dataAvt = `<img src="assets/img/vip2.png"
        width="150px" height="150px" alt="">`
        avt.innerHTML = dataAvt;
    }
    else if (randNum === 1) {
        var dataAvt = `<img src="assets/img/vip1.jpg"
        width="150px" height="150px" alt="">`
        avt.innerHTML = dataAvt;
    }
    else if (randNum === 2) {
        var dataAvt = `<img src="assets/img/vip3.png"
        width="150px" height="150px" alt="">`
        avt.innerHTML = dataAvt;
    }
    else {
        var dataAvt = `<img src="assets/img/vip5.png"
        width="150px" height="150px" alt="">`
        avt.innerHTML = dataAvt;
    }
}
randAvt();

