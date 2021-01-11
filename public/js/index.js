
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    fetch('/stage?ans=' + document.getElementById('stage1').value ).then((response) => {
            response.json().then((data) => {
            console.log(data)
                if(data.isCorrect){
                    console.log(data)
                    document.getElementsByTagName('body')[0].innerHTML = '<p>abv</p>'
                }
        })
    })
})

