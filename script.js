function getWeather() {
    const location = document.getElementById("location").value;
    const apiKey = "2f67f07a6e5b43459a161450250403";
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                document.getElementById("result").innerHTML = "Location not found!";
            } else {
                const temp = data.current.temp_c;
                document.getElementById("result").innerHTML = `Temperature in ${location}: ${temp}°C`;
            }
        })
        .catch(error => {
            console.error("Error fetching weather:", error);
            document.getElementById("result").innerHTML = "Error fetching weather data.";
        });
}
