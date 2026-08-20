// Synthetic tactile sound effects generator using Web Audio API

class SoundManager {
  private ctx: AudioContext | null = null;
  public enabled: boolean = true;

  private initCtx() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  public playSnap() {
    if (!this.enabled || typeof window === "undefined") return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      // Sharp tactile "thud-click" resembling plastic LEGO stud snap
      osc.type = "sine";
      const now = this.ctx.currentTime;

      osc.frequency.setValueAtTime(480, now);
      osc.frequency.exponentialRampToValueAtTime(80, now + 0.04);

      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.05);

      // Add high frequency tactile snap click
      const oscHigh = this.ctx.createOscillator();
      const gainHigh = this.ctx.createGain();
      oscHigh.type = "triangle";
      oscHigh.frequency.setValueAtTime(2400, now);
      oscHigh.frequency.exponentialRampToValueAtTime(300, now + 0.02);

      gainHigh.gain.setValueAtTime(0.15, now);
      gainHigh.gain.exponentialRampToValueAtTime(0.001, now + 0.02);

      oscHigh.connect(gainHigh);
      gainHigh.connect(this.ctx.destination);

      oscHigh.start(now);
      oscHigh.stop(now + 0.02);
    } catch {
      // AudioContext might be restricted until user gesture
    }
  }

  public playClick() {
    if (!this.enabled || typeof window === "undefined") return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;

      osc.type = "triangle";
      osc.frequency.setValueAtTime(1200, now);
      osc.frequency.exponentialRampToValueAtTime(200, now + 0.025);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.025);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.025);
    } catch {
      // Ignore audio errors
    }
  }

  public playSuccess() {
    if (!this.enabled || typeof window === "undefined") return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        if (!this.ctx) return;
        const now = this.ctx.currentTime + idx * 0.07;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.2);
      });
    } catch {
      // Ignore audio errors
    }
  }
}

export const soundManager = new SoundManager();
