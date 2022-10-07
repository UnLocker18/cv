/** @jsx createElement */
/** @jsxFrag createFragment */

let data = data_ita;
let page = 0;

const Item = (props) => (
  <div class="d-flex align-items-start ms-3 mt-4">
    <img
      class={
        "small-img " +
        (props.icon.includes(".svg") || props.icon.includes(".png")
          ? "img-color-primary px-1"
          : "")
      }
      src={props.icon}
    />
    <div class="ms-3">
      {props.title ? <h3>{props.title}</h3> : ""}
      {props.subtitle ? <h4>{props.subtitle}</h4> : ""}
      {props.info1 ? <h5>{props.info1}</h5> : ""}
      {props.info2 ? <h5>{props.info2}</h5> : ""}
      {props.body ? (
        <h6>{props.body instanceof Function ? props.body() : props.body}</h6>
      ) : (
        ""
      )}
    </div>
  </div>
);

const Section = (props) =>
  props.hideHead ? (
    <div>{props.content}</div>
  ) : (
    <>
      {props.hideHr ? "" : <hr />}
      <div class="my-4">
        <h2>{props.title}</h2>
        {props.content}
      </div>
    </>
  );

const ExamTableRow = (props) => (
  <tr>
    <td>{props.date}</td>
    <td>{props.exam}</td>
    <td>{props.credits}</td>
    <td>{props.score}</td>
  </tr>
);

const ExamTable = (props) => (
  <div class="d-flex align-items-start ms-3 mt-4">
    <img class="small-img img-color-primary px-1" src="./img/file-text.svg" />
    <div class="ms-3 w-100">
      <table class="table table-striped w-100">
        <thead>
          <tr>
            <th>{props.head.date}</th>
            <th>{props.head.exam}</th>
            <th>{props.head.credits}</th>
            <th>{props.head.score}</th>
          </tr>
        </thead>
        <tbody>
          {props.items.map((i, index) =>
            index > 0 ? <ExamTableRow {...i} /> : <></>
          )}
        </tbody>
      </table>
    </div>
  </div>
);

const Title = () => {
  const changeLanguage = (e) => {
    data = e.target.innerText.toLowerCase() === "ita" ? data_ita : data_eng;
    document.getElementById("root").innerHTML = "";
    document.getElementById("root").appendChild(<App />);
  };

  return (
    <div class="d-flex justify-content-between align-items-center">
      <h1>{data.title}</h1>
      <div class="d-flex h-50">
        <a
          class="me-4 hover-primary"
          href={`./pdf/cv_gianluca_garganese_${data.language}.pdf`}
        >
          <i class="bi bi-download mx-2"></i>
        </a>
        <span
          class={
            "custom-btn-radio me-3 " +
            (data.language === "ita" ? "checked" : "hover-primary")
          }
          onClick={changeLanguage}
        >
          ITA
        </span>
        <span class="divider me-3" />
        <span
          class={
            "custom-btn-radio " +
            (data.language === "eng" ? "checked" : "hover-primary")
          }
          onClick={changeLanguage}
        >
          ENG
        </span>
      </div>
    </div>
  );
};

const Head = () => (
  <>
    <hr />
    <div class="d-flex flex-wrap my-4">
      <img
        class={"mx-md-0 " + (page == 0 ? "mx-auto" : "")}
        src="./img/cv_pic.jpg"
        width="150px"
        height="196px"
      />
      <div
        class={
          "d-flex flex-column my-auto mt-md-0 ms-3 " + (page == 0 ? "mt-3" : "")
        }
      >
        {data.head.items.map((i) => (
          <span class="d-flex mt-1">
            <i class={"head-icon me-2 bi " + i.icon}></i>
            {i.text.includes("http") ? (
              <a class="" href={i.text}>
                {i.text}
              </a>
            ) : (
              <span>{i.text}</span>
            )}
          </span>
        ))}
      </div>
    </div>
    <h4 class="head-line">{data.head.line}</h4>
  </>
);

const App = () => {
  return (
    <div>
      {page < 2 ? (
        <>
          <Title data={data} />
          <Head data={data} />
        </>
      ) : (
        ""
      )}
      {data.sections.map((s, sIndex) => {
        let skipItems = 0;
        if (page == 2 && sIndex == 0) skipItems = 100;
        if (page == 2 && sIndex == 1) skipItems = 1;
        if (page == 3 && sIndex < 3) skipItems = 100;
        if (skipItems < s.items.length)
          return (
            <Section
              {...{
                title: s.title,
                content: s.items.map((i, index) =>
                  index < skipItems ? "" : <Item {...i} />
                ),
                hideHead: skipItems > 0,
                hideHr: page == 3 && sIndex == 3,
              }}
            />
          );
        else return "";
      })}
      <Section
        {...{
          title: data.exams.title,
          content: (
            <ExamTable
              {...{ head: data.exams.items[0], items: data.exams.items }}
            />
          ),
        }}
      />
    </div>
  );
};

document.getElementById("root").appendChild(<App />);

/* document.addEventListener("keydown", function (event) {
  const resetApp = () => {
    document.getElementById("root").innerHTML = "";
    document.getElementById("root").appendChild(<App />);
  }
  switch (event.key) {
    case "1":
      page = 1;
      document.getElementById("root").classList.add("my-5");
      resetApp();
      break;
    case "2":
      page = 2;
      document.getElementById("root").classList.remove("my-5");
      resetApp();
      break;
    case "3":
      page = 3;
      document.getElementById("root").classList.remove("my-5");
      resetApp();
      break;
  }  
}); */
