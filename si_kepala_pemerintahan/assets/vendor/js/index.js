function faqshow(id){
  document.getElementById('answer-'+id).classList.toggle('d-none')
}
window.setTimeout("waktu()", 1000);
function waktu(){
  const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  var waktu = new Date();
  setTimeout("waktu()", 1000);
  document.getElementById('tanggal_date').innerHTML = days[waktu.getDay()]+', '+waktu.getDate()+' '+months[waktu.getMonth()]+' '+waktu.getFullYear()+' | '+waktu.getHours()+' : '+waktu.getMinutes()+' : '+waktu.getSeconds()+' WIB'
}