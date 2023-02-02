var open, close, menu;
open = document.getElementById('open');
close = document.getElementById('close');
menu = document.getElementById('resp-menu');

open.addEventListener('click', function(){
  close.classList.remove('d-none')
  open.classList.add('d-none')
  menu.classList.remove('d-none')
})
close.addEventListener('click', function(){
  close.classList.add('d-none')
  open.classList.remove('d-none')
  menu.classList.add('d-none')
})
function pemerintahan(){
  document.getElementById('menudropdown-2').classList.toggle('d-none')
  document.getElementById('menudropdown-1').classList.add('d-none')
  document.getElementById('menudropdown-0').classList.add('d-none')
}
function pers(){
  document.getElementById('menudropdown-2').classList.add('d-none')
  document.getElementById('menudropdown-1').classList.toggle('d-none')
  document.getElementById('menudropdown-0').classList.add('d-none')
}
function walikota(){
  document.getElementById('menudropdown-2').classList.add('d-none')
  document.getElementById('menudropdown-1').classList.add('d-none')
  document.getElementById('menudropdown-0').classList.toggle('d-none')
}
function walikotaResp(){
  document.getElementById('walikotaresp-1').classList.toggle('d-none')
  document.getElementById('walilkotaresp-i-1').classList.toggle('d-none')
  document.getElementById('walilkotaresp-i2-1').classList.toggle('d-none')
  document.getElementById('persresp-1').classList.add('d-none')
  document.getElementById('persresp-i-1').classList.remove('d-none')
  document.getElementById('persresp-i2-1').classList.add('d-none')
  document.getElementById('pemerintahan-1').classList.add('d-none')
  document.getElementById('pemerintahanresp-i-1').classList.remove('d-none')
  document.getElementById('pemerintahanresp-i2-1').classList.add('d-none')
}
function persResp(){
  document.getElementById('walikotaresp-1').classList.add('d-none')
  document.getElementById('walilkotaresp-i-1').classList.remove('d-none')
  document.getElementById('walilkotaresp-i2-1').classList.add('d-none')
  document.getElementById('persresp-1').classList.toggle('d-none')
  document.getElementById('persresp-i-1').classList.toggle('d-none')
  document.getElementById('persresp-i2-1').classList.toggle('d-none')
  document.getElementById('pemerintahan-1').classList.add('d-none')
  document.getElementById('pemerintahanresp-i-1').classList.remove('d-none')
  document.getElementById('pemerintahanresp-i2-1').classList.add('d-none')
}
function pemerintahanResp(){
  document.getElementById('walikotaresp-1').classList.add('d-none')
  document.getElementById('walilkotaresp-i-1').classList.remove('d-none')
  document.getElementById('walilkotaresp-i2-1').classList.add('d-none')
  document.getElementById('persresp-1').classList.add('d-none')
  document.getElementById('persresp-i-1').classList.remove('d-none')
  document.getElementById('persresp-i2-1').classList.add('d-none')
  document.getElementById('pemerintahan-1').classList.toggle('d-none')
  document.getElementById('pemerintahanresp-i-1').classList.toggle('d-none')
  document.getElementById('pemerintahanresp-i2-1').classList.toggle('d-none')
}