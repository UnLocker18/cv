/** @jsx createElement */
/** @jsxFrag createFragment */

const Sb = (props) => (<span class="semi-bold" >{props.text}</span>);

const bigIcons = {
  synarea:
    "https://media-exp1.licdn.com/dms/image/C4E0BAQFyqUegPGsI8g/company-logo_200_200/0/1519889453023?e=2147483647&v=beta&t=0EdGjRqiyd4dI8rwr_6T6wTsXROgs_9eypLV9VSHvHo",
  bitpop:
    "https://media-exp1.licdn.com/dms/image/C560BAQHP9U5Ix8dlPg/company-logo_100_100/0/1518771807146?e=2147483647&v=beta&t=5AyMPqfdR11IKHqMShF2YTTFnv8GlTc4KdaUflOwWOc",
  polito:
    "https://media-exp1.licdn.com/dms/image/C4D0BAQGbyRTmgwi0uw/company-logo_100_100/0/1616667828426?e=2147483647&v=beta&t=t-WuLIFuqRODPmNsHzDPSsMj-LYMjLUbqebqdQHo4AM",
  highSchool: "./img/book.svg",
  ielts:
    "https://media-exp1.licdn.com/dms/image/C560BAQF4HhkANMvJrQ/company-logo_100_100/0/1519867554184?e=2147483647&v=beta&t=Jp0RtX2m_73Ppz2lDhsof3ozgnpOgKliVj8xjfiwMdc",
  os: "./img/windows.svg",
  code: "./img/code-slash.svg",
  apps: "./img/window.svg",
  db: "./img/hdd.svg",
  graphics: "./img/palette.svg",
  spreadsheet: "./img/table.svg",
  otherSkills: "./img/person.svg",
  otherInfo: "./img/car-front.svg",
  exams: "./img/file-text.svg",
  misc: "./img/terminal.svg",
};

