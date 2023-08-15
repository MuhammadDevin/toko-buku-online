document.querySelectorAll(".btnDetail").forEach((item) => {
  item.addEventListener("click", (e) => {
    let parent = e.target.parentNode.parentNode;
    let gambar = parent.querySelector(".card-img-top").src;
    let harga = parent.querySelector(".harga").innerHTML;
    let judul = parent.querySelector(".card-text").innerHTML;
    let deskripsi = parent.querySelector(".deskripsi")
      ? parent.querySelector(".deskripsi").innerHTML
      : "<i>tidak informasi yang tersedia</i>";
    
    let tombolModal = document.querySelector('.btnModal');
    tombolModal.click();

    // menampilkan judul
    document.querySelector('.modalTitle').innerHTML = judul;

    // menampilkan gambar
    let image = document.createElement('img');
    image.src = gambar;
    image.classList.add('w-100');
    document.querySelector('.modalImage').innerHTML = '';
    document.querySelector('.modalImage').appendChild(image);

    // menampilkan informasi
    document.querySelector('.modalDeskripsi').innerHTML = deskripsi;

    // menampilkan informasi harga
    document.querySelector(".modalHarga").innerHTML = harga;

    const nohp = '6282210545862';
    let pesan = 'https://api.whatsapp.com/send?phone=${nohp}&text=Halo, saya mau pesan produk ini ${gambar}';

    document.querySelector('.btnBeli').href = pesan;

  });
});
