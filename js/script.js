const vagas = [
  { 
    id: 1, 
    titulo: "Desenvolvedor(a) FrontEnd React", 
    empresa: "Empresa Simulada", 
    tipo: "remoto", // Mantido como remoto
    tecnologias: ['React', 'TypeScript', 'CSS'], 
    salario: 'R$6.000 - R$9.000', 
    local: "Remoto" 
  },
  { 
    id: 2, 
    titulo: "Backend Node js", 
    empresa: "Empresa Simulada", 
    tipo: "hibrido", 
    tecnologias: ['Node.js', 'SQL'], 
    salario: 'R$7.000 - R$10.000', 
    local: "Uberlândia" 
  },

  { 
    id: 3, 
    titulo: "Analista", 
    empresa: "Empresa Simulada", 
    tipo: "presencial", 
    tecnologias: ['SQL'], 
    salario: 'R$17.000 - R$100.000', 
    local: "Uberlândia" 
  }
];

function criarCard(vaga) {
  const article = document.createElement('article');
  article.className = 'job-card';
  article.dataset.id = vaga.id;

  const badgeClass = {
    remoto: 'job-card__badge--remote',
    presencial: 'job-card__badge--onsite',
    hibrido: 'job-card__badge--hybrid'
  }[vaga.tipo] || '';

  const tipoLabel = {
    remoto: 'Remoto',
    presencial: 'Presencial',
    hibrido: 'Híbrido'
  }[vaga.tipo] || vaga.tipo;

  // Header
  const header = document.createElement('div');
  header.className = 'job-card__header';

  const badge = document.createElement('span');
  badge.className = `job-card__badge ${badgeClass}`;
  badge.textContent = tipoLabel;

  const title = document.createElement('h3');
  title.className = 'job-card__title';
  title.textContent = vaga.titulo;

   const company = document.createElement('p');
  company.className = 'job-card__company';
  company.textContent = vaga.empresa;

  header.append(badge, title, company);


  //body
  const body = document.createElement('div');
  body.className = 'job-card_body';

  const tech = document.createElement('p');
  tech.className = 'job-card_tech';
  tech.textContent = vaga.tecnologias.join(', ');

  const salary = document.createElement('p');
  salary.className = 'job-card_salary';
  salary.textContent = vaga.salario;

  const location = document.createElement('p');
  location.className = 'job-card_location';
  location.textContent = vaga.local;
  body.append(tech, salary, location);

  //adiciona o header
  article.append(header, body);

  return article;
}

function renderizarVagas(lista) {
const grid = document.getElementById('jobs-grid');
if (!grid) return;

grid.replaceChildren();

if (lista.length === 0) {
    const emptyMsg = document.createComment('p')
    emptyMsg.className = 'wmpty-msg'
    emptyMsg.textContent = 'Nenhuma Vaga Encontrada';
    grid.appendChild(emptyMsg);
    return;
}

const fragment = document.createDocumentFragment();
lista.forEach(vaga => fragment.appendChild(criarCard(vaga)));
grid.appendChild(fragment);
}

//Inicialização
renderizarVagas(vagas);