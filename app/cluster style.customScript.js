if (window.Cluster) {
	Cluster.Symbol = ClusterSymbol;
	ClusterSymbol.IconScale = function(sum) {
		return 20 + (5 * Math.log(sum) / Math.log(2));
	};
	ClusterSymbol.IconStyle = function(name) {



		var colorsForLayer = {
			18: '#740106',
			19: '#6a00aa',
			20: '#fee20f',
			21: '#005d31',
			22: '#fe9b00', 
			23: '#790101', 
			24: '#790101' 

		}

		var activeColorsForLayer = {


		};

		var me = this;
		var getColor = function(colorMap,
			defaultColor) {
			try {
				var lid = me.cluster_.markers_[0]._layerid;
				if (colorMap['' + lid]) {
					return colorMap['' + lid];
				}
			} catch (e) {
			    //console.error(e);
			}
			return defaultColor;


		}



		//expect to be bound to ClusterSymbol object
		if (name == "hover") {

			return {
				path: google.maps.SymbolPath.CIRCLE,
				fillColor: getColor(activeColorsForLayer, "rgb(130, 51, 130)"),
				fillOpacity: 0.9,
				strokeWeight: 1.5,
				strokeColor: getColor(activeColorsForLayer, "rgb(130, 51, 130)"),
				labelOrigin: google.maps.Point(0, 0)
			};


		} else {


			return {
				path: google.maps.SymbolPath.CIRCLE,
				fillColor: getColor(colorsForLayer, "#0A79B1"),
				fillOpacity: 0.7,
				strokeWeight: 1.5,
				strokeColor: getColor(colorsForLayer, "#0A79B1"),
				labelOrigin: google.maps.Point(0, 0)

			};

		}

	};
} else {
	setTimeout(start, 100);
}