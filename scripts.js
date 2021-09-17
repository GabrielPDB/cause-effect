const people = [
  {
    id: 1,
    name: 'JOSE MIRANDA PEREIRA',
    street: 'Rua de asfalto',
    city: 'São Paulo',
    state: 'São Paulo',
    country: 'Brasil',
    telephone: '(62) 47278-0465',
    birthday: '30/03'
  },
  {
    id: 2,
    name: 'CARLOS SILVA MEDEIROS',
    street: 'Rua Principal',
    city: 'Maceió',
    state: 'Alagoas',
    country: 'Brasil',
    telephone: '(82) 14646-9268',
    birthday: '17/09'
  },
  {
    id: 3,
    name: 'CARLOS ALMEIDA PEREIRA',
    street: 'Rua Pernambuco',
    city: 'Itabira',
    state: 'Minas Gerais',
    country: 'Brasil',
    telephone: '(31) 95144-8104',
    birthday: '17/09'
  },
  {
    id: 4,
    name: 'PEDRO COSTA REIS',
    street: 'Rua Ceará',
    city: 'Formosa',
    state: 'Goiás',
    country: 'Brasil',
    telephone: '(62) 93716-7351',
    birthday: '17/09'
  }
]

const peopleList = document.querySelector('#peopleList')

people.forEach(person => {
  peopleList.innerHTML += `
  <li>
    <h4 onclick="toggleInfos(${person.id})">${person.name.split(' ')[0]}</h4>
    <div class="infos">
      <p>${person.name}</p>
      <p>Endereço: ${person.street}</p>
      <p>Telefone: ${person.telephone}</p>
      <p>Aniversário: ${person.birth}</p>
    </div>
  </li>
  `
})

const toggleInfos = id => {
  document.querySelectorAll('.infos')[id - 1].classList.toggle('active')
}
