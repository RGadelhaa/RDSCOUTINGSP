let zonainicial = 'False';
let coralStation = 'False'; 
let numReefacertadoAuto = 0;
let numReefL2acertadoAuto = 0;
let numReefL3acertadoAuto = 0;
let numReefL4acertadoAuto = 0;
let numProcessoracertadoAuto = 0;
let numNetacertadoAuto = 0;

let tiraalga = 'False'
let numReefacertadoTeleop = 0;
let numReefL2acertadoTeleop = 0;
let numReefL3acertadoTeleop = 0;
let numReefL4acertadoTeleop = 0;
let numProcessoracertadoTeleop = 0;
let numNetacertadoTeleop = 0;

let regionalvalue = 'SP';
let matchtypevalue = '';
let teamcolorvalue = '';
let teamposition = '';
let finalposition = '';
let coopertition = 'False'
let roboparou = 'False'
let defesa = 'False'
let autorp = 'False'
let coralrp = 'False'
let bargerp = 'False'
let faltas = 0;
let currentPage = 1;

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js").then(() => {
    console.log("Service Worker registrado!");
  }).catch((error) => {
    console.log("Falha ao registrar Service Worker:", error);
  });
}

window.addEventListener("beforeunload", function (event) {
  event.preventDefault();
  event.returnValue = "";
});

function nextPage(pageId) {
  let current = document.getElementById(pageId);
  current.classList.remove('active');
  
  currentPage++;
  let nextPage = document.getElementById('page' + currentPage);
  nextPage.classList.add('active');
  
  disableButtons(pageId); 
}

function previousPage(pageId) {
  let current = document.getElementById(pageId);
  current.classList.remove('active');
  
  currentPage--;
  let prevPage = document.getElementById('page' + currentPage);
  prevPage.classList.add('active');
  
  disableButtons(pageId); 
}

function disableButtons(pageId) {
  document.getElementById('prevBtn' + currentPage).disabled = true;
  document.getElementById('nextBtn' + currentPage).disabled = true;

  setTimeout(function() {
    document.getElementById('prevBtn' + currentPage).disabled = false;
    document.getElementById('nextBtn' + currentPage).disabled = false;
  }, 500);
}

function selectOptionColor(color) {
         
  const redButton = document.getElementById('btnRed');
  const blueButton = document.getElementById('btnBlue');

  if (color === 'Red') {
      redButton.innerHTML = '<img src="images/ArenaRed.png" alt="Red Selected" style="width: 100%; height: 100%; border-radius: 50%;">';
      redButton.classList.add('selected');
      redButton.classList.remove('deselected');

      blueButton.innerHTML = '⠀'; 
      blueButton.classList.remove('selected');
      blueButton.classList.add('deselected');
      blueButton.style.backgroundColor = 'blue';
  } else if (color === 'Blue') {
      blueButton.innerHTML = '<img src="images/ArenaBlue.png" alt="Blue Selected" style="width: 100%; height: 100%; border-radius: 50%;">';
      blueButton.classList.add('selected');
      blueButton.classList.remove('deselected');

      redButton.innerHTML = '⠀'; 
      redButton.classList.remove('selected');
      redButton.classList.add('deselected');
      redButton.style.backgroundColor = 'red';
  }

  teamcolorvalue = color;
  console.log('Selected Color:', teamcolorvalue);
}

function selectOptionMT(mt) {
         
  const buttons = document.querySelectorAll('.StyleBtnMatchType');

  if (!matchtypevalue) {
             
        buttons.forEach(btn => btn.classList.add('deselected'));
  }

  buttons.forEach(btn => btn.classList.remove('selected'));

  const selectedButton = document.getElementById(`btn${mt}`);
  selectedButton.classList.add('selected');
  selectedButton.classList.remove('deselected');


  matchtypevalue = mt;

  buttons.forEach(btn => {
      if (btn !== selectedButton) {
          btn.classList.add('deselected');
      }
  });

  console.log('Selected Color:', matchtypevalue);}

