import { Link } from 'react-router-dom';
import './Styled/Dashboard.scss';
import Bear from '../Components/bear/Bear';

const Dashboard = ({ user }) => {
  return (
    <section className="section-dash">
      <h4 className="user">Hello, {user?.name}</h4>
      <div className="Dash">
        <input type="checkbox" id="check" />
        <label for="check">
          <i className="fas fa-bars" id="sidebar_btn"></i>
        </label>

        <header className="Head">
          <div className="right_area">
            <Link to="/" className="logout_btn">
              Back Home ?
            </Link>
          </div>
        </header>

        <div className="sidebar">
          <center>
            <img
              src="https://e7.pngegg.com/pngimages/734/25/png-clipart-waving-bear-bear-brown-bear.png"
              className="profile_image"
            />
            <h4>Bear</h4>
          </center>
          <a href="#">
            <i className="fas fa-desktop"></i>
            <span>Dashboard</span>
          </a>
          <a href="#">
            <i className="fas fa-cog"></i>
            <span>Componets</span>
          </a>
          <a href="#">
            <i className="fas fa-table"></i>
            <span>Tables</span>
          </a>
          <a href="#">
            <i className="fas fa-sliders-h"></i>
            <span>Settings</span>
          </a>
        </div>
        <div className="Content">
          <Bear />
        </div>
      </div>
    </section>
  );
};
export default Dashboard;
