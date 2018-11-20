---
path: '/t/projects/chaos-game'
date: '2018-04-07T17:12:33.962Z'
title: 'Chaos Game'
type: 'creative'
img: '/screenshots/chaos-game-screen-1.png'
blurb: 'From a Numberphile video. A simple algorithm provides surprising fractal results.'
---

My introduction to the "Chaos Game" was from the excellent Youtube channel [Numberphile](https://www.youtube.com/watch?v=kbKtFN71Lfs)

The premise is fairly simple. Draw three points on a canvas. We will also start with an initial point at the center of the three points. With each iteration of the "game" we will do as follows.

1.  Choose randomly one of the three dots.
2.  Draw an invisible line from the the last point you made (in the first iteration this will be from the center) to the dot you chose in step 1.
3.  Draw a point at the midpoint of this line. This is your new point.

You can run the code below which will iterate this process once every five seconds to give you an idea how it works. Maybe pretend you haven't seen the icon so you don't know what's happening next!

<iframe height='400' scrolling='no' title='Chaos Game Slow' src='//codepen.io/danab/embed/preview/JpvZEe/?height=516&theme-id=dark&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/danab/pen/JpvZEe/'>Chaos Game Slow</a> by Dana (<a href='https://codepen.io/danab'>@danab</a>) on <a href='https://codepen.io'>CodePen</a>.

</iframe>

So the question is, what would happen if you ran the process hundreds of times? Would the dots spread out randomly throughout the circle? Seems likely that they would.

But of course you've seen the icon. They do not! Check out the sped up version. Sierpinski's Triangle!

<iframe height='400' scrolling='no' title='Chaos Game Fast' src='//codepen.io/danab/embed/preview/Ldgzjq/?height=265&theme-id=dark&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/danab/pen/Ldgzjq/'>Chaos Game Fast</a> by Dana (<a href='https://codepen.io/danab'>@danab</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

For more information about the Chaos Game check out the [Wikipedia](https://en.wikipedia.org/wiki/Chaos_game) page. Try playing with the variables. Do you still get a fractal if you start with more than three points? (Hint: You do, but you can't bisect the line anymore, you'll have to play with the weights).
