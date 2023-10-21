import React, { lazy, useState } from 'react';
import './Dashboard.css';
import {EnvelopeFill,PersonCircle,Search,Speedometer2,GearFill,WrenchAdjustable,CalendarFill,Clipboard2DataFill,
        CurrencyDollar,ChatDotsFill,FolderFill,GraphDownArrow,Table,Download,EmojiWinkFill,BellFill,List} from 'react-bootstrap-icons';
import Chart from "react-apexcharts";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  const [data, setData] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            return "$" + val.toLocaleString("en-US");
          }
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100]
        }
      },
      stroke: {
        curve: "smooth",
        width: 3
      },
      markers: {
        size: 5,
        colors: "#fff",
        strokeColors: "#7c7c7c",
        strokeWidth: 2,
        hover: {
          size: 7
        }
      }
    },
    series: [
      {
        name: "Jan",
        data: [20000, 30000, 40000, 45000, 50000, 55000, 60000, 55000, 50000, 45000, 40000, 35000]
      }
    ]
  });

  const [datas, setDatas] = useState(
    {
      options: {},
      series: [30, 15, 55],
      labels: ['Referral (30%)', 'Social (15%)', 'Direct (55%)']
    }
  );

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpenU, setIsDropdownOpenU] = useState(false);
  const [isPageOpen, setIsPageOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  // Toggle sidebar expansion
  const toggleSidebar = () => {
    setIsExpanded((prevState) => !prevState);
    setIsDropdownOpen(false);
    setIsDropdownOpenU(false);
    setIsPageOpen(false);
  };

  return (
      <div className='parent-container'>
        <div className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
          <div className="sidebar-content">
            {/* Toggle Button */}
            <div className="toggle-button" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={isExpanded ? faAngleLeft : faAngleRight} />
            </div>
      
            {/* Sidebar Title */}
            <span className="sidebar-title">
              <EmojiWinkFill className="smile" /> <span>Admin</span>
            </span>
            <hr className="sidebar-divider" />
      
            {/* Dashboard Link */}
            <Link to="/" className="sidebar-link">
              <Speedometer2 className="sidebar-icons" />
              <span className='dash'>Dashboard</span>
            </Link>
            <hr className="sidebar-divider" />
      
            {/* Interface Section */}
            <span className="sidebar-link">INTERFACE</span>
            <hr className="sidebar-divider" />
      
            {/* Components Dropdown */}
            <div className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
              <div className="dropdown-header" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <GearFill className="sidebar-icon" />
                  <span style={{ marginLeft: '-3rem', fontSize: '0.9rem' }}>Components</span>
                <div className="total-comp">
                  <span className={`arrow ${isDropdownOpen ? 'open' : ''}`}>&rsaquo;</span>
                </div>
              </div>
              <br />
              {isDropdownOpen && (
                <div className="dropdown-content">
                  <span className="dropdown-title">CUSTOM COMPONENTS</span>
                  <Link to="/login" className="btn-link">
                    <button className="btn">Buttons</button>
                  </Link> <br/>
                  <Link to="/login" className="btn-link">
                    <button className="btn">Cards</button>
                  </Link>
                </div>
              )}
            </div>
      
            {/* Utilities Dropdown */}
            <div className={`dropdown ${isDropdownOpenU ? 'open' : ''}`}>
              <div className="dropdown-header" onClick={() => setIsDropdownOpenU(!isDropdownOpenU)}>
                <WrenchAdjustable className="sidebar-icon" />
                <span style={{ marginLeft: '-6rem', fontSize: '0.9rem' }}>Utilities</span>
                <span className={`arrow-3 ${isDropdownOpenU ? 'open' : ''}`}>&rsaquo;</span>
              </div>
              {isDropdownOpenU && (
                <div className="dropdown-content">
                  <span className="dropdown-title">CUSTOM UTILITIES:</span>
                  <Link to="/login" className="btn-link">
                    <button className="btn">Color</button>
                  </Link>
                  <br />
                  <Link to="/login" className="btn-link">
                    <button className="btn">Border</button>
                  </Link>
                  <br />
                  <Link to="/login" className="btn-link">
                    <button className="btn">Animations</button>
                  </Link>
                  <br />
                  <Link to="/login" className="btn-link">
                    <button className="btn">Others</button>
                  </Link>
                </div>
              )}
            </div>
            <hr className="sidebar-divider" />
      
            {/* Addons Section */}
            <span className="sidebar-link">ADDONS</span>
            <hr className="sidebar-divider" />
      
            {/* Pages Dropdown */}
            <div className={`dropdown ${isPageOpen ? 'open' : ''}`}>
              <div className="dropdown-header" onClick={() => setIsPageOpen(!isPageOpen)}>
              <FolderFill className="sidebar-icon" />
                  <span style={{ marginLeft: '-6rem',fontSize: '0.9rem' }}>Page</span>
                <div className="total-page">
                 
                  <span className={`arrow-page ${isPageOpen ? 'open' : ''}`}>&rsaquo;</span>
                </div>
              </div>
              {isPageOpen && (
                <div className="dropdown-content-page">
                  <span className="dropdown-title">LOGIN SCREEN:</span>
                  <br />
                  <Link to="/login" className="btn-link">
                    <button className="btn">Login</button>
                  </Link>
                  <br />
                  <Link to="/create" className="btn-link">
                    <button className="btn">Register</button>
                  </Link>
                  <br />
                  <Link to="/forgot" className="btn-link">
                    <button className="btn">Forgot Password</button>
                  </Link>
                  <br />
                  <span className="dropdown-title">Other Pages</span>
                  <br />
                  <Link to="*" className="btn-link">
                    <button className="btn">404 Page</button>
                  </Link>
                  <br />
                  <Link to="/" className="btn-link">
                    <button className="btn">Blank Page</button>
                  </Link>
                </div>
              )}
            </div>
            <hr className="sidebar-divider" />
      
            {/* Charts Section */}
            <GraphDownArrow className="sidebar-icon" />
            <span>Charts</span>
            <hr className="sidebar-divider" />
      
            {/* Tables Section */}
            <Table className="sidebar-icon" />
            <span>Tables</span>
          </div>
      
          <div className={`dashboard ${isExpanded ? 'expanded' : 'collapsed'}`}>
            {/* Dashboard Content */}
            <div className="resize-button" onClick={toggleSidebar}>
              <List className="resize-icon" /> 
            </div>
          </div>
          
          </div>
            <div className='total-head'>
              <input type='text' className='input' placeholder='Search...' /> <Search className='search-icon' />
              <span className='bell-icon'><BellFill /><span className='top-bell'>3+</span></span>
              <span className='mail-icon'><EnvelopeFill /><span className='top-bell'>7</span></span>
              <span className='line'><span style={{ marginLeft: "0.7rem" }}>Surya Perumal <PersonCircle style={{ color: "orange" }} /></span></span>
            </div>
            <div className='das-heading'>
              <h2>Dashboard</h2>
              <h3 style={{ border: "none", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", padding: "5px", borderRadius: "3%", background: "dodgerblue", color: "white", cursor: "pointer" }}> <Download />Download</h3>
            </div>
            <div className='second-das'>
              <div className='box-1'>
                <CalendarFill className='table-icon' />
                <span className='box-1-info'>
                  EARNINGS (MONTHLY) <br />
                  <span style={{ color: "rgb(181, 181, 181)", fontSize: "1.4rem" }}>$40,000</span>
                </span>
              </div>
              <div className='box-2'>
                <CurrencyDollar className='table-icon' />
                <span className='box-2-info'>
                  EARNINGS (ANNUAL) <br />
                  <span style={{ color: "rgb(181, 181, 181)", fontSize: "1.4rem" }}>$215,000</span>
                </span>
              </div>
              <div className='box-3'>
                <Clipboard2DataFill className='table-icon' />
                <span className='box-3-info'>
                  TASKS <br />
                  50% <input type="range" disabled className='range-input' value={50} />
                </span>
              </div>
              <div className='box-4'>
                <ChatDotsFill className='table-icon' />
                <span className='box-4-info'>
                  PENDING REQUESTS <br />
                  18
                </span>
              </div>
              <div className='chart-1'>
                <h3 className='chart-h1'>Earnings Overview</h3>
                <div className='chart-1-box'>
                  <Chart
                    options={data.options}
                    series={data.series}
                    type="line"
                    width="500" />
                </div>
              </div>
              <div className='chart-2'>
                <div className='chart-2-box'>
                  <h3 className='chart-h2'>Revenue Sources</h3> <br /><br />
                  <Chart
                    options={datas.options}
                    series={datas.series}
                    labels={datas.labels}
                    type="donut"
                    width="380"
                  />
                </div>
              </div>
            </div>
          </div>
      );
}
export default Dashboard;
      