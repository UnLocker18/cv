/** @jsx createElement */
/** @jsxFrag createFragment */

const Sb = (props) => <span class="semi-bold">{props.text}</span>;

const bigIcons = {
  alten:
    "https://media.licdn.com/dms/image/C4E0BAQGYuFjszS02gA/company-logo_100_100/0/1641206587487?e=1681344000&v=beta&t=kUb4tNfVT4Jk8hrwNtm9LG-vtK-35hN9mjvXbQgMC5g",
  synarea:
    "https://media-exp1.licdn.com/dms/image/C4E0BAQFyqUegPGsI8g/company-logo_200_200/0/1519889453023?e=2147483647&v=beta&t=0EdGjRqiyd4dI8rwr_6T6wTsXROgs_9eypLV9VSHvHo",
  bitpop:
    "https://media-exp1.licdn.com/dms/image/C560BAQHP9U5Ix8dlPg/company-logo_100_100/0/1518771807146?e=2147483647&v=beta&t=5AyMPqfdR11IKHqMShF2YTTFnv8GlTc4KdaUflOwWOc",
  polito:
    "https://media-exp1.licdn.com/dms/image/C4D0BAQGbyRTmgwi0uw/company-logo_100_100/0/1616667828426?e=2147483647&v=beta&t=t-WuLIFuqRODPmNsHzDPSsMj-LYMjLUbqebqdQHo4AM",
  highSchool: "./img/book.png",
  ielts:
    "https://media-exp1.licdn.com/dms/image/C560BAQF4HhkANMvJrQ/company-logo_100_100/0/1519867554184?e=2147483647&v=beta&t=Jp0RtX2m_73Ppz2lDhsof3ozgnpOgKliVj8xjfiwMdc",
  os: "./img/windows.png",
  code: "./img/code-slash.png",
  apps: "./img/window.png",
  db: "./img/hdd.png",
  graphics: "./img/palette.png",
  spreadsheet: "./img/table.png",
  otherSkills: "./img/person.png",
  otherInfo: "./img/car-front.png",
  exams: "./img/file-text.png",
  misc: "./img/terminal.png",
};

