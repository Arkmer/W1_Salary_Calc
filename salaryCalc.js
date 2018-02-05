$(document).ready(listeners);

function listeners(){
  $('#ipSoldier').on('click', fColloectData);
  $('#outputSoldier').on('click', '.remove', fRemove);
}

var soldierDisp = [];

function fColloectData(){
  var Soldier = {
    firstName: $('#ipNameFirst').val(),
    lastName: $('#ipNameLast').val(),
    rankGrade: fRankTerp(),
    years: $('#ipYears').val(),
    mos: $('#ipMOS').val(),
    dodid: $('#ipDoDID').val(),
    monthly: '$'+fMonthlyCalc()+'.00',
    yearly: '$'+fYearlyCalc()+'.00'
  }
  soldierDisp.push(Soldier);
  fLocationController();
  fExpendCalc();
}
function fRankTerp(){
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
  return lRankMon;
}
function fLocationController(){
  var outputSoldier = $('#outputSoldier');
  outputSoldier.empty();
  var soldierHeadings = '<tr id="outputLabels"><td id="rank">Rank</td><td id="name">Name</td><td id="mos">MOS</td><td id="base">Base Pay</td><td id="annual">Annual</td><td id="id">DoDID</td><td id="buttonColumn">Buttons</td></tr>';
  outputSoldier.append(soldierHeadings);
  for(i=0; i<soldierDisp.length; i++){
    var stringToAppend = '<tr class="soldier">';
    stringToAppend += '<td class="output">'+soldierDisp[i].rankGrade+'</td>';
    stringToAppend += '<td class="output">'+soldierDisp[i].lastName+', '+soldierDisp[i].firstName+'</td>';
    stringToAppend += '<td class="output">'+soldierDisp[i].mos+'</td>';
    stringToAppend += '<td class="output">'+soldierDisp[i].monthly+'</td>';
    stringToAppend += '<td class="output">'+soldierDisp[i].yearly+'</td>';
    stringToAppend += '<td class="output">'+soldierDisp[i].dodid+'</td>';
    stringToAppend += '<td><button type="button" class="remove" data-ident="'+soldierDisp[i].dodid+'">Remove</button></td>'
    stringToAppend += '</tr>';
    outputSoldier.append(stringToAppend);
  }
}
function fMonthlyCalc(){
  var lMonthly;
  switch (parseInt($('#rankGrade').val())){
    case 1: // PVT
        lMonthly = 218;
        break;
    case 2: // PV2
        lMonthly = 245;
        break;
    case 3: // PFC
      switch (parseInt($('#ipYears').val())){
        case 0:
        case 1:
          lMonthly = 257;
          break;
        case 2:
          lMonthly = 274;
          break;
        default:
          lMonthly = 290;
      }
      break;
    case 4: // SPC
      switch (parseInt($('#ipYears').val())){
        case 0:
        case 1:
          lMonthly = 290;
          break;
        case 2:
          lMonthly = 304;
          break;
        case 3:
          lMonthly = 322;
          break;
        case 4:
          lMonthly = 338;
          break;
        default:
          lMonthly = 352;
      }
      break;
    case 5: // CPL
      switch (parseInt($('#ipYears').val())){
        case 0:
        case 1:
          lMonthly = 290;
          break;
        case 2:
          lMonthly = 304;
          break;
        case 3:
          lMonthly = 322;
          break;
        case 4:
          lMonthly = 338;
          break;
        default:
          lMonthly = 352;
      }
      break;
    case 6: // SGT
      switch (parseInt($('#ipYears').val())){
        case 0:
        case 1:
          lMonthly = 311;
          break;
        case 2:
          lMonthly = 332;
          break;
        case 3:
          lMonthly = 348;
          break;
        case 4:
          lMonthly = 364;
          break;
        case 5:
        case 6:
          lMonthly = 390;
          break;
        case 7:
        case 8:
          lMonthly = 417;
          break;
        case 9:
        case 10:
          lMonthly = 439;
          break;
        default:
          lMonthly = 441;
      }
      break;
    case 7: // SSG
      switch (parseInt($('#ipYears').val())){
        case 0:
        case 1:
          lMonthly = 340;
          break;
        case 2:
          lMonthly = 374;
          break;
        case 3:
          lMonthly = 390;
          break;
        case 4:
        case 5:
          lMonthly = 406;
          break;
        case 6:
        case 7:
          lMonthly = 423;
          break;
        case 8:
        case 9:
          lMonthly = 460;
          break;
        case 10:
        case 11:
          lMonthly = 475;
          break;
        case 12:
        case 13:
          lMonthly = 503;
          break;
        case 14:
        case 15:
          lMonthly = 512;
          break;
        case 16:
        case 17:
          lMonthly = 519;
          break;
        default:
          lMonthly = 526;
      }
      break;
    case 8: // SFC
      switch (parseInt($('#ipYears').val())){
        case 0:
        case 1:
          lMonthly = 393;
          break;
        case 2:
          lMonthly = 428;
          break;
        case 3:
          lMonthly = 445;
          break;
        case 4:
        case 5:
          lMonthly = 467;
          break;
        case 6:
        case 7:
          lMonthly = 484;
          break;
        case 8:
        case 9:
          lMonthly = 513;
          break;
        case 10:
        case 11:
          lMonthly = 529;
          break;
        case 12:
        case 13:
          lMonthly = 558;
          break;
        case 14:
        case 15:
          lMonthly = 583;
          break;
        case 16:
        case 17:
          lMonthly = 599;
          break;
        case 18:
        case 19:
          lMonthly = 617;
          break;
        case 20:
        case 21:
          lMonthly = 624;
          break;
        case 22:
        case 23:
          lMonthly = 646;
          break;
        case 24:
        case 25:
          lMonthly = 659;
          break;
        default:
          lMonthly = 706;
      }
      break;
    case 9: // 1SG
      switch (parseInt($('#ipYears').val())){
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
          lMonthly = 565;
          break;
        case 10:
        case 11:
          lMonthly = 590;
          break;
        case 12:
        case 13:
          lMonthly = 605;
          break;
        case 14:
        case 15:
          lMonthly = 624;
          break;
        case 16:
        case 17:
          lMonthly = 644;
          break;
        case 18:
        case 19:
          lMonthly = 680;
          break;
        case 20:
        case 21:
          lMonthly = 699;
          break;
        case 22:
        case 23:
          lMonthly = 730;
          break;
        case 24:
        case 25:
          lMonthly = 747;
          break;
        case 26:
        case 27:
        case 28:
        case 29:
          lMonthly = 790;
          break;
        default:
          lMonthly = 805;
      }
      break;
    case 10: // MSG
      switch (parseInt($('#ipYears').val())){
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
          lMonthly = 565;
          break;
        case 10:
        case 11:
          lMonthly = 590;
          break;
        case 12:
        case 13:
          lMonthly = 605;
          break;
        case 14:
        case 15:
          lMonthly = 624;
          break;
        case 16:
        case 17:
          lMonthly = 644;
          break;
        case 18:
        case 19:
          lMonthly = 680;
          break;
        case 20:
        case 21:
          lMonthly = 699;
          break;
        case 22:
        case 23:
          lMonthly = 730;
          break;
        case 24:
        case 25:
          lMonthly = 747;
          break;
        case 26:
        case 27:
        case 28:
        case 29:
          lMonthly = 790;
          break;
        default:
          lMonthly = 805;
      }
      break;
    case 11: // SMG
      switch (parseInt($('#ipYears').val())){
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
          lMonthly = 690;
          break;
        case 12:
        case 13:
          lMonthly = 705;
          break;
        case 14:
        case 15:
          lMonthly = 725;
          break;
        case 16:
        case 17:
          lMonthly = 748;
          break;
        case 18:
        case 19:
          lMonthly = 771;
          break;
        case 20:
        case 21:
          lMonthly = 809;
          break;
        case 22:
        case 23:
          lMonthly = 841;
          break;
        case 24:
        case 25:
          lMonthly = 874;
          break;
        case 26:
        case 27:
        case 28:
        case 29:
          lMonthly = 925;
          break;
        case 30:
        case 31:
        case 32:
        case 33:
          lMonthly = 971;
          break;
        case 34:
        case 35:
        case 36:
        case 37:
          lMonthly = 1020;
          break;
        default:
          lMonthly = 1071;
      }
    case 12: // CSM
      switch (parseInt($('#ipYears').val())){
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
          lMonthly = 690;
          break;
        case 12:
        case 13:
          lMonthly = 705;
          break;
        case 14:
        case 15:
          lMonthly = 725;
          break;
        case 16:
        case 17:
          lMonthly = 748;
          break;
        case 18:
        case 19:
          lMonthly = 771;
          break;
        case 20:
        case 21:
          lMonthly = 809;
          break;
        case 22:
        case 23:
          lMonthly = 841;
          break;
        case 24:
        case 25:
          lMonthly = 874;
          break;
        case 26:
        case 27:
        case 28:
        case 29:
          lMonthly = 925;
          break;
        case 30:
        case 31:
        case 32:
        case 33:
          lMonthly = 971;
          break;
        case 34:
        case 35:
        case 36:
        case 37:
          lMonthly = 1020;
          break;
        default:
          lMonthly = 1071;
      }
  }
  return lMonthly;
}
function fYearlyCalc(){
  var tempYearly = fMonthlyCalc()*12;
  return tempYearly;
}
function fExpendCalc(){
  var expendLoc = $('#expendLoc');
  expendLoc.empty();
  var expend = 0;
  for(i=0; i<soldierDisp.length; i++){
    expend+=fYearlyCalc();
  }
  expendLoc.append('Annual Pay Expenditure: '+expend+'.00')
}
function fRemove(){
  console.log($(this).data('ident'));
  for(i=0; i<soldierDisp.length; i++){
    if(soldierDisp[i].dodid == $(this).data('ident')){
      soldierDisp.splice(i, 1);
      console.log('after splice', soldierDisp);
    }
  }
  fLocationController()
  fExpendCalc()
}

// Delete button that removes an employee and updates expenditures
// STYLE THE PAGE
