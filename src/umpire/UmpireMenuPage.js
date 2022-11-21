import { Link } from "react-router-dom";

function UmpireMenuPage() {
    return ( 
        <main>
            <div className="umpire-page-container umpire-page--dark">
                <div className="umpire-menu">
                    <Link to="/match-setup" className="primary-btn btn-blue">Match Setup</Link>
                    <Link className="primary-btn btn-blue">Previous Matches</Link>
                </div>                          
            </div>
        </main>
     );
}

export default UmpireMenuPage;