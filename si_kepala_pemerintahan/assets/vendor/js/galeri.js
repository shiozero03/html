var foto, fotomenu, video, videomenu;
fotomenu = document.getElementById('foto-menu');
videomenu = document.getElementById('video-menu');

function changegaleri(){
  if(document.getElementById('cat-galeri').value == 'foto'){
    fotomenu.classList.remove('d-none')
    videomenu.classList.add('d-none')
  } else {
    fotomenu.classList.add('d-none')
    videomenu.classList.remove('d-none')
  }
}