// "use strict" = JavaScript se pone más estricto y nos ayuda a detectar errores.

"use strict";


// Modo oscuro/claro -------------------------------------------------------------

const btnDM = document.getElementById("btnDM");
const mode = btnDM.querySelector("i");
const body = document.body;

//RESETEAR EL MODO: uso localStorage.getItem. Lo escribo arriba, aunque cronológicamente he creado primero el local.Storage.setItem

const modoGuardado = localStorage.getItem("mode");
if (modoGuardado === "true") {
  body.classList.add("dark-mode");
  mode.classList.add("bi-sun");
  btnDM.setAttribute("aria-label", "Activar modo claro");
}

btnDM.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  mode.classList.toggle("bi-sun");

  //RECORDAR EL MODO: uso localStorage.setItem para que la página recuerde el modo elegido al recargarla, pero también necesitaré que recupere el modo guardado después de actualizar la página
  localStorage.setItem("mode", body.classList.contains("dark-mode"));

  if (body.classList.contains("dark-mode")) {
    btnDM.setAttribute("aria-label", "Activar modo claro");
  } else {
    btnDM.setAttribute("aria-label", "Activar modo oscuro");
  }
});


// ARRAY CV -------------------------------------------------------------

// vale, empecemos con el cv dinámico, para ello quiero crear un array de objetos
// es decir, quiero crear un array en el que estén todas las secciones
// y cada seccion tenga los diferentes apartados (objetos)

