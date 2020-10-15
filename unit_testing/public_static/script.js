$(function () {
    
    let kmBox = $('#km')
    let minBox = $('#min')
    let calcBtn = $('#calcfare')
    let fareDiv = $('#fare')
    let rateBtn = $('#getrates')
    let rateDiv = $('#showRates')

    calcBtn.click(function () {
        $.post('/calcfare',{
            km: kmBox.val(),
            min: minBox.val()
        },function (data) {
            fareDiv.text('Fare :'+data.fare)
        })
    })

    rateBtn.click(function () {
        $.get('/rate',function (data) {
           let prettyRateData = `
            Fixed Fare = Rs. ${data.fixed} for ${data.minKm} KM
            <br>
             Fare (Distance) = Rs. ${data.perkm} /km
            <br>
            Fare (waiting) = Rs. ${data.perMin} /min (after first ${data.freeMin} min)  
           `
           rateDiv.html(prettyRateData)
        })
    })
}) 