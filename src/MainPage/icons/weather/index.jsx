import React from 'react';
import { Link } from "react-router-dom";
import { WiAlien,WiBarometer,WiCelsius,WiCloudDown,WiCloudRefresh,WiCloudUp,WiCloud,WiCloudyGusts,WiCloudyWindy,WiCloudy,WiDayCloudyGusts,WiDayCloudyHigh,WiDayCloudyWindy,WiDayCloudy,WiDayFog,WiDayHail,WiDayHaze,WiDayLightWind,WiDayLightning,WiDayRainMix,WiDayRainWind,WiDayRain,WiDayShowers,WiDaySleetStorm,WiDaySleet,WiDaySnowThunderstorm,WiDaySnowWind,WiDaySnow,WiDaySprinkle,WiDayStormShowers,WiDaySunnyOvercast,WiDaySunny,WiDayThunderstorm,WiDayWindy,WiDegrees,WiDirectionDownLeft,WiDirectionDownRight,WiDirectionDown,WiDirectionLeft,WiDirectionRight,WiDirectionUpLeft,WiDirectionUpRight,WiDirectionUp,WiDust,WiEarthquake,WiFahrenheit,WiFire,WiFlood,WiFog,WiGaleWarning,WiHail,WiHorizonAlt,WiHorizon,WiHot,WiHumidity,WiHurricaneWarning,WiHurricane,WiLightning,WiLunarEclipse,WiMeteor,WiMoonAltFirstQuarter,WiMoonAltFull,WiMoonAltNew,WiMoonAltThirdQuarter,WiMoonAltWaningCrescent1,WiMoonAltWaningCrescent2,WiMoonAltWaningCrescent3,WiMoonAltWaningCrescent4,WiMoonAltWaningCrescent5,WiMoonAltWaningCrescent6,WiMoonAltWaningGibbous1,WiMoonAltWaningGibbous2,WiMoonAltWaningGibbous3,WiMoonAltWaningGibbous4,WiMoonAltWaningGibbous5,WiMoonAltWaningGibbous6,WiMoonAltWaxingCrescent1,WiMoonAltWaxingCrescent2,WiMoonAltWaxingCrescent3,WiMoonAltWaxingCrescent4,WiMoonAltWaxingCrescent5,WiMoonAltWaxingCrescent6,WiMoonAltWaxingGibbous1,WiMoonAltWaxingGibbous2,WiMoonAltWaxingGibbous3,WiMoonAltWaxingGibbous4,WiMoonAltWaxingGibbous5,WiMoonAltWaxingGibbous6,WiMoonFirstQuarter,WiMoonFull,WiMoonNew,WiMoonThirdQuarter,WiMoonWaningCrescent1,WiMoonWaningCrescent2,WiMoonWaningCrescent3,WiMoonWaningCrescent4,WiMoonWaningCrescent5,WiMoonWaningCrescent6,WiMoonWaningGibbous1,WiMoonWaningGibbous2,WiMoonWaningGibbous3,WiMoonWaningGibbous4,WiMoonWaningGibbous5,WiMoonWaningGibbous6,WiMoonWaxingCrescent1,WiMoonWaxingCrescent2,WiMoonWaxingCrescent3,WiMoonWaxingCrescent4,WiMoonWaxingCrescent5,WiMoonWaxingCrescent6,WiMoonWaxingGibbous1,WiMoonWaxingGibbous2,WiMoonWaxingGibbous3,WiMoonWaxingGibbous4,WiMoonWaxingGibbous5,WiMoonWaxingGibbous6,WiMoonrise,WiMoonset,WiNA,WiNightAltCloudyGusts,WiNightAltCloudyHigh,WiNightAltCloudyWindy,WiNightAltCloudy,WiNightAltHail,WiNightAltLightning,WiNightAltPartlyCloudy,WiNightAltRainMix,WiNightAltRainWind,WiNightAltRain,WiNightAltShowers,WiNightAltSleetStorm,WiNightAltSleet,WiNightAltSnowThunderstorm,WiNightAltSnowWind,WiNightAltSnow,WiNightAltSprinkle,WiNightAltStormShowers,WiNightAltThunderstorm,WiNightClear,WiNightCloudyGusts,WiNightCloudyHigh,WiNightCloudyWindy,WiNightCloudy,WiNightFog,WiNightHail,WiNightLightning,WiNightPartlyCloudy,WiNightRainMix,WiNightRainWind,WiNightRain,WiNightShowers,WiNightSleetStorm,WiNightSleet,WiNightSnowThunderstorm,WiNightSnowWind,WiNightSnow,WiNightSprinkle,WiNightStormShowers,WiNightThunderstorm,WiRainMix,WiRainWind,WiRain,WiRaindrop,WiRaindrops,WiShowers,WiSleet,WiSmallCraftAdvisory,WiSmog,WiSmoke,WiSnowflakeCold,WiSolarEclipse,WiSprinkle,WiStars,WiStormShowers,WiStormWarning,WiStrongWind,WiSunrise,WiSunset,WiThermometerExterior,WiThermometerInternal,WiThermometer,WiThunderstorm,WiTime1,WiTime10,WiTime11,WiTime12,WiTime2,WiTime5,WiTime6,WiTime7,WiTime8,WiTime9,WiTornado,WiTrain,WiTsunami,WiUmbrella,WiVolcano,WiWindBeaufort0,WiWindBeaufort1,WiWindBeaufort10,WiWindBeaufort11,WiWindBeaufort12,WiWindBeaufort2,WiWindBeaufort3,WiWindBeaufort4,WiWindBeaufort5,WiWindBeaufort6,WiWindBeaufort7,WiWindBeaufort9,WiWindDeg,WiWindy, } from "weather-icons-react";