const cv = [
  {
    seccion: "sobreMi",
    titulo: "Sobre mí",
    frase: "El desarrollo web por la mejora de la experiencia de usuario",
    puestos: ["Desarrolladora web en formación", "Diseñadora UX entry-level"],
    descripcion:
      "Soy una desarrolladora Web Front-end Júnior certificada con el Certificado de Profesionalidad IFCD0110. Especializada en la maquetación web responsive (HTML5, CSS3), integración y mantenimiento de gestores de contenido (WordPress) y diseño de interfaces (Figma). Background de 7 años en administración sanitaria que me aporta alta capacidad de resolución de incidencias (troubleshooting), orientación al detalle, adaptabilidad y trabajo en equipo. Enfocada en escribir código limpio, garantizando la usabilidad, la accesibilidad web (W3C) y optimizando la experiencia de usuario (UX)",
    objetivo:
      "Mi objetivo es crecer profesionalmente como desarrolladora web, consolidando mis conocimientos técnicos y ampliando progresivamente mi formación en UX para aportar una visión más completa a cada proyecto.",
  },

  {
    seccion: "formacion",
    titulo: "Formación",
    estudios: [
      {
        titulo: "Certificación Profesional en Confección y publicación de páginas web",
        centro: "Centre d'Estudis Politècnics",
        fecha: "2026",
      },
      {
        titulo: "Certificación en Diseño de UX",
        centro: "Google",
        fecha: "2024",
      },
      {
        titulo: "Certificación en Gestión de Proyectos",
        centro: "Google",
        fecha: "2024",
      },
      {
        titulo: "Técnica Superior en Documentación y Administración Sanitarias",
        centro: "I.E.S. La Torreta",
        fecha: "2018",
      },
    ],
  },

  {
    seccion: "experiencia",
    titulo: "Experiencia",
    trabajos: [
      {
        cargo: "Desarrolladora Web Júnior",
        lugar: "Centre d'Estudis Politècnics",
        fecha: "2026 - En curso",
        funciones: [
          "Maquetación y estructuración de páginas web y landing pages adaptables (Responsive Design) mediante HTML5 y CSS3.",
          "Mantenimiento, actualización de contenidos y configuración de plantillas en WordPress.",
          "Optimización de imágenes y recursos multimedia para la mejora del tiempo de carga web (WPO).",
          "Apoyo en la publicación de sitios web en servidor y gestión de archivos mediante clientes FTP.",
        ],
      },
      {
        cargo: "Diseñadora de UX Júnior",
        lugar: "Google, Coursera",
        fecha: "2024",
        funciones: [
          "Investigación de usuarios para identificar necesidades, objetivos y puntos de fricción.",
          "Creación de wireframes y estructuras de interfaz orientadas a mejorar la usabilidad.",
          "Diseño y optimización de flujos de interacción, creando recorridos intuitivos y coherentes.",
          "Creación de prototipos interactivos en Figma, aplicando criterios de accesibilidad y diseño centrado en el usuario.",
        ],
      },
      {
        cargo: "Administrativa Sanitaria / Gestión Documental",
        lugar: "Dexeus S.A.P.",
        fecha: "2018 - 2025",
        funciones: [
          "Gestión documental, organización de bases de datos e introducción de datos en sistemas CRM e Intranet hospitalaria.",
          "Atención directa y resolución de incidencias del usuario, aplicando estrategias de optimización de procesos digitales.",
          "Coordinación de agendas, programación de citas y tareas de facturación y soporte administrativo interno.",
        ],
      },
    ],
  },

  {
    seccion: "skills",
    titulo: "Skills",
    hardSkills: [
      {
        nombre: "Web",
        herramientas: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive Design", "Usabilidad y Accesibilidad (W3C)"],
      },
      {
        nombre: "UX",
        herramientas: [
          "Investigación de usuarios",
          "Wireframes",
          "Diseño de flujos de interacción",
          "Optimización de recursos web",
        ],
      },
      {
        nombre: "Herramientas",
        herramientas: ["WordPress", "Figma", "Intranet/CRM", "ACTIC"],
      },
    ],

    softSkills: [
      {
        nombre: "Interpersonales",
        herramientas: [
          "Trabajo en equipo en entornos ágiles",
          "Comunicación y colaboración",
          "Orientación a la experiencia de usuario",
          "Adaptabilidad",
          "Aprendizaje continuo",
        ],
      },
      {
        nombre: "Profesionales",
        herramientas: [
          "Troubleshooting",
          "Gestión de datos",
          "Atención al detalle",
          "Organización y gestión de tareas",
          "Pensamiento analítico",
        ],
      },
    ],
    idiomas: [
      {
        idioma: "Español",
        nivel: "Nativo",
      },
      {
        idioma: "Valenciano/Catalán",
        nivel: "Nativo",
      },
      {
        idioma: "Inglés",
        nivel: "Nivel académico",
      },
    ],
  },

  {
    seccion: "proyectos",
    titulo: "Proyectos",
    campos: [
      {
        campo: "UX",
        proyectosUx: [
          {
            nombre: "PunkMe",
            tipo: "Diseño de aplicación móvil",
            fecha: "2023",
            descripcion: "PunkMe es una aplicación de contenido, noticias y venta de música punk y derivados",
            url: "https://ma-27-ma.github.io/punkme-ux/",
          },
          {
            nombre: "Kinétrolis",
            tipo: "Diseño web, versión móvil",
            fecha: "2024",
            descripcion: "Kinétrolis es una plataforma para la adquisición de entradas y selección de butacas para el cine",
            url: "https://ma-27-ma.github.io/kinetrolis-ux/",
          },
          {
            nombre: "Rescat3",
            tipo: "Diseño de aplicación y sitio web adaptable",
            fecha: "2024",
            descripcion: "Rescat3 es una iniciativa de interés público que impulsa las 3R: reducir, reutilizar y reciclar.",
            url: "https://ma-27-ma.github.io/rescat3-web/",
          },
        ],
      },
      {
        campo: "Web",
        proyectosWeb: [
          {
            nombre: "Meulada",
            tipo: "Web-HTML",
            fecha: "2026",
            descripcion: "Meulada es una web de adopción de mascotas",
            url: "https://ma-27-ma.github.io/meulada-html/",
          },

          {
            nombre: "Sora",
            tipo: "Web-Responsive",
            fecha: "2026",
            descripcion: "Sora es una web de joyas",
            url: "https://ma-27-ma.github.io/sora-web/",
          },

          {
            nombre: "Muhiwara",
            tipo: "Formulario-Web",
            fecha: "2026",
            descripcion: "Muhiwara es un formulario para convertirse en pirata",
            url: "https://ma-27-ma.github.io/muhiwara-form/",
          },

          {
            nombre: "StargateTour",
            tipo: "Web-JavaScript",
            fecha: "2026",
            descripcion: "StargateTour es una web de viajes intergalácticos",
            url: "https://ma-27-ma.github.io/stargatetour-web/",
          },
        ],
      },
    ],
  },

  {
    seccion: "contacto",
    titulo: "Contacto",
    via: [
      {
        tipo: "Mail",
        valor: "merce4.anton@gmail.com",
      },
      {
        tipo: "Teléfono",
        valor: "+34 645 768 129",
      },
      {
        tipo: "Web",
        valor: "https://merce4.free.nf/",
      },
      {
        tipo: "Portfolio",
        valor: "https://ma27anton.wixsite.com/ma27",
      },
      {
        tipo: "LinkedIn",
        valor: "https://www.linkedin.com/in/ma27anton/",
      },
      {
        tipo: "GitHub",
        valor: "https://manton25-oss.github.io/Projects_M/",
      },
    ],
  },
];