function selectOptionPosition(position) {
         
  const buttons = document.querySelectorAll('.StyleBtnTeamPosition');

  if (!teamposition) {
             
      buttons.forEach(btn => btn.classList.add('deselected'));
  }

  buttons.forEach(btn => btn.classList.remove('selected'));

  const selectedButton = document.getElementById(`btn${position}`);
  selectedButton.classList.add('selected');
  selectedButton.classList.remove('deselected');


  teamposition = position;

  buttons.forEach(btn => {
      if (btn !== selectedButton) {
           btn.classList.add('deselected');
      }
  });

  console.log('Selected Color:', teamposition);}


  function selectZonaInicial(InitialZone) {
    const buttons = document.querySelectorAll('.StyleBtnZonaInicial'); 
    
    const selectedButton = document.getElementById(`btn${InitialZone}`);
  
    if (selectedButton.classList.contains('selected')) {

      selectedButton.classList.remove('selected');
      selectedButton.classList.add('deselected');
      zonainicial = 'False';
    } else {
  
      buttons.forEach(btn => {
        btn.classList.remove('selected'); 
        btn.classList.add('deselected');
      });
  
      selectedButton.classList.add('selected'); 
      selectedButton.classList.remove('deselected');
      zonainicial = 'True';
    }
  
    console.log('Deixou a zona inicial:', zonainicial);
  }

  function selectCoralStation(StationCoral) {
    const buttons = document.querySelectorAll('.StyleBtnCoralStation'); 
    

    const selectedButton = document.getElementById(`btn${StationCoral}`);
  
    if (selectedButton.classList.contains('selected')) {

      selectedButton.classList.remove('selected');
      selectedButton.classList.add('deselected');
      coralStation = 'False'; 
    } else {

      buttons.forEach(btn => {
        btn.classList.remove('selected');
        btn.classList.add('deselected');
      });
  
      selectedButton.classList.add('selected');
      selectedButton.classList.remove('deselected');
      coralStation = 'True';
    }
  
    console.log('Pegam da coral station:', coralStation);
  }

  function selectTiraAlga(AlgaTirar) {
    const buttons = document.querySelectorAll('.StyleBtnTiraAlga'); 
    

    const selectedButton = document.getElementById(`btn${AlgaTirar}`);
  
    if (selectedButton.classList.contains('selected')) {
 
      selectedButton.classList.remove('selected');
      selectedButton.classList.add('deselected');
      tiraalga = 'False'; 
    } else {
  
      buttons.forEach(btn => {
        btn.classList.remove('selected'); 
        btn.classList.add('deselected');
      });
  
      selectedButton.classList.add('selected');
      selectedButton.classList.remove('deselected');
      tiraalga = 'True';
    }
  
    console.log('Tira alga do coral:', tiraalga);
  }

  function selectFinalPosition(PositionFinal){
         
    const buttons = document.querySelectorAll('.StyleBtnFinalPosition');
  
    if (!finalposition) {
        buttons.forEach(btn => btn.classList.add('deselected'));
    }
  
    buttons.forEach(btn => btn.classList.remove('selected'));
  
    const selectedButton = document.getElementById(`btn${PositionFinal}`);
    selectedButton.classList.add('selected');
    selectedButton.classList.remove('deselected');
  
    finalposition = PositionFinal;
  
    buttons.forEach(btn => {
        if (btn !== selectedButton) {
             btn.classList.add('deselected');
        }
    });
  
    console.log('Selected Final Position:', finalposition);
  }
    function selectCoopertition(Coopertition) {
      const buttons = document.querySelectorAll('.StyleBtnCoopertition'); 
      
      const selectedButton = document.getElementById(`btn${Coopertition}`);
    
      if (selectedButton.classList.contains('selected')) {
        selectedButton.classList.remove('selected');
        selectedButton.classList.add('deselected');
        coopertition = 'False'; 
      } else {
        buttons.forEach(btn => {
          btn.classList.remove('selected'); 
          btn.classList.add('deselected');
        });
    
        selectedButton.classList.add('selected'); 
        selectedButton.classList.remove('deselected');
        coopertition = 'True';
      }
    
      console.log('Teve coopertition:', coopertition);
    }
  
    function selectRoboParou(parourobo) {
      const buttons = document.querySelectorAll('.StyleBtnRoboParou'); 
      
  
      const selectedButton = document.getElementById(`btn${parourobo}`);
    
      if (selectedButton.classList.contains('selected')) {
  
        selectedButton.classList.remove('selected');
        selectedButton.classList.add('deselected');
        roboparou = 'False'; 
      } else {
  
        buttons.forEach(btn => {
          btn.classList.remove('selected');
          btn.classList.add('deselected');
        });
    
        selectedButton.classList.add('selected');
        selectedButton.classList.remove('deselected');
        roboparou = 'True';
      }
    
      console.log('Robô Parou:', roboparou);
    }
    function selectDefesa(defesaa) {
      const buttons = document.querySelectorAll('.StyleBtnDefesa'); 
      
  
      const selectedButton = document.getElementById(`btn${defesaa}`);
    
      if (selectedButton.classList.contains('selected')) {
  
        selectedButton.classList.remove('selected');
        selectedButton.classList.add('deselected');
        defesa = 'False'; 
      } else {
  
        buttons.forEach(btn => {
          btn.classList.remove('selected');
          btn.classList.add('deselected');
        });

        selectedButton.classList.add('selected');
        selectedButton.classList.remove('deselected');
        defesa = 'True';
      }
    
      console.log('Faz Defesa:', defesa);
    }
    function selectAutoRP(rpauto) {
      const buttons = document.querySelectorAll('.StyleBtnAutoRP'); 
      
  
      const selectedButton = document.getElementById(`btn${rpauto}`);
    
      if (selectedButton.classList.contains('selected')) {
  
        selectedButton.classList.remove('selected');
        selectedButton.classList.add('deselected');
        autorp = 'False'; 
      } else {
  
        buttons.forEach(btn => {
          btn.classList.remove('selected');
          btn.classList.add('deselected');
        });
    
        selectedButton.classList.add('selected');
        selectedButton.classList.remove('deselected');
        autorp = 'True';
      }
    
      console.log('Faz Autonomous RP:', autorp);
    }

    function selectCoralRP(rpcoral) {
      const buttons = document.querySelectorAll('.StyleBtnCoralRP'); 
      
  
      const selectedButton = document.getElementById(`btn${rpcoral}`);
    
      if (selectedButton.classList.contains('selected')) {
  
        selectedButton.classList.remove('selected');
        selectedButton.classList.add('deselected');
        coralrp = 'False'; 
      } else {
  
        buttons.forEach(btn => {
          btn.classList.remove('selected');
          btn.classList.add('deselected');
        });
    
        selectedButton.classList.add('selected');
        selectedButton.classList.remove('deselected');
        coralrp = 'True';
      }
    
      console.log('Faz Coral RP:', coralrp);
    }


    function selectBargeRP(rpbarge) {
      const buttons = document.querySelectorAll('.StyleBtnBargeRP'); 
      
  
      const selectedButton = document.getElementById(`btn${rpbarge}`);
    
      if (selectedButton.classList.contains('selected')) {
  
        selectedButton.classList.remove('selected');
        selectedButton.classList.add('deselected');
        bargerp = 'False'; 
      } else {
  
        buttons.forEach(btn => {
          btn.classList.remove('selected');
          btn.classList.add('deselected');
        });
    
        selectedButton.classList.add('selected');
        selectedButton.classList.remove('deselected');
        bargerp = 'True';
      }
    
      console.log('Faz Barge RP:', bargerp);
    }

 function validateMatch(input) {

      input.value = input.value.replace(/[^0-9.]/g, '');
  
      let value = parseFloat(input.value);
  
      if (!isNaN(value) && value < input.min) {
          input.value = input.min;
      }
      
      if (!isNaN(value) && value > input.max) {
          input.value = input.max;
      }
  }
  function validateTeam(input1) {

    input1.value = input1.value.replace(/[^0-9.]/g, '');

    let value = parseFloat(input1.value);

    if (!isNaN(value) && value < input1.min) {
        input1.value = input1.min;
    }
    
    if (!isNaN(value) && value > input1.max) {
        input1.value = input1.max;
    }
}
function validateScouter(input2) {

  input2.value = input2.value.replace(/[^A-Za-z]/g, '');
}
   document.getElementById("Team").addEventListener("blur", function() {
    let input = this;
    let datalist = document.getElementById("opcoes");
    let options = Array.from(datalist.options).map(option => option.value);

    if (!options.includes(input.value.trim())) {
      input.value = "";
    }
  });
  function validateFalhas(input3) {
    input3.value = input3.value.replace(/[^A-Za-z0-9]/g, '');
  }
  function validatePage1() {
    const scouter = document.getElementById('txtScouter').value.trim();
    const match = document.getElementById('txtMatch').value.trim();
    const team = document.getElementById('Team').value.trim();
    const matchTypeSelected = matchtypevalue !== '';
    const allianceSelected = teamcolorvalue !== '';
    const positionSelected = teamposition !== '';
  
    if (scouter && match && team && matchTypeSelected && allianceSelected && positionSelected) {
      nextPage('page1')
    } else {
      alert('Responda todos os campos da página para avançar')
    }
  }
  function validatePage4() {
    const finalpositionSelected = finalposition !== '';
  
    if (finalposition) {
      nextPage('page4')
    } else {
      alert('Responda o campo posição final para avançar')
    }
  }

