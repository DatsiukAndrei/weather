

export function generateWeatherStatus(temperature: number): string {
  if (temperature < 10) {
    return "Cold";
  } else if (temperature >= 10 && temperature < 20) {
    return "Mild";
  } else if (temperature >= 20 && temperature < 30) {
    return "Warm"
  } else {
    return "Hot";
  }
}
