let currentMode = "voltage";
let currentRange = "auto";

function changeMode() {
  currentMode = document.getElementById("mode").value;
  updateMeasurement();
}

function changeRange() {
  currentRange = document.getElementById("range").value;
  updateMeasurement();
}

function updateMeasurement() {
  const measurementDisplay = document.getElementById("measurement");

  if (currentMode === "voltage") {
    if (currentRange === "auto") {
      measurementDisplay.innerHTML = "3.30 V";
    } else if (currentRange === "low") {
      measurementDisplay.innerHTML = "1.10 V";
    } else if (currentRange === "medium") {
      measurementDisplay.innerHTML = "2.50 V";
    } else if (currentRange === "high") {
      measurementDisplay.innerHTML = "5.00 V";
    } else if (currentRange === "very_high") {
      measurementDisplay.innerHTML = "10.00 V";
    }
  } else if (currentMode === "current") {
    if (currentRange === "auto") {
      measurementDisplay.innerHTML = "0.50 A";
    } else if (currentRange === "low") {
      measurementDisplay.innerHTML = "100.00 mA";
      measurementDisplay.innerHTML = "500.00 mA"; 
    } else if (currentRange === "high") {
      measurementDisplay.innerHTML = "2.00 A";
    } else if (currentRange === "very_high") {
      measurementDisplay.innerHTML = "5.00 A";
    }
  } else if (currentMode === "resistance") {
    if (currentRange === "auto") {
      measurementDisplay.innerHTML = "50 Ω";
    } else if (currentRange === "low") {
      measurementDisplay.innerHTML = "5 Ω";
    } else if (currentRange === "medium") {
      measurementDisplay.innerHTML = "50 Ω";
    } else if (currentRange === "high") {
      measurementDisplay.innerHTML = "500 Ω";
    } else if (currentRange === "very_high") {
      measurementDisplay.innerHTML = "1000 Ω";
    }
  }
}

function startMeasurement() {
  alert(`Pradedama matuoti ${currentMode} režimu su ${currentRange} diapazonu.`);
  updateMeasurement();
}
