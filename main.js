// Functionize Caught Speeding Start Code

// Determine Tickets Button Click Event
document.getElementById('btn').addEventListener('click', btnClicked);

function btnClicked() {
  // Get Speed & Speed Limit Inputs
  let d1Speed = +document.getElementById('d1-speed').value;
  let d1Limit = +document.getElementById('d1-limit').value;
  let d2Speed = +document.getElementById('d2-speed').value;
  let d2Limit = +document.getElementById('d2-limit').value;
  let d3Speed = +document.getElementById('d3-speed').value;
  let d3Limit = +document.getElementById('d3-limit').value;

  // Calculate & Output Ticket Types
  document.getElementById('d1-ticket').innerHTML = ticketAmount(d1Speed, d1Limit);
  document.getElementById('d2-ticket').innerHTML = ticketAmount(d2Speed, d2Limit);
  document.getElementById('d3-ticket').innerHTML = ticketAmount(d3Speed, d3Limit);
}

function ticketAmount(speed, max) {
  let ticket;
  if (speed > max + 40) {
    return 'Really Big Ticket';
  } else if (speed > max + 20) {
    return 'Big Ticket';
  } else if (speed > max) {
    return 'Small Ticket';
  } else {
    return 'No Ticket';
  }
  return ticket;
}