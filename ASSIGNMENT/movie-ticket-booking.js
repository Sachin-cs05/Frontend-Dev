class MovieTicket {
    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;
    }
}

MovieTicket.prototype.printTicket = function() {
    return `MOVIE TICKET\nMovie: ${this.movieName}\nSeat: ${this.seatNo}\nPrice: $${this.price.toFixed(2)}`;
};

class OnlineTicket extends MovieTicket {
    constructor(movieName, seatNo, price, convenienceFee) {
        super(movieName, seatNo, price);
        this.convenienceFee = convenienceFee;
    }

    getTotalAmount() {
        return this.price + this.convenienceFee;
    }

    printTicket() {
        return `${super.printTicket()}\nConvenience Fee: $${this.convenienceFee.toFixed(2)}\nTotal: $${this.getTotalAmount().toFixed(2)}`;
    }
}

const ticket = new MovieTicket("Inception", "A12", 12.50);
console.log(ticket.printTicket());

console.log("\n--- Online Ticket ---");
const onlineTicket = new OnlineTicket("Interstellar", "B5", 12.50, 2.50);
console.log(onlineTicket.printTicket());

console.log("\nPrototype Chain Working:");
console.log("OnlineTicket has printTicket:", typeof onlineTicket.printTicket === 'function');
console.log("OnlineTicket inherits from MovieTicket:", onlineTicket instanceof MovieTicket);