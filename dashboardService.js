dashboardService = (
    function dashboardService() {

        var colors = [
            '#0099DB', '#7EB26D', '#EAB839', '#6ED0E0', '#EF843C', '#E24D42', '#1F78C1', '#BA43A9', '#705DA0', '#508642',
            '#CCA300', '#447EBC', '#C15C17', '#890F02', '#0A437C', '#6D1F62', '#584477', '#B7DBAB', '#F4D598', '#70DBED',
            '#F9BA8F', '#F29191', '#82B5D8', '#E5A8E2', '#AEA2E0', '#629E51', '#E5AC0E', '#64B0C8', '#E0752D', '#BF1B00',
            '#0A50A1', '#962D82', '#614D93', '#9AC48A', '#F2C96D', '#65C5DB', '#F9934E', '#EA6460', '#5195CE', '#D683CE',
            '#806EB7', '#3F6833', '#967302', '#2F575E', '#99440A', '#58140C', '#052B51', '#511749', '#3F2B5B', '#E0F9D7',
            '#FCEACA', '#CFFAFF', '#F9E2D2', '#FCE2DE', '#BADFF4', '#F9D9F9', '#DEDAF7'];

        function generateSeriesObject(dataLength, type, color) {
            return {
                dataLength: dataLength || 10000,
                type: type || 'line',
                color: color || colors[0],
            };
        }

        var tiles = [

            //------line charts-------
            {
                description: 'single line chart 10,000 points',
                series: [generateSeriesObject(10000)],
            },
            {
                description: 'single line chart 100,000 points',
                series: [generateSeriesObject(100000)],
            },
            {
                description: '10 line chart 10,000 points each',
                series: (function getData() {
                    var res = [];
                    for (var i = 0; i < 10; i++) {
                        res.push(generateSeriesObject(10000), null, colors[i]);
                    }
                    return res;
                }()),
            },
            {
                description: '30 line chart 10,000 points each',
                series: (function getData() {
                    var res = [];
                    for (var i = 0; i < 30; i++) {
                        res.push(generateSeriesObject(10000), null, colors[i]);
                    }
                    return res;
                }()),
            },

            //column charts
            {
                description: 'single line chart 10,000 points',
                series: [generateSeriesObject(10000), 'column'],
            },
            {
                description: 'single line chart 100,000 points',
                series: [generateSeriesObject(100000), 'column'],
            },
            {
                description: '10 line chart 10,000 points each',
                series: (function getData() {
                    var res = [];
                    for (var i = 0; i < 10; i++) {
                        res.push(generateSeriesObject(10000), 'column', colors[i]);
                    }
                    return res;
                }()),
            },
            {
                description: '30 line chart 10,000 points each',
                series: (function getData() {
                    var res = [];
                    for (var i = 0; i < 30; i++) {
                        res.push(generateSeriesObject(10000), 'column', colors[i]);
                    }
                    return res;
                }()),
            },

            //Hybrid
        ];

        function generateTiles(renderCb) {
            var body = document.getElementsByTagName("BODY")[0];
            for (var i=0; i< tiles.length ; i++) {
                var tile = tiles[i];

                var title = document.createElement("DIV");
                title.className = 'chart-title';
                title.innerHTML = tile.description;

                var chart = document.createElement("DIV");
                chart.id = 'chart_' + i.toString();

                var timing = document.createElement("DIV");
                timing.id = 'timing_' + i.toString();

                body.appendChild(title);
                body.appendChild(timing);
                body.appendChild(chart);

                var start = new Date();
                renderCb && renderCb(chart.id, tile.series);
                var end = new Date();
                timing.innerHTML = 'Graphs loaded in ' + ( end - start ) + ' ms.';
            }
        }

        return {
            tiles: tiles,
            generateTiles: generateTiles,
        }

    }());