function aumentarnumReefacertadoAuto() {
  numReefacertadoAuto++;
  updateDisplayReefacertadoAuto();
}

function diminuirnumReefacertadoAuto() {
  if (numReefacertadoAuto > 0)
    numReefacertadoAuto--;
  updateDisplayReefacertadoAuto();
}

function updateDisplayReefacertadoAuto() {
  document.getElementById("numDisplayReefacertadoAuto").innerText = numReefacertadoAuto;
}
//////////////////////////////////////////////////////////////////
function aumentarnumReefL2acertadoAuto() {
  numReefL2acertadoAuto++;
  updateDisplayReefL2acertadoAuto();
}

function diminuirnumReefL2acertadoAuto() {
  if (numReefL2acertadoAuto > 0)
    numReefL2acertadoAuto--;
  updateDisplayReefL2acertadoAuto();
}

function updateDisplayReefL2acertadoAuto() {
  document.getElementById("numDisplayReefL2acertadoAuto").innerText = numReefL2acertadoAuto;
}
///////////////////////////////////////////////////////////////////
function aumentarnumReefL3acertadoAuto() {
  numReefL3acertadoAuto++;
  updateDisplayReefL3acertadoAuto();
}
function diminuirnumReefL3acertadoAuto() {
  if (numReefL3acertadoAuto > 0)
    numReefL3acertadoAuto--;
  updateDisplayReefL3acertadoAuto();
}

