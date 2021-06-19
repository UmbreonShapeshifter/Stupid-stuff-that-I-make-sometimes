const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.output
});

console.log(`Created readline and interface`)

readline.question("How far should you want to go in the sequence?", number => {

	const sequence = [0, 1];
	console.log(sequence[0])

	for (let i = 1; sequence.length < number; i++) {
		sequence.push(sequence[i - 1] + sequence[i]);
		console.log(sequence[i]);
	}
	readline.close();
})