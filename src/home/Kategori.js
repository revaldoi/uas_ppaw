import React from "react";

export default function Kategori() {
  const lists = [
    "ELektronik",
    "Handphone & Tablet",
    "Laptop & Aksesoris",
    "Fashion wanita",
    "Fashion Pria",
    "Otomotif",
    "Kecantikan",
    "Perawatan Tubuh",
    "Lain-Lain"
  ];

  const urls = [
    "https://image.flaticon.com/icons/svg/2160/2160324.svg",
    "https://www.flaticon.com/premium-icon/icons/svg/284/284286.svg",
    "https://image.flaticon.com/icons/svg/230/230306.svg",
    "https://image.flaticon.com/icons/svg/770/770088.svg",
    "https://image.flaticon.com/icons/svg/892/892458.svg",
    "https://image.flaticon.com/icons/svg/822/822123.svg",
    "https://image.flaticon.com/icons/svg/1585/1585286.svg",
    "https://image.flaticon.com/icons/svg/1568/1568063.svg",
    "https://image.flaticon.com/icons/svg/1142/1142172.svg",
    "https://image.flaticon.com/icons/svg/1830/1830796.svg",
    "https://image.flaticon.com/icons/svg/189/189810.svg"
  ];

  const kategori = urls.map((lists, urls) => (
    <div class="col-md-2 col-sm-6 col-6 nopadding text-center border">
      <img class="kategori mt-3" src={urls} alt={lists} />
      <p class="mt-3">{lists}</p>
    </div>
  ));

  return (
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h5>KATEGORI</h5>
          <React.Fragment>{kategori}</React.Fragment>
        </div>
      </div>
    </div>
  );
}
