var osrandom=require('../index');

exports.testSync=function(test) {
	var r1=osrandom(16), r2=osrandom(16);
	
	test.notEqual(r1.toString('base64'), r2.toString('base64'));
	
	test.done();
};

exports.testAsync=function(test) {
	var results=[];
	osrandom(128, getResult);
	osrandom(128, getResult);
	
	function getResult(err, buffer) {
		test.ifError(err);
		
		results.push(buffer);
		if (results.length===2) {
			test.notEqual(results[0].toString('base64'), results[1].toString('base64'));
			test.done();
		}
	};
};