function updateDisplayReefL3acertadoAuto() {
  document.getElementById("numDisplayReefL3acertadoAuto").innerText = numReefL3acertadoAuto;
}
/////////////////////////////////////////////////
function aumentarnumReefL4acertadoAuto() {
  numReefL4acertadoAuto++;
  updateDisplayReefL4acertadoAuto();
}

function diminuirnumReefL4acertadoAuto() {
  if (numReefL4acertadoAuto > 0)
    numReefL4acertadoAuto--;
  updateDisplayReefL4acertadoAuto();
}
function updateDisplayReefL4acertadoAuto() {
  document.getElementById("numDisplayReefL4acertadoAuto").innerText = numReefL4acertadoAuto;
}
function aumentarnumProcessoracertadoAuto() {
  numProcessoracertadoAuto++;
  updateDisplayProcessoracertadoAuto()
}
function diminuirnumProcessoracertadoAuto() {
  if (numProcessoracertadoAuto > 0)
    numProcessoracertadoAuto--;
  updateDisplayProcessoracertadoAuto(); 
}
function updateDisplayProcessoracertadoAuto() {
  document.getElementById("numDisplayProcessoracertadoAuto").innerText = numProcessoracertadoAuto;
}
////////////////////////////////////////////////////////////////
function aumentarnumNetacertadoAuto() {
  numNetacertadoAuto++;
  updateDisplayNetacertadoAuto();
}
function diminuirnumNetacertadoAuto() {
  if (numNetacertadoAuto > 0)
    numNetacertadoAuto--;
  updateDisplayNetacertadoAuto();
}
function updateDisplayNetacertadoAuto() {
  document.getElementById("numDisplayNetacertadoAuto").innerText = numNetacertadoAuto;
}
//////////////////////////////////////////////////////////////////////////////////
function aumentarnumReefacertadoTeleop() {
  numReefacertadoTeleop++;
  updateDisplayReefacertadoTeleop();
}
function diminuirnumReefacertadoTeleop() {
  if (numReefacertadoTeleop > 0)
    numReefacertadoTeleop--;
  updateDisplayReefacertadoTeleop();
}
function updateDisplayReefacertadoTeleop() {
  document.getElementById("numDisplayReefacertadoTeleop").innerText = numReefacertadoTeleop;
}
//////////////////////////////////////////////////////////////////
function aumentarnumReefL2acertadoTeleop() {
  numReefL2acertadoTeleop++;
  updateDisplayReefL2acertadoTeleop();
}
function diminuirnumReefL2acertadoTeleop() {
  if (numReefL2acertadoTeleop > 0)
    numReefL2acertadoTeleop--;
  updateDisplayReefL2acertadoTeleop();
}
function updateDisplayReefL2acertadoTeleop() {
  document.getElementById("numDisplayReefL2acertadoTeleop").innerText = numReefL2acertadoTeleop;
}
////////////////////////////////////////////////////////////
function aumentarnumReefL3acertadoTeleop() {
  numReefL3acertadoTeleop++;
  updateDisplayReefL3acertadoTeleop();
}
function diminuirnumReefL3acertadoTeleop() {
  if (numReefL3acertadoTeleop > 0)
    numReefL3acertadoTeleop--;
  updateDisplayReefL3acertadoTeleop();
}
function updateDisplayReefL3acertadoTeleop() {
  document.getElementById("numDisplayReefL3acertadoTeleop").innerText = numReefL3acertadoTeleop;
}
////////////////////////////////////////////////
function aumentarnumReefL4acertadoTeleop() {
  numReefL4acertadoTeleop++;
  updateDisplayReefL4acertadoTeleop();
}
function diminuirnumReefL4acertadoTeleop() {
  if (numReefL4acertadoTeleop > 0)
    numReefL4acertadoTeleop--;
  updateDisplayReefL4acertadoTeleop();
}
function updateDisplayReefL4acertadoTeleop() {
  document.getElementById("numDisplayReefL4acertadoTeleop").innerText = numReefL4acertadoTeleop;
}
//////////////////////////////////////////////////////////////////////////
function aumentarnumProcessoracertadoTeleop() {
  numProcessoracertadoTeleop++;
  updateDisplayProcessoracertadoTeleop()
}
function diminuirnumProcessoracertadoTeleop() {
  if (numProcessoracertadoTeleop > 0)
    numProcessoracertadoTeleop--;
  updateDisplayProcessoracertadoTeleop(); 
}
function updateDisplayProcessoracertadoTeleop() {
  document.getElementById("numDisplayProcessoracertadoTeleop").innerText = numProcessoracertadoTeleop
}
////////////////////////////////////////////////////////////////////////////////
function aumentarnumNetacertadoTeleop() {
  numNetacertadoTeleop++;
  updateDisplayNetacertadoTeleop();
}
function diminuirnumNetacertadoTeleop() {
  if (numNetacertadoTeleop > 0)
    numNetacertadoTeleop--;
  updateDisplayNetacertadoTeleop();
}
function updateDisplayNetacertadoTeleop() {
  document.getElementById("numDisplayNetacertadoTeleop").innerText = numNetacertadoTeleop;
}
////////////////////////////////////////////////////////////////////////////////////////////
function aumentarnumFaltas() {
  faltas++;
  updateDisplayFaltas();
}
function diminuirnumFaltas() {
  if (faltas > 0)
    faltas--;
  updateDisplayFaltas();
}
function updateDisplayFaltas() {
  document.getElementById("numDisplayFaltas").innerText = faltas;
}
///////////////////////////////////////////////////////////////////////////////////////////
const scriptURL = 'https://script.google.com/macros/s/AKfycbw0uGxFM8JqhyyVN5IFpm8MhtF9LM2qMTGe4UC0uwQudrMJH0FNltnewzqBhM0tNQk/exec';
const form = document.forms['contact-form'];
const submitButton = document.querySelector('button[type="submit"]');

