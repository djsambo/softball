import './index.css';

// --- DATA ---
const TEAMS = [
  { id: 'veteranos', name: 'VETERANOS', manager: 'Roberto "Beto" Alarcón', stats: { pos: 1, jj: 12, jg: 9, jp: 3, avg: '.750', dif: '-' } },
  { id: 'halcones', name: 'HALCONES', manager: 'Carlos "El Halcón" Mendez', stats: { pos: 2, jj: 12, jg: 7, jp: 5, avg: '.583', dif: '2.0' } },
  { id: 'leyenda', name: 'LEYENDA', manager: 'Juan "Leyenda" Perez', stats: { pos: 3, jj: 11, jg: 5, jp: 6, avg: '.455', dif: '3.5' } },
  { id: 'tumba', name: 'TEAM TUMBA GOBIERNO', manager: 'Francisco "Tumba" Soto', stats: { pos: 4, jj: 11, jg: 2, jp: 9, avg: '.181', dif: '6.5' } },
];

const ROSTERS = {
  veteranos: {
    pitchers: [
      { name: 'CARLOS MENDOZA', number: '45' },
      { name: 'JUAN PERDOMO', number: '12' },
    ],
    infielders: [
      { name: 'MIGUEL TORRES', number: '05' },
      { name: 'JUAN SOBRINO', number: '23' },
    ]
  },
  halcones: {
    pitchers: [
      { name: 'PEDRO RODRIGUEZ', number: '33' },
    ],
    infielders: [
      { name: 'LUIS GOMEZ', number: '10' },
    ]
  },
  leyenda: {
    pitchers: [
      { name: 'JOSE LUIS', number: '01' },
    ],
    infielders: [
      { name: 'RAFA MORA', number: '99' },
    ]
  },
  tumba: {
    pitchers: [
      { name: 'MARIO BARCO', number: '07' },
    ],
    infielders: [
      { name: 'ANGEL RUIZ', number: '11' },
    ]
  }
};

const SCHEDULE = [
  {
    date: 'MAYO 14',
    subtitle: '2 Juegos de 8 Inning',
    games: [
      { time: '1er Juego 6:00pm', team1: 'Segundo equipo en completar', team2: 'Primer equipo en completar', status: 'Finalizado', score: '4 - 2' },
      { time: '2do Juego al finalizar el 1ro.', team1: 'Cuarto equipo por completar', team2: 'Tercer equipo en completar', status: 'Finalizado', score: '5 - 3' }
    ]
  },
  {
    date: 'MAYO 21',
    subtitle: 'Descansa: LEYENDA',
    games: [
      { time: '1er Juego 6:30pm', team1: 'VETERANOS', team2: 'HALCONES', status: 'Próximo', score: null },
      { time: '2do Juego', team1: 'TEAM TUMBA GOBIERNO', team2: 'Equipo Ganador', status: 'Próximo', score: null },
      { time: '3er Juego', team1: 'Equipo perdedor 1er juego', team2: 'TEAM TUMBA GOBIERNO', status: 'Próximo', score: null }
    ]
  },
  {
    date: 'MAYO 28',
    subtitle: 'Descansa: VETERANOS',
    games: [
      { time: '1er Juego 6:30pm', team1: 'HALCONES', team2: 'TEAM TUMBA GOBIERNO', status: 'Próximo', score: null },
      { time: '2do Juego', team1: 'LEYENDA', team2: 'Equipo Ganador', status: 'Próximo', score: null },
      { time: '3er Juego', team1: 'Equipo perdedor 1er juego', team2: 'LEYENDA', status: 'Próximo', score: null }
    ]
  }
];

// --- APP STATE ---
let currentView = 'calendario'; // 'calendario', 'posiciones', 'equipos'
let selectedTeamId = 'veteranos';

// --- DOM ELEMENTS ---
const appRoot = document.getElementById('root');

// --- RENDERERS ---

function renderHeader() {
  const header = document.createElement('header');
  header.className = 'border-b border-white/10 sticky top-0 z-50';
  header.style.backgroundColor = '#012169';
  
  header.innerHTML = `
    <div class="flex justify-between items-center w-full h-20 px-4 md:px-10 max-w-7xl mx-auto">
      <div class="font-sans text-2xl font-bold text-white uppercase tracking-tighter">
        <span style="letter-spacing: -1.2px;">liga softball banco popular</span>
      </div>
      <nav class="hidden md:flex gap-8 items-center h-full">
        <a href="#" data-view="calendario" class="nav-link font-sans text-xl uppercase tracking-wider ${currentView === 'calendario' ? 'text-white border-b-4 border-white pb-1' : 'text-white/70 hover:text-white'} transition-all duration-200">Calendario</a>
        <a href="#" data-view="posiciones" class="nav-link font-sans text-xl uppercase tracking-wider ${currentView === 'posiciones' ? 'text-white border-b-4 border-white pb-1' : 'text-white/70 hover:text-white'} transition-all duration-200">Posiciones</a>
        <a href="#" data-view="equipos" class="nav-link font-sans text-xl uppercase tracking-wider ${currentView === 'equipos' ? 'text-white border-b-4 border-white pb-1' : 'text-white/70 hover:text-white'} transition-all duration-200">Equipos</a>
      </nav>
      <!-- Mobile menu button can go here -->
    </div>
  `;

  header.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const view = link.getAttribute('data-view');
      if (view) switchView(view);
    });
  });

  return header;
}

