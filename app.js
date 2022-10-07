/** @jsx createElement */
/** @jsxFrag createFragment */

const Item = (props) => (
    <div class="d-flex align-items-start ms-3 mt-4">
        <img
            class={
                "small-img " +
                (props.icon.includes(".svg") ? "img-color-primary px-1" : "")
            }
            src={props.icon}
        />
        <div class="ms-3">
            {props.title ? <h3>{props.title}</h3> : ""}
            {props.subtitle ? <h4>{props.subtitle}</h4> : ""}
            {props.info1 ? <h5>{props.info1}</h5> : ""}
            {props.info2 ? <h5>{props.info2}</h5> : ""}
            {props.body ? (
                <h6>
                    {props.body instanceof Function ? props.body() : props.body}
                    {/* props.body.split("<br/>").map((e) => (
            <>
              {e.replace("<br/>", "")}
              <br />
            </>
          )) */}
                </h6>
            ) : (
                ""
            )}
        </div>
    </div>
);

const ExamTableRow = (props) => (
    <tr>
        <td>{props.date}</td>
        <td>{props.exam}</td>
        <td>{props.credits}</td>
        <td>{props.score}</td>
    </tr>
);

const App = (props) => {
    const data = props.data;
    const examTableHead = data.exams.items[0];

    const changeLanguage = (e) => {
        document.getElementById("root").innerHTML = "";
        document.getElementById("root").appendChild(<App data={e.target.innerText.toLowerCase() === "ita" ? data_ita : data_eng} />);
    };

    return (
        <div>
            <div class="d-flex justify-content-between align-items-center">
                <h1>{data.title}</h1>
                <div class="d-flex h-50" >
                    <span class={"custom-btn-radio me-3 " + (data.language === "ita" ? "checked" : "")} onClick={changeLanguage}>ITA</span>
                    <span class="divider me-3" />
                    <span class={"custom-btn-radio " + (data.language === "eng" ? "checked" : "")} onClick={changeLanguage}>ENG</span>
                </div>
            </div>
            <hr />
            <div class="d-flex flex-wrap my-4">
                <img
                    class="mx-auto mx-md-0"
                    src="./img/cv_pic.jpg"
                    width="150px"
                    height="196px"
                />
                <div class="d-flex flex-column my-auto mt-3 mt-md-0 ms-3">
                    {data.head.items.map((i) => (
                        <span class="d-flex mt-1">
                            <i class={"head-icon me-2 bi " + i.icon}></i>
                            {i.text.includes("http") ? <a class="" href={i.text} >{i.text}</a> : <span>{i.text}</span>}
                        </span>
                    ))}
                </div>
            </div>
            <h4 class="head-line" >
                {data.head.line}
            </h4>
            {data.sections.map((s) => (
                <>
                    <hr />
                    <div class="my-4">
                        <h2>{s.title}</h2>
                        {s.items.map((i) => (
                            <Item {...i} />
                        ))}
                    </div>
                </>
            ))}
            <hr />
            <div class="my-4">
                <h2>{data.exams.title}</h2>
                <div class="d-flex align-items-start ms-3 mt-4">
                    <img
                        class="small-img img-color-primary px-1"
                        src="./img/file-text.svg"
                    />
                    <div class="ms-3 w-100">
                        <table class="table table-striped w-100">
                            <thead>
                                <tr>
                                    <th>{examTableHead.date}</th>
                                    <th>{examTableHead.exam}</th>
                                    <th>{examTableHead.credits}</th>
                                    <th>{examTableHead.score}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.exams.items.map((i, index) => (
                                    index > 0 ? <ExamTableRow {...i} /> : <></>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

document.getElementById("root").appendChild(<App data={data_ita} />);
