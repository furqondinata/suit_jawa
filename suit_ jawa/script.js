
// kita buat function lalu membangkitkan nilai random
function getPilihanComputer () {
    const comp = Math.random();
    // ketika kita ketemu return programnya berhenti di return
    if( comp < 0.34 ) return 'gajah' ;
    if( comp >= 0.34 && comp < 0.67 ) return 'orang' ;
    return 'semut' ;
    }
    // buat function hasil yng menerima dua parameter yng pertama pilihan computernya dan yng ke-2 pilihan kita
    function getHasil(comp, player) {
          if( player == comp )  return 'SERI!';
          if( player == 'gajah' ) return ( comp == 'orang' )  ? 'MENANG!' : 'KALAH!';
          if( player == 'orang' ) return  ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
          if( player == 'semut' ) return ( comp == 'orang' ) ? 'KALAH' : 'MENANG!'; 
     }

// membuat function untuk memutar gambarnya
     function putar() {
        //  saya ambil dulu gambarnya
         const imgComputer = document.querySelector('.img-komputer');
        //  kita buat variabel gambar
         const gambar = ['gajah', 'semut', 'orang'];
         let i = 0;
        //  kita buat waktu awal untuk fungsi putar
         const waktuMulai = new Date().getTime();
        //  fungsi untuk melakukan sesuatu secara berulang ulang selama interval wktu tertentu
        // jalankan interval
         setInterval(function() {
            //  setiap pengulangan dari waktu mulai 
             if( new Date().getTime() - waktuMulai >1000) {
                //  pas seribu milisekon di berhentikan
                clearInterval;
                // return agar keluar dari fungsinya kalo tidak akan muter terus
                 return;
             }
            //  kita ambil image komputernya dengan mengganti image atributenya berdasarkan nilai i
             imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
            //  mengembalikan gambar di balikin lagi ke awal
             if(i == gambar.length)   i =0;
         }, 100)
     }

    //  kita seleksi gambar yng ada pada li kita
     const pilihan = document.querySelectorAll('li img');
    //  kita looping imagenya, kita kasi parameter u/ mengambil tiap2 imagenya
     pilihan.forEach(function(pil) {
        //  dia akan mengambil gambar yng di klik saja
            pil.addEventListener('click', function () {
                // gambar  pilihan komputer
                const pilihanComputer = getPilihanComputer();
                // untuk menentukan gambar yang di klik saja untuk pemilih player
                     const pilihanPlayer =pil.className;
                    //  untuk menampilak hasilnya
                     const hasil = getHasil(pilihanComputer, pilihanPlayer);
                    // kita panggil fungsi putar
                    putar();
                    // nunggu selama satu detik lalu jalankan function berikut
                    setTimeout(function() {
                        const imgComputer = document.querySelector('.img-komputer');
                        imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
                
                        const info = document.querySelector('.info');
                        info.innerHTML = hasil;
                    }, 1000);
                }); 
            });
     






    // kita seleksi dulu tombol elemen yng classnya gajah
    //  const pGajah = document.querySelector('.gajah');
    // ketika event gambar gajah di  klik
    //  pGajah.addEventListener('click', function() {
        // kita ambil pilihan komputer
    //      const pilihanComputer = getPilihanComputer();
    // kita ambil pilihan kita diambil bedasarkan nama kelasnya
    //      const pilihanPlayer =pGajah.className;
    // untuk menampilkan hasilnya
    //      const hasil = getHasil(pilihanComputer, pilihanPlayer);
    //     //  console.log('comp :' + pilihanComputer);
    //     //  console.log('player :' + pilihanPlayer);
    //     //  console.log('hasil :' + hasil);
    // mengganti gambar komputer
    //     const imgComputer = document.querySelector('.img-komputer');
    //  kita ganti gambarnya dengan memanipulasi atributnya
    //     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
// memasukkan hasilnya menang, kalah, serinya
    //     const info = document.querySelector('.info');
    //     info.innerHTML = hasil;
    //  });

    //  const pOrang = document.querySelector('.orang');
    //  pOrang.addEventListener('click', function() {
    //      const pilihanComputer = getPilihanComputer();
    //      const pilihanPlayer =pOrang.className;
    //      const hasil = getHasil(pilihanComputer, pilihanPlayer);
    //     //  console.log('comp :' + pilihanComputer);
    //     //  console.log('player :' + pilihanPlayer);
    //     //  console.log('hasil :' + hasil);
    //     const imgComputer = document.querySelector('.img-komputer');
    //     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

    //     const info = document.querySelector('.info');
    //     info.innerHTML = hasil;
    //  });
    

    //  const pSemut = document.querySelector('.semut');
    //  pSemut.addEventListener('click', function() {
    //      const pilihanComputer = getPilihanComputer();
    //      const pilihanPlayer =pSemut.className;
    //      const hasil = getHasil(pilihanComputer, pilihanPlayer);
    //     //  console.log('comp :' + pilihanComputer);
    //     //  console.log('player :' + pilihanPlayer);
    //     //  console.log('hasil :' + hasil);
    //     const imgComputer = document.querySelector('.img-komputer');
    //     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

    //     const info = document.querySelector('.info');
    //     info.innerHTML = hasil;
    //  });

    
