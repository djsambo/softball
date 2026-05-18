(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();const p=[{id:"veteranos",name:"VETERANOS",manager:'Roberto "Beto" Alarcón',stats:{pos:1,jj:12,jg:9,jp:3,avg:".750",dif:"-"}},{id:"halcones",name:"HALCONES",manager:'Carlos "El Halcón" Mendez',stats:{pos:2,jj:12,jg:7,jp:5,avg:".583",dif:"2.0"}},{id:"leyenda",name:"LEYENDA",manager:'Juan "Leyenda" Perez',stats:{pos:3,jj:11,jg:5,jp:6,avg:".455",dif:"3.5"}},{id:"tumba",name:"TEAM TUMBA GOBIERNO",manager:'Francisco "Tumba" Soto',stats:{pos:4,jj:11,jg:2,jp:9,avg:".181",dif:"6.5"}}],x={veteranos:{pitchers:[{name:"CARLOS MENDOZA",number:"45"},{name:"JUAN PERDOMO",number:"12"}],infielders:[{name:"MIGUEL TORRES",number:"05"},{name:"JUAN SOBRINO",number:"23"}]},halcones:{pitchers:[{name:"PEDRO RODRIGUEZ",number:"33"}],infielders:[{name:"LUIS GOMEZ",number:"10"}]},leyenda:{pitchers:[{name:"JOSE LUIS",number:"01"}],infielders:[{name:"RAFA MORA",number:"99"}]},tumba:{pitchers:[{name:"MARIO BARCO",number:"07"}],infielders:[{name:"ANGEL RUIZ",number:"11"}]}},b=[{date:"MAYO 14",subtitle:"2 Juegos de 8 Inning",games:[{time:"1er Juego 6:00pm",team1:"Segundo equipo en completar",team2:"Primer equipo en completar",status:"Finalizado",score:"4 - 2"},{time:"2do Juego al finalizar el 1ro.",team1:"Cuarto equipo por completar",team2:"Tercer equipo en completar",status:"Finalizado",score:"5 - 3"}]},{date:"MAYO 21",subtitle:"Descansa: LEYENDA",games:[{time:"1er Juego 6:30pm",team1:"VETERANOS",team2:"HALCONES",status:"Próximo",score:null},{time:"2do Juego",team1:"TEAM TUMBA GOBIERNO",team2:"Equipo Ganador",status:"Próximo",score:null},{time:"3er Juego",team1:"Equipo perdedor 1er juego",team2:"TEAM TUMBA GOBIERNO",status:"Próximo",score:null}]},{date:"MAYO 28",subtitle:"Descansa: VETERANOS",games:[{time:"1er Juego 6:30pm",team1:"HALCONES",team2:"TEAM TUMBA GOBIERNO",status:"Próximo",score:null},{time:"2do Juego",team1:"LEYENDA",team2:"Equipo Ganador",status:"Próximo",score:null},{time:"3er Juego",team1:"Equipo perdedor 1er juego",team2:"LEYENDA",status:"Próximo",score:null}]}];let i="calendario",n="veteranos";const d=document.getElementById("root");function m(){const e=document.createElement("header");return e.className="border-b border-white/10 sticky top-0 z-50",e.style.backgroundColor="#012169",e.innerHTML=`
    <div class="flex justify-between items-center w-full h-20 px-4 md:px-10 max-w-7xl mx-auto">
      <div class="font-sans text-2xl font-bold text-white uppercase tracking-tighter">
        <span style="letter-spacing: -1.2px;">liga softball banco popular</span>
      </div>
      <nav class="hidden md:flex gap-8 items-center h-full">
        <a href="#" data-view="calendario" class="nav-link font-sans text-xl uppercase tracking-wider ${i==="calendario"?"text-white border-b-4 border-white pb-1":"text-white/70 hover:text-white"} transition-all duration-200">Calendario</a>
        <a href="#" data-view="posiciones" class="nav-link font-sans text-xl uppercase tracking-wider ${i==="posiciones"?"text-white border-b-4 border-white pb-1":"text-white/70 hover:text-white"} transition-all duration-200">Posiciones</a>
        <a href="#" data-view="equipos" class="nav-link font-sans text-xl uppercase tracking-wider ${i==="equipos"?"text-white border-b-4 border-white pb-1":"text-white/70 hover:text-white"} transition-all duration-200">Equipos</a>
      </nav>
      <!-- Mobile menu button can go here -->
    </div>
  `,e.querySelectorAll(".nav-link").forEach(t=>{t.addEventListener("click",r=>{r.preventDefault();const s=t.getAttribute("data-view");s&&h(s)})}),e}function c(e,t){const r=document.createElement("section");return r.className="mb-12",r.innerHTML=`
    <div class="relative h-64 md:h-80 rounded-xl overflow-hidden bg-black flex items-center justify-center text-center px-6">
      <img alt="Baseball stadium" class="absolute inset-0 w-full h-full object-cover opacity-40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcKiTkpiVjMAR551iCfdvgzkBO3kpcQ-4iQ_E81QW0F8CE3CUc30Xac9M-rE0FW0TaSTMH60RP4MnRWfLE3DATmWSPMCD2dIg693EmAWsuw8jU2HkmFzWwbOXTimuIxFSTYIGwVX63YKn7DDM8sTjtbvcwz8VHza3FFF4s2_fLDMZOzFu_TEhUpqIDrvWwYFwK8_5YnIf7p_V2rqbTPh9rKxTvAg2n24Q5GVtA0ONTsm2dBHpya-yfQmFPrk1xevlLrXBXqgQFRzuD">
      <div class="relative z-10">
        <h1 class="font-sans text-5xl md:text-6xl text-white font-bold uppercase mb-2">${e}</h1>
        <p class="font-sans text-xl md:text-2xl text-white/80 uppercase tracking-widest">${t}</p>
      </div>
    </div>
  `,r}function f(){const e=document.createElement("div");return e.className="space-y-12",b.forEach(t=>{const r=document.createElement("section");r.innerHTML=`
      <div class="flex items-center gap-4 mb-6">
        <div class="px-6 py-2 font-sans text-xl font-bold uppercase -skew-x-12" style="background-color: #012169; color: white;">
          <span class="inline-block skew-x-12">${t.date}</span>
        </div>
        <div class="flex-grow h-[2px] bg-gray-200"></div>
        <span class="font-sans text-sm font-bold text-gray-500 uppercase">${t.subtitle}</span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${t.games.map(s=>`
          <div class="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-200">
            <div class="px-4 py-1 text-xs font-bold uppercase" style="background-color: #012169; color: white;">${s.time}</div>
            <div class="p-6 flex flex-col items-center justify-center flex-grow text-center">
              <div class="font-sans text-lg font-bold uppercase mb-1">${s.team1}</div>
              <div class="font-sans text-sm font-bold text-red-800 uppercase my-2">VS</div>
              <div class="font-sans text-lg font-bold uppercase mt-1">${s.team2}</div>
            </div>
            ${s.status==="Finalizado"?`
              <div class="bg-gray-50 px-4 py-2 flex justify-between items-center w-full border-t border-gray-100">
                <span class="text-sm font-bold text-blue-900 uppercase">Finalizado</span>
                <div class="flex items-center gap-2 font-bold text-2xl text-blue-900">
                  <span>${s.score}</span>
                </div>
              </div>
            `:""}
          </div>
        `).join("")}
      </div>
    `,e.appendChild(r)}),e}function g(){const e=document.createElement("div");return e.className="w-full",e.innerHTML=`
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
            ${p.map(t=>`
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
  `,e}function v(){const e=document.createElement("div");e.className="flex flex-col md:flex-row gap-8";const t=p.find(s=>s.id===n),r=x[n];return e.innerHTML=`
    <!-- Sidebar -->
    <aside class="w-full md:w-64 flex-shrink-0">
      <div class="bg-white border border-gray-200 p-4 rounded-lg sticky top-24">
        <h3 class="text-lg font-bold mb-4 uppercase border-b-2 border-blue-900 pb-2">Equipos</h3>
        <div class="flex flex-col gap-2">
          ${p.map(s=>`
            <button data-team="${s.id}" class="team-btn text-left p-3 rounded font-bold transition-all ${n===s.id?"bg-blue-900 text-white border-l-4 border-blue-500":"text-gray-600 hover:bg-gray-100"}">
              ${s.name}
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
            ${r.pitchers.map(s=>`
              <div class="bg-white border border-gray-200 p-4 flex justify-between items-center hover:border-blue-900 transition-colors">
                <h4 class="text-xl font-bold uppercase">${s.name}</h4>
                <div class="bg-blue-900 text-white text-xl font-bold px-3 py-1">#${s.number}</div>
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
            ${r.infielders.map(s=>`
              <div class="bg-white border border-gray-200 p-4 flex justify-between items-center hover:border-blue-900 transition-colors">
                <h4 class="text-xl font-bold uppercase">${s.name}</h4>
                <div class="bg-blue-900 text-white text-xl font-bold px-3 py-1">#${s.number}</div>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    </div>
  `,e.querySelectorAll(".team-btn").forEach(s=>{s.addEventListener("click",()=>{n=s.getAttribute("data-team"),u()})}),e}function u(){d.innerHTML="",d.appendChild(m());const e=document.createElement("main");e.className="max-w-7xl mx-auto px-4 md:px-10 py-12",i==="calendario"?(e.appendChild(c("Calendario de Juegos","SERIE REGULAR 2026")),e.appendChild(f())):i==="posiciones"?(e.appendChild(c("Posiciones de Liga","SERIE REGULAR 2026")),e.appendChild(g())):i==="equipos"&&(e.appendChild(c("Roster de Equipos","SERIE REGULAR 2026")),e.appendChild(v())),d.appendChild(e)}function h(e){i=e,window.scrollTo(0,0),u()}u();
