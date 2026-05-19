(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const b=[{id:"halcones",name:"HALCONES",manager:"Maximo Morel",stats:{pos:1,jj:1,jg:1,jp:0,avg:".1000",dif:"0"}},{id:"veteranos",name:"VETERANOS",manager:"Jhonnathan (Julio 2)",stats:{pos:1,jj:1,jg:1,jp:0,avg:".1000",dif:"0"}},{id:"tumba",name:"TUMBA GOBIERNO",manager:"Luis Mendez",stats:{pos:2,jj:1,jg:0,jp:1,avg:".0",dif:"1"}},{id:"leyenda",name:"LEYENDA",manager:"Emilio Estrella",stats:{pos:2,jj:1,jg:0,jp:1,avg:".0",dif:"1"}}],g={halcones:{pitchers:[{name:"Julio Venezuela",number:"-"},{name:"Yorki Tiburcio",number:"-"},{name:"Nehemias Valdez",number:"-"}],infielders:[{name:"Jeffry estrella",number:"-"},{name:"Yomelvis Grullón",number:"-"},{name:"Carlos Batista",number:"-"},{name:"Manuel Garces",number:"-"},{name:"Leudy brito",number:"-"},{name:"Dario de la Cruz",number:"-"},{name:"Rayner Grullón",number:"-"},{name:"Maximo Morel",number:"-"},{name:"Willy Ogando",number:"-"},{name:"Jordan Peralta",number:"-"},{name:"Joan Codio",number:"-"},{name:"Luis Mena",number:"-"},{name:"Yael Sierra",number:"-"},{name:"Natiel de Jesus",number:"-"},{name:"Jose Luciano",number:"-"},{name:"Gilberto Figueroa",number:"-"},{name:"Manuel Vasquez",number:"-"},{name:"Carlos acosta (hermano de Fausto)",number:"-"}]},tumba:{pitchers:[{name:"Mercedez Zuldo",number:"-"},{name:"Adrian de lo Santos",number:"-"},{name:"Juan Albuez",number:"-"}],infielders:[{name:"Daniel Javier",number:"-"},{name:"Gabriel Lebron",number:"-"},{name:"Elvis Duran",number:"-"},{name:"Domingo Berroa",number:"-"},{name:"Jose Luis (Julian Yan)",number:"-"},{name:"Luis Javier Montilla",number:"-"},{name:"Roberto Tejeda",number:"-"},{name:"Reinaldo Bodden",number:"-"},{name:"Alfredo Collado",number:"-"},{name:"Darrys Blanco",number:"-"},{name:"Julio Lopez ",number:"-"},{name:"Luis Mendez",number:"-"},{name:"Henry Gomera",number:"-"},{name:"Amaury Montas",number:"-"},{name:"Albert Ramirez",number:"-"},{name:"Joel Silverio (Altuve)",number:"-"},{name:"Yoan Martinez",number:"-"},{name:"Hugo de los Santos",number:"-"},{name:"Esquender javier (Mangu)",number:"-"}]},veteranos:{pitchers:[{name:"Yobanni Jombita",number:"-"},{name:"Martin Almonte",number:"-"},{name:"Diogenes Caribe",number:"-"}],infielders:[{name:"Daniel Ruiz",number:"-"},{name:"Edison Zapata",number:"-"},{name:"Emilio Pichardo",number:"-"},{name:"Emmanuel Vasquez",number:"-"},{name:"Jhonnathan (Julio 2)",number:"-"},{name:"Fausto Acosta",number:"-"},{name:"Miguel Ángel (pelotero)",number:"-"},{name:"Carlos Ureña",number:"-"},{name:"Paulino Francisco",number:"-"},{name:"Kelvin Castillo",number:"-"},{name:"Willy Perez",number:"-"},{name:"Eudy Ortiz",number:"-"},{name:"Brian Guerrero",number:"-"},{name:"Francisco Amparo",number:"-"},{name:"Luis Enrrique Reyes",number:"-"},{name:"Julian Aquino",number:"-"},{name:"Sergio Rodriguez",number:"-"},{name:"Estarlin Abad",number:"-"},{name:"Hylen Fabian ",number:"-"}]},leyenda:{pitchers:[{name:"Miguel Chavarria",number:"-"},{name:"Santos  Santana",number:"-"},{name:"Carlos Toribio",number:"-"}],infielders:[{name:"Erie Escorbores",number:"-"},{name:"Day Feliz",number:"-"},{name:"Frank Báez",number:"-"},{name:"Joel Arias",number:"-"},{name:"Emilio Estrella",number:"-"},{name:"Enmanuel Molina",number:"-"},{name:"Juan Carlos Doñe",number:"-"},{name:"Victor Concepciȯn",number:"-"},{name:"Hector de los Santos",number:"-"},{name:"Rael Capellan",number:"-"},{name:"Domingo Sambo",number:"-"},{name:"Yandry Montas",number:"-"},{name:"Emmanuel Fernandez",number:"-"},{name:"Nehemias García",number:"-"},{name:"Harold tapia",number:"-"},{name:"Fernand Acosta",number:"-"},{name:"Javier Ramirez",number:"-"},{name:"Luinny Brito (Ozutochi)",number:"-"},{name:"Josué Perdomo",number:"-"}]}},x=[{date:"MAYO 14",subtitle:"2 Juegos de 8 Inning",games:[{time:"1er Juego 6:00pm",team1:"LEYENDA",team2:"HALCONES",status:"Finalizado",score:"17 - 6"},{time:"2do Juego al finalizar el 1ro.",team1:"VETERANOS",team2:"TUMBA GOBIERNO",status:"Finalizado",score:"17 - 2"}]},{date:"MAYO 21",subtitle:"Descansa: LEYENDA",games:[{time:"1er Juego 6:30pm",team1:"VETERANOS",team2:"HALCONES",status:"Próximo",score:null},{time:"2do Juego",team1:"TUMBA GOBIERNO",team2:"Ganador 1er juego",status:"Próximo",score:null},{time:"3er Juego",team1:"perdedor 1er juego",team2:"TUMBA GOBIERNO",status:"Próximo",score:null}]},{date:"MAYO 28",subtitle:"Descansa: VETERANOS",games:[{time:"1er Juego 6:30pm",team1:"HALCONES",team2:"TUMBA GOBIERNO",status:"Próximo",score:null},{time:"2do Juego",team1:"LEYENDA",team2:"Ganador 1er juego",status:"Próximo",score:null},{time:"3er Juego",team1:"perdedor 1er juego",team2:"LEYENDA",status:"Próximo",score:null}]},{date:"JUNIO 04",subtitle:"Descansa: HALCONES",games:[{time:"1er Juego 6:30pm",team1:"TUMBA GOBIERNO",team2:"LEYENDA",status:"Próximo",score:null},{time:"2do Juego",team1:"VETERANOS",team2:"Ganador 1er juego",status:"Próximo",score:null},{time:"3er Juego",team1:"perdedor 1er juego",team2:"VETERANOS",status:"Próximo",score:null}]},{date:"JUNIO 11",subtitle:"Descansa: TUMBA GOBIERNO",games:[{time:"1er Juego 6:30pm",team1:"LEYENDA",team2:"VETERANOS",status:"Próximo",score:null},{time:"2do Juego",team1:"HALCONES",team2:"Ganador 1er juego",status:"Próximo",score:null},{time:"3er Juego",team1:"perdedor 1er juego",team2:"HALCONES",status:"Próximo",score:null}]},{date:"JUNIO 18",subtitle:"Descansa: VETERANOS",games:[{time:"1er Juego 6:30pm",team1:"TUMBA GOBIERNO",team2:"HALCONES",status:"Próximo",score:null},{time:"2do Juego",team1:"LEYENDA",team2:"Ganador 1er juego",status:"Próximo",score:null},{time:"3er Juego",team1:"perdedor 1er juego",team2:"LEYENDA",status:"Próximo",score:null}]},{date:"JUNIO 25",subtitle:"Descansa: LEYENDA",games:[{time:"1er Juego 6:30pm",team1:"HALCONES",team2:"VETERANOS",status:"Próximo",score:null},{time:"2do Juego",team1:"TUMBA GOBIERNO",team2:"Ganador 1er juego",status:"Próximo",score:null},{time:"3er Juego",team1:"perdedor 1er juego",team2:"TUMBA GOBIERNO",status:"Próximo",score:null}]},{date:"JULIO 02",subtitle:"Descansa: HALCONES",games:[{time:"1er Juego 6:30pm",team1:"LEYENDA",team2:"TUMBA GOBIERNO",status:"Próximo",score:null},{time:"2do Juego",team1:"VETERANOS",team2:"Ganador 1er juego",status:"Próximo",score:null},{time:"3er Juego",team1:"perdedor 1er juego",team2:"VETERANOS",status:"Próximo",score:null}]},{date:"JULIO 09",subtitle:"Descansa: TUMBA GOBIERNO",games:[{time:"1er Juego 6:30pm",team1:"VETERANOS",team2:"LEYENDA",status:"Próximo",score:null},{time:"2do Juego",team1:"HALCONES",team2:"Ganador 1er juego",status:"Próximo",score:null},{time:"3er Juego",team1:"perdedor 1er juego",team2:"HALCONES",status:"Próximo",score:null}]},{date:"JULIO 16",subtitle:"Descansa: VETERANOS",games:[{time:"1er Juego 6:30pm",team1:"HALCONES",team2:"TUMBA GOBIERNO",status:"Próximo",score:null},{time:"2do Juego",team1:"LEYENDA",team2:"Ganador 1er juego",status:"Próximo",score:null},{time:"3er Juego",team1:"perdedor 1er juego",team2:"LEYENDA",status:"Próximo",score:null}]},{date:"JULIO 23",subtitle:"Descansa: LEYENDA",games:[{time:"1er Juego 6:30pm",team1:"VETERANOS",team2:"HALCONES",status:"Próximo",score:null},{time:"2do Juego",team1:"TUMBA GOBIERNO",team2:"Ganador 1er juego",status:"Próximo",score:null},{time:"3er Juego",team1:"perdedor 1er juego",team2:"TUMBA GOBIERNO",status:"Próximo",score:null}]},{date:"JULIO 30",subtitle:"Descansa: HALCONES",games:[{time:"1er Juego 6:30pm",team1:"TUMBA GOBIERNO",team2:"LEYENDA",status:"Próximo",score:null},{time:"2do Juego",team1:"VETERANOS",team2:"Ganador 1er juego",status:"Próximo",score:null},{time:"3er Juego",team1:"perdedor 1er juego",team2:"VETERANOS",status:"Próximo",score:null}]},{date:"AGOSTO 06",subtitle:"Descansa: TUMBA GOBIERNO",games:[{time:"1er Juego 6:30pm",team1:"LEYENDA",team2:"VETERANOS",status:"Próximo",score:null},{time:"2do Juego",team1:"HALCONES",team2:"Ganador 1er juego",status:"Próximo",score:null},{time:"3er Juego",team1:"perdedor 1er juego",team2:"HALCONES",status:"Próximo",score:null}]},{date:"AGOSTO 13",subtitle:"Descansa: VETERANOS",games:[{time:"1er Juego 6:30pm",team1:"HALCONES",team2:"TUMBA GOBIERNO",status:"Próximo",score:null},{time:"2do Juego",team1:"LEYENDA",team2:"Ganador 1er juego",status:"Próximo",score:null},{time:"3er Juego",team1:"perdedor 1er juego",team2:"LEYENDA",status:"Próximo",score:null}]},{date:"AGOSTO 20",subtitle:"Descansa: LEYENDA",games:[{time:"1er Juego 6:30pm",team1:"VETERANOS",team2:"HALCONES",status:"Próximo",score:null},{time:"2do Juego",team1:"TUMBA GOBIERNO",team2:"Ganador 1er juego",status:"Próximo",score:null},{time:"3er Juego",team1:"perdedor 1er juego",team2:"TUMBA GOBIERNO",status:"Próximo",score:null}]},{date:"AGOSTO 27",subtitle:"Descansa: HALCONES",games:[{time:"1er Juego 6:30pm",team1:"TUMBA GOBIERNO",team2:"LEYENDA",status:"Próximo",score:null},{time:"2do Juego",team1:"VETERANOS",team2:"Ganador 1er juego",status:"Próximo",score:null},{time:"3er Juego",team1:"perdedor 1er juego",team2:"VETERANOS",status:"Próximo",score:null}]},{date:"SEPTIEMBRE 03",subtitle:"Descansa: TUMBA GOBIERNO",games:[{time:"1er Juego 6:30pm",team1:"LEYENDA",team2:"VETERANOS",status:"Próximo",score:null},{time:"2do Juego",team1:"HALCONES",team2:"Ganador 1er juego",status:"Próximo",score:null},{time:"3er Juego",team1:"perdedor 1er juego",team2:"HALCONES",status:"Próximo",score:null}]},{date:"SERIE SEMI FINAL NOVIEMBRE 12",subtitle:"TRIANGULARES DE 5 INNING",games:[{time:"1er Juego 6:30pm",team1:"",team2:"",status:"Próximo",score:null},{time:"2do Juego",team1:"",team2:"",status:"Próximo",score:null},{time:"3er Juego",team1:"",team2:"",status:"Próximo",score:null}]},{date:"SERIE FINAL NOVIEMBRE 19",subtitle:"TRIANGULARES DE 5 INNING",games:[{time:"1er Juego 6:30pm",team1:"",team2:"",status:"Próximo",score:null},{time:"2do Juego",team1:"",team2:"",status:"Próximo",score:null},{time:"3er Juego",team1:"",team2:"",status:"Próximo",score:null}]}];let n="calendario",i="halcones",l=!1;const d=document.getElementById("root");function E(){const e=document.createElement("header");e.className="border-b border-white/10 sticky top-0 z-50",e.style.backgroundColor="#012169",e.innerHTML=`
    <div class="flex justify-between items-center w-full h-20 px-4 md:px-10 max-w-7xl mx-auto">
      <div class="font-sans text-xl md:text-2xl font-bold text-white uppercase tracking-tighter">
        <span style="letter-spacing: -1.2px;">liga softball banco popular</span>
      </div>
      
      <!-- Desktop Nav -->
      <nav class="hidden md:flex gap-8 items-center h-full">
        <a href="#" data-view="calendario" class="nav-link font-sans text-xl uppercase tracking-wider ${n==="calendario"?"text-white border-b-4 border-white pb-1":"text-white/70 hover:text-white"} transition-all duration-200">Calendario</a>
        <a href="#" data-view="posiciones" class="nav-link font-sans text-xl uppercase tracking-wider ${n==="posiciones"?"text-white border-b-4 border-white pb-1":"text-white/70 hover:text-white"} transition-all duration-200">Posiciones</a>
        <a href="#" data-view="equipos" class="nav-link font-sans text-xl uppercase tracking-wider ${n==="equipos"?"text-white border-b-4 border-white pb-1":"text-white/70 hover:text-white"} transition-all duration-200">Equipos</a>
      </nav>

      <!-- Mobile Menu Button -->
      <button id="mobile-menu-toggle" class="md:hidden text-white p-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </button>
    </div>

    <!-- Mobile Nav Dropdown -->
    <div id="mobile-menu" class="${l?"flex":"hidden"} md:hidden flex-col bg-[#012169] border-t border-white/10 px-4 py-4 gap-4">
      <a href="#" data-view="calendario" class="nav-link-mobile font-sans text-lg uppercase tracking-wider ${n==="calendario"?"text-white font-bold":"text-white/70"}">Calendario</a>
      <a href="#" data-view="posiciones" class="nav-link-mobile font-sans text-lg uppercase tracking-wider ${n==="posiciones"?"text-white font-bold":"text-white/70"}">Posiciones</a>
      <a href="#" data-view="equipos" class="nav-link-mobile font-sans text-lg uppercase tracking-wider ${n==="equipos"?"text-white font-bold":"text-white/70"}">Equipos</a>
    </div>
  `;const t=e.querySelector("#mobile-menu-toggle");return t&&t.addEventListener("click",()=>{l=!l,m()}),e.querySelectorAll(".nav-link").forEach(s=>{s.addEventListener("click",a=>{a.preventDefault();const r=s.getAttribute("data-view");r&&p(r)})}),e.querySelectorAll(".nav-link-mobile").forEach(s=>{s.addEventListener("click",a=>{a.preventDefault();const r=s.getAttribute("data-view");l=!1,r&&p(r)})}),e}function c(e,t){const s=document.createElement("section");return s.className="mb-12",s.innerHTML=`
    <div class="relative h-64 md:h-80 rounded-xl overflow-hidden bg-black flex items-center justify-center text-center px-6">
      <img alt="Baseball stadium" class="absolute inset-0 w-full h-full object-cover opacity-40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcKiTkpiVjMAR551iCfdvgzkBO3kpcQ-4iQ_E81QW0F8CE3CUc30Xac9M-rE0FW0TaSTMH60RP4MnRWfLE3DATmWSPMCD2dIg693EmAWsuw8jU2HkmFzWwbOXTimuIxFSTYIGwVX63YKn7DDM8sTjtbvcwz8VHza3FFF4s2_fLDMZOzFu_TEhUpqIDrvWwYFwK8_5YnIf7p_V2rqbTPh9rKxTvAg2n24Q5GVtA0ONTsm2dBHpya-yfQmFPrk1xevlLrXBXqgQFRzuD">
      <div class="relative z-10">
        <h1 class="font-sans text-5xl md:text-6xl text-white font-bold uppercase mb-2">${e}</h1>
        <p class="font-sans text-xl md:text-2xl text-white/80 uppercase tracking-widest">${t}</p>
      </div>
    </div>
  `,s}function f(){const e=document.createElement("div");return e.className="space-y-12",x.forEach(t=>{const s=document.createElement("section");s.innerHTML=`
      <div class="flex items-center gap-4 mb-6">
        <div class="px-6 py-2 font-sans text-xl font-bold uppercase -skew-x-12" style="background-color: #012169; color: white;">
          <span class="inline-block skew-x-12">${t.date}</span>
        </div>
        <div class="flex-grow h-[2px] bg-gray-200"></div>
        <span class="font-sans text-sm font-bold text-gray-500 uppercase">${t.subtitle}</span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${t.games.map(a=>`
          <div class="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-200">
            <div class="px-4 py-1 text-xs font-bold uppercase" style="background-color: #012169; color: white;">${a.time}</div>
            <div class="p-6 flex flex-col items-center justify-center flex-grow text-center">
              <div class="font-sans text-lg font-bold uppercase mb-1">${a.team1}</div>
              <div class="font-sans text-sm font-bold text-red-800 uppercase my-2">VS</div>
              <div class="font-sans text-lg font-bold uppercase mt-1">${a.team2}</div>
            </div>
            ${a.status==="Finalizado"?`
              <div class="bg-gray-50 px-4 py-2 flex justify-between items-center w-full border-t border-gray-100">
                <span class="text-sm font-bold text-blue-900 uppercase">Finalizado</span>
                <div class="flex items-center gap-2 font-bold text-2xl text-blue-900">
                  <span>${a.score}</span>
                </div>
              </div>
            `:""}
          </div>
        `).join("")}
      </div>
    `,e.appendChild(s)}),e}function v(){const e=document.createElement("div");return e.className="w-full",e.innerHTML=`
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
            ${b.map(t=>`
              <tr class="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td class="px-6 py-6 font-bold text-blue-900">${t.stats.pos}</td>
                <td class="px-6 py-6 font-bold text-gray-900 uppercase">${t.name}</td>
                <td class="px-4 py-6 text-center font-bold text-gray-600">${t.stats.jj}</td>
                <td class="px-4 py-6 text-center font-bold text-blue-900">${t.stats.jg}</td>
                <td class="px-4 py-6 text-center font-bold text-gray-600">${t.stats.jp}</td>
                <td class="px-4 py-6 text-center font-bold text-gray-600">${t.stats.avg}</td>
                <td class="px-6 py-6 text-right font-bold text-gray-500">${t.stats.dif}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `,e}function h(){const e=document.createElement("div");e.className="flex flex-col md:flex-row gap-8";const t=b.find(a=>a.id===i),s=g[i];return e.innerHTML=`
    <!-- Sidebar -->
    <aside class="w-full md:w-64 flex-shrink-0">
      <div class="bg-white border border-gray-200 p-4 rounded-lg sticky top-24">
        <h3 class="text-lg font-bold mb-4 uppercase border-b-2 border-blue-900 pb-2">Equipos</h3>
        <div class="flex flex-col gap-2">
          ${b.map(a=>`
            <button data-team="${a.id}" class="team-btn text-left p-3 rounded font-bold transition-all ${i===a.id?"bg-blue-900 text-white border-l-4 border-blue-500":"text-gray-600 hover:bg-gray-100"}">
              ${a.name}
            </button>
          `).join("")}
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
            <h1 class="text-4xl font-bold uppercase mb-1">${t.name}</h1>
            <div class="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
              <span class="bg-blue-900 text-white px-3 py-1 text-xs font-bold rounded">${t.stats.pos}ER PUESTO</span>
              <span class="bg-gray-200 text-gray-700 px-3 py-1 text-xs font-bold rounded">${t.stats.jj} JUEGOS JUGADOS</span>
              <span class="bg-gray-200 text-gray-700 px-3 py-1 text-xs font-bold rounded">RECORD: ${t.stats.jg}-${t.stats.jp}</span>
            </div>
          </div>
          <div class="md:ml-auto text-center md:text-right">
            <p class="text-xs text-gray-500 uppercase mb-1">Manager</p>
            <p class="text-xl font-bold">${t.manager}</p>
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
            ${s.pitchers.map(a=>`
              <div class="bg-white border border-gray-200 p-4 flex justify-between items-center hover:border-blue-900 transition-colors">
                <h4 class="text-xl font-bold uppercase">${a.name}</h4>
                <div class="bg-blue-900 text-white text-xl font-bold px-3 py-1">#${a.number}</div>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Infielders -->
        <div>
          <div class="flex items-center gap-4 mb-4">
            <div class="bg-blue-900 text-white px-4 py-1 text-xs font-bold uppercase">Cuadro (Infielders)</div>
            <div class="flex-grow h-0.5 bg-gray-200"></div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${s.infielders.map(a=>`
              <div class="bg-white border border-gray-200 p-4 flex justify-between items-center hover:border-blue-900 transition-colors">
                <h4 class="text-xl font-bold uppercase">${a.name}</h4>
                <div class="bg-blue-900 text-white text-xl font-bold px-3 py-1">#${a.number}</div>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    </div>
  `,e.querySelectorAll(".team-btn").forEach(a=>{a.addEventListener("click",()=>{i=a.getAttribute("data-team"),m()})}),e}function m(){d.innerHTML="",d.appendChild(E());const e=document.createElement("main");e.className="max-w-7xl mx-auto px-4 md:px-10 py-12",n==="calendario"?(e.appendChild(c("Calendario de Juegos","SERIE REGULAR 2026")),e.appendChild(f())):n==="posiciones"?(e.appendChild(c("Posiciones de Liga","SERIE REGULAR 2026")),e.appendChild(v())):n==="equipos"&&(e.appendChild(c("Roster de Equipos","SERIE REGULAR 2026")),e.appendChild(h())),d.appendChild(e)}function p(e){n=e,window.scrollTo(0,0),m()}m();
