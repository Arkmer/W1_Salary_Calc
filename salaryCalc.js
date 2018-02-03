$(document).ready(listeners);

function listeners(){
  $('#ipSoldier').on('click', fColloectData);
}

function fColloectData(){
  var Soldier = {
    firstName: $('#ipNameFirst').val(),
    lastName: $('#ipNameLast').val(),
    rankGrade: $('#rankGrade').val(),
    years: $('#ipYears').val(),
    mos: $('#ipMOS').val(),
    dodid: $('#ipDoDID').val()
  }
  console.log(Soldier);
}

// Delete button that removes an employee
// STYLE THE PAGE
