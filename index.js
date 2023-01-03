const Notification = props => {
  const {className,notificationText}=props
  const containerClassName = {`notification-container ${className}`}
  return (
    <div className={containerClassName}>
      <h1 className="heading">{heading}</h1>
      <img className="icon" src={iconUrl} />
      <p className="message">{message}</p>
    </div>
  ); 
  ReactDOM.render(element, document.getElementById('root'));

ReactDOM.render(element, document.getElementById('root'));

ReactDOM.render(element, document.getElementById('root'));

ReactDOM.render(element, document.getElementById('root'));


}

const element = (
  <div className="notifications-container">
    <h1 className="heading">Notifications</h1>
      <div className="information-card">
          <a className="icon" href="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png">
          <i className="fa fa-primary"></i></a>
          <p className="message">Information Message</p>
      </div>
      <div className="success-card">
          <a className="icon" href="https://assets.ccbp.in/frontend/react-js/success-icon-img.png">
          <i className="fa fa-success"></i></a>
          <p className="message">Success Message</p>
      </div>
      <div className="warning-card">
          <a className="icon" href="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png">
          <i className="fa fa-warning"></i></a>
          <p className="message">Warning Message</p>
      </div>
      <div className="error-card">
          <a className="icon" href="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png">
          <i className="fa fa-error"></i></a>
          <p className="message">Error Message</p>
      </div>
  </div>
);

ReactDOM.render(element, document.getElementById('root'));

