$(document).ready(listeners);

function listeners(){
  $('#ipSoldier').on('click', fColloectData);
}

var soldierDisp = [];

function fColloectData(){
  var Soldier = {
    firstName: $('#ipNameFirst').val(),
    lastName: $('#ipNameLast').val(),
    rankGrade: rankTerp(),
    years: $('#ipYears').val(),
    mos: $('#ipMOS').val(),
    dodid: $('#ipDoDID').val()
  }
  soldierDisp.push(Soldier);
  console.log(soldierDisp);
}

function rankTerp(){
  var lRankMon;
  switch (parseInt($('#rankGrade').val())) {
    case 1:
        lRankMon = 'PVT';
        break;
    case 2:
        lRankMon = 'PV2';
        break;
    case 3:
        lRankMon = 'PFC';
        break;
    case 4:
        lRankMon = 'SPC';
        break;
    case 5:
        lRankMon = 'CPL';
        break;
    case 6:
        lRankMon = 'SGT';
        break;
    case 7:
        lRankMon = 'SSG';
        break;
    case 8:
        lRankMon = 'SFC';
        break;
    case 9:
        lRankMon = '1SG';
        break;
    case 10:
        lRankMon = 'MSG';
        break;
    case 11:
        lRankMon = 'SGM';
        break;
    case 12:
        lRankMon = 'CSM';
        break;
    case 13:
        lRankMon = 'SMA';
  }
  console.log(lRankMon);
  return lRankMon;
}

// Delete button that removes an employee
// STYLE THE PAGE
