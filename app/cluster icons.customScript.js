if (window.Cluster) {
	Cluster.Symbol = ClusterSymbol;
	ClusterSymbol.IconScale = function(sum) {
		return 20 + (5 * Math.log(sum) / Math.log(2));
	};
	ClusterSymbol.IconStyle = function(name) {



		var colorsForLayer = {
			1: '#fed819',
			3: '#187a30',
			4: '#0254a5',
			5: '#fe8f2a',
			6: '#05a0fe', 
			7: '#790101' 

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
			    console.error(e);
			}
			return defaultColor;


		}



		//expect to be bound to ClusterSymbol object
		if (name == "hover") {

			return {
				path: google.maps.SymbolPath.CIRCLE,
				fillColor: getColor(activeColorsForLayer, "rgb(130, 51, 130)"),
				fillOpacity: 0.7,
				strokeWeight: 1.5,
				strokeColor: getColor(activeColorsForLayer, "rgb(130, 51, 130)"),
				labelOrigin: new google.maps.Point(0, 0)
			};


		} else {


			return {
				path: google.maps.SymbolPath.CIRCLE,
				fillColor: getColor(colorsForLayer, "#0A79B1"),
				fillOpacity: 0.4,
				strokeWeight: 1.5,
				strokeColor: getColor(colorsForLayer, "#0A79B1"),
				labelOrigin: new google.maps.Point(0, 0)

			};

		}

	};
} else {
	setTimeout(start, 100);
}