function preencherFormulario() {
  const Scouter = document.getElementById("txtScouter").value;
  const Regional = regionalvalue;
  const Match = document.getElementById("txtMatch").value;
  const Team = document.getElementById("Team").value;
  const MatchType = matchtypevalue;
  const Color = teamcolorvalue;
  const Position = teamposition;

  const StartingLine = zonainicial;
  const SourceAuto = coralStation;
  const ReefL1AcertadoAuto = numReefacertadoAuto;
  const ReefL2AcertadoAuto = numReefL2acertadoAuto;
  const ReefL3AcertadoAuto = numReefL3acertadoAuto;
  const ReefL4AcertadoAuto = numReefL4acertadoAuto;
  const ProcessoracertadoAuto = numProcessoracertadoAuto;
  const NetacertadoAuto = numNetacertadoAuto;

  const TiraAlga = tiraalga;
  const ReefL1AcertadoTeleop = numReefacertadoTeleop;
  const ReefL2AcertadoTeleop = numReefL2acertadoTeleop;
  const ReefL3AcertadoTeleop = numReefL3acertadoTeleop;
  const ReefL4AcertadoTeleop = numReefL4acertadoTeleop;
  const ProcessoracertadoTeleop = numProcessoracertadoTeleop;
  const NetacertadoTeleop = numNetacertadoTeleop;

  const positionfinal = finalposition;
  const coorpetition = coopertition;
  const fazdefesa = defesa;
  const AutoRP = autorp;
  const CoralRP = coralrp;
  const BargeRP = bargerp;
  const RoboParou = roboparou;
  const Faltas = faltas;
  const falhaseobservacoes = document.getElementById("txtFalhasEObservações").value;



  document.getElementById("campoScouter").value = Scouter;
  document.getElementById("campoRegional").value = Regional;
  document.getElementById("campoMatch").value = Match;
  document.getElementById("campoTeam").value = Team;
  document.getElementById("campoMatchType").value = MatchType;
  document.getElementById("campoColorTeam").value = Color;
  document.getElementById("campoTeamPosition").value = Position;

  document.getElementById("campoStartingLine").value = StartingLine;
  document.getElementById("campoSourceAuto").value = SourceAuto;
  document.getElementById("campoReefL1Certo").value = ReefL1AcertadoAuto;
  document.getElementById("campoReefL2Certo").value = ReefL2AcertadoAuto;
  document.getElementById("campoReefL3Certo").value = ReefL3AcertadoAuto;
  document.getElementById("campoReefL4Certo").value = ReefL4AcertadoAuto;
  document.getElementById("campoProcessorCerto").value = ProcessoracertadoAuto;
  document.getElementById("campoNetAcertado").value = NetacertadoAuto;

  document.getElementById("CampoTiraAlga").value = TiraAlga;
  document.getElementById("campoReefL1CertoTeleop").value = ReefL1AcertadoTeleop;
  document.getElementById("campoReefL2CertoTeleop").value = ReefL2AcertadoTeleop;
  document.getElementById("campoReefL3CertoTeleop").value = ReefL3AcertadoTeleop;
  document.getElementById("campoReefL4CertoTeleop").value = ReefL4AcertadoTeleop;
  document.getElementById("campoProcessorCertoTeleop").value = ProcessoracertadoTeleop;
  document.getElementById("campoNetAcertadoTeleop").value = NetacertadoTeleop;

  document.getElementById("campoPosiçãoFinal").value = positionfinal;
  document.getElementById("campoCoopertitionPoint").value = coorpetition;
  document.getElementById("campoFazDefesa").value = fazdefesa;
  document.getElementById("campoRoboParou").value = RoboParou;
  document.getElementById("CampoFaltas").value = Faltas
  document.getElementById("campoFalhaseObservações").value = falhaseobservacoes;
  document.getElementById("campoAutonomousRP").value = AutoRP;
  document.getElementById("campoCoralRP").value = CoralRP;
  document.getElementById("campoBargeRP").value = BargeRP;
}

