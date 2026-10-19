/**
 * Romantic Melody Synthesizer using Web Audio API
 * Generates soft, dreamy piano/harp notes and romantic chords
 * without needing external MP3 dependencies.
 */

class RomanticAudio {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private timeoutId: number | null = null;
  private noteIndex: number = 0;

  // Romantic Pentatonic/Major scale frequencies (Hz) for a sweet, emotional melody
  // Notes corresponding to C4, D4, E4, G4, A4, B4, C5, D5, E5, G5
  private melodyNotes: number[] = [
    261.63, 329.63, 392.00, 440.00, 523.25, 659.25,
    523.25, 440.00, 392.00, 329.63, 261.63, 293.66,
    329.63, 392.00, 523.25, 659.25, 783.99, 659.25,
    523.25, 392.00, 440.00, 392.00, 329.63, 261.63
  ];

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Play a single soft bell/piano tone
  public playTone(freq: number, duration: number = 2.0, volume: number = 0.08) {
    try {
      this.initContext();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      // Gentle envelope: soft attack, warm sustain, long decay
      gain.gain.setValueAtTime(0, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(volume, this.ctx.currentTime + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {
      // Audio playback might be restricted before interaction
    }
  }

  // Play a playful soft "boing/whoosh" when the No button runs away
  public playDodgeSound() {
    try {
      this.initContext();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      const now = this.ctx.currentTime;
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(640, now + 0.15);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.18);
    } catch {
      // Ignore audio error
    }
  }

  // Play celebratory chime chords when YES is clicked
  public playCelebrationChimes() {
    try {
      this.initContext();
      if (!this.ctx) return;

      const chord = [523.25, 659.25, 783.99, 1046.50]; // C Major arpeggio
      chord.forEach((freq, idx) => {
        setTimeout(() => {
          this.playTone(freq, 2.5, 0.12);
        }, idx * 120);
      });
    } catch {
      // Ignore
    }
  }

  // Toggle ambient romantic lullaby loop
  public toggleMusic(): boolean {
    if (this.isPlaying) {
      this.stopMusic();
      return false;
    } else {
      this.startMusic();
      return true;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public startMusic() {
    this.initContext();
    this.isPlaying = true;
    this.scheduleNextNote();
  }

  public stopMusic() {
    this.isPlaying = false;
    if (this.timeoutId !== null) {
      window.clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }

  private scheduleNextNote() {
    if (!this.isPlaying) return;

    const freq = this.melodyNotes[this.noteIndex % this.melodyNotes.length];
    this.playTone(freq, 2.2, 0.05);

    // Subtle bass harmony on every 4th note
    if (this.noteIndex % 4 === 0) {
      this.playTone(freq / 2, 3.0, 0.03);
    }

    this.noteIndex++;
    // Romantic rhythm interval between notes: ~750ms
    this.timeoutId = window.setTimeout(() => {
      this.scheduleNextNote();
    }, 750);
  }
}

export const romanticAudio = new RomanticAudio();