//Probando el array:
// cv[0]
// console.log(cv[0]);

// Experiencia ------------------------------------------------------------------

for (let i = 0; i < cv[2].trabajos.length; i++) {
  let funciones = "";
  // aquí se me fue de las manos... 
  for (let j = 0; j < cv[2].trabajos[i].funciones.length; j++) {
    funciones += `
    <li> ${cv[2].trabajos[i].funciones[j]}
    </li>
    `;
  }
  // a ver, en realidad es un for dentro de un for, pero válgame, pa mi es el bellocino de oro

  const modal = document.getElementById(`modalExperiencia${i}`);
  const contenidoModal = modal.querySelector(".contenidoModal");

  contenidoModal.innerHTML = `
   <h4>Funciones:</h4> 
  <ul>
  ${funciones} 
  </ul>
  `
}

const btnsVerMas = document.querySelectorAll(".btnVerExperiencia")

btnsVerMas.forEach((boton) => {
  boton.addEventListener("click", () => {
    const trabajo = boton.dataset.trabajo

    if (trabajo === "0") {
      const modal = document.getElementById("modalExperiencia0");
      modal.classList.add("abierto");
      boton.style.display = "none"
    }
    if (trabajo === "1") {
      const modal = document.getElementById("modalExperiencia1");
      modal.classList.add("abierto");
      boton.style.display = "none"
    }
    if (trabajo === "2") {
      const modal = document.getElementById("modalExperiencia2")
      modal.classList.add("abierto");
      boton.style.display = "none"
    }
  })

})

// Para cerrar las experincias

const cerrarE0 = document.querySelector("#modalExperiencia0 .cerrarModal")
const cerrarE1 = document.querySelector("#modalExperiencia1 .cerrarModal")
const cerrarE2 = document.querySelector("#modalExperiencia2 .cerrarModal")

cerrarE0.addEventListener("click", () => {
  const modal = document.getElementById("modalExperiencia0")
  modal.classList.remove("abierto");

  document.querySelector('[data-trabajo="0"]').style.display = "block"
})
cerrarE1.addEventListener("click", () => {
  const modal = document.getElementById("modalExperiencia1")
  modal.classList.remove("abierto");

  document.querySelector('[data-trabajo="1"]').style.display = "block"
})
cerrarE2.addEventListener("click", () => {
  const modal = document.getElementById("modalExperiencia2")
  modal.classList.remove("abierto");

  document.querySelector('[data-trabajo="2"]').style.display = "block"
})


