const form = document.querySelector("#interest-form");
form.addEventListener("submit", function(e){
 // prevent webflow deafult form behaviour
 e.preventDefault();
 e.stopPropagation();
});
 // calculate interest and generate formg
 function calculateInterest() {
    // create Form data object from the form
    const formData = new FormData(form);
    
    // use form data api to get form value
    const principle = Number(formData.get("principle"));
    const rate = Number(formData.get("rate"));
    const frequency = Number(formData.get("frequency"));
    const years = Number(formData.get("years"));
    // calculating compounding interest
   
    
    // preparing data for chart
    const labels = Array.from({length: parseInt(years)}, (_, i) => i +1);
    const data =[];
    for(let year=1; year<= years; year++) {
     const yearAmount = 
     principle * Math.pow(1 + rate / 100/ frequency, frequency * year);
     data.push(yearAmount);
    }
    // chart js to render the chart
    const ctx = document.querySelector("#chart").getContext("2d");
    if(window.interestChart instancOf chart) {
     window.interestChart.destory();// destory existing chart instance if exist
     
    }
    window.interestChart = new chart(ctx, {
        type: "line",
        data: {
            labels: labels,
            datasets: [
                {
                    label: "investment over time",
                    data: data,
                    borderColor: "#5e75d2",
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true;
                    title: {
                        display: true,
                        Text: "Amount ($)",
                    },
                },
                x: {
                    title: {
                        display: true,
                        Text: "year",
                    },
                },
            },
        },
    });
   }