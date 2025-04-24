const LinksSocialMedia = {
  github: 'lucasfmp19',
  youtube: '',
  instagram: 'lucas.fmp',
  facebook: 'profile.php?id=100003118382370',
  twitter: 'lukinhafmp'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

// changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

//getGitHubProfileInfos()

//função fetch: vai até a url passada para ele e nos trás para documento o que ela forneceu, porém, o fetch não sabe o formato do documento. Dentro do then é um arrow function transformando a resposta do fetch em json Um "then" pega a resposta do outro.
