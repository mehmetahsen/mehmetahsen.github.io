---
title: SAM-Funktrainer
publishDate: 2026-11-20
img: /assets/sam-funktrainer.png
img_alt: The SAM-Funktrainer web app showing an air rifle target with an aim trace and a shot.
description: |
  New, open-source software for the DISAG / KE Knestel SAM-Funktrainer shooting trainer.
  It runs in the browser, so the trainer works again on current Windows, macOS, Linux and Android.
tags:
  - WebUSB
  - Shooting
  - Reverse engineering
app: /sam-funktrainer/
repo: https://github.com/mehmetahsen/sam-funktrainer
---

The SAM-Funktrainer records where a rifle or pistol points before, during and after a dry-fire shot. Its
original Windows software has not been supported for years and does not work on Windows 10 and 11.

This project worked out how the receiver talks to the computer and rebuilt the software as a web page.
Plug in the receiver, open the app in Chrome or Edge, and click **Connect**. Nothing to install on macOS,
Linux or Android; on Windows the receiver needs a free generic USB driver once, explained in the app.

## What it does

- Live aim trace, shots with decimal ring values, on all target types of the original software
- Sessions saved in the browser, with the aim trace and trigger force of every shot, exportable as JSON or CSV
- Diagrams of each shot over time, printable targets scaled to your distance
- Calibration and device settings, with automatic backups
- Live output of positions and shots to other software

## Status

The connection to the receiver and the sensor is tested on real hardware. The scoring math is reconstructed
from the original software and still needs comparison with it. Reports from owners are welcome on GitHub.

The project is independent and not affiliated with DISAG or KE Knestel Elektronik. All data stays in your browser.