// Skills -----------------------------------------------------------------------

// Las skills del array cv pero sin modal todavía:

const skills = document.getElementById("skills");

// para las hardSkills
let hardSkills = "";

for (let i = 0; i < cv[3].hardSkills.length; i++) {
  let herramientas = "";

  for (let j = 0; j < cv[3].hardSkills[i].herramientas.length; j++) {
    herramientas += `<li> 
          ${cv[3].hardSkills[i].herramientas[j]}
          </li>`;
  }

  hardSkills += `<li>
      <p>${cv[3].hardSkills[i].nombre}</p>
      <ul> ${herramientas} </ul>
      </li>`;
}

//Para las softSkills
let softSkills = "";

for (let i = 0; i < cv[3].softSkills.length; i++) {
  let herramientas = "";

  for (let j = 0; j < cv[3].softSkills[i].herramientas.length; j++) {
    herramientas += `<li>
          ${cv[3].softSkills[i].herramientas[j]}
          </li>`;
  }

  softSkills += `<li>
      <p>${cv[3].softSkills[i].nombre}</p>
      <ul> ${herramientas} </ul>
      </li>`;
}

const templateHard = `<ul>${hardSkills}</ul>`;
const templateSoft = `<ul>${softSkills}</ul>`;


// Para crear el modal, primero declaro las variables del resumen de las skills

const resumenHard = document.getElementById("resumenHard");
const resumenSoft = document.getElementById("resumenSoft");

const btnVerSkills = document.querySelectorAll(".btnVerSkills");


// Las hardskills del resumen
const modalHard = [
  cv[3].hardSkills[0].herramientas[0],
  cv[3].hardSkills[0].herramientas[3],
  cv[3].hardSkills[0].herramientas[1],
  cv[3].hardSkills[2].herramientas[1],
  cv[3].hardSkills[1].herramientas[1]
];

let skillsHard = "";

for (let i = 0; i < modalHard.length; i++) {

  skillsHard += `
    <span>${modalHard[i]}</span>
  `;
}
resumenHard.innerHTML = skillsHard;


// Las softskills del resumen
const modalSoft = [
  cv[3].softSkills[1].herramientas[0],
  cv[3].softSkills[1].herramientas[1],
  cv[3].softSkills[0].herramientas[4]
];

let skillsSoft = "";

for (let i = 0; i < modalSoft.length; i++) {

  skillsSoft += `
    <span>${modalSoft[i]}</span>
  `;
}
resumenSoft.innerHTML = skillsSoft;


// Ahora creo las variables de los modales per sé

const modalSHard = document.getElementById("modalHard");
const modalSSoft = document.getElementById("modalSoft");

const cerrarHard = modalSHard.querySelector(".cerrarModal");
const cerrarSoft = modalSSoft.querySelector(".cerrarModal");

const contenidoHard = modalSHard.querySelector(".contenidoModal");
const contenidoSoft = modalSSoft.querySelector(".contenidoModal");


// Para los botones de ver Más Skills

btnVerSkills.forEach((boton) => {

  boton.addEventListener("click", () => {

    const tipo = boton.dataset.tipo;
    // Ahora necesito saber qué hace según el tipo, por eso necesito un if, por si es hard o soft

    if (tipo === "hard") {

      contenidoHard.innerHTML = templateHard;
      modalSHard.classList.add("abierto");
      boton.style.display = "none";

    }

    if (tipo === "soft") {

      contenidoSoft.innerHTML = templateSoft;
      modalSSoft.classList.add("abierto");
      boton.style.display = "none";

    }

  });

});


// Cerrar las HardSkills

cerrarHard.addEventListener("click", () => {

  modalSHard.classList.remove("abierto");
  contenidoHard.innerHTML = "";

  document.querySelector('[data-tipo="hard"]').style.display = "block";

});


// Cerrar las SoftSkills

