## Overview

First thing first I'm just a newbie to Stonks📈. While I was trying to learn a way to start investing, I stumbled upon a [video](https://www.youtube.com/watch?v=lrauZxLjMsc&list=PLxNHpNhDaEFLngQFq3dIQvQO2hPZdAE8t&index=3), that person was explaining Averaging Strategy for buying ETFs. So, being curious I tried to apply that strategy on an ETF data. This snippet implements a simple investment strategy based on percentage changes in stock prices. The strategy involves buying shares when the price decreases. The goal is to maximize returns by capitalizing on short-term price fluctuations.

## Features

- **Percentage-Based Buying:** The strategy calculates the percentage change in stock prices and determines the maximum amount to invest based on this percentage change.
- **Dynamic Investment Limit:** The maximum investment amount per percentage change is adjustable (`buyLimitPerPercentage` variable), allowing flexibility in investment decisions.
- **Transaction History:** The program keeps track of the buying history, including the number of shares bought and the amount invested for each transaction.
- **Total Gain Calculation:** At the end of the investment period, the program calculates the total gain percentage based on the final value of the investment compared to the total amount invested.

> **NOTE** This snippte doesn't consider transaction costs, taxes, or other fees, which can significantly impact the actual returns. This was just to understant the potential.