function renderHero(title, subtitle) {
  const section = document.createElement('section');
  section.className = 'mb-12';
  section.innerHTML = `
    <div class="relative h-64 md:h-80 rounded-xl overflow-hidden bg-black flex items-center justify-center text-center px-6">
      <img alt="Baseball stadium" class="absolute inset-0 w-full h-full object-cover opacity-40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcKiTkpiVjMAR551iCfdvgzkBO3kpcQ-4iQ_E81QW0F8CE3CUc30Xac9M-rE0FW0TaSTMH60RP4MnRWfLE3DATmWSPMCD2dIg693EmAWsuw8jU2HkmFzWwbOXTimuIxFSTYIGwVX63YKn7DDM8sTjtbvcwz8VHza3FFF4s2_fLDMZOzFu_TEhUpqIDrvWwYFwK8_5YnIf7p_V2rqbTPh9rKxTvAg2n24Q5GVtA0ONTsm2dBHpya-yfQmFPrk1xevlLrXBXqgQFRzuD">
      <div class="relative z-10">
        <h1 class="font-sans text-5xl md:text-6xl text-white font-bold uppercase mb-2">${title}</h1>
        <p class="font-sans text-xl md:text-2xl text-white/80 uppercase tracking-widest">${subtitle}</p>
      </div>
    </div>
  `;
  return section;
}

function renderCalendario() {
  const container = document.createElement('div');
  container.className = 'space-y-12';
  
  SCHEDULE.forEach(day => {
    const section = document.createElement('section');
    section.innerHTML = `
      <div class="flex items-center gap-4 mb-6">
        <div class="px-6 py-2 font-sans text-xl font-bold uppercase -skew-x-12" style="background-color: #012169; color: white;">
          <span class="inline-block skew-x-12">${day.date}</span>
        </div>
        <div class="flex-grow h-[2px] bg-gray-200"></div>
        <span class="font-sans text-sm font-bold text-gray-500 uppercase">${day.subtitle}</span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${day.games.map(game => `
          <div class="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-200">
            <div class="px-4 py-1 text-xs font-bold uppercase" style="background-color: #012169; color: white;">${game.time}</div>
            <div class="p-6 flex flex-col items-center justify-center flex-grow text-center">
              <div class="font-sans text-lg font-bold uppercase mb-1">${game.team1}</div>
              <div class="font-sans text-sm font-bold text-red-800 uppercase my-2">VS</div>
              <div class="font-sans text-lg font-bold uppercase mt-1">${game.team2}</div>
            </div>
            ${game.status === 'Finalizado' ? `
              <div class="bg-gray-50 px-4 py-2 flex justify-between items-center w-full border-t border-gray-100">
                <span class="text-sm font-bold text-blue-900 uppercase">Finalizado</span>
                <div class="flex items-center gap-2 font-bold text-2xl text-blue-900">
                  <span>${game.score}</span>
                </div>
              </div>
            ` : ''}
          </div>
        `).join('')}
      </div>
    `;
    container.appendChild(section);
  });
  
  return container;
}

function renderPosiciones() {
  const container = document.createElement('div');
  container.className = 'w-full';
  
  container.innerHTML = `
    <div class="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
      <div class="px-6 py-4 flex justify-between items-center" style="background-color: #012169;">
        <h2 class="font-sans text-xl font-bold uppercase text-white">Clasificación General</h2>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-gray-50 border-b border-gray-200">
              <th class="px-6 py-4 text-xs font-bold uppercase text-gray-500">POS</th>
              <th class="px-6 py-4 text-xs font-bold uppercase text-gray-500">EQUIPO</th>
              <th class="px-4 py-4 text-xs font-bold uppercase text-gray-500 text-center">JJ</th>
              <th class="px-4 py-4 text-xs font-bold uppercase text-gray-500 text-center">JG</th>
              <th class="px-4 py-4 text-xs font-bold uppercase text-gray-500 text-center">JP</th>
              <th class="px-4 py-4 text-xs font-bold uppercase text-gray-500 text-center">AVG</th>
              <th class="px-6 py-4 text-xs font-bold uppercase text-gray-500 text-right">DIF</th>
            </tr>
          </thead>
          <tbody>
            ${TEAMS.map(team => `
              <tr class="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td class="px-6 py-6 font-bold text-blue-900">${team.stats.pos}</td>
                <td class="px-6 py-6 font-bold text-gray-900 uppercase">${team.name}</td>
                <td class="px-4 py-6 text-center font-bold text-gray-600">${team.stats.jj}</td>
                <td class="px-4 py-6 text-center font-bold text-blue-900">${team.stats.jg}</td>
                <td class="px-4 py-6 text-center font-bold text-gray-600">${team.stats.jp}</td>
                <td class="px-4 py-6 text-center font-bold text-gray-600">${team.stats.avg}</td>
                <td class="px-6 py-6 text-right font-bold text-gray-500">${team.stats.dif}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
  return container;
}

