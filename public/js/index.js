const changeURL = (url) => {
    console.log(document.getElementById('host').src)
}

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    fetch('/stage?ans=' + document.getElementById('stage1').value ).then((response) => {
            response.json().then((data) => {
            console.log(data)
                if(data.isCorrect){
                    console.log(data)
                    console.log(window.location)
                    window.location.pathname = "/aADBjSAKDNjadnkaDajdbJ.html"
                }
                else{
                    window.location.pathname = "/aADBjSAKDNjadnkaDbjdbJ.html"
                }
        })
    })
})