cerrarSoft.addEventListener("click", () => {

  modalSSoft.classList.remove("abierto");
  contenidoSoft.innerHTML = "";

  document.querySelector('[data-tipo="soft"]').style.display = "block";

});

// Formación ------------------------------------------------------------------
// Ahroa seguimos con el siguiente objeto del array const cv = [...]

const formacion = document.getElementById("formacionContenido");

//De la misma manera que en SobreMi, ahora en formacion, tengo que generar un for para estudios creando antes una variable vacía
let estudios = "";

for (let i = 0; i < cv[1].estudios.length; i++) {
  estudios += `<li> 
      <p> ${cv[1].estudios[i].titulo} </p>
      <p> ${cv[1].estudios[i].centro} </p>
      <p> ${cv[1].estudios[i].fecha} </p>
      </li>`;
}

const templateFormacion = `<h2> ${cv[1].titulo} </h2>
  <ul> ${estudios} </ul>`;

formacion.innerHTML = templateFormacion;


// Proyectos ----------------------------------------------------------------

// const proyectos = document.getElementById("proyectosContenido");

let ux = "";

for (let i = 0; i < cv[4].campos[0].proyectosUx.length; i++) {
  ux += `
  <article class="tarjetaProyecto">
      <p> ${cv[4].campos[0].proyectosUx[i].nombre}</p>
      <p> ${cv[4].campos[0].proyectosUx[i].tipo}</p>
      <p> ${cv[4].campos[0].proyectosUx[i].fecha}</p>
      <p> ${cv[4].campos[0].proyectosUx[i].descripcion}</p>
      <a href="${cv[4].campos[0].proyectosUx[i].url}"
      target= "_blank"
      rel="noopener noreferrer">
      Ver proyecto
      </a>
    </article>
    `;
}

let web = "";

for (let i = 0; i < cv[4].campos[1].proyectosWeb.length; i++) {
  web += `
  <article class="tarjetaProyecto">
      <p> ${cv[4].campos[1].proyectosWeb[i].nombre}</p>
      <p> ${cv[4].campos[1].proyectosWeb[i].tipo}</p>
      <p> ${cv[4].campos[1].proyectosWeb[i].fecha}</p>
      <p> ${cv[4].campos[1].proyectosWeb[i].descripcion}</p>
      <a href="${cv[4].campos[1].proyectosWeb[i].url}"
      target= "_blank"
      rel="noopener noreferrer">
      Ver proyecto
      </a>
    </article>
    `;
}


document.getElementById("proyectosUX").innerHTML = ux
document.getElementById("proyectosWeb").innerHTML = web



// PARA EL CARROUSEL

const botonesCarrusel = document.querySelectorAll(".btnCarrusel");

botonesCarrusel.forEach((boton) => {

  boton.addEventListener("click", () => {

    //parentElement: el elemento padre de este elemento.
    // Busca el elemento HTML que contiene directamente el botón, en este caso
    //el div del carrusel. 
    //Como tengo dos carruseles, le digo que busque el elemento padre (carrusel) y a partir de ahí busca .tarjetasProyectos
    const tarjetas = boton.parentElement.querySelector(".tarjetasProyectos");

    if (boton.classList.contains("siguiente")) {
      tarjetas.scrollBy({
        //clientWidth: es el aancho visible del elemento, lo uso para que se desplace el carrosuel hacia un lado u otro la cantidad equivalente al ancho visible de carrusel,
        // o sea, muévete el width del elemento 
        left: tarjetas.clientWidth,
        behavior: "smooth"
      });

    } else {
      tarjetas.scrollBy({
        left: -tarjetas.clientWidth,
        behavior: "smooth"
      });
    }
  });
});


// Sobre mí ------------------------------------------------------------------

const sobreMi = document.getElementById("sobreMiContenido");

