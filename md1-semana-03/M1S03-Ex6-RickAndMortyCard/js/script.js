async function search () {
    const response = await fetch('https://rickandmortyapi.com/api/character/11')
    const data = await response.json()
    console.log(data)
    document.getElementById('avatar_url').src = data?.image; 
    document.getElementById('name').innerHTML = data?.name;
    document.getElementById('status').innerHTML = data?.status;
    document.getElementById('gender').innerHTML = data?.gender;
    document.getElementById('location').innerHTML = data?.location.name;
        
}
search()