form.addEventListener('submit', e => {
  e.preventDefault(); 

  submitButton.disabled = true;

  const confirmacao = confirm("Somente confirme depois que fizer todos os tipos de downloads necessários");

  if (confirmacao) {
    preencherFormulario();

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        alert("Os dados foram enviados com sucesso.");
        resetForm();
      })
      .catch(error => {
        console.error('Erro!', error.message);
        alert("Ocoreu um erro, não foi possível enviar os dados")
        submitButton.disabled = false;
      });
  } else {
    alert("Envio cancelado.");
    submitButton.disabled = false;
  }
});
function resetForm() {
  document.getElementById("txtScouter").value = "";
  document.getElementById("txtMatch").value = "";
  document.getElementById("Team").value = "";
  document.getElementById("txtFalhasEObservações").value = "";
  
  zonainicial = 'False';
  coralStation = 'False';
  numReefacertadoAuto = 0;
  numReefL2acertadoAuto = 0;
  numReefL3acertadoAuto = 0;
  numReefL4acertadoAuto = 0;
  numProcessoracertadoAuto = 0;
  numNetacertadoAuto = 0;
  tiraalga = 'False';
  numReefacertadoTeleop = 0;
  numReefL2acertadoTeleop = 0;
  numReefL3acertadoTeleop = 0;
  numReefL4acertadoTeleop = 0;
  numProcessoracertadoTeleop = 0;
  numNetacertadoTeleop = 0;
  regionalvalue = 'BSB';
  matchtypevalue = '';
  teamcolorvalue = '';
  teamposition = '';
  finalposition = '';
  coopertition = 'False';
  defesa = 'False';
  roboparou = 'False';
  autorp = 'False';
  coralrp = 'False';
  bargerp = 'False';
  faltas = 0;
  currentPage = 1;

  updateDisplayReefacertadoAuto();
  updateDisplayReefL2acertadoAuto();
  updateDisplayReefL3acertadoAuto();
  updateDisplayReefL4acertadoAuto();
  updateDisplayProcessoracertadoAuto();
  updateDisplayNetacertadoAuto();
  updateDisplayReefacertadoTeleop();
  updateDisplayReefL2acertadoTeleop();
  updateDisplayReefL3acertadoTeleop();
  updateDisplayReefL4acertadoTeleop();
  updateDisplayProcessoracertadoTeleop();
  updateDisplayNetacertadoTeleop();
  updateDisplayFaltas();


  document.querySelectorAll("input[type='text'], input[type='number']").forEach(input => {
      input.value = "";
  });
  document.querySelectorAll('.selected, .deselected').forEach(button => {
    button.classList.remove('selected', 'deselected');
});


  const redButton = document.getElementById('btnRed');
  const blueButton = document.getElementById('btnBlue');

  redButton.classList.remove('selected', 'deselected');
  blueButton.classList.remove('selected', 'deselected');

  redButton.innerHTML = '⠀'; 
  blueButton.innerHTML = '⠀'; 

  redButton.style.backgroundColor = 'red';
  blueButton.style.backgroundColor = 'blue';

  console.log("Formulário resetado!");

  clearQRCode();
  goToPage1();
  submitButton.disabled = false;
}

function goToPage1() {
  document.querySelectorAll('.content').forEach(page => page.classList.remove('active'));
  document.getElementById('page1').classList.add('active');
}


document.getElementById("BtnString").addEventListener("click", copiarDados);

function downloadreset() {
  if (confirm("Tem certeza de que deseja continuar?")) {
    salvarCSV();
    resetForm();
  } else {
    alert("Operação não concluída");
  }
}

