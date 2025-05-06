const content = document.querySelector('#content')
let url = 'https://digimon-api.vercel.app/api/digimon'
const hitAPI = async (url) => {
  const api = await fetch(url)
  const data = await api.json()
  console.log(data)
  return data
}
hitAPI(url) 

document.addEventListener('DOMContentLoaded',
  async () => {
    let data = await hitAPI(url)
    let dataHTML = "<ul>"
    data.forEach(e => {
      dataHTML += `
        <li class="list-digimon">
          <img src="${e.img}" class="digimon-img">
          <p>Name : ${e.name}</p>
          <p>Level : ${e.level}</p>
        </li>
      `
    });
    content.innerHTML = dataHTML
  }
)