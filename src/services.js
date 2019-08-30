export async function getWeather(city) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=885c24dac664de0bc9186f32747cf51a`
    );
    const data = await res.json();
    return data
  } catch (err) {
    console.log(err);
  }
}
