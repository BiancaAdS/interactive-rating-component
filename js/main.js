
function submit() {

    var rate = document.getElementsByClassName('active')[0].textContent

    var container_rate = document.getElementById('rate-box')
    var container_result = document.getElementById('result-box')

    var rate_change = document.getElementById('select-rate')

    rate_change.textContent = rate
    container_rate.style.display = 'none'
    container_result.style.display = 'flex'
}