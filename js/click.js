// var context = new AudioContext();
// var osc1 = context.createOscillator(),
//     osc2 = context.createOscillator();
// osc1.type = 'triangle';
// osc2.type = 'triangle';
// var volume = context.createGain();
// volume.gain.value = 0.1;

// // Connect oscillators to the GainNode
// osc1.connect(volume);
// osc2.connect(volume);

// // Connect GainNode to the speakers
// volume.connect(context.destination);

// // How long to play oscillator for (in seconds)
// var duration = 2;

// // When to start playing the oscillators
// var startTime = context.currentTime;

// // Start the oscillators
// osc1.start(startTime);
// osc2.start(startTime);

// // Stop the oscillators 2 seconds from now
// osc1.stop(startTime + duration);
// osc1.stop(startTime + duration);

// // var frequency = 493.883;
// var frequency = 15133.883;
// osc1.frequency.value = frequency;
// osc2.frequency.value = frequency;







// // Play oscillators at certain frequency and for a certain time

// function playNote (frequency, startTime, duration) {
//     var context = new AudioContext();
// var osc1 = context.createOscillator(),
//     osc2 = context.createOscillator(),
//     volume = context.createGain();

// // Set oscillator wave type
// osc1.type = 'triangle';
// osc2.type = 'triangle';
// volume.gain.value = 0.1;    

// // Set up node routing
// osc1.connect(volume);
// osc2.connect(volume);
// volume.connect(context.destination);

// // Detune oscillators for chorus effect
// osc1.frequency.value = frequency + 1;
// osc2.frequency.value = frequency - 2;

// // Fade out
// volume.gain.setValueAtTime(0.1, startTime + duration - 0.05);
// volume.gain.linearRampToValueAtTime(0, startTime + duration);

// // Start oscillators
// osc1.start(startTime);
// osc2.start(startTime);

// // Stop oscillators
// osc1.stop(startTime + duration);
// osc2.stop(startTime + duration);
// };

// playNote(500, 3, 10);