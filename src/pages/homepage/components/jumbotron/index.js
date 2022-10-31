import './jumbotron.scss'

const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <div className="container">
        <div className="row">
          <div className="col-lg-8"  style={{ textAlign: "center" }}>
            <h1 className="display-3">Dreams comes true . . .</h1>
          </div>
          <div className="col-lg-4" style={{ textAlign: "center" }}>
            <img src={require("../../../../assets/image/shipper.jpg")} alt="" />
          </div>
        </div>
        <p className="lead"></p>
        <hr className="my-2" />
        <p>Brings to me alot of foods</p>
        <p className="lead">
          <span
            className="btn btn-primary btn-lg"
            role="button"
          >
            Let'go
          </span>
        </p>
      </div>
    </div>
  );
};

export default Jumbotron;
