
function Forecast({ today, icon, lows, highs }) {

    let day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    let days = []

    const nextFiveDaysName = () => {
        for (let i = today; days.length < 5; i++) {
            days.push(day[i])
        }
    };

    nextFiveDaysName()

    return (
        <div className="container">
            <div className="dayContainer">
                <h3>{days[0]}</h3>
                <img src={`http://openweathermap.org/img/wn/${icon[0]}@2x.png`} alt="forecast"></img>
                <div className="tempContainer">
                    <h4>{highs[0]}&#176;</h4>
                    <h4 className="low">{lows[0]}&#176;</h4>
                </div>
            </div>
            <div className="dayContainer">
                <h3>{days[1]}</h3>
                <img src={`http://openweathermap.org/img/wn/${icon[1]}@2x.png`} alt="forecast"></img>
                <div className="tempContainer">
                    <h4>{highs[1]}&#176;</h4>
                    <h4 className="low">{lows[1]}&#176;</h4>
                </div>
            </div>
            <div className="dayContainer">
                <h3>{days[2]}</h3>
                <img src={`http://openweathermap.org/img/wn/${icon[2]}@2x.png`} alt="forecast"></img>
                <div className="tempContainer">
                    <h4>{highs[2]}&#176;</h4>
                    <h4 className="low">{lows[2]}&#176;</h4>
                </div>
            </div>
            <div className="dayContainer">
                <h3>{days[3]}</h3>
                <img src={`http://openweathermap.org/img/wn/${icon[3]}@2x.png`} alt="forecast"></img>
                <div className="tempContainer">
                    <h4>{highs[3]}&#176;</h4>
                    <h4 className="low">{lows[3]}&#176;</h4>
                </div>
            </div>
            <div className="dayContainer">
                <h3>{days[4]}</h3>
                <img src={`http://openweathermap.org/img/wn/${icon[4]}@2x.png`} alt="forecast"></img>
                <div className="tempContainer">
                    <h4>{highs[4]}&#176;</h4>
                    <h4 className="low">{lows[4]}&#176;</h4>
                </div>
            </div>
        </div>
    )
}

export default Forecast