function renderEquipos() {
  const container = document.createElement('div');
  container.className = 'flex flex-col md:flex-row gap-8';
  
  const team = TEAMS.find(t => t.id === selectedTeamId);
  const rosterData = ROSTERS[selectedTeamId];

  container.innerHTML = `
    <!-- Sidebar -->
    <aside class="w-full md:w-64 flex-shrink-0">
      <div class="bg-white border border-gray-200 p-4 rounded-lg sticky top-24">
        <h3 class="text-lg font-bold mb-4 uppercase border-b-2 border-blue-900 pb-2">Equipos</h3>
        <div class="flex flex-col gap-2">
          ${TEAMS.map(t => `
            <button data-team="${t.id}" class="team-btn text-left p-3 rounded font-bold transition-all ${selectedTeamId === t.id ? 'bg-blue-900 text-white border-l-4 border-blue-500' : 'text-gray-600 hover:bg-gray-100'}">
              ${t.name}
            </button>
          `).join('')}
        </div>
      </div>
    </aside>

    <!-- Main Content -->
    <div class="flex-grow">
      <!-- Team Header -->
      <div class="bg-white border border-gray-200 mb-8 p-6 relative overflow-hidden shadow-md">
        <div class="absolute top-0 left-0 w-full h-1 bg-blue-900"></div>
        <div class="flex flex-col md:flex-row items-center gap-6">
          <div class="text-center md:text-left">
            <h1 class="text-4xl font-bold uppercase mb-1">${team.name}</h1>
            <div class="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
              <span class="bg-blue-900 text-white px-3 py-1 text-xs font-bold rounded">${team.stats.pos}ER PUESTO</span>
              <span class="bg-gray-200 text-gray-700 px-3 py-1 text-xs font-bold rounded">${team.stats.jj} JUEGOS JUGADOS</span>
              <span class="bg-gray-200 text-gray-700 px-3 py-1 text-xs font-bold rounded">RECORD: ${team.stats.jg}-${team.stats.jp}</span>
            </div>
          </div>
          <div class="md:ml-auto text-center md:text-right">
            <p class="text-xs text-gray-500 uppercase mb-1">Manager</p>
            <p class="text-xl font-bold">${team.manager}</p>
          </div>
        </div>
      </div>

      <h2 class="text-2xl font-bold uppercase mb-6 border-b border-gray-200 pb-2">Roster Oficial</h2>
      
      <div class="space-y-8">
        <!-- Pitchers -->
        <div>
          <div class="flex items-center gap-4 mb-4">
            <div class="bg-blue-900 text-white px-4 py-1 text-xs font-bold uppercase">Lanzadores (Pitchers)</div>
            <div class="flex-grow h-0.5 bg-gray-200"></div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${rosterData.pitchers.map(p => `
              <div class="bg-white border border-gray-200 p-4 flex justify-between items-center hover:border-blue-900 transition-colors">
                <h4 class="text-xl font-bold uppercase">${p.name}</h4>
                <div class="bg-blue-900 text-white text-xl font-bold px-3 py-1">#${p.number}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Infielders -->
        <div>
          <div class="flex items-center gap-4 mb-4">
            <div class="bg-blue-900 text-white px-4 py-1 text-xs font-bold uppercase">Cuadro (Infielders)</div>
            <div class="flex-grow h-0.5 bg-gray-200"></div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${rosterData.infielders.map(p => `
              <div class="bg-white border border-gray-200 p-4 flex justify-between items-center hover:border-blue-900 transition-colors">
                <h4 class="text-xl font-bold uppercase">${p.name}</h4>
                <div class="bg-blue-900 text-white text-xl font-bold px-3 py-1">#${p.number}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;

  container.querySelectorAll('.team-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      selectedTeamId = btn.getAttribute('data-team');
      updateApp();
    });
  });

  return container;
}

function updateApp() {
  appRoot.innerHTML = '';
  appRoot.appendChild(renderHeader());
  
  const main = document.createElement('main');
  main.className = 'max-w-7xl mx-auto px-4 md:px-10 py-12';
  
  if (currentView === 'calendario') {
    main.appendChild(renderHero('Calendario de Juegos', 'SERIE REGULAR 2026'));
    main.appendChild(renderCalendario());
  } else if (currentView === 'posiciones') {
    main.appendChild(renderHero('Posiciones de Liga', 'SERIE REGULAR 2026'));
    main.appendChild(renderPosiciones());
  } else if (currentView === 'equipos') {
    main.appendChild(renderHero('Roster de Equipos', 'SERIE REGULAR 2026'));
    main.appendChild(renderEquipos());
  }
  
  appRoot.appendChild(main);
}

function switchView(view) {
  currentView = view;
  window.scrollTo(0, 0);
  updateApp();
}

// Initial render
updateApp();
