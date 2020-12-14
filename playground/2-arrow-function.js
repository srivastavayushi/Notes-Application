const event = {
  name: "Birthday Party",
  guestList: ["Guest1", "Guest2", "Guest3"],
  printGuestList() {
    console.log("Guest list for " + this.name);

    this.guestList.forEach((guest) => {
      console.log(guest + " is  attending " + this.name);
    });
  },
};

event.printGuestList();
