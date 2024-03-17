const Stock = function (value) {
    const [dateInMills, open, high, low, close, volume] = value;
    const date = new Date(dateInMills * 1000);

    this.dateInMills = dateInMills;
    this.date = date;
    this.open = open;
    this.high = high;
    this.low = low;
    this.close = close;
    this.volume = volume;
};

module.exports = Stock;
