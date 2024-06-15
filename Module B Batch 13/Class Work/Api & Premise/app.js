let arrobj = [
  {
    p_id: 1,
    p_name: "Samsung A2",
    p_img_src:
      "https://images.priceoye.pk/samsung-galaxy-a2-core-pakistan-priceoye-jgy1e.jpg",
  },
  {
    p_id: 2,
    p_name: "infinix note 7",
    p_img_src:
      "https://images.priceoye.pk/infinix-note-7-pakistan-priceoye-j870u.jpg",
  },
  {
    p_id: 3,
    p_name: "realme c53",
    p_img_src:
      "https://www.moosani.pk/images/product_gallery/1715602323_gold.webp",
  },
  {
    p_id: 4,
    p_name: "iphone11",
    p_img_src:
      "https://regen.pk/cdn/shop/files/REGEN-iPhone11-Backfront-Purple-Pakistan.png?v=1684752662",
  },
  {
    p_id: 5,
    p_name: "qmobile",
    p_img_src:
      "https://qmobile.com.pk/cdn/shop/files/Main-Image_0b3fbc87-845f-4f4c-a511-3309c4b6a9f9_1024x1024.png?v=1707292182",
  },
];

arrobj.map((e) => {
  const product_grid = document.querySelector("#product_grid");
  product_grid.innerHTML += `<div class="card" id="${e.p_id}" style="width: 18rem;">
  <img src="${e.p_img_src}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${e.p_name}</h5>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`;
});

let data;
const resData = fetch("https://api.github.com/users")
  .then((res) => res.json())
  .then((res) => (data = res))
  .catch((err) => err);

console.log(data);

const dataNew = new Promise((resolve, reject) => {
  fetch("https://api.github.com/users")
    .then((res) => res.json())
    .then((resp) => resolve(resp))
    .catch((err) => reject(err));
});
const promiseData = dataNew.then((res) => console.log(res)).catch((err) => err);
console.log(promiseData);

const resDataFunc = async () => {
  await fetch("https://api.github.com/users")
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
resDataFunc();
