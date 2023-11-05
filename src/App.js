import "./App.css";
import { Line, Circle } from "rc-progress";

function App() {
  return (
    <div>
      <div className="container">
        <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      alt="Admin"
                      className="rounded-circle"
                      width={150}
                    />
                    <div className="mt-3">
                      <h4>John Doe</h4>
                      <p className="text-secondary mb-1">Patient ID: 1107</p>
                      <p className="text-muted font-size-sm">Indore</p>
                      <Circle
                        percent={40}
                        strokeWidth={5}
                        strokeColor="#fcb000"
                        style={{ width: "130px" }}
                      />
                      <h1 style={{ margin: "10px" }}>40%</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Mobile</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">7067812999</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      anuragpandeyjee200@gmail.com
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Affected Side</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">Billateral</div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Condition</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">Ortho</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Speciality</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      Osteoarthritis
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-12">
                      <a className="btn btn-info ">Medical History</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
