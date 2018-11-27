---
path: '/t/projects/scorigami'
date: '2018-11-22T19:12:33.962Z'
title: 'MLB Scorigami'
type: 'baseball'
img: '/screenshots/scorigami-screen.png'
blurb: 'A historical look of every professional baseball game played, and the most popular resulting scores.'
---

<a href="https://scorigami.danaben.net/t">
	<img width="200" src="/screenshots/scorigami-screen.png" style="float: right; margin: 0 0 1em 1em" />
</a>

Lahman's Baseball database includes over 200,000 baseball games from 1871-2017. In this fun project I wanted to visualize the frequency of occurrence of each possible score outcome. For the sake of this visual I considered the home team winning 5-3 to be different than the visiting team winning 5-3.

The x axis (top) is the home team and the y axis (left) is the visitors side. I used a logarithmic axis in order to visualize the difference between small numbers while allowing for some very large frequencies. This comes at the expense of differentation of some of the larger values.

Play with the range slider to see the frequencies in different eras. Or switch to viewing a single season instead of a range to compare different years.

## View

View [MLB Scorigami](https://scorigami.danaben.net/t)

## Code

View the code on [GitHub](https://github.com/danab/mlb-scorigami)

## Prior Art

The idea was lifted from Jon Bois' work at SBNation. [Here is the original article](https://www.sbnation.com/2016/12/7/13856392/chart-party-scorigami). An analogous site for the NFL is maintined by Andrew Merriman [here](https://nflscorigami.com). The [MLB chart](https://twitter.com/MLBRandomStats/status/1031692992757858308) had in large part previously been created (independently of my knowledge) by [@MLBRandomStats](https://twitter.com/MLBRandomStats).
