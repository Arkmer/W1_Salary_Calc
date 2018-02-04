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
    dodid: $('#ipDoDID').val(),
    monthly: '$$$.$$',
    yearly: '$$$$.$$'
  }
  soldierDisp.push(Soldier);
  console.log(soldierDisp);
  fLocationController();
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
function fLocationController(){
  var outputSoldier = $('#outputSoldier');
  outputSoldier.empty();
  var soldierHeadings = '<tr id="outputLabels"><td>Rank</td><td>Name</td><td>MOS</td><td>Base Pay</td><td>Annual</td></tr>';
  outputSoldier.append(soldierHeadings);
  for(i=0; i<soldierDisp.length; i++){
    var stringToAppend = '<tr class="soldier">';
    stringToAppend += '<td class="output">'+soldierDisp[i].rankGrade+'</td>';
    stringToAppend += '<td class="output">'+soldierDisp[i].lastName+', '+soldierDisp[i].firstName+'</td>';
    stringToAppend += '<td class="output">'+soldierDisp[i].mos+'</td>';
    stringToAppend += '<td class="output">'+soldierDisp[i].monthly+'</td>';
    stringToAppend += '<td class="output">'+soldierDisp[i].yearly+'</td>';
    stringToAppend += '<td><button type="button" name="button">Remove</button></td>'
    stringToAppend += '</tr>';
    outputSoldier.append(stringToAppend);
  }
}

// Delete button that removes an employee
// STYLE THE PAGE
