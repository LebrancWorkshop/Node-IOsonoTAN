const Chance = require('chance');
const chance = new Chance();

const idGenerated = () => {
	return "Gawae";
	// return chance.string({ length: 10 });
};

module.exports = {
	idGenerated
}