function copiarParaAreaDeTransferencia() {
  const Scouter = document.getElementById("txtScouter").value;
  const Regional = regionalvalue;
  const Match = document.getElementById("txtMatch").value;
  const Team = document.getElementById("Team").value;
  const MatchType = matchtypevalue;
  const Color = teamcolorvalue;
  const Position = teamposition;

  const StartingLine = zonainicial;
  const SourceAuto = coralStation;
  const ReefL1AcertadoAuto = numReefacertadoAuto;
  const ReefL2AcertadoAuto = numReefL2acertadoAuto;
  const ReefL3AcertadoAuto = numReefL3acertadoAuto;
  const ReefL4AcertadoAuto = numReefL4acertadoAuto;
  const ProcessoracertadoAuto = numProcessoracertadoAuto;
  const NetacertadoAuto = numNetacertadoAuto;

  const TiraAlga = tiraalga;
  const ReefL1AcertadoTeleop = numReefacertadoTeleop;
  const ReefL2AcertadoTeleop = numReefL2acertadoTeleop;
  const ReefL3AcertadoTeleop = numReefL3acertadoTeleop;
  const ReefL4AcertadoTeleop = numReefL4acertadoTeleop;
  const ProcessoracertadoTeleop = numProcessoracertadoTeleop;
  const NetacertadoTeleop = numNetacertadoTeleop;

  const positionfinal = finalposition;
  const coorpetition = coopertition;
  const fazdefesa = defesa;
  const AutoRP = autorp;
  const CoralRP = coralrp;
  const BargeRP = bargerp;
  const RoboParou = roboparou;
  const Faltas = faltas;
  const falhaseobservacoes = document.getElementById("txtFalhasEObservações").value;

  const dados = `${Scouter},${Regional},${Match},${Team},${MatchType},${Color},${Position},${StartingLine},${SourceAuto},${ReefL1AcertadoAuto},${ReefL2AcertadoAuto},${ReefL3AcertadoAuto},${ReefL4AcertadoAuto},${ProcessoracertadoAuto},${NetacertadoAuto},${TiraAlga},${ReefL1AcertadoTeleop},${ReefL2AcertadoTeleop},${ReefL3AcertadoTeleop},${ReefL4AcertadoTeleop},${ProcessoracertadoTeleop},${NetacertadoTeleop},${positionfinal},${coorpetition},${fazdefesa},${RoboParou},${Faltas},${falhaseobservacoes},${AutoRP},${CoralRP},${BargeRP}`; 

  navigator.clipboard.writeText(dados).then(() => {
      console.log("Dados copiados!");
  }).catch(err => {
      console.error("Erro ao copiar para a área de transferência: ", err);
  });
}

function generateQRCode() {
  const Scouter = document.getElementById("txtScouter").value;
  const Regional = regionalvalue;
  const Match = document.getElementById("txtMatch").value;
  const Team = document.getElementById("Team").value;
  const MatchType = matchtypevalue;
  const Color = teamcolorvalue;
  const Position = teamposition;

  const StartingLine = zonainicial;
  const SourceAuto = coralStation;
  const ReefL1AcertadoAuto = numReefacertadoAuto;
  const ReefL2AcertadoAuto = numReefL2acertadoAuto;
  const ReefL3AcertadoAuto = numReefL3acertadoAuto;
  const ReefL4AcertadoAuto = numReefL4acertadoAuto;
  const ProcessoracertadoAuto = numProcessoracertadoAuto;
  const NetacertadoAuto = numNetacertadoAuto;

  const TiraAlga = tiraalga;
  const ReefL1AcertadoTeleop = numReefacertadoTeleop;
  const ReefL2AcertadoTeleop = numReefL2acertadoTeleop;
  const ReefL3AcertadoTeleop = numReefL3acertadoTeleop;
  const ReefL4AcertadoTeleop = numReefL4acertadoTeleop;
  const ProcessoracertadoTeleop = numProcessoracertadoTeleop;
  const NetacertadoTeleop = numNetacertadoTeleop;

  const positionfinal = finalposition;
  const coorpetition = coopertition;
  const fazdefesa = defesa;
  const AutoRP = autorp;
  const CoralRP = coralrp;
  const BargeRP = bargerp;
  const RoboParou = roboparou;
  const Faltas = faltas;
  const falhaseobservacoes = document.getElementById("txtFalhasEObservações").value;

  const dados = `${Scouter},${Regional},${Match},${Team},${MatchType},${Color},${Position},${StartingLine},${SourceAuto},${ReefL1AcertadoAuto},${ReefL2AcertadoAuto},${ReefL3AcertadoAuto},${ReefL4AcertadoAuto},${ProcessoracertadoAuto},${NetacertadoAuto},${TiraAlga},${ReefL1AcertadoTeleop},${ReefL2AcertadoTeleop},${ReefL3AcertadoTeleop},${ReefL4AcertadoTeleop},${ProcessoracertadoTeleop},${NetacertadoTeleop},${positionfinal},${coorpetition},${fazdefesa},${RoboParou},${Faltas},${falhaseobservacoes},${AutoRP},${CoralRP},${BargeRP}`; 

  const qrCodeContainer = document.getElementById('qrcode');
  qrCodeContainer.innerHTML = '';

  const generateButton = document.getElementById('generateButton');

  if (dados) {
    new QRCode(qrCodeContainer, {
      text: dados,
      width: 210,
      height: 210  
    });
  
    generateButton.innerHTML = 'Apagar QR Code';
    generateButton.setAttribute('onclick', 'clearQRCode()');
  } else {
    alert('Por favor, insira os dados para gerar o QR Code.');
  } 
}

