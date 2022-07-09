//? api = https://api.adviceslip.com


const button = document.getElementById("cta");
const advise = document.getElementById("advise");
const uid = document.getElementById("uid");

async function getAdvise() {
    const response = await axios.get("https://api.adviceslip.com/advice")

    const id = response.data.slip.id;
    const advice = response.data.slip.advice;

    uid.textContent = `# ${id}`;
    advise.textContent = advice;
}

button.addEventListener("click", getAdvise);

getAdvise();
