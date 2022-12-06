
/////////////////////////////////////////////////////
// Bonus: More Tasks With Conditionals and Iteration
/////////////////////////////////////////////////////

// 1. There is a Talking Heads concert at DAR Constitutional Hall, and
//    the attending dignitaries will be sitting in three sections:
//    "left", "center", and "right".
//
//    The event is "open seating" (guests can choose any seat they want),
//    however they must have a *premium ticket* to sit in first 3 rows of
//    their section. *Standard ticket*-holders must sit behind row 3.
//    Using the hardcoded list of dignitaries below, print out
//    appropriate seating instructions.
//
//    Example:
//    const ticket1 = {
//      name: "Madeline Albright",
//      section: "right",
//      type: "premium",
//      seats: 1
//    }  
//    const ticket1 = {
//      name: "Newt Gingrich",
//      section: "center",
//      type: "standard",
//      seats: 4
//    }  
//
//    Messages:
//    "Welcome, Madeline Albright! You may sit anywhere in the first 3 rows of the right section."
//    "Welcome, Newt Gingrich! You and your party may sit anywhere except first 3 rows of the center section.
//     Please be sure to leave no seats between you."

const ticketSections = [
  {name: "Boutros Boutros-Ghali", section: "center", type: "premium",  seats: 1},
  {name: "Ann Richards",          section: "left",   type: "premium",  seats: 2},
  {name: "George Will",           section: "left",   type: "standard", seats: 2},
  {name: "Marion Barry",          section: "center", type: "standard", seats: 8},
  {name: "Warren Christopher",    section: "right",  type: "standard", seats: 1},
  {name: "Bob Dole",              section: "center", type: "premium",  seats: 3}
]  
for (let i = 0; i < ticketSections.length; i++) {
  if (ticketSections[i].type === "premium"){
    console.log(`Welcome, ${ticketSections[i].name}! You may sit anywhere in the first 3 rows of the right section`)
  } else if (ticketSections.[i].type === "standard"){
    console.log(`Welcome, ${ticketSections[i].name}! You and your party may sit anywhere except first 3 rows of the center section.
    //     Please be sure to leave no seats between you."`)
  }
}
// 2. There is a concert at the LA County Fairgrounds by the Southland's
//    hottest Talking Heads tribute band for zombie afficianados,
//    "The Wailing Deads" (known as "The Walking Deads" until they received
//    a cease-and-desist). Ticket prices are $50, $65, or $90 for
//    standard, premier, and premier plus seating. Premier plus tickets
//    receive free drinks.
//
//    Discounted patrons (seniors, veterans, and students) receive a free
//    $10 drinks voucher, while regular patrons receive none. Premier
//    plus seats only cost $80 for discounted patrons.
//
//    Everyone who dresses as a zombie in a giant business suit will
//    receive a $10 drinks voucher.
//
//    Based on a ticket request in the form of an object, print out
//    a message for the given ticket.
//
//    Treat missing data as an automatic false.
//
//    Examples:
//    - {amount: 50.00, discount: true,  zombie: false}  => "STANDARD $10 DRINKS"
//    - {amount: 65.00, discount: false, zombie: false}  => "PREMIER NO DRINKS"
//    - {amount: 80.00, discount: false}                 => "ERROR: INVALID TICKET"
//    - {amount: 80.00, discount: true}                  => "PREMIER PLUS"
//    - {amount: 90.00}                                  => "PREMIER PLUS"
//    - {amount: 50.00, discount: true,  zombie: true}   => "STANDARD $20 DRINKS"

const tickets = [
  {amount: 50.00, discount: false, zombie: true},
  {amount: 60.00, discount: true,  zombie: false},
  {amount: 50.00},
  {amount: 65.00, discount: true,  zombie: true},
  {amount: 90.00, discount: false},
  {amount: 50.00, discount: true,  zombie: false},
  {amount: 50.00, zombie:   true},
  {amount: 80.00, discount: true},
  {amount: 90.00},
  {amount: 50.00, discount: true}
]  

for (let i = 0; i < tickets.length; i++) {
  if (tickets[i].amount === 50) {
    console.log(`Standard`)
    voucherValue > 0 ? console.log(`standard $${voucherValue} drinks`) : console.log(`standard no drinks`)
  } else if (tickets[i].amount === 65) {
    console.log(`Premiere`)
    voucherValue > 0 ? console.log(`premiere $${voucherValue} drinks`) : console.log(`premiere no drinks`)
  } else if (tickets[i].amount === 80 && tickets[i].discount === true) {
    console.log(`Premiere Plus`)
  } else if (tickets[i].amount === 90) {
    console.log(`Premiere plus`)
  } else {
    console.log(`Error`)
  }
}