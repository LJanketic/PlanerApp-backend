var Duration = require ('../models/duration');

module.exports.createDuration = async (durationData) => {
    const newDuration = new Duration({
        time: durationData.time
    })
    try {
        await newDuration.save()
        return 'DURATION POST OK'
    } catch (error) {
        console.error(error)
    }
};