const data_ita = {
  language: "ita",
  title: "Gianluca Garganese",
  head: {
    line: () => <>
      Neo laureato magistrale in Ingegneria del Cinema e dei Mezzi di Comunicazione presso Politecnico di Torino.<br />
      Simulation Software Engineer presso Alten.
    </>,
    items: [
      {
        text: "07/11/1997 NAPOLI (NA) ITALIA",
        icon: "bi-calendar2-date-fill",
      },
      {
        text: "Nazionalità: Italiana",
        icon: "bi-globe2",
      },
      {
        text: "Via del Nocciolino 9 21018 - Sesto Calende (VA) ITALIA",
        icon: "bi-geo-alt-fill",
      },
      { text: "3293906972", icon: "bi-phone-fill" },
      { text: "gianlucagarganese@gmail.com", icon: "bi-envelope-fill" },
      {
        text: "https://www.linkedin.com/in/gianluca-garganese/",
        icon: "bi-linkedin",
      },
      {
        text: "In arrivo il sito web con il portfolio!",
        icon: "bi-file-ppt-fill",
      },
    ],
  },
  sections: [
    {
      title: "Esperienza",
      items: [
        {
          title: "Simulation Software Engineer",
          subtitle: "Alten",
          info1: "gen 2023 - Presente",
          info2: "Gallarate, Lombardia, Italia",
          body: () => (
            <></>
          ),
          icon: bigIcons.alten,
        },
        {
          title: "Tesista",
          subtitle: "synArea Consultants Srl",
          info1: "mar 2022 - giu 2022",
          info2: "Torino, Piemonte, Italia",
          body: () => (
            <>
              Tesi in azienda presso synArea Consultants Srl.
              <br />
              Il lavoro consisteva nello sviluppo di due applicazioni{" "}
              <Sb text="WebGL" /> con grafica 3D real-time, in particolare due
              laboratori di robotica virtuali con modalità "digital twin" (che
              permette di sincronizzare i movimenti dei robot virtuali con
              quelli dei robot reali corrispondenti) e modalità "asincrona" (che
              permette di riprodurre movimenti preregistrati e di rispondere a
              quiz).
              <br />
              Le applicazioni sono state sviluppate utilizzando{" "}
              <Sb text="Unity" /> e <Sb text="C#" />.
            </>
          ),
          icon: bigIcons.synarea,
        },
        {
          title: "Assistente Videomaker",
          subtitle: "Bitpop Transmedia",
          info1: "dic 2018 - giu 2019",
          info2: "Torino, Piemonte, Italia",
          body: () => (
            <>
              Tirocinio curricolare presso Bitpop Transmedia della durata
              complessiva di 250 ore. Il lavoro consisteva prevalentemente nella
              produzione e post-produzione di video corporate, riprese di
              conferenze, interviste, ecc.
            </>
          ),
          icon: bigIcons.bitpop,
        },
      ],
    },
    {
      title: "Formazione",
      items: [
        {
          title: "Politecnico di Torino",
          subtitle:
            "Laurea Magistrale - Ingegneria del Cinema e dei Mezzi di Comunicazione",
          info1: "Voto 110/110",
          info2: "ott 2020 - dic 2022",
          icon: bigIcons.polito,
        },
        {
          title: "Politecnico di Torino",
          subtitle:
            "Laurea Triennale - Ingegneria del Cinema e dei Mezzi di Comunicazione",
          info1: "Voto 93/110",
          info2: "ott 2016 - lug 2020",
          icon: bigIcons.polito,
        },
        {
          title: "Liceo Scientifico A. Avogadro",
          subtitle: "Diploma Scientifico",
          info1: "2011 - 2016",
          info2: "",
          icon: bigIcons.highSchool,
        },
      ],
    },
    {
      title: "Conoscenze Informatiche",
      items: [
        {
          title: "Linguaggi di Programmazione",
          body: () => (
            <>
              <ul>
                <li>
                  <b>C#</b> - Ho lavorato ad un puzzle game in terza persona
                  (progetto universitario), un simulatore di attracco sulla ISS
                  (progetto universitario) e due laboratori di robotica virtuali
                  (tesi in azienda) tutti realizzati utilizzando{" "}
                  <Sb text="Unity" />.
                </li>
                <li>
                  <b>C++</b> - Ho lavorato ad un videogioco basato su catapulte
                  (progetto universitario) realizzato utilizzando{" "}
                  <Sb text="OpenGL" />.
                </li>
                <li>
                  <b>Javascript</b> - Ho lavorato a diverse applicazioni web per
                  progetti universitari e personali, alcune di queste realizzate
                  utilizzando <Sb text="React" /> e <Sb text="Node.js" />. Per i
                  database ho utilizzato <Sb text="sqlite" /> e{" "}
                  <Sb text="MongoDB" />.
                </li>
                <li>
                  <b>Kotlin</b> - Ho lavorato ad un applicazione Android per la
                  gestione di piante annaffiate mediante un vaso smart (progetto
                  universitario).
                </li>
              </ul>
              Utilizzo/ho utilizzato anche <Sb text="Python" />, <Sb text="C" />{" "}
              e <Sb text="Java" /> (per piccoli progetti personali o
              universitari).
              <br />
              Utilizzo <Sb text="Git" /> e <Sb text="GitHub" /> per la gestione
              dei progetti.
            </>
          ),
          icon: bigIcons.code,
        },
        {
          title: "Programmi / Applicazioni",
          body: () => (
            <>
              <ul>
                <li>
                  <b>Unity</b> - Ho lavorato ad alcune applicazioni (accennate
                  prima) per progetti universitari e per la tesi, in particolare
                  mi sono occupato di: programmazione, gestione di asset 3D,
                  animazione, level design, interfacce.
                </li>
                <li>
                  <b>Blender</b> - Ho lavorato ad alcuni progetti universitari
                  che richiedevano render statici, video animati e set extension
                  (aggiunta di elementi in CG su riprese live action), in
                  particolare mi sono occupato di: modellazione, animazione,
                  gestione di materiali e texture, simulazioni, lighting,
                  rendering e compositing.
                </li>
                <li>
                  <b>Suite Adobe</b> - Ho utilizzato <Sb text="Premiere Pro" />{" "}
                  per montare diversi video per progetti universitari e per il
                  tirocinio presso Bitpop Transmedia, ed{" "}
                  <Sb text="After Effects" /> per le parti in motion graphics.
                  Utilizzo <Sb text="Photoshop" /> ed <Sb text="Illustrator" />{" "}
                  per la gestione di asset grafici di vari tipi di progetti.
                </li>
                <li>
                  <b>DaVinci Resolve</b> - Ho lavorato a diversi video per
                  progetti universitari e personali, in particolare mi sono
                  occupato di: montaggio, color grading e compositing.
                </li>
                <li>
                  <b>Figma</b> - Ho lavorato ad alcuni mockup di applicazioni
                  web e mobile per progetti universitari. Utilizzo Figma anche
                  per la gestione di asset grafici di vari tipi di progetti.
                </li>
              </ul>
            </>
          ),
          icon: bigIcons.apps,
        },
        {
          title: "Altro",
          body: () => (
            <>
              Il mio sistema operativo di riferimento è <Sb text="Windows" />,
              mi capita di utilizare anche <Sb text="Ubuntu" /> ed{" "}
              <Sb text="Ubuntu server" /> (che utilizzo per un NAS "homemade").
              <br />
              Di tanto in tanto utilizzo il pacchetto <Sb text="Office" /> e le
              applicazioni equivalenti di Google.
              <br />
              Per scrivere la tesi ho utilizzato <Sb text="LaTeX"/>.
            </>
          ),
          icon: bigIcons.misc,
        },
      ],
    },
    {
      title: "Lingue",
      items: [
        {
          title: "Inglese",
          subtitle: "IELTS Academic, 7.0",
          info1: "Livello C1",
          info2: "Emissione: set 2019 - Scadenza: nov 2028",
          icon: bigIcons.ielts,
        },
      ],
    },
    {
      title: "Altre Competenze",
      items: [
        {
          body: () => (
            <>
              Mi piace progettare e realizzare applicazioni ed altro pensando al
              prodotto nel suo complesso e ponendo al centro l'utente finale,
              questo mi porta a sviluppare competenze in diversi ambiti
              mantenendo un profilo multidisciplinare.
              <br />
              Mi piace lavorare in team e sono una persona piuttosto calma, cosa
              che mi aiuta a gestire il lavoro sotto pressione quando
              necessario. Cerco di risolvere i problemi in modo efficiente e
              sfruttando soluzioni creative quando utile.
              <br />
              Ho sviluppato queste competenze durante le mie esperienze
              professionali e lavorando ad un vasto numero di progetti
              universitari e personali di varie tipologie.
            </>
          ),
          icon: bigIcons.otherSkills,
        },
      ],
    },
    {
      title: "Informazioni Supplementari",
      items: [
        {
          body: () => (
            <>
              Patente, automunito
              <br />
              Disponibile a trasferte in Italia, all'estero
              <br />
              Disponibile a trasferimenti in Italia, all'estero
            </>
          ),
          icon: bigIcons.otherInfo,
        },
      ],
    },
  ],
  exams: {
    title: "Esami",
    items: [
      {
        date: "Data",
        exam: "Esame",
        credits: "Crediti",
        score: "Voto",
      },
      {
        date: "01/02/2021",
        exam: "Future storytelling",
        credits: "6",
        score: "27",
      },
      {
        date: "08/02/2021",
        exam: "Realtà virtuale",
        credits: "6",
        score: "30 e lode",
      },
      {
        date: "12/02/2021",
        exam: "Cinema immersivo",
        credits: "6",
        score: "29",
      },
      {
        date: "25/02/2021",
        exam: "Psicologia cognitiva",
        credits: "6",
        score: "27",
      },
      {
        date: "22/06/2021",
        exam: "Game Design and Gamification",
        credits: "10",
        score: "30",
      },
      {
        date: "13/07/2021",
        exam: "Applicazioni Web I",
        credits: "6",
        score: "29",
      },
      {
        date: "22/07/2021",
        exam: "Ingegneria del suono",
        credits: "6",
        score: "28",
      },
      {
        date: "03/09/2021",
        exam: "Sistemi elettronici per la produzione e distribuzione",
        credits: "6",
        score: "23",
      },
      {
        date: "21/01/2022",
        exam: "Computer animation",
        credits: "6",
        score: "28",
      },
      {
        date: "11/02/2022",
        exam: "Digital Strategy",
        credits: "8",
        score: "28",
      },
      {
        date: "23/02/2022",
        exam: "Human Computer Interaction",
        credits: "6",
        score: "30",
      },
      {
        date: "16/06/2022",
        exam: "Digital interaction design",
        credits: "8",
        score: "30",
      },
      {
        date: "06/09/2022",
        exam: "Visual Effects",
        credits: "8",
        score: "29",
      },
      {
        date: "09/09/2022",
        exam: "Informatica grafica",
        credits: "6",
        score: "27",
      },
    ],
  },
};

