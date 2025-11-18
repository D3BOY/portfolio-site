"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaArrowLeft, FaCloud, FaCloudRain, FaSun, FaWind, FaTint } from "react-icons/fa";
import Link from "next/link";

interface WeatherData {
  city: string;
  temp: number;
  description: string;
  humidity: number;
  windSpeed: number;
  icon: string;
}

export default function WeatherNow() {
  const [city, setCity] = useState("London");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async (cityName: string) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=51.51&longitude=-0.13&current=temperature_2m,weather_code,relative_humidity_2m,wind_speed_10m`
      );
      const data = await res.json();
      const current = data.current;

      setWeather({
        city: cityName,
        temp: Math.round(current.temperature_2m),
        description: getWeatherDescription(current.weather_code),
        humidity: current.relative_humidity_2m,
        windSpeed: Math.round(current.wind_speed_10m),
        icon: getWeatherIcon(current.weather_code),
      });
    } catch (err) {
      setError("Could not fetch weather data");
    }
    setLoading(false);
  };

  const getWeatherDescription = (code: number) => {
    const descriptions: { [key: number]: string } = {
      0: "Clear sky",
      1: "Mainly clear",
      2: "Partly cloudy",
      3: "Overcast",
      45: "Foggy",
      48: "Foggy",
      51: "Light drizzle",
      61: "Slight rain",
      80: "Slight rain showers",
      95: "Thunderstorm",
    };
    return descriptions[code] || "Unknown";
  };

  const getWeatherIcon = (code: number) => {
    if (code === 0) return "☀️";
    if (code <= 3) return "☁️";
    if (code >= 51 && code <= 80) return "🌧️";
    if (code >= 95) return "⛈️";
    return "🌫️";
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) fetchWeather(city);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-900/20 to-slate-950 px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <Link href="/#projects">
          <motion.button
            whileHover={{ x: -4 }}
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 font-semibold"
          >
            <FaArrowLeft /> Back to Portfolio
          </motion.button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl p-8 border border-blue-500/20"
        >
          <h1 className="text-4xl font-bold text-white mb-2">WeatherNow</h1>
          <p className="text-gray-400 mb-8">Real-time weather dashboard with live data</p>

          <form onSubmit={handleSearch} className="mb-8">
            <div className="flex gap-2">
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city name..."
                className="flex-1 px-4 py-3 bg-blue-500/10 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold flex items-center gap-2"
              >
                <FaSearch /> Search
              </motion.button>
            </div>
          </form>

          {error && <p className="text-red-400 mb-4">{error}</p>}
          {loading && <p className="text-blue-400">Loading weather data...</p>}

          {weather && !loading && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-6"
            >
              <div className="text-center py-8 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-500/30">
                <p className="text-6xl mb-4">{weather.icon}</p>
                <h2 className="text-3xl font-bold text-white mb-2">{weather.city}</h2>
                <p className="text-5xl font-bold text-blue-400 mb-2">{weather.temp}°C</p>
                <p className="text-xl text-gray-300">{weather.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-blue-500/5 border border-blue-500/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <FaTint className="text-cyan-400" />
                    <span className="text-gray-400">Humidity</span>
                  </div>
                  <p className="text-2xl font-bold text-white">{weather.humidity}%</p>
                </div>
                <div className="p-4 bg-blue-500/5 border border-blue-500/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <FaWind className="text-cyan-400" />
                    <span className="text-gray-400">Wind Speed</span>
                  </div>
                  <p className="text-2xl font-bold text-white">{weather.windSpeed} km/h</p>
                </div>
              </div>
            </motion.div>
          )}

          {!weather && !loading && (
            <p className="text-gray-500 text-center py-12">Search for a city to see the weather</p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
