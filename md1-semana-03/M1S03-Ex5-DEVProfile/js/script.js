async function search () {
    const response = await fetch('https://api.github.com/users/DeiseFAS')
    const data = await response.json()
    console.log(data)
    document.getElementById('avatar_url').src = data?.avatar_url; 
    document.getElementById('name').innerHTML = data?.name;
    document.getElementById('bio').innerHTML = data?.bio;
    document.getElementById('location').innerHTML = data?.location;

    document.getElementById('linkGithub').setAttribute("href", data?.html_url)
    document.getElementById("linkLinkedin").setAttribute("href", data?.blog)
        
}
search()