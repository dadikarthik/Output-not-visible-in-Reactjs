const Notification = (props) => {
  const { className, iconUrl, message } = props
  const container = `notification-container ${className}`

  return(
      <div className={container}>
          <img className="icon" src={iconUrl} />
          <p className="message">{message}</p>
      </div>
  )
}
const element = (
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <div className="notifications-list-container">
      <Notification 
          className = "blue-color"
          iconUrl = "https://assets.ccbp.in/frontend/react-js/primary-icon-img.png";
          message = "Information Message"
      />
      <Notification 
          className = "green-color";
          iconUrl = "https://assets.ccbp.in/frontend/react-js/success-icon-img.png";
          message = "Success Message"
      />
      <Notification 
          className = "yellow-color";
          iconUrl = "https://assets.ccbp.in/frontend/react-js/warning-icon-img.png";
          message = "Warning Message"
      />
      <Notification 
          className = "red-color";
          iconUrl = "https://assets.ccbp.in/frontend/react-js/danger-icon-img.png";
          message = "Error Message";
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
