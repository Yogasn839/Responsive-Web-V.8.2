function getpilihancomputer() {
    const com = Math.random();
    if (com < 0.34) return 'gunting';
    if (com >= 0.34 && com < 0.67) return 'batu';
    return 'kertas';


}

function getHasil(com, player) {
    if (player == com) return 'SERI';
    if (player == 'batu') return (com == 'gunting') ? 'MENANG' : 'KALAH';
    if (player == 'kertas') return (com == 'batu') ? 'MENANG' : 'KALAH';
    if (player == 'gunting') return (com == 'kertas') ? 'MENANG' : 'KALAH';
}

const pbatu = document.querySelector('.batu');
pbatu.addEventListener('click', function() {
    const pilihancomputer = getpilihancomputer();
    const pilihanplayer = pbatu.className;
    const hasil = getHasil(pilihancomputer, pilihanplayer);
    const vs = document.querySelector('.vs');
    vs.innerHTML = hasil;



});
const pkertas = document.querySelector('.kertas');
pkertas.addEventListener('click', function() {
    const pilihancomputer = getpilihancomputer();
    const pilihanplayer = pkertas.className;
    const hasil = getHasil(pilihancomputer, pilihanplayer);
    const vs = document.querySelector('.vs');
    vs.innerHTML = hasil;



});
const pgunting = document.querySelector('.gunting');
pgunting.addEventListener('click', function() {
    const pilihancomputer = getpilihancomputer();
    const pilihanplayer = pgunting.className;
    const hasil = getHasil(pilihancomputer, pilihanplayer);
    const vs = document.querySelector('.vs');
    vs.innerHTML = hasil;


});