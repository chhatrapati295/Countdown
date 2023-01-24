const endDate = 'November 15 2023 12:00 AM'
const inputs = document.querySelectorAll('input')
document.getElementById('endDate').innerText = endDate
const clock = ()=>{
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000
    inputs[0].value = Math.floor(diff / 3600 / 24)
    inputs[1].value = Math.floor((diff /3600) % 24)
    inputs[2].value = Math.floor((diff / 60)% 60)
    inputs[3].value = Math.floor((diff)% 60)
}
setInterval(() => {
    clock()
}, 1000);