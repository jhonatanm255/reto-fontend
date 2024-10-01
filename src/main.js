fetch('../data.json')
  .then((res) => {
    if (!res.ok) {
      throw new Error('No se pudo cargar el archivo JSON');
    }
    return res.json();
  })
  .then((data) => {
    mostrarDatos(data);
  })
  .catch((error) => {
    console.error('Error al captar los datos', error);
  });

function mostrarDatos(results) {
  const content = document.querySelector('.main');

  content.innerHTML = '';

  results.forEach((element) => {
    const section = document.createElement('section');
    section.classList.add('mx-6', 'gap-3', 'flex', 'p-4', 'rounded-lg', 'justify-between', 'items-center');

    switch (element.category) {
      case 'Reaction':
        section.classList.add('bg-red-50', 'text-red-500' ,'hover:bg-red-100', 'cursor-pointer');
        break;
      case 'Memory':
        section.classList.add('bg-yellow-50', 'text-yellow-500' ,'hover:bg-yellow-100', 'cursor-pointer');
        break;
      case 'Verbal':
        section.classList.add('bg-green-50', 'text-green-500' ,'hover:bg-green-100', 'cursor-pointer');
        break;
      case 'Visual':
        section.classList.add('bg-blue-50', 'text-blue-500' ,'hover:bg-blue-100', 'cursor-pointer');
        break;
      default:
        break;
    }

    section.innerHTML = `
      <div class="flex items-center">
        <img class="mr-2" src="../${element.icon}" alt="Icono de ${element.category}">
        <h4 class="font-semibold">${element.category}</h4>
      </div>
      <div class="font-semibold text-slate-800">${element.score} / <span class="text-slate-400">100</span></div>
    `;
    content.appendChild(section);
  });
}
