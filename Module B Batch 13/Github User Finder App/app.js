const userSearch = "Ahsan-Ah-med";

const userFetch = async (search) => {
  console.log(search)
  await fetch(`https://api.github.com/users/${search}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      document.querySelector(".userCards").innerHTML = `
      <div class="card">
        <button button class="mail" >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
        </button >
        <div class="profile-pic">
          <img src="${data?.avatar_url}" />
        </div>
        <div class="bottom">
          <div class="content">
            <span class="name">User Name: ${data?.login}</span>
            <span class="name">Name: ${data?.name}</span>
            <span class="about-me">${data?.bio}</span>
          </div>
          <div class="bottom-bottom">
            <div class="social-links-container">
              <div class="followers"><img src="./icon/follower.png" />${data?.followers}</div>
              <div class="followers"><img src="./icon/following.png" />${data?.following}</div>
              <div class="followers"><img src="./icon/repos.png" />${data?.public_repos}</div>
            </div>
            <a href="${data?.html_url}" target="_blank" class="button">Contact Me</a>
          </div>
        </div>
      </div > `
    })
}

document.querySelector('.form').addEventListener('submit', (e) => {
  let search = document.querySelector("#search").value;
  e.preventDefault();
  userFetch(search)
})

// const userload = async () => {
//   await fetch(`https://api.github.com/users`)
//     .then((res) => res.json())
//     .then((data) => {
//       data.map(async (e) => {
//         document.querySelector(".userCards").innerHTML += `<div class="card">
//         <button class="mail">
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
//         </button>
//         <div class="profile-pic">
//             <img src="${e?.avatar_url}"/>
//         </div>
//         <div class="bottom">
//             <div class="content">
//                 <span class="name">${e?.login}</span>
//                 <span class="about-me">Lorem ipsum dolor sit amet consectetur adipisicinFcls </span>
//             </div>
//             <a href="${e?.html_url}" target="_blank" class="button">Contact Me</a>
//            </div>
//         </div>
//     </div>`;
//       });
//     })
//     .catch((err) => console.log(err));
// };

// userload();
