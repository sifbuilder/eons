/**********************
 *    @haloGeojson
 */
(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports) :
    typeof define === "function" && define.amd ? define(["exports"], factory) :
      (factory((global.haloGeojson = global.haloGeojson || {})))
}(this, function (exports) { "use strict"

  let haloGeojson = function haloGeojson(__mapper = {}) {

    let f = __mapper("props")(),
				mgeoj = __mapper("xs").m("geoj"),
				mprofier = __mapper("xs").m("profier"),
				mboform = __mapper("xs").m("boform"),
				mric = __mapper("xs").m("ric"),
				mstace = __mapper("xs").m("stace")


    let _geoform = p => ({     // geoform
      type:  "Feature",
      geometry: {"type": "Point","coordinates": [0, 0]},
      properties: {sort: "feature", }})

  /**********************
   *    @gramify
   */
  let gramn = function (anima, newAnigrams=[]) {
		if (0 && 1) console.log("h.geojson anima",anima)
		let ani = __mapper("xs").m("anitem")(anima),
			anigram = ani.anigram(),            	// anigram
			boform =  ani.boform(),             	// boform
			ric =   	ani.ric(),               		// ric
			tim =   	ani.tim(),               		// tim
			payload = ani.payload(),            	// payload
			proform = ani.proform(),            	// proform
			conform = ani.conform(),            	// conform
			parentuid = ani.parentuid(),          // parentuid
			geoform = ani.geoform() || _geoform,  // geoform	
			json

		let uid =  __mapper("xs").m("ric").buildUIDFromRic(ric)

		json = f.v(geoform, anigram)
		
		json = mprofier.projier(f.v(conform, anigram), anigram)(json)
		json = mprofier.proformer(f.v(proform, anigram), anigram)(json)

		json = mboform.boformer(boform, anigram, json)	// boform
		json = mgeoj.featurize(json) 										// featurize
		json = mgeoj.zorder(json) 											// order
		json = mric.qualier(ric, anigram, json)					// qualify

		if (1 && 1) console.log("h.geojson.gramn json", json)
		
		newAnigrams = json.features.map( (d, i) => {
			let newAnigram = Object.assign({}, anigram)
					newAnigram.feature = d
					newAnigram.ric = d.properties.ric
					newAnigram.uid = d.id
			return newAnigram
		})

		return newAnigrams

  }

  /**********************
   *    @enty
   */
    let haloGeojson_ween = anima => (anima.inited !== true) ? (anima.inited = anima.gelded = true, [anima]) : []
    let haloGeojson_gramn = anima => gramn(anima)

    let haloGeojson = {}
        haloGeojson.ween = anima => haloGeojson_ween(anima)
        haloGeojson.gramn = anima => haloGeojson_gramn(anima)

    let enty = haloGeojson

    return enty

  }

  exports.haloGeojson = haloGeojson

}));
