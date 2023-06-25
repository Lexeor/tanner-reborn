# Tanner App

Application for even and safe tanning based on the [Goltis tanning system](https://erch2014.com/krasota/64927-metod-vuksta-goltisa-kak-bystro-zagoret.html).

Goltis claims that, based on the principle of supercompensation, it is possible to train not only strength or endurance, but also the ability of skin cells to produce melanin, a pigment that gives the skin a dark color and at the same time protects it from ultraviolet radiation.

Designed for mobile view only.

## Functions

- Timer, switching automatically according to Tanning schedule according to Goltis scheme.
- Sound notification about the need to change the tanning side.
- Dark & Light themes.
- 3 tanning modes, depending on which the next day the user will be prompted to start a few stages earlier.
- Ability to switch to an arbitrary state manually at any time.
- Current weather and UV stats, based on information from free public APIs ([OpenWeather](https://openweathermap.org/api) & [OpenUV](https://www.openuv.io/)) and deployed on own backend for better functionality.
  At the moment only two cities are available - it is a personal application after all 😋

## Three tanning modes

### Normal

Minus 3 stages next day.

### Fast

Minus 2 stages next day.

### Extreme

Minus 1 stage next day.

## Check it right now

Application is ready to use, deployed on my own server [Tanner App](http://62.84.125.174/).

## Known issues

- Sound doesn't play if mobile screen is switched off. Related to iOS system restrictions.
