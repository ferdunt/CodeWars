const MAX_PRIOR_SPELLS = 3;
class Wand {
  constructor(spells = {}) {
    this.casted = [];
    // 💬 Create each method from 'spells'
    Object.assign(this, spells);

    // 💬 Call a proxy to keep track of everything happening in the object
    return new Proxy(this, {
      get: (target, property) => {
        const value = target[property];
        if (typeof value === 'function') {
          target.casted.unshift(property);
        }
        return value;
      },
    });
  }

  // 💬 Push a new one
  prioriIncantatem() {
    return this.casted.slice(1, MAX_PRIOR_SPELLS + 1);
  }

  // 💬 Delete all and push 'deletrius'
  deletrius() {
    this.casted = ['deletrius'];
  }
}

// 💬 TESTING
const w = new Wand({
  alohomora: function () {
    console.log('unlocked!');
  },
  lumos: function () {
    console.log('let there be light!');
  },
  wingardiumLeviosa: function () {
    console.log('levitation!');
  },
});

w.wingardiumLeviosa(); // 🐣 'levitation!'
w.alohomora(); // 🐣  'unlocked!'
w.lumos(); // 🐣 'let there be light!'

w.prioriIncantatem();
