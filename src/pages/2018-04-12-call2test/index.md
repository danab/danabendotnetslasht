---
path: "/projects/call2test"
date: "2018-04-12T17:12:33.962Z"
title: "Call2Test"
---

<img width="200" src="/static/screenshots/call2test-screen.png" style="float: right; margin: 0 0 1em 1em" />

Call2Test provides web based software to help facilitate proper random drug testing at drug courts. For the last three years I've been the lead and sole developer on the project with contains three main parts which I have written.

The software our clients (generally drug court facilities) interact with daily is a single page application built with React and Redux. The web app allows administrators to view schedules, send messages, enter test results, and much more.

<img width="200" src="/static/screenshots/call2test-screen.png" style="float: left; margin: 0 1em 1em 0" />

The web app is backed by a CodeIgniter based API. I've created a restful API which powers our website and is open to allow third party integrations. The PHP code also handle nightly generation of schedules and sending of said schedules via email.

Finally the third part of our software is used by the offenders at the drug courts. We provide a call in system to notify offenders if they have to test on any given day. The phone system uses a simple Node server to provide incredibly fast response times to thousands of calls daily.
