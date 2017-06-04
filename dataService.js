dataService = (
    function dataService() {

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function getRandomData(length) {
            var dataPoints = [];
            var anomalyThreshold = 30;
            for (var i = 0; i < length; i += 1) {
                if (i % 1000 === 0) {
                    for (var j = 0; j < anomalyThreshold; j++) {
                        dataPoints.push(
                            getRandomInt(100, 1000)
                        );
                    }
                    i += anomalyThreshold;
                } else {
                    dataPoints.push(
                        getRandomInt(0, 100)
                    );
                }
            }
            return dataPoints;
        }

        return {
            getRandomData: getRandomData
        }

    }());