const WeatherIcons =()=>{
    return(
<>
  {/* Page Wrapper */}
  <div className="page-wrapper cardhead">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Weather Icon</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/dream-pos/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Weather Icon</li>
                </ul>
              </div>
            </div>
          </div>
      {/* /Page Header */}
      <div className="row">
        {/* Chart */}
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <div className="card-title">Weather Icon</div>
            </div>
            <div className="card-body">
              <div className="icons-items">
                <ul className="icons-list">


                <li><WiDaySunny size={24} /></li>
                <li><WiBarometer size={24} /></li>
                <li><WiAlien size={24} /></li>
                <li><WiBarometer size={24} /></li>
                <li><WiCelsius size={24} /></li>
                <li><WiCloudDown size={24} /></li>
                <li><WiCloudRefresh size={24} /></li>
                <li><WiCloudUp size={24} /></li>
                <li><WiCloud size={24} /></li>
                <li><WiCloudyGusts size={24} /></li>
                <li><WiCloudyWindy size={24} /></li>
                <li><WiCloudy size={24} /></li>
                <li><WiDayCloudyGusts size={24} /></li>
                <li><WiDayCloudyHigh size={24} /></li>
                <li><WiDayCloudyWindy size={24} /></li>
                <li><WiDayCloudy size={24} /></li>
                <li><WiDayFog size={24} /></li>
                <li><WiDayHail size={24} /></li>
                <li><WiDayHaze size={24} /></li>
                <li><WiDayLightWind size={24} /></li>
                <li><WiDayLightning size={24} /></li>
                <li><WiDayRainMix size={24} /></li>
                <li><WiDayRainWind size={24} /></li>
                <li><WiDayRain size={24} /></li>
                <li><WiDayShowers size={24} /></li>
                <li><WiDaySleetStorm size={24} /></li>
                <li><WiDaySleet size={24} /></li>
                <li><WiDaySnowThunderstorm size={24} /></li>
                <li><WiDaySnowWind size={24} /></li>
                <li><WiDaySnow size={24} /></li>
                <li><WiDaySprinkle size={24} /></li>
                <li><WiDayStormShowers size={24} /></li>
                <li><WiDaySunnyOvercast size={24} /></li>
                <li><WiDaySunny size={24} /></li>
                <li><WiDayThunderstorm size={24} /></li>
                <li><WiDayWindy size={24} /></li>
                <li><WiDegrees size={24} /></li>
                <li><WiDirectionDownLeft size={24} /></li>
                <li><WiDirectionDownRight size={24} /></li>
                <li><WiDirectionDown size={24} /></li>
                <li><WiDirectionLeft size={24} /></li>
                <li><WiDirectionRight size={24} /></li>
                <li><WiDirectionUpLeft size={24} /></li>
                <li><WiDirectionUpRight size={24} /></li>
                <li><WiDirectionUp size={24} /></li>
                <li><WiDust size={24} /></li>
                <li><WiEarthquake size={24} /></li>
                <li><WiFahrenheit size={24} /></li>
                <li><WiFire size={24} /></li>
                <li><WiFlood size={24} /></li>
                <li><WiFog size={24} /></li>
                <li><WiGaleWarning size={24} /></li>
                <li><WiHail size={24} /></li>
                <li><WiHorizonAlt size={24} /></li>
                <li><WiHorizon size={24} /></li>
                <li><WiHot size={24} /></li>
                <li><WiHumidity size={24} /></li>
                <li><WiHurricaneWarning size={24} /></li>
                <li><WiHurricane size={24} /></li>
                <li><WiLightning size={24} /></li>
                <li><WiLunarEclipse size={24} /></li>
                <li><WiMeteor size={24} /></li>
                <li><WiMoonAltFirstQuarter size={24} /></li>
                <li><WiMoonAltFull size={24} /></li>
                <li><WiMoonAltNew size={24} /></li>
                <li><WiMoonAltThirdQuarter size={24} /></li>
                <li><WiMoonAltWaningCrescent1 size={24} /></li>
                <li><WiMoonAltWaningCrescent2 size={24} /></li>
                <li><WiMoonAltWaningCrescent3 size={24} /></li>
                <li><WiMoonAltWaningCrescent4 size={24} /></li>
                <li><WiMoonAltWaningCrescent5 size={24} /></li>
                <li><WiMoonAltWaningCrescent6 size={24} /></li>
                <li><WiMoonAltWaningGibbous1 size={24} /></li>
                <li><WiMoonAltWaningGibbous2 size={24} /></li>
                <li><WiMoonAltWaningGibbous3 size={24} /></li>
                <li><WiMoonAltWaningGibbous4 size={24} /></li>
                <li><WiMoonAltWaningGibbous5 size={24} /></li>
                <li><WiMoonAltWaningGibbous6 size={24} /></li>
                <li><WiMoonAltWaxingCrescent1 size={24} /></li>
                <li><WiMoonAltWaxingCrescent2 size={24} /></li>
                <li><WiMoonAltWaxingCrescent3 size={24} /></li>
                <li><WiMoonAltWaxingCrescent4 size={24} /></li>
                <li><WiMoonAltWaxingCrescent5 size={24} /></li>
                <li><WiMoonAltWaxingCrescent6 size={24} /></li>
                <li><WiMoonAltWaxingGibbous1 size={24} /></li>
                <li><WiMoonAltWaxingGibbous2 size={24} /></li>
                <li><WiMoonAltWaxingGibbous3 size={24} /></li>
                <li><WiMoonAltWaxingGibbous4 size={24} /></li>
                <li><WiMoonAltWaxingGibbous5 size={24} /></li>
                <li><WiMoonAltWaxingGibbous6 size={24} /></li>
                <li><WiMoonFirstQuarter size={24} /></li>
                <li><WiMoonFull size={24} /></li>
                <li><WiMoonNew size={24} /></li>
                <li><WiMoonThirdQuarter size={24} /></li>
                <li><WiMoonWaningCrescent1 size={24} /></li>
                <li><WiMoonWaningCrescent2 size={24} /></li>
                <li><WiMoonWaningCrescent3 size={24} /></li>
                <li><WiMoonWaningCrescent4 size={24} /></li>
                <li><WiMoonWaningCrescent5 size={24} /></li>
                <li><WiMoonWaningCrescent6 size={24} /></li>
                <li><WiMoonWaningGibbous1 size={24} /></li>
                <li><WiMoonWaningGibbous2 size={24} /></li>
                <li><WiMoonWaningGibbous3 size={24} /></li>
                <li><WiMoonWaningGibbous4 size={24} /></li>
                <li><WiMoonWaningGibbous5 size={24} /></li>
                <li><WiMoonWaningGibbous6 size={24} /></li>
                <li><WiMoonWaxingCrescent1 size={24} /></li>
                <li><WiMoonWaxingCrescent2 size={24} /></li>
                <li><WiMoonWaxingCrescent3 size={24} /></li>
                <li><WiMoonWaxingCrescent4 size={24} /></li>
                <li><WiMoonWaxingCrescent5 size={24} /></li>
                <li><WiMoonWaxingCrescent6 size={24} /></li>
                <li><WiMoonWaxingGibbous1 size={24} /></li>
                <li><WiMoonWaxingGibbous2 size={24} /></li>
                <li><WiMoonWaxingGibbous3 size={24} /></li>
                <li><WiMoonWaxingGibbous4 size={24} /></li>
                <li><WiMoonWaxingGibbous5 size={24} /></li>
                <li><WiMoonWaxingGibbous6 size={24} /></li>
                <li><WiMoonrise size={24} /></li>
                <li><WiMoonset size={24} /></li>
                <li><WiNA size={24} /></li>
                <li><WiNightAltCloudyGusts size={24} /></li>
                <li><WiNightAltCloudyHigh size={24} /></li>
                <li><WiNightAltCloudyWindy size={24} /></li>
                <li><WiNightAltCloudy size={24} /></li>
                <li><WiNightAltHail size={24} /></li>
                <li><WiNightAltLightning size={24} /></li>
                <li><WiNightAltPartlyCloudy size={24} /></li>
                <li><WiNightAltRainMix size={24} /></li>
                <li><WiNightAltRainWind size={24} /></li>
                <li><WiNightAltRain size={24} /></li>
                <li><WiNightAltShowers size={24} /></li>
                <li><WiNightAltSleetStorm size={24} /></li>
                <li><WiNightAltSleet size={24} /></li>
                <li><WiNightAltSnowThunderstorm size={24} /></li>
                <li><WiNightAltSnowWind size={24} /></li>
                <li><WiNightAltSnow size={24} /></li>
                <li><WiNightAltSprinkle size={24} /></li>
                <li><WiNightAltStormShowers size={24} /></li>
                <li><WiNightAltThunderstorm size={24} /></li>
                <li><WiNightClear size={24} /></li>
                <li><WiNightCloudyGusts size={24} /></li>
                <li><WiNightCloudyHigh size={24} /></li>
                <li><WiNightCloudyWindy size={24} /></li>
                <li><WiNightCloudy size={24} /></li>
                <li><WiNightFog size={24} /></li>
                <li><WiNightHail size={24} /></li>
                <li><WiNightLightning size={24} /></li>
                <li><WiNightPartlyCloudy size={24} /></li>
                <li><WiNightRainMix size={24} /></li>
                <li><WiNightRainWind size={24} /></li>
                <li><WiNightRain size={24} /></li>
                <li><WiNightShowers size={24} /></li>
                <li><WiNightSleetStorm size={24} /></li>
                <li><WiNightSleet size={24} /></li>
                <li><WiNightSnowThunderstorm size={24} /></li>
                <li><WiNightSnowWind size={24} /></li>
                <li><WiNightSnow size={24} /></li>
                <li><WiNightSprinkle size={24} /></li>
                <li><WiNightStormShowers size={24} /></li>
                <li><WiNightThunderstorm size={24} /></li>
                <li><WiRainMix size={24} /></li>
                <li><WiRainWind size={24} /></li>
                <li><WiRain size={24} /></li>
                <li><WiRaindrop size={24} /></li>
                <li><WiRaindrops size={24} /></li>
                <li><WiShowers size={24} /></li>
                <li><WiSleet size={24} /></li>
                <li><WiSmallCraftAdvisory size={24} /></li>
                <li><WiSmog size={24} /></li>
                <li><WiSmoke size={24} /></li>
                <li><WiSnowflakeCold size={24} /></li>
                <li><WiSolarEclipse size={24} /></li>
                <li><WiSprinkle size={24} /></li>
                <li><WiStars size={24} /></li>
                <li><WiStormShowers size={24} /></li>
                <li><WiStormWarning size={24} /></li>
                <li><WiStrongWind size={24} /></li>
                <li><WiSunrise size={24} /></li>
                <li><WiSunset size={24} /></li>
                <li><WiThermometerExterior size={24} /></li>
                <li><WiThermometerInternal size={24} /></li>
                <li><WiThermometer size={24} /></li>
                <li><WiThunderstorm size={24} /></li>
                <li><WiTime1 size={24} /></li>
                <li><WiTime10 size={24} /></li>
                <li><WiTime11 size={24} /></li>
                <li><WiTime12 size={24} /></li>
                <li><WiTime2 size={24} /></li>
                <li><WiTime5 size={24} /></li>
                <li><WiTime6 size={24} /></li>
                <li><WiTime7 size={24} /></li>
                <li><WiTime8 size={24} /></li>
                <li><WiTime9 size={24} /></li>
                <li><WiTornado size={24} /></li>
                <li><WiTrain size={24} /></li>
                <li><WiTsunami size={24} /></li>
                <li><WiUmbrella size={24} /></li>
                <li><WiVolcano size={24} /></li>
                <li><WiWindBeaufort0 size={24} /></li>
                <li><WiWindBeaufort1 size={24} /></li>
                <li><WiWindBeaufort10 size={24} /></li>
                <li><WiWindBeaufort11 size={24} /></li>
                <li><WiWindBeaufort12 size={24} /></li>
                <li><WiWindBeaufort2 size={24} /></li>
                <li><WiWindBeaufort3 size={24} /></li>
                <li><WiWindBeaufort4 size={24} /></li>
                <li><WiWindBeaufort5 size={24} /></li>
                <li><WiWindBeaufort6 size={24} /></li>
                <li><WiWindBeaufort7 size={24} /></li>
                <li><WiWindBeaufort9 size={24} /></li>
                <li><WiWindDeg size={24} /></li>
                <li><WiWindy size={24} /></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* /Chart */}
      </div>
    </div>
  </div>
  {/* /Page Wrapper */}
</>

)};    
export default WeatherIcons; 