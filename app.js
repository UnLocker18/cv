/** @jsx createElement */
/** @jsxFrag createFragment */

const ExperienceItem = (props) => (
    <div class="d-flex align-items-start ms-3 mt-4">
        <img
            class="small-img"
            src={props.icon}
        />
        <div class="ms-3">
            <h3>{props.title}</h3>
            <h4>{props.subtitle}</h4>
            <h5>{props.info1}</h5>
            <h5>{props.info2}</h5>
            <h6>{props.body}</h6>
        </div>
    </div>
);

const App = () => (
    <div>
        <h1>Gianluca Garganese</h1>
        <hr />
        <div class="d-flex flex-wrap my-4">
            <img class="mx-auto mx-md-0" src="./img/cv_pic.jpg" width="150px" height="196px" />
            <div class="d-flex flex-column my-auto mt-3 mt-md-0 ms-3">
                <span class="mt-1">07/11/1997 NAPOLI (NA) ITALIA</span>
                <span class="mt-1">Nazionalità: Italiana</span>
                <span class="d-flex mt-1">
                    <i class="head-icon bi bi-geo-alt-fill me-2"></i>
                    <span>Via Aldo Brina 19 13878 - CANDELO (BI) ITALIA</span>
                </span>
                <span class="d-flex mt-1">
                    <i class="head-icon bi bi-phone-fill me-2"></i>
                    <span>3293906972</span>
                </span>
                <span class="d-flex mt-1">
                    <i class="head-icon bi bi-envelope-fill me-2"></i>
                    <span>gianlucagarganese@gmail.com</span>
                </span>
                <span class="d-flex mt-1">
                    <i class="head-icon bi bi-linkedin me-2"></i>
                    <a href="https://www.linkedin.com/in/gianluca-garganese/">
                        https://www.linkedin.com/in/gianluca-garganese/
                    </a>
                </span>
                <span class="d-flex mt-1">
                    <i class="head-icon bi bi-file-ppt-fill me-2"></i>
                    <span>-portfolio_link-</span>
                </span>
            </div>
        </div>
        <hr />
        <div class="my-4">
            <h2>Esperienza</h2>
            {data_ita.experience.map(e => <ExperienceItem {...e} />)}
        </div>
    </div>
);

document.getElementById("root").appendChild(<App />);