function clearQRCode() {
  const qrCodeContainer = document.getElementById('qrcode');
  qrCodeContainer.innerHTML = '';

  const generateButton = document.getElementById('generateButton');
  generateButton.innerHTML = 'Gerar QR Code';
  generateButton.setAttribute('onclick', 'generateQRCode()');
}

function salvarCSV() {
  const Scouter = document.getElementById("txtScouter").value;
  const Regional = regionalvalue;
  const Match = document.getElementById("txtMatch").value;
  const Team = document.getElementById("Team").value;
  const MatchType = matchtypevalue;
  const Color = teamcolorvalue;
  const Position = teamposition;

  const StartingLine = zonainicial;
  const SourceAuto = coralStation;
  const ReefL1AcertadoAuto = numReefacertadoAuto;
  const ReefL2AcertadoAuto = numReefL2acertadoAuto;
  const ReefL3AcertadoAuto = numReefL3acertadoAuto;
  const ReefL4AcertadoAuto = numReefL4acertadoAuto;
  const ProcessoracertadoAuto = numProcessoracertadoAuto;
  const NetacertadoAuto = numNetacertadoAuto;

  const TiraAlga = tiraalga;
  const ReefL1AcertadoTeleop = numReefacertadoTeleop;
  const ReefL2AcertadoTeleop = numReefL2acertadoTeleop;
  const ReefL3AcertadoTeleop = numReefL3acertadoTeleop;
  const ReefL4AcertadoTeleop = numReefL4acertadoTeleop;
  const ProcessoracertadoTeleop = numProcessoracertadoTeleop;
  const NetacertadoTeleop = numNetacertadoTeleop;

  const positionfinal = finalposition;
  const coorpetition = coopertition;
  const fazdefesa = defesa;
  const AutoRP = autorp;
  const CoralRP = coralrp;
  const BargeRP = bargerp;
  const RoboParou = roboparou;
  const Faltas = faltas;
  const falhaseobservacoes = document.getElementById("txtFalhasEObservações").value;

  const dados = `${Scouter},${Regional},${Match},${Team},${MatchType},${Color},${Position},${StartingLine},${SourceAuto},${ReefL1AcertadoAuto},${ReefL2AcertadoAuto},${ReefL3AcertadoAuto},${ReefL4AcertadoAuto},${ProcessoracertadoAuto},${NetacertadoAuto},${TiraAlga},${ReefL1AcertadoTeleop},${ReefL2AcertadoTeleop},${ReefL3AcertadoTeleop},${ReefL4AcertadoTeleop},${ProcessoracertadoTeleop},${NetacertadoTeleop},${positionfinal},${coorpetition},${fazdefesa},${RoboParou},${Faltas},${falhaseobservacoes},${AutoRP},${CoralRP},${BargeRP}`; 
  
  const conteudoCSV = dados;

  const blob = new Blob([conteudoCSV], { type: "text/csv;charset=utf-8;" });

  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.setAttribute("href", url);
  link.setAttribute("download", "dados.csv");
  link.style.visibility = "hidden";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  console.log("Arquivo salvo");
}
let deferredPrompt;

if (window.matchMedia("(display-mode: standalone)").matches) {
  console.log("O app já está instalado!");
} else {
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredPrompt = event;

    const installButton = document.getElementById("install-button");
    installButton.style.display = "block"; 

    installButton.addEventListener("click", () => {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choice) => {
        if (choice.outcome === "accepted") {
          console.log("Usuário aceitou a instalação!");
        } else {
          console.log("Usuário recusou a instalação!");
        }
        deferredPrompt = null;
      });
    });
  });

  setTimeout(() => {
    if (deferredPrompt === undefined) {
      document.getElementById("install-button").style.display = "block";
    }
  }, 5000);
}