// Antes de poder cargar dinámicamente el contenido de la sección, necesito tener definidos los valores que quiero meter en los literal templates. Los "puestos" al ser un array tengo que calcular previamente sus posibles valores. Es decir, como puestos es un array, necesitamos recorrerlo para generar un <li> por cada puesto antes de incluirlo en el template.

//Por eso primero recorro el bucle del array "puestos" y luego ya puedo añadirlo al literal template de la const "templateSobreMi"

// He creado esta variable vacía, porque necesito un contenedor en el que recorrer el for
let puestos = "";
for (let i = 0; i < cv[0].puestos.length; i++) {
  puestos += `<li> ${cv[0].puestos[i]} </li> `;
}

// Ahora sí, ya puedo introducir todos los objetos en la const templateSobreMi, puesto que ya tengo generado el for de puestos:

const templateSobreMi = `<h2>${cv[0].titulo}</h2> 
  <p>${cv[0].frase}</p> 
  <ul> ${puestos}</ul> 
  <p> ${cv[0].descripcion}</p>
  <p> ${cv[0].objetivo}</p>`;

sobreMi.innerHTML = templateSobreMi;


// Contacto ------------------------------------------------------------------

const contacto = document.getElementById("contacto");

// esto es para poner el icono de bootstrap al lado de cada valor de contactos

const iconosContacto = {
  Mail: "bi-envelope",
  Teléfono: "bi-telephone",
  Web: "bi-globe",
  Portfolio: "bi-briefcase",
  LinkedIn: "bi-linkedin",
  GitHub: "bi-github"
};

let via = "";

for (let i = 0; i < cv[5].via.length; i++) {

  const tipo = cv[5].via[i].tipo;
  const valor = cv[5].via[i].valor;
  const icono = iconosContacto[tipo];
  // lo que hago aquí es añadir un condicional para que mail y teléfono utilicen protocolos de mailto y tel y se abran con el gestor del sistema, en vez de interpretarlos como URL relativas.

  //Creo una variable vacía y le asigno el enlace según el tipo de contacto
  // si es tipo Mail, usa el protocolo mailto
  // sino, si es tipo teléfono, usa el protocolo tel
  // sino, usa url relativa

  // Con este condicional evito que al hacer click me salga error "Cannot GET..." al pulsar sobre el mail o sobre el teléfono

  let enlace = "";

  if (cv[5].via[i].tipo === "Mail") {
    enlace = `<a href="mailto:${cv[5].via[i].valor}">
      ${cv[5].via[i].valor}
      </a>`;
  } else if (cv[5].via[i].tipo === "Teléfono") {
    enlace = `<a href ="tel:${cv[5].via[i].valor}">
      ${cv[5].via[i].valor}
      </a>`;
  } else {
    enlace = `<a href = "${cv[5].via[i].valor}" target = "_blank">
      ${cv[5].via[i].valor}
      </a>`;
  }

  via += `<li>
    <span>
    <i class="bi ${icono}" aria-hidden="true"></i>
    ${tipo}
    </span>
       ${enlace}
    </li>`;
}

const templateContacto = `
  <div class ="cabeceraContacto">
  <img class="logo-ma" src="img/iconoLogoTransp.png" alt="icono de Mercedes Antón" title="icono Mercedes Antón">
  <h2>${cv[5].titulo}</h2>
  </div>

  <div class= "contactoContenido">
  <ul>${via}</ul>
  </div>
  `;
contacto.innerHTML = templateContacto;


// BurgerMenu ------------------------------------------------------------------

const menu = document.getElementById("menu");
const btnBurger = document.querySelector(".burger");

btnBurger.addEventListener("click", abrirBurger);

function abrirBurger() {
  menu.classList.toggle("activo");
  document.body.classList.toggle("no-scroll");
  btnBurger.classList.toggle("activo");
}

const linksBurger = menu.querySelectorAll("a");

linksBurger.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("activo");
    document.body.classList.remove("no-scroll");
    btnBurger.classList.remove("activo");
  });
});
