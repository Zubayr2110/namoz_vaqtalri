const box = document.querySelector('.box')

const inp = document.getElementById('inp')
const btn = document.getElementById('btn')

function fetchUrl(url) {
        fetch(url, {
                method: 'POSTS',
                body: JSON.stringify({
                        title: inp.ariaValueMax,
                        body: 'hello students',
                        userId: 1,
                    }),
                    headers: {
                            'Content-type': 'application/json; charset=UTF-8',
                        }
                    })
                    .then((res) => res.json())
                    .then((data) => console.log(data))
                }
                
                btn.addEventListener('click', () => {
                        fetchUrl(url)
                        console.log('lksndv');
                    })
let url = 'https://jsonplaceholder.typicode.com/posts'
let uri = 'https://jsonplaceholder.typicode.com/posts/1'

fetch(uri, {
    method: 'PUT',
    body: JSON.stringify({
        id: 2,
        title: 'kldsnbvo',
        body: 'kladfnb',
        userId: 2,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
})
.then((res) => res.json())
.then((data) => console.log(data))
fetch(uri, {
    
})


const select = document.getElementById('select')

select.addEventListener('change', (e) => {
    let url = `https://islomapi.uz/api/present/day?region=${e.target.value}`
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        const { tong_saharlik, quyosh, peshin, asr, shom, hufton } = 
        data.times;
        box.innerHTML = `
            <h2>tong: ${tong_saharlik}</h2>
            <h2>quyosh: ${quyosh}</h2>
            <h2>peshin: ${peshin}</h2>
            <h2>asr: ${asr}</h2>
            <h2>shom: ${shom}</h2>
            <h2>hufton: ${hufton}</h2>
        `
    })
}) 