const data_ita = {
  language: "ita",
  title: "Gianluca Garganese",
  head: {
    line: "Laureando della magistrale in Ingegneria del Cinema e dei Mezzi di Comunicazione presso Politecnico di Torino.",
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
        text: "Via Aldo Brina 19 13878 - CANDELO (BI) ITALIA",
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
          title: "Tesista",
          subtitle: "synArea Consultants Srl",
          info1: "mar 2022 - giu 2022",
          info2: "Torino, Piemonte, Italia",
          body: () => (
            <>
              Tesi in azienda presso synArea Consultants Srl.
              <br />
              Il lavoro consisteva nello sviluppo di due applicazioni <Sb text="WebGL"/> con grafica 3D real-time, in
              particolare due laboratori di robotica virtuali con modalità
              "digital twin" (che permette di sincronizzare i movimenti dei
              robot virtuali con quelli dei robot reali corrispondenti) e
              modalità "asincrona" (che permette di riprodurre movimenti
              preregistrati e di rispondere a quiz).
              <br />
              Le applicazioni sono state sviluppate utilizzando <Sb text="Unity"/> e <Sb text="C#"/>.
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
          info1: "Media esami 28.3",
          info2: "2020 - 2022",
          icon: bigIcons.polito,
        },
        {
          title: "Politecnico di Torino",
          subtitle:
            "Laurea Triennale - Ingegneria del Cinema e dei Mezzi di Comunicazione",
          info1: "Voto 93/110",
          info2: "2016 - 2020",
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
                  <b>C#</b> - Ho lavorato ad un puzzle game in terza persona (progetto
                  universitario), un simulatore di attracco sulla ISS (progetto
                  universitario) e due laboratori di robotica virtuali (tesi in
                  azienda) tutti realizzati utilizzando <Sb text="Unity"/>.
                </li>
                <li>
                  <b>C++</b> - Ho lavorato ad un videogioco basato su catapulte
                  (progetto universitario) realizzato utilizzando <Sb text="OpenGL"/>.
                </li>
                <li>
                  <b>Javascript</b> - Ho lavorato a diverse applicazioni web per
                  progetti universitari e personali, alcune di queste realizzate
                  utilizzando <Sb text="React"/> e <Sb text="Node.js"/>. Per i database ho
                  utilizzato <Sb text="sqlite"/> e <Sb text="MongoDB"/>.
                </li>
                <li>
                  <b>Kotlin</b> - Ho lavorato ad un applicazione Android per la
                  gestione di piante annaffiate mediante un vaso smart (progetto
                  universitario).
                </li>
              </ul>
              Utilizzo/ho utilizzato anche <Sb text="Python"/>, <Sb text="C"/> e <Sb text="Java"/> (per piccoli
              progetti personali o universitari).
              <br />
              Utilizzo <Sb text="Git"/> e <Sb text="GitHub"/> per la gestione dei progetti.
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
                  <b>Unity</b> - Ho lavorato ad alcune applicazioni (accennate prima)
                  per progetti universitari e per la tesi, in particolare mi
                  sono occupato di: programmazione, gestione di asset 3D,
                  animazione, level design, interfacce.
                </li>
                <li>
                  <b>Blender</b> - Ho lavorato ad alcuni progetti universitari che
                  richiedevano render statici, video animati e set extension
                  (aggiunta di elementi in CG su riprese live action), in
                  particolare mi sono occupato di modellazione, animazione,
                  gestione di materiali e texture, simulazioni, lighting,
                  rendering e compositing.
                </li>
                <li>
                  <b>Pacchetto Adobe</b> - Ho utilizzato <Sb text="Premiere Pro"/> per montare
                  diversi video per progetti universitari e per il tirocinio
                  presso Bitpop Transmedia, ed <Sb text="After Effects"/> per le parti in
                  motion graphics. Utilizzo <Sb text="Photoshop"/> ed <Sb text="Illustrator"/> per la
                  gestione di asset grafici di vari tipi di progetti.
                </li>
                <li>
                  <b>DaVinci Resolve</b> - Ho lavorato a diversi video per progetti
                  universitari e personali, in particolare mi sono occupato di
                  montaggio, color grading e compositing.
                </li>
                <li>
                  <b>Figma</b> - Ho lavorato ad alcuni mockup di applicazioni web e
                  mobile per progetti universitari. Utilizzo Figma anche per la
                  gestione di asset grafici di vari tipi di progetti.
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
              Il mio sistema operativo di riferimento è <Sb text="Windows"/>, mi capita di
              utilizare anche <Sb text="Ubuntu"/> ed <Sb text="Ubuntu server"/> (che utilizzo per un NAS
              "homemade").
              <br />
              Di tanto in tanto utilizzo il pacchetto <Sb text="Office"/> e le applicazioni
              equivalenti di Google.
              <br />
              Per scrivere la tesi sto utilizzando <Sb text="LaTeX"/>.
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
              Mi piace progettare e realizzare applicazioni ed altro pensando al prodotto nel
              suo complesso e ponendo al centro l'utente finale, questo mi porta a sviluppare
              competenze in diversi ambiti mantenendo un profilo multidisciplinare.
              <br />
              Mi piace lavorare in team e sono una persona piuttosto calma, cosa
              che mi aiuta a gestire il lavoro sotto pressione quando
              necessario. Cerco di risolvere i problemi in modo efficiente e
              sfruttando soluzioni creative quando utile.
              <br />
              Ho sviluppato queste competenze durante le mie piccole esperienze
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
    birth: "11/07/1997 NAPOLI (NA) ITALY",
    nationality: "Nationality: Italian",
    items: [
      {
        text: "Via Aldo Brina 19 13878 - CANDELO (BI) ITALY",
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
          title: "Thesis Student",
          subtitle: "synArea Consultants Srl",
          info1: "mar 2022 - giu 2022",
          info2: "Torino, Piemonte, Italia",
          body: () => (
            <>
              Thesis + internship at synArea Consultants Srl.
              <br />
              Development of two real-time 3D graphics WebGL applications,
              specifically two virtual robotics labs with "digital twin" mode
              (that allows syncronized movements between virtual and real
              robots) and "asynchronous" mode (that allows playback of
              prerecorded movements and quiz answering).
              <br />
              These applications were developed using Unity and C#.
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
          info1: "Average mark 28.3",
          info2: "2020 - 2022",
          icon: bigIcons.polito,
        },
        {
          title: "Politecnico di Torino",
          subtitle: "Bachelor's Degree in Cinema And Media Engineering",
          info1: "Final grade 93/110",
          info2: "2016 - 2020",
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
          title: "Operating System",
          body: `I use Windows on a daily basis, also exploring relatively advanced aspects.<br/>
                I know the basics of Linux (Ubuntu).`,
          icon: bigIcons.os,
        },
        {
          title: "Programming languages",
          body: `I know the basics of C # (which I use to develop applications with Unity), Python, C and Java.<br/>
                I also use HTML, CSS, Javascript and the React framework.<br/>
                I use Git and GitHub to manage my projects.`,
          icon: bigIcons.code,
        },
        {
          title: "Programs / Software",
          body: `I often use Unity and Blender to develop applications or produce video in animated computer graphics.<br/>
                I know the basics of Adobe Premiere Pro, Adobe After Effects and DaVinci Resolve.`,
          icon: bigIcons.apps,
        },
        {
          title: "Databases",
          body: `I know the basics of SQL and MongoDB.`,
          icon: bigIcons.db,
        },
        {
          title: "Graphics",
          body: `I know the basics of Adobe Photoshop, Adobe Lightroom Classic and Adobe Illustrator.`,
          icon: bigIcons.graphics,
        },
        {
          title: "Spreadsheet",
          body: `I know the basics of Excel.`,
          icon: bigIcons.spreadsheet,
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
              I am a calm and collected person, I like teamwork and I am able to
              handle work under pressure. I usually try to solve problems
              efficiently and, if necessary, by adopting creative methods.
              <br />I acquired these skills in particular by working on various
              university and personal projects and also during the internship I
              did at Bitpop Transmedia.
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
