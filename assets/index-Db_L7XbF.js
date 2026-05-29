(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const h=[{id:"veteranos",name:"VETERANOS",manager:"Jhonnathan Agramonte",stats:{pos:1,jj:3,jg:2,jp:1,avg:"667",dif:"0"}},{id:"tumba",name:"TUMBA GOBIERNO",manager:"Luis Mendez",stats:{pos:2,jj:3,jg:2,jp:1,avg:"667",dif:"0"}},{id:"halcones",name:"HALCONES",manager:"Maximo Morel",stats:{pos:3,jj:3,jg:1,jp:2,avg:"333",dif:"1"}},{id:"leyenda",name:"LEYENDA",manager:"Emilio Estrella",stats:{pos:4,jj:1,jg:0,jp:1,avg:"0",dif:"1"}}],A={halcones:{pitchers:[{name:"Julio Venezuela",number:"-"},{name:"Yorki Tiburcio",number:"-"},{name:"Nehemias Valdez",number:"-"}],infielders:[{name:"Jeffry estrella",number:"-"},{name:"Yomelvis Grullón",number:"-"},{name:"Carlos Batista",number:"-"},{name:"Manuel Garces",number:"-"},{name:"Leudy brito",number:"-"},{name:"Dario de la Cruz",number:"-"},{name:"Rayner Grullón",number:"-"},{name:"Maximo Morel",number:"-"},{name:"Willy Ogando",number:"-"},{name:"Jordan Peralta",number:"-"},{name:"Joan Codio",number:"-"},{name:"Luis Mena",number:"-"},{name:"Yael Sierra",number:"-"},{name:"Natiel de Jesus",number:"-"},{name:"Jose Luciano",number:"-"},{name:"Gilberto Figueroa",number:"-"},{name:"Manuel Vasquez",number:"-"},{name:"Carlos acosta (hermano de Fausto)",number:"-"}]},tumba:{pitchers:[{name:"Mercedez Zuldo",number:"-"},{name:"Adrian de lo Santos",number:"-"},{name:"Juan Albuez",number:"-"}],infielders:[{name:"Daniel Javier",number:"-"},{name:"Gabriel Lebron",number:"-"},{name:"Elvis Duran",number:"-"},{name:"Domingo Berroa",number:"-"},{name:"Jose Luis (Julian Yan)",number:"-"},{name:"Luis Javier Montilla",number:"-"},{name:"Roberto Tejeda",number:"-"},{name:"Reinaldo Bodden",number:"-"},{name:"Alfredo Collado",number:"-"},{name:"Darrys Blanco",number:"-"},{name:"Julio Lopez ",number:"-"},{name:"Luis Mendez",number:"-"},{name:"Henry Gomera",number:"-"},{name:"Amaury Montas",number:"-"},{name:"Albert Ramirez",number:"-"},{name:"Joel Silverio (Altuve)",number:"-"},{name:"Yoan Martinez",number:"-"},{name:"Hugo de los Santos",number:"-"},{name:"Esquender javier (Mangu)",number:"-"}]},veteranos:{pitchers:[{name:"Yobanni Jombita",number:"-"},{name:"Martin Almonte",number:"-"},{name:"Diogenes Caribe",number:"-"}],infielders:[{name:"Daniel Ruiz",number:"-"},{name:"Edison Zapata",number:"-"},{name:"Emilio Pichardo",number:"-"},{name:"Emmanuel Vasquez",number:"-"},{name:"Jhonnathan Agramonte",number:"-"},{name:"Fausto Acosta",number:"-"},{name:"Miguel Ángel (pelotero)",number:"-"},{name:"Carlos Ureña",number:"-"},{name:"Paulino Francisco",number:"-"},{name:"Kelvin Castillo",number:"-"},{name:"Willy Perez",number:"-"},{name:"Eudy Ortiz",number:"-"},{name:"Brian Guerrero",number:"-"},{name:"Francisco Amparo",number:"-"},{name:"Luis Enrrique Reyes",number:"-"},{name:"Julian Aquino",number:"-"},{name:"Sergio Rodriguez",number:"-"},{name:"Estarlin Abad",number:"-"},{name:"Hylen Fabian ",number:"-"}]},leyenda:{pitchers:[{name:"Miguel Chavarria",number:"-"},{name:"Santos  Santana",number:"-"},{name:"Carlos Toribio",number:"-"}],infielders:[{name:"Erie Escorbores",number:"-"},{name:"Day Feliz",number:"-"},{name:"Frank Báez",number:"-"},{name:"Joel Arias",number:"-"},{name:"Emilio Estrella",number:"-"},{name:"Enmanuel Molina",number:"-"},{name:"Juan Carlos Doñe",number:"-"},{name:"Victor Concepciȯn",number:"-"},{name:"Hector de los Santos",number:"-"},{name:"Rael Capellan",number:"-"},{name:"Domingo Sambo",number:"-"},{name:"Yandry Montas",number:"-"},{name:"Emmanuel Fernandez",number:"-"},{name:"Nehemias García",number:"-"},{name:"Harold tapia",number:"-"},{name:"Fernand Acosta",number:"-"},{name:"Javier Ramirez",number:"-"},{name:"Luinny Brito (Ozutochi)",number:"-"},{name:"Josué Perdomo",number:"-"}]}},E=[{date:"MAYO 14",dateIso:"2026-05-14",subtitle:"2 Juegos de 8 Inning",games:[{time:"1er Juego 6:00pm",team1:"HALCONES",team2:"LEYENDA",status:"Finalizado",score:"18 - 6"},{time:"2do Juego",team1:"VETERANOS",team2:"TUMBA GOBIERNO",status:"Finalizado",score:"17 - 2"}]},{date:"MAYO 21",dateIso:"2026-05-21",subtitle:"Descansa: LEYENDA",games:[{time:"1er Juego 6:30pm",team1:"VETERANOS",team2:"HALCONES",status:"Finalizado",score:"26 - 8"},{time:"2do Juego",team1:"TUMBA GOBIERNO",team2:"VETERANOS",status:"Finalizado",score:" 10 - 9"},{time:"3er Juego",team1:"HALCONES",team2:"TUMBA GOBIERNO",status:"Finalizado",score:" 13 - 14"}]},{date:"MAYO 28",dateIso:"2026-05-28",subtitle:"Descansa: VETERANOS",games:[{time:"1er Juego 6:30pm",team1:"HALCONES",team2:"TUMBA GOBIERNO",status:"Próximo",score:null},{time:"2do Juego",team1:"LEYENDA",team2:"Ganador 1er juego",status:"Próximo",score:null},{time:"3er Juego",team1:"perdedor 1er juego",team2:"LEYENDA",status:"Próximo",score:null}]},{date:"JUNIO 11",dateIso:"2026-06-11",subtitle:"Descansa: HALCONES",games:[{time:"1er Juego 6:30pm",team1:"TUMBA GOBIERNO",team2:"LEYENDA",status:"Próximo",score:null},{time:"2do Juego",team1:"VETERANOS",team2:"Ganador 1er juego",status:"Próximo",score:null},{time:"3er Juego",team1:"perdedor 1er juego",team2:"VETERANOS",status:"Próximo",score:null}]},{date:"JUNIO 18",dateIso:"2026-06-18",subtitle:"Descansa: TUMBA GOBIERNO",games:[{time:"1er Juego 6:30pm",team1:"LEYENDA",team2:"VETERANOS",status:"Próximo",score:null},{time:"2do Juego",team1:"HALCONES",team2:"Ganador 1er juego",status:"Próximo",score:null},{time:"3er Juego",team1:"perdedor 1er juego",team2:"HALCONES",status:"Próximo",score:null}]},{date:"JUNIO 25",dateIso:"2026-06-25",subtitle:"Descansa: VETERANOS",games:[{time:"1er Juego 6:30pm",team1:"TUMBA GOBIERNO",team2:"HALCONES",status:"Próximo",score:null},{time:"2do Juego",team1:"LEYENDA",team2:"Ganador 1er juego",status:"Próximo",score:null},{time:"3er Juego",team1:"perdedor 1er juego",team2:"LEYENDA",status:"Próximo",score:null}]},{date:"JULIO 02",dateIso:"2026-07-02",subtitle:"Descansa: LEYENDA",games:[{time:"1er Juego 6:30pm",team1:"HALCONES",team2:"VETERANOS",status:"Próximo",score:null},{time:"2do Juego",team1:"TUMBA GOBIERNO",team2:"Ganador 1er juego",status:"Próximo",score:null},{time:"3er Juego",team1:"perdedor 1er juego",team2:"TUMBA GOBIERNO",status:"Próximo",score:null}]},{date:"JULIO 09",dateIso:"2026-07-09",subtitle:"Descansa: HALCONES",games:[{time:"1er Juego 6:30pm",team1:"LEYENDA",team2:"TUMBA GOBIERNO",status:"Próximo",score:null},{time:"2do Juego",team1:"VETERANOS",team2:"Ganador 1er juego",status:"Próximo",score:null},{time:"3er Juego",team1:"perdedor 1er juego",team2:"VETERANOS",status:"Próximo",score:null}]},{date:"JULIO 16",dateIso:"2026-07-16",subtitle:"Descansa: TUMBA GOBIERNO",games:[{time:"1er Juego 6:30pm",team1:"VETERANOS",team2:"LEYENDA",status:"Próximo",score:null},{time:"2do Juego",team1:"HALCONES",team2:"Ganador 1er juego",status:"Próximo",score:null},{time:"3er Juego",team1:"perdedor 1er juego",team2:"HALCONES",status:"Próximo",score:null}]},{date:"JULIO 23",dateIso:"2026-07-23",subtitle:"Descansa: VETERANOS",games:[{time:"1er Juego 6:30pm",team1:"HALCONES",team2:"TUMBA GOBIERNO",status:"Próximo",score:null},{time:"2do Juego",team1:"LEYENDA",team2:"Ganador 1er juego",status:"Próximo",score:null},{time:"3er Juego",team1:"perdedor 1er juego",team2:"LEYENDA",status:"Próximo",score:null}]},{date:"JULIO 30",dateIso:"2026-07-30",subtitle:"Descansa: LEYENDA",games:[{time:"1er Juego 6:30pm",team1:"VETERANOS",team2:"HALCONES",status:"Próximo",score:null},{time:"2do Juego",team1:"TUMBA GOBIERNO",team2:"Ganador 1er juego",status:"Próximo",score:null},{time:"3er Juego",team1:"perdedor 1er juego",team2:"TUMBA GOBIERNO",status:"Próximo",score:null}]},{date:"AGOSTO 06",dateIso:"2026-08-06",subtitle:"Descansa: HALCONES",games:[{time:"1er Juego 6:30pm",team1:"TUMBA GOBIERNO",team2:"LEYENDA",status:"Próximo",score:null},{time:"2do Juego",team1:"VETERANOS",team2:"Ganador 1er juego",status:"Próximo",score:null},{time:"3er Juego",team1:"perdedor 1er juego",team2:"VETERANOS",status:"Próximo",score:null}]},{date:"AGOSTO 13",dateIso:"2026-08-13",subtitle:"Descansa: TUMBA GOBIERNO",games:[{time:"1er Juego 6:30pm",team1:"LEYENDA",team2:"VETERANOS",status:"Próximo",score:null},{time:"2do Juego",team1:"HALCONES",team2:"Ganador 1er juego",status:"Próximo",score:null},{time:"3er Juego",team1:"perdedor 1er juego",team2:"HALCONES",status:"Próximo",score:null}]},{date:"AGOSTO 20",dateIso:"2026-08-20",subtitle:"Descansa: VETERANOS",games:[{time:"1er Juego 6:30pm",team1:"HALCONES",team2:"TUMBA GOBIERNO",status:"Próximo",score:null},{time:"2do Juego",team1:"LEYENDA",team2:"Ganador 1er juego",status:"Próximo",score:null},{time:"3er Juego",team1:"perdedor 1er juego",team2:"LEYENDA",status:"Próximo",score:null}]},{date:"AGOSTO 27",dateIso:"2026-08-27",subtitle:"Descansa: LEYENDA",games:[{time:"1er Juego 6:30pm",team1:"VETERANOS",team2:"HALCONES",status:"Próximo",score:null},{time:"2do Juego",team1:"TUMBA GOBIERNO",team2:"Ganador 1er juego",status:"Próximo",score:null},{time:"3er Juego",team1:"perdedor 1er juego",team2:"TUMBA GOBIERNO",status:"Próximo",score:null}]},{date:"SEPTIEMBRE 03",dateIso:"2026-09-03",subtitle:"Descansa: HALCONES",games:[{time:"1er Juego 6:30pm",team1:"TUMBA GOBIERNO",team2:"LEYENDA",status:"Próximo",score:null},{time:"2do Juego",team1:"VETERANOS",team2:"Ganador 1er juego",status:"Próximo",score:null},{time:"3er Juego",team1:"perdedor 1er juego",team2:"VETERANOS",status:"Próximo",score:null}]},{date:"SEPTIEMBRE 10",dateIso:"2026-09-10",subtitle:"Descansa: TUMBA GOBIERNO",games:[{time:"1er Juego 6:30pm",team1:"LEYENDA",team2:"VETERANOS",status:"Próximo",score:null},{time:"2do Juego",team1:"HALCONES",team2:"Ganador 1er juego",status:"Próximo",score:null},{time:"3er Juego",team1:"perdedor 1er juego",team2:"HALCONES",status:"Próximo",score:null}]},{date:"SERIE SEMI FINAL NOVIEMBRE 12",dateIso:"2026-11-12",subtitle:"TRIANGULARES DE 5 INNING",games:[{time:"1er Juego 6:30pm",team1:"",team2:"",status:"Próximo",score:null},{time:"2do Juego",team1:"",team2:"",status:"Próximo",score:null},{time:"3er Juego",team1:"",team2:"",status:"Próximo",score:null}]},{date:"SERIE FINAL NOVIEMBRE 19",dateIso:"2026-11-19",subtitle:"TRIANGULARES DE 5 INNING",games:[{time:"1er Juego 6:30pm",team1:"",team2:"",status:"Próximo",score:null},{time:"2do Juego",team1:"",team2:"",status:"Próximo",score:null},{time:"3er Juego",team1:"",team2:"",status:"Próximo",score:null}]}];let c="halcones",p=!1,l=!1;const x=document.getElementById("root");function w(){const e=window.location.hash.replace("#","");return["reglamentos","pagos","calendario","posiciones","equipos"].includes(e)?e:"reglamentos"}window.addEventListener("hashchange",()=>{p=!1,d()});function O(){const e=w(),a=document.createElement("header");a.className="border-b border-white/10 sticky top-0 z-50",a.style.backgroundColor="#012169",a.innerHTML=`
    <div class="flex justify-between items-center w-full h-20 px-4 md:px-10 max-w-7xl mx-auto">
      <div class="font-sans text-xl md:text-2xl font-bold text-white uppercase tracking-tighter">
        <span style="letter-spacing: -1.2px;">liga softball banco popular</span>
      </div>
      
      <!-- Desktop Nav -->
      <nav class="hidden md:flex gap-4 lg:gap-8 items-center h-full text-nowrap">
        <a href="#reglamentos" class="font-sans text-sm md:text-lg uppercase tracking-wider ${e==="reglamentos"?"text-white border-b-4 border-white pb-1":"text-white/70 hover:text-white"} transition-all duration-200">Reglamentos</a>
        <a href="#pagos" class="font-sans text-sm md:text-lg uppercase tracking-wider ${e==="pagos"?"text-white border-b-4 border-white pb-1":"text-white/70 hover:text-white"} transition-all duration-200">Pagos</a>
        <a href="#calendario" class="font-sans text-sm md:text-lg uppercase tracking-wider ${e==="calendario"?"text-white border-b-4 border-white pb-1":"text-white/70 hover:text-white"} transition-all duration-200">Calendario</a>
        <a href="#posiciones" class="font-sans text-sm md:text-lg uppercase tracking-wider ${e==="posiciones"?"text-white border-b-4 border-white pb-1":"text-white/70 hover:text-white"} transition-all duration-200">Posiciones</a>
        <a href="#equipos" class="font-sans text-sm md:text-lg uppercase tracking-wider ${e==="equipos"?"text-white border-b-4 border-white pb-1":"text-white/70 hover:text-white"} transition-all duration-200">Equipos</a>
      </nav>

      <!-- Mobile Menu Button -->
      <button id="mobile-menu-toggle" class="md:hidden text-white p-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </button>
    </div>

    <!-- Mobile Nav Dropdown -->
    <div id="mobile-menu" class="${p?"flex":"hidden"} md:hidden flex-col bg-[#012169] border-t border-white/10 px-4 py-4 gap-4">
      <a href="#reglamentos" class="font-sans text-lg uppercase tracking-wider ${e==="reglamentos"?"text-white font-bold":"text-white/70"}">Reglamentos</a>
      <a href="#pagos" class="font-sans text-lg uppercase tracking-wider ${e==="pagos"?"text-white font-bold":"text-white/70"}">Pagos</a>
      <a href="#calendario" class="font-sans text-lg uppercase tracking-wider ${e==="calendario"?"text-white font-bold":"text-white/70"}">Calendario</a>
      <a href="#posiciones" class="font-sans text-lg uppercase tracking-wider ${e==="posiciones"?"text-white font-bold":"text-white/70"}">Posiciones</a>
      <a href="#equipos" class="font-sans text-lg uppercase tracking-wider ${e==="equipos"?"text-white font-bold":"text-white/70"}">Equipos</a>
    </div>
  `;const t=a.querySelector("#mobile-menu-toggle");return t&&t.addEventListener("click",()=>{p=!p,d()}),a}function f(e,a){const t=document.createElement("section");return t.className="mb-12",t.innerHTML=`
    <div class="relative h-64 md:h-80 rounded-xl overflow-hidden bg-black flex items-center justify-center text-center px-6">
      <img alt="Baseball stadium" class="absolute inset-0 w-full h-full object-cover opacity-40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcKiTkpiVjMAR551iCfdvgzkBO3kpcQ-4iQ_E81QW0F8CE3CUc30Xac9M-rE0FW0TaSTMH60RP4MnRWfLE3DATmWSPMCD2dIg693EmAWsuw8jU2HkmFzWwbOXTimuIxFSTYIGwVX63YKn7DDM8sTjtbvcwz8VHza3FFF4s2_fLDMZOzFu_TEhUpqIDrvWwYFwK8_5YnIf7p_V2rqbTPh9rKxTvAg2n24Q5GVtA0ONTsm2dBHpya-yfQmFPrk1xevlLrXBXqgQFRzuD">
      <div class="relative z-10">
        <h1 class="font-sans text-5xl md:text-6xl text-white font-bold uppercase mb-2">${e}</h1>
        <p class="font-sans text-xl md:text-2xl text-white/80 uppercase tracking-widest">${a}</p>
      </div>
    </div>
  `,t}function v(e){const a=document.createElement("section");return a.innerHTML=`
    <div class="flex items-center gap-4 mb-6">
      <div class="px-6 py-2 font-sans text-xl font-bold uppercase -skew-x-12" style="background-color: #012169; color: white;">
        <span class="inline-block skew-x-12">${e.date}</span>
      </div>
      <div class="flex-grow h-[2px] bg-gray-200"></div>
      <span class="font-sans text-sm font-bold text-gray-500 uppercase">${e.subtitle}</span>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      ${e.games.map(t=>`
        <div class="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-200">
          <div class="px-4 py-1 text-xs font-bold uppercase" style="background-color: #012169; color: white;">${t.time}</div>
          <div class="p-6 flex flex-col items-center justify-center flex-grow text-center">
            <div class="font-sans text-lg font-bold uppercase mb-1">${t.team1}</div>
            <div class="font-sans text-sm font-bold text-red-800 uppercase my-2">VS</div>
            <div class="font-sans text-lg font-bold uppercase mt-1">${t.team2}</div>
          </div>
          ${t.status==="Finalizado"?`
            <div class="bg-gray-50 px-4 py-2 flex justify-between items-center w-full border-t border-gray-100">
              <span class="text-sm font-bold text-blue-900 uppercase">Finalizado</span>
              <div class="flex items-center gap-2 font-bold text-2xl text-blue-900">
                <span>${t.score}</span>
              </div>
            </div>
          `:""}
        </div>
      `).join("")}
    </div>
  `,a}function N(){const e=document.createElement("div");e.className="flex flex-col gap-12";const a=new Date,t=a.getFullYear(),o=String(a.getMonth()+1).padStart(2,"0"),r=String(a.getDate()).padStart(2,"0"),s=`${t}-${o}-${r}`,i=E.filter(n=>n.dateIso<s),y=E.filter(n=>n.dateIso>=s);if(i.length>0){const n=document.createElement("div");n.className="flex flex-col items-center gap-6";const m=document.createElement("button");if(m.className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-blue-900 font-bold uppercase rounded-lg transition-all flex items-center gap-3 active:scale-95 shadow-sm cursor-pointer",m.innerHTML=`
      <span>${l?"Ocultar juegos anteriores":"Ver juegos anteriores"}</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform duration-300 ${l?"rotate-180":""}">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    `,m.addEventListener("click",()=>{l=!l,d()}),n.appendChild(m),e.appendChild(n),l){const b=document.createElement("div");b.className="space-y-12 opacity-70 grayscale-[0.3]",i.forEach(j=>{b.appendChild(v(j))}),e.insertBefore(b,n)}}const u=document.createElement("div");u.className="space-y-12";const g=document.createElement("h2");return g.className="text-3xl font-bold uppercase border-b-4 border-blue-900 pb-4 text-blue-900",g.textContent="Próximos Juegos",u.appendChild(g),y.forEach(n=>{u.appendChild(v(n))}),e.appendChild(u),e}function L(){const e=document.createElement("div");return e.className="w-full h-[calc(100vh-220px)] min-h-[750px] flex flex-col",e.id="posiciones-container",e.innerHTML=`
    <div id="posiciones-card" class="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full w-full">
      <div id="posiciones-header" class="px-6 py-4 flex justify-between items-center bg-[#012169]" style="background-color: #012169; flex-shrink: 0;">
        <h2 class="font-sans text-xl font-bold uppercase text-white">Clasificación General</h2>
        <a 
          href="https://ecscore.net/bancopopular/index.php" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-sans text-sm font-bold uppercase rounded-lg border border-white/20 transition-all active:scale-95 cursor-pointer"
          title="Abrir en pestaña nueva"
        >
          <span>Abrir en pestaña nueva</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>
      <div id="posiciones-iframe-wrapper" class="w-full flex-grow bg-gray-100">
        <iframe 
          id="posiciones-iframe"
          src="https://ecscore.net/bancopopular/index.php" 
          class="w-full h-full border-b border-gray-200" 
          title="Clasificación General"
          style="border: none; display: block; width: 100%; height: 100%;"
        ></iframe>
      </div>
    </div>
  `,e}function S(){const e=document.createElement("div");return e.className="w-full h-[calc(100vh-220px)] min-h-[750px] flex flex-col",e.id="pagos-container",e.innerHTML=`
    <div id="pagos-card" class="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm flex flex-col h-full w-full">
      <div id="pagos-header" class="px-6 py-4 flex justify-between items-center bg-[#012169]" style="background-color: #012169; flex-shrink: 0;">
        <h2 class="font-sans text-xl font-bold uppercase text-white">Pagos</h2>
        <a 
          href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTfgfCFL5gr0WIfw5ta57g01GVdyP2vG8dWKsjtHCjihQpblGnUjKTtFI_4cD5BZJHWvCp379rUBBmA/pubhtml?gid=1259747160&amp;single=true&amp;widget=true&amp;headers=false" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-sans text-sm font-bold uppercase rounded-lg border border-white/20 transition-all active:scale-95 cursor-pointer"
          title="Abrir en pestaña nueva"
        >
          <span>Abrir en pestaña nueva</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>
      <div id="pagos-iframe-wrapper" class="w-full flex-grow bg-gray-100">
        <iframe 
          id="pagos-iframe"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTfgfCFL5gr0WIfw5ta57g01GVdyP2vG8dWKsjtHCjihQpblGnUjKTtFI_4cD5BZJHWvCp379rUBBmA/pubhtml?gid=1259747160&amp;single=true&amp;widget=true&amp;headers=false"
          class="w-full h-full border-b border-gray-200" 
          title="Pagos Registrados"
          style="border: none; display: block; width: 100%; height: 100%;"
        ></iframe>
      </div>
    </div>
  `,e}function q(){const e=document.createElement("div");e.className="flex flex-col md:flex-row gap-8";const a=h.find(o=>o.id===c),t=A[c];return e.innerHTML=`
    <!-- Sidebar -->
    <aside class="w-full md:w-64 flex-shrink-0">
      <div class="bg-white border border-gray-200 p-4 rounded-lg sticky top-24">
        <h3 class="text-lg font-bold mb-4 uppercase border-b-2 border-blue-900 pb-2">Equipos</h3>
        <div class="flex flex-col gap-2">
          ${h.map(o=>`
            <button data-team="${o.id}" class="team-btn text-left p-3 rounded font-bold transition-all ${c===o.id?"bg-blue-900 text-white border-l-4 border-blue-500":"text-gray-600 hover:bg-gray-100"}">
              ${o.name}
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
            <h1 class="text-4xl font-bold uppercase mb-1">${a.name}</h1>
            <div class="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
              <span class="bg-blue-900 text-white px-3 py-1 text-xs font-bold rounded">${a.stats.pos}ER PUESTO</span>
              <span class="bg-gray-200 text-gray-700 px-3 py-1 text-xs font-bold rounded">${a.stats.jj} JUEGOS JUGADOS</span>
              <span class="bg-gray-200 text-gray-700 px-3 py-1 text-xs font-bold rounded">RECORD: ${a.stats.jg}-${a.stats.jp}</span>
            </div>
          </div>
          <div class="md:ml-auto text-center md:text-right">
            <p class="text-xs text-gray-500 uppercase mb-1">Manager</p>
            <p class="text-xl font-bold">${a.manager}</p>
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
            ${t.pitchers.map(o=>`
              <div class="bg-white border border-gray-200 p-4 flex justify-between items-center hover:border-blue-900 transition-colors">
                <h4 class="text-xl font-bold uppercase">${o.name}</h4>
                <div class="bg-blue-900 text-white text-xl font-bold px-3 py-1">#${o.number}</div>
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
            ${t.infielders.map(o=>`
              <div class="bg-white border border-gray-200 p-4 flex justify-between items-center hover:border-blue-900 transition-colors">
                <h4 class="text-xl font-bold uppercase">${o.name}</h4>
                <div class="bg-blue-900 text-white text-xl font-bold px-3 py-1">#${o.number}</div>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    </div>
  `,e.querySelectorAll(".team-btn").forEach(o=>{o.addEventListener("click",()=>{c=o.getAttribute("data-team"),d()})}),e}function J(){const e=document.createElement("div");return e.className="w-full bg-white border border-gray-200 rounded-lg shadow-md p-8 md:p-12",e.innerHTML=`
    <div class="space-y-8 text-gray-800 leading-relaxed font-sans">
      <section>
        <h3 class="text-xl font-bold uppercase mb-4 text-gray-900">Artículos Generales</h3>
        <ol class="space-y-4 list-decimal pl-5">
          <li><strong>Hora de inicio:</strong> La hora oficial de inicio del primer juego será a las 6:15 p.m. En caso de que los
equipos no cuenten con el mínimo requerido de nueve (9) jugadores, el ampáyer, en
conjunto con los mánager, podrá establecer una nueva hora de inicio, la cual no
deberá exceder los quince (15) minutos posteriores a la hora oficial programada.</li>
          <li><strong>Formato del torneo:</strong> En este torneo participarán cuatro (4) equipos. Cada semana se disputará una serie triangular de 6 entradas, en la cual tres (3) equipos verán acción, mientras que un (1) equipo descansará, conforme al calendario establecido para los días jueves.</li>
          <li><strong>Line up:</strong> Cada equipo deberá iniciar el juego con un line up obligatorio de once (11) jugadores. En caso de que un equipo complete su alineación con nueve (9) u once (11) jugadores y si por alguna razón un equipo no completa la cantidad de jugadores suficiente, se les prestara la cantidad para completar (que seria 1 jugador) para evitar el forfait; pero si ese equipo solo tiene 7 jugadores se decretara forfait (esto quiere decir que la cantidad mínima de jugadores serán 9 por equipo en un juego).</li>
          <li><strong>Registro de jugadores:</strong> Todos los jugadores deberán registrarse en la pizarra al momento de su llegada al play. Con base en los primeros nueve (9) u once (11) jugadores anotados, el mánager o capitán deberá seleccionar el line up correspondiente para la participación en el primer juego de su equipo. Para el segundo juego, se deberá continuar con la selección de los jugadores respetando el mismo orden establecido en la pizarra.</li>
          <li><strong>Sanción por no registro:</strong> Los jugadores que no se encuentren registrados en la pizarra no podrán participar en el partido. En caso de incumplimiento de esta disposición, el equipo infractor será sancionado con la pérdida del juego. No obstante, las estadísticas individuales de los jugadores serán consideradas válidas.</li>
          <li><strong>Registro indebido:</strong> Queda estrictamente prohibido que un jugador registre/anote a otro en la pizarra sin que este haya llegado al play. En caso de incumplimiento de esta disposición, ambos jugadores serán sancionados donde no podrán participar en ninguno de los dos partidos programados.</li>
          <li><strong>Retiro sin notificación:</strong> Queda prohibido anotarse en la pizarra y retirarse del play sin una previa notificación a los manager o capitán de los demás equipos, el jugador infractor de este articulo será sancionado con (1) juego suspendido.</li>
          <li><strong>Reemplazo de jugadores:</strong> Después de un jugador haya jugado un juego completo, a partir del 4.º inning, el mánager puede realizar cambios de esos jugadores notificando previamente al ampáyer. De no hacerlo, el jugador será declarado out y se le anotará 5 carreras al equipo contrario.</li>
          <li><strong>Impedimento de juego:</strong> Si un mánager, aun estando informado del impedimento de juego de un jugador, lo utiliza en el juego, su equipo perderá el partido. No obstante, el juego continuará para fines estadísticos.</li>
          <li><strong>Bateador extra:</strong> En todos los juegos se utilizará el bateador extra y asignado, correspondiendo el extra al turno del pícher que optó por no batear.</li>
          <li><strong>Barridas inseguras:</strong> Los jugadores que se tiren de pie en las bases, si tienen clavo de hierro serán declarado out.</li>
          <li><strong>Juegos oficiales:</strong> Los juegos serán oficiales cuando se complete la (3.ª) entrada. Se exceptúa la regla de súper knock-out, que se aplicará cuando exista una ventaja de quince (15) carreras al completar la tercera entrada. Asimismo, se declarará knock-out cuando un equipo obtenga una ventaja de diez (10) carreras después de cuatro (4) entradas completas.</li>
          <li><strong>Extra-innings:</strong> El juego que se extienda a extra-ining tanto en regular como semifinal y final, se determinará colocando al último out de cada equipo en 2da en su turno al bate y el que canalice más carreras en ese inning obtendrá el triunfo.</li>
          <li><strong>Criterios de desempate:</strong> En caso de empate en juegos ganados y perdidos, las posiciones de los equipos se definirán de las siguientes maneras:
            <ul class="list-disc pl-5 mt-2 space-y-1">
              <li>Empate entre dos o más equipos: la posición será otorgada al que haya acumulado más carreras.</li>
              <li>Si persiste el empate: se verificará el equipo que haya permitido menos carrera.</li>
              <li>Si continua el empate: se decidirá con la sumatoria de los hits producidos en todos los juegos.</li>
            </ul>
          </li>
          <li><strong>Postemporada:</strong> La serie semifinal y la serie final se jugarán bajo el formato de tres (3) juegos, resultando ganador el equipo que obtenga dos (2) victorias. Cada partido tendrá una duración de cinco (5) entradas. Ambas series se celebrarán en una misma fecha, conforme al calendario establecido.</li>
          <li><strong>Requisito de participación:</strong> La participación en las series semifinal y final estará limitada a los jugadores que hayan participado en más de cinco (5) juegos durante la serie regular. No se aceptarán excusas ni excepciones para el cumplimiento de esta disposición.</li>
          <li><strong>Home-Club:</strong> Se considerará como equipo ‘HOME-CLUB’ en la serie semifinal y final a aquellos equipos que hayan clasificado en primer y segundo lugar durante la serie regular.</li>
          <li><strong>Postemporada Line up:</strong> En la serie semifinal y final, el line up de once (11) jugadores será definido a discreción del mánager o capitán del equipo, sin requerir el uso de la pizarra. En el caso de que un equipo juegue 2 partidos en un mismo día tendrán que jugar todos los jugadores en esos 2 juegos y de no ser así el juego será confiscado.</li>
          <li><strong>Sustitución de lanzadores:</strong> Los lanzadores podrán ser sustituidos una vez hayan permitido un mínimo de cinco (5) carreras o haya lanzado (3) tres entradas completas. El pitcher abridor tendrá derecho al reingreso, siempre que el mánager lo considere necesario y lo notifique previamente al ampáyer.</li>
          <li><strong>Bateo de lanzadores:</strong> Los lanzadores tendrán derecho a batear al igual que los demás jugadores de posición. Si el pitcher decide no batear, el mánager podrá optar por utilizar un bateador asignado exclusivamente bajo esta condición. <em>Nota: si algún equipo se presenta con un line up de 9 o 10 jugadores incluyendo el pitcher, es obligatorio que el pitcher tenga que batear.</em></li>
          <li><strong>Ausencia de lanzadores oficiales:</strong> En caso de que los lanzadores oficiales de un equipo no se presenten, el mánager podrá autorizar que cualquier jugador participe como lanzador, siempre que lo notifique previamente al ampáyer y manager del equipo contrario.</li>
          <li><strong>Pitcher estelar ausente:</strong> Si el pitcher estelar no se ha presentado al inicio del partido y el equipo ha completado su line up de once (11) jugadores, el juego podrá comenzar. En este caso, el lanzador que inicie el partido deberá completar al menos un (1) inning antes de ser sustituido por el pitcher oficial.</li>
          <li><strong>Lanzadores oficiales:</strong> Cada equipo estará conformado por tres (3) lanzadores oficiales, quienes serán los únicos autorizados a lanzar durante todo el torneo. No estará permitido utilizar jugadores de posición como lanzadores, salvo en los casos establecidos en el artículo 22.</li>
        </ol>
      </section>

      <section class="bg-gray-50 p-6 rounded-lg border-l-4 border-red-600">
        <h3 class="text-xl font-bold uppercase mb-4 text-red-700">De las Protestas y Sanciones</h3>
        <ul class="space-y-4 list-disc pl-5">
          <li><strong>Ejecución de protestas:</strong> Todas las protestas deberán de ser ejecutadas e inscritas al principio o final del juego involucrado por el capitán del equipo (si es juego en conjunto) o el jugador (si es juego en individual) en apego al respecto y los valores que nos caracterizan, esto debe de ser con anuencia de la mesa técnica, juez y arbitro principal presente e inscrito en la hoja de anotación del partido.</li>
          <li><strong>Expulsiones:</strong> Todo atleta que sea expulsado de un juego, no podrá participar en el siguiente y debe de estar presente en ese juego; de no cumplir con esto se tomaran otras medidas de sanción acorde al incidente.</li>
          <li><strong>Limitación de participación:</strong> Queda prohibido limitar la participación de un atleta o jugador a los juegos de semifinal y final, en caso de haber pruebas de que se tomó esa acción el juego queda confiscado y se le otorga la victoria al equipo contrario.</li>
        </ul>
      </section>
    </div>
  `,e}function d(){const e=w();x.innerHTML="",x.appendChild(O());const a=document.createElement("main");a.className="max-w-7xl mx-auto px-4 md:px-10 py-12",e==="calendario"?(a.appendChild(f("Calendario","SERIE REGULAR 2026")),a.appendChild(N())):e==="posiciones"?a.appendChild(L()):e==="pagos"?a.appendChild(S()):e==="equipos"?(a.appendChild(f("Equipos","SERIE REGULAR 2026")),a.appendChild(q())):e==="reglamentos"&&(a.appendChild(f("Reglamentos","TEMPORADA 2026")),a.appendChild(J())),x.appendChild(a),window.scrollTo(0,0)}d();
