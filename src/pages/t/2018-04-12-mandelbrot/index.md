---
path: '/t/projects/mandelbrot'
date: '2018-04-12T19:12:33.962Z'
title: 'Mandelbrot'
type: 'creative'
img: '/screenshots/mandelbrot-screen.png'
blurb: 'Somehow I made it through my Math degree without understanding the Mandelbrot Set. I decided to change that.'
tags: ['js', 'canvas', 'math', 'creative']
---

<img width="200" src="/screenshots/mandelbrot-screen.png" style="float: right; margin: 0 0 1em 1em" />

When I was in school I studied math, but somehow I never did much work with fractals. I think mostly because I did not know how to program at the time.

Even after graduating I've continued to be interested in recreational mathematics and the theory of mathematic education. After watching an episode of the Coding Train on Youtube I decided to give programming the Mandelbrot set a try.

The idea of the set is to determine what happens when complex numbers iterate through a certain formula over and over again. After several iterations we want to know is the number tending towards the origin of the complex plane (staying small in magnitude) or diverging away from the origin (getting unboundedly large in magnitude). The color in the fractal comes from the speed at which the iteration diverges. If the iteration does not seem to be diverging we will color it black.

The basic formuala is as follows.

1.  Choose an initial comple value _n_. _n_ is of the form _a + bi_.
2.  Square n and add itself ( _n^2+n_ ). Make sure you remember how to square complex numbers! :). This new number will be your new _n_.
3.  Check the magnitude of the new _n_. If it's larger than a certain threshold stop. Otherwise go to step 2.

## View

View [Mandelbrot](https://danab.github.io/Mandelbrot)

## Code

View the code on [GitHub](https://github.com/danab/Mandelbrot)

## Further Reading

My explanation is brief, and if you've never heard of this before probably entirely unsatisfactory. Check out the wikipedia page for more information.
