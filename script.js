function calcularDesplazamiento() {
  const longitud = parseFloat(document.getElementById("longitud").value);
  const masa = parseFloat(document.getElementById("masa").value);
  const mantenimiento = parseFloat(document.getElementById("mantenimiento").value);

  if (isNaN(longitud) || isNaN(masa) || isNaN(mantenimiento)) {
    alert("Por favor, completa todos los campos correctamente.");
    return;
  }

  const desplazamiento = 12.8877 + (0.0004744 * longitud) - (0.0003125 * masa) - (0.0036265 * mantenimiento);

  document.getElementById("desplazamiento").value = desplazamiento.toFixed(4);
  actualizarGrafico(longitud, masa, mantenimiento, desplazamiento);
}

let chart;

function actualizarGrafico(longitud, masa, mantenimiento, desplazamiento) {
  const ctx = document.getElementById("grafico").getContext("2d");

  if (chart) {
    chart.destroy();
  }

  chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Longitud (m)", "Masa (kg/m)", "Mantenimiento (%)", "Desplazamiento (mm)"],
      datasets: [{
        label: "Valores",
        data: [longitud, masa, mantenimiento, desplazamiento],
        backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc", "#f6c23e"]
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}