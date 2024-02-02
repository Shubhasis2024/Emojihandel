const wrapper = document.querySelector(".wrapper");
const meaning = document.querySelector(".meaning");

async function emojifun() {
    const getdata=  await fetch("https://emoji-api.com/emojis?access_key=f21600a3b82dd0929c22348d4a7789f4bdb691c2")
    const data= await getdata.json()
    

    data.map((element) => {
        const btn = document.createElement("button");
        btn.innerText=element.character;
        btn.addEventListener("click", (e) => {
          meaning.innerHTML = `Meaning : ${element.subGroup}`
          });
        wrapper.append(btn);
    })
    

}
emojifun()