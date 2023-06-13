import './App.css';


function App() {
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {/* <!-- Free Tier --> */}

          <Card title="FREE" price="$0" user="Single User" storage="5GB" unlimitedPublic="unlimited Public Projects " community="community Access" private_projects="Free" phone_support="Free" subdomain="Free " status_report="Free" />

          {/* <!-- Plus Tier --> */}

          <Card title="PLUS" price="$9" user="5 User" storage="50GB" unlimitedPublic="unlimited Public Projects" community="community Access" private_projects="Plus" phone_support="Plus" subdomain="Plus " status_report="Plus" />

          {/* <!-- Pro Tier --> */}

          <Card title="PRO" price="$49" user="Unlimited User" storage="150GB" unlimitedPublic="unlimited Public Projects " community="community Access" private_projects="Pro" phone_support="Pro" subdomain="Pro" status_report="Pro" />

        </div>
      </div>


    </section>
  );
}

export default App;

function Card(props) {
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">{props.title}</h5>
          <h6 className="card-price text-center">{props.price}<span className="period">/month</span></h6>
          <hr />
          <ul className="fa-ul">
            <li><span className="fa-li"><i className="fa fa-check"></i></span>{props.user}</li>
            <li><span className="fa-li"><i className="fa fa-check"></i></span>{props.storage} </li>
            <li><span className="fa-li"><i className="fa fa-check"></i></span>{props.unlimitedPublic}</li>
            <li><span className="fa-li"><i className="fa fa-check"></i></span>{props.community}</li>



            {/* Private Projects */}
            {props.private_projects === "Free" ? (<li ><span className="fa-li"><i className="fa fa-times"></i></span>Unlimited Private Projects</li>) :
              (<li> <span className="fa-li"><i className="fa fa-check"></i></span>Unlimited Private Projects</li>)}

            {/* Phone Support */}
            {props.phone_support === "Free" ? (<li ><span className="fa-li"><i className="fa fa-times"></i></span>Dedicated Phone Support</li>) :
              (<li> <span className="fa-li"><i className="fa fa-check"></i></span>Dedicated Phone Support</li>)}

            {/* SubDomain */}
            {props.subdomain === "Free" ? (<li ><span className="fa-li"><i className="fa fa-times"></i></span>Free subdomain</li>) :
              (<li> <span className="fa-li"><i className="fa fa-check"></i></span>Free subdomain</li>)}

            {/* Status Report */}
            {props.status_report === "Pro" ? (<li> <span className="fa-li"><i className="fa fa-check"></i></span>Monthly Status Report</li>) : (<li ><span className="fa-li"><i className="fa fa-times"></i></span>Monthly Status Report</li>)
            }
            <div className="d-grid">
              <a href="/" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </ul>



        </div>
      </div>
    </div>
  )
}






