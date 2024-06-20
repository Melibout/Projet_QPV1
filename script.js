function loadFinancieres() {
    // Logic to load financial statistics data
    console.log("Loading financial statistics...");
}

function loadGeographiques() {
    // Logic to load geographical statistics data
    console.log("Loading geographical statistics...");
}

function loadAnnuaire() {
    // Logic to load annuaire data
    console.log("Loading annuaire...");
}

// Example data for the charts
const dataSex = {
    labels: ['Homme', 'Femme'],
    datasets: [{
        label: 'Nombre',
        data: [50, 50],
        backgroundColor: ['#36A2EB', '#FF6384']
    }]
};

const dataCapital = {
    labels: ['Entreprise 1', 'Entreprise 2'],
    datasets: [{
        label: 'Capital Social',
        data: [100000, 200000],
        backgroundColor: ['#FF6384', '#36A2EB']
    }]
};

const dataForm = {
    labels: ['SAS', 'SARL', 'Auto-entrepreneur'],
    datasets: [{
        label: 'Nombre',
        data: [30, 50, 20],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }]
};

// Chart.js initialization
const ctxSex = document.getElementById('sexChart').getContext('2d');
new Chart(ctxSex, {
    type: 'pie',
    data: dataSex
});

const ctxCapital = document.getElementById('capitalChart').getContext('2d');
new Chart(ctxCapital, {
    type: 'bar',
    data: dataCapital
});

const ctxForm = document.getElementById('formChart').getContext('2d');
new Chart(ctxForm, {
    type: 'doughnut',
    data: dataForm
});