const data_eng = {
  language: "eng",
  title: "Gianluca Garganese",
  head: {
    line: () => <>
      Cinema and Media Engineering master graduate at Politecnico di Torino.<br />
      Simulation Software Engineer at Alten.
    </>,
    items: [
      {
        text: "07/11/1997 NAPLES (NA) ITALY",
        icon: "bi-calendar2-date-fill",
      },
      {
        text: "Nazionality: Italian",
        icon: "bi-globe2",
      },
      {
        text: "Via del Nocciolino 9 21018 - Sesto Calende (VA) ITALY",
        icon: "bi-geo-alt-fill",
      },
      {
        text: "3293906972",
        icon: "bi-phone-fill",
      },
      {
        text: "gianlucagarganese@gmail.com",
        icon: "bi-envelope-fill",
      },
      {
        text: "https://www.linkedin.com/in/gianluca-garganese/",
        icon: "bi-linkedin",
      },
      {
        text: "Portfolio website coming soon!",
        icon: "bi-file-ppt-fill",
      },
    ],
  },
  sections: [
    {
      title: "Experience",
      items: [
        {
          title: "Simulation Software Engineer",
          subtitle: "Alten",
          info1: "Jan 2023 - Present",
          info2: "Gallarate, Lombardia, Italy",
          body: () => (
            <></>
          ),
          icon: bigIcons.alten,
        },
        {
          title: "Thesis Student",
          subtitle: "synArea Consultants Srl",
          info1: "Mar 2022 - Jun 2022",
          info2: "Turin, Piedmont, Italy",
          body: () => (
            <>
              Thesis + internship at synArea Consultants Srl.
              <br />
              The work mainly consisted in the development of two real-time 3D
              graphics <Sb text="WebGL" /> applications, specifically two
              virtual robotics labs with "digital twin" mode (that allows
              syncronized movements between virtual and real robots) and
              "asynchronous" mode (that allows playback of prerecorded movements
              and quiz answering).
              <br />
              These applications were developed using <Sb text="Unity" /> and{" "}
              <Sb text="C#" />.
            </>
          ),
          icon: bigIcons.synarea,
        },
        {
          title: "Videomaker Assitant",
          subtitle: "Bitpop Transmedia",
          info1: "Dec 2018 - Jun 2019",
          info2: "Turin, Piedmont, Italy",
          body: () => (
            <>
              Curricular internship at Bitpop Transmedia for a total duration of
              250 hours.
              <br />
              The work mainly consisted in the production and post-production of
              corporate videos, conference shooting, interviews, etc.
            </>
          ),
          icon: bigIcons.bitpop,
        },
      ],
    },
    {
      title: "Education",
      items: [
        {
          title: "Politecnico di Torino",
          subtitle: "Master's Degree in Cinema And Media Engineering",
          info1: "Final grade 110/110",
          info2: "Oct 2020 - Dec 2022",
          icon: bigIcons.polito,
        },
        {
          title: "Politecnico di Torino",
          subtitle: "Bachelor's Degree in Cinema And Media Engineering",
          info1: "Final grade 93/110",
          info2: "Oct 2016 - Jul 2020",
          icon: bigIcons.polito,
        },
        {
          title: "Liceo Scientifico A. Avogadro",
          subtitle: "Diploma Scientifico",
          info1: "2011 - 2016",
          info2: "",
          icon: bigIcons.highSchool,
        },
      ],
    },
    {
      title: "Computer Skills",
      items: [
        {
          title: "Programming Languages",
          body: () => (
            <>
              <ul>
                <li>
                  <b>C#</b> - I worked at a third person puzzle game (university
                  project), an ISS landing simulator (university project) and
                  two virtual robotics laboratories (thesis + internship) all of
                  them made with <Sb text="Unity" />.
                </li>
                <li>
                  <b>C++</b> - I worked at a catapult based videogame
                  (university project) made using <Sb text="OpenGL" />.
                </li>
                <li>
                  <b>Javascript</b> - I worked at various web applications for
                  university and personal projects, some of them made with{" "}
                  <Sb text="React" /> and <Sb text="Node.js" />. I used{" "}
                  <Sb text="sqlite" /> and <Sb text="MongoDB" /> as databases.
                </li>
                <li>
                  <b>Kotlin</b> - I worked at an Android app used to manage
                  plants watered by smart pots (university project).
                </li>
              </ul>
              I also use/have used <Sb text="Python" />, <Sb text="C" /> and{" "}
              <Sb text="Java" /> (for small personal or university projects).
              <br />
              I use <Sb text="Git" /> and <Sb text="GitHub" /> for project
              management.
            </>
          ),
          icon: bigIcons.code,
        },
        {
          title: "Programs / Software",
          body: () => (
            <>
              <ul>
                <li>
                  <b>Unity</b> - I worked at some applications (briefly
                  discussed earlier) for university projects and for my thesis,
                  specifically i did: programming, 3D asset management,
                  animation, level design, GUIs.
                </li>
                <li>
                  <b>Blender</b> - I worked at some university projects that
                  required static renders, animated videos and set extensions
                  (addition of CG elements in live action shots), specifically i
                  did: modelling, animation, material and texture management,
                  simulations, lighting, rendering and compositing.
                </li>
                <li>
                  <b>Adobe Suite</b> - I used <Sb text="Premiere Pro" /> to edit
                  various videos for university projects and for the internship
                  at Bitpop Transmedia, and <Sb text="After Effects" /> for
                  motion graphics. I use <Sb text="Photoshop" /> and{" "}
                  <Sb text="Illustrator" /> for graphic asset management in a
                  variety of different project types.
                </li>
                <li>
                  <b>DaVinci Resolve</b> - I worked at various videos for
                  university and personal projects, specifically i did: editing,
                  color grading and compositing.
                </li>
                <li>
                  <b>Figma</b> - I worked at some web and mobile application
                  mockups for university and personal projects. I use Figma for
                  graphic asset management too.
                </li>
              </ul>
            </>
          ),
          icon: bigIcons.apps,
        },
        {
          title: "Other",
          body: () => (
            <>
              My main operating system is <Sb text="Windows" />, occasionally i
              also use <Sb text="Ubuntu" /> and <Sb text="Ubuntu server" />{" "}
              (that I use on an homemade NAS).
              <br />
              Sometimes I use <Sb text="Office" /> apps and their Google's
              equivalents.
              <br />
              For thesis writing I'm using <Sb text="LaTeX" />.
            </>
          ),
          icon: bigIcons.misc,
        },
      ],
    },
    {
      title: "Languages",
      items: [
        {
          title: "English",
          subtitle: "IELTS Academic, 7.0",
          info1: "Level C1",
          info2: "Issued Sep 2019 - Expires Nov 2028",
          icon: bigIcons.ielts,
        },
      ],
    },
    {
      title: "Other Skills",
      items: [
        {
          body: () => (
            <>
              I like to design and develop applications and other stuff focusing
              on the product as a whole and letting the user carry it, this leads me
              to the development of a wide set of skills keeping a
              multidisciplinary approach.
              <br />
              I like teamwork and I am quite calm, this helps me to handle work
              under pressure when necessary. I usually try to solve problems
              efficiently and by adopting creative methods when it is useful.
              <br />I acquired these skills during my professional
              experiences and by working on a vast number of university and
              personal projects.
            </>
          ),
          icon: bigIcons.otherSkills,
        },
      ],
    },
    {
      title: "Other Information",
      items: [
        {
          body: () => (
            <>
              Driving license, own car
              <br />
              Available to travel on business in Italy, abroad
              <br />
              Available to relocate in Italy, abroad
            </>
          ),
          icon: bigIcons.otherInfo,
        },
      ],
    },
  ],
  exams: {
    title: "Exams",
    items: [
      {
        date: "Date",
        exam: "Exam",
        credits: "Credits",
        score: "Final grade",
      },
      {
        date: "01/02/2021",
        exam: "Future storytelling",
        credits: "6",
        score: "27",
      },
      {
        date: "08/02/2021",
        exam: "Virtual reality",
        credits: "6",
        score: "30 cum laude",
      },
      {
        date: "12/02/2021",
        exam: "Immersive movie",
        credits: "6",
        score: "29",
      },
      {
        date: "25/02/2021",
        exam: "Cognitive psycology",
        credits: "6",
        score: "27",
      },
      {
        date: "22/06/2021",
        exam: "Game Design and Gamification",
        credits: "10",
        score: "30",
      },
      {
        date: "13/07/2021",
        exam: "Web Applications I",
        credits: "6",
        score: "29",
      },
      {
        date: "22/07/2021",
        exam: "Sound system engineering",
        credits: "6",
        score: "28",
      },
      {
        date: "03/09/2021",
        exam: "Electronic systems for the production and distribution",
        credits: "6",
        score: "23",
      },
      {
        date: "21/01/2022",
        exam: "Computer animation",
        credits: "6",
        score: "28",
      },
      {
        date: "11/02/2022",
        exam: "Digital Strategy",
        credits: "8",
        score: "28",
      },
      {
        date: "23/02/2022",
        exam: "Human Computer Interaction",
        credits: "6",
        score: "30",
      },
      {
        date: "16/06/2022",
        exam: "Digital interaction design",
        credits: "8",
        score: "30",
      },
      {
        date: "06/09/2022",
        exam: "Visual Effects",
        credits: "8",
        score: "29",
      },
      {
        date: "09/09/2022",
        exam: "Computer Graphics",
        credits: "6",
        score: "27",
      },
    ],
  },
};
