import { useEffect } from "react";
/* eslint-disable react/prop-types */

const Typewriter = ({ dataType, dataPeriod }) => {
  useEffect(() => {
    class TxtType {
      constructor(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.isDeleting = false;
        this.tick();
      }

      tick() {
        const i = this.loopNum % this.toRotate.length; // Index of the current word
        const fullTxt = this.toRotate[i]; // The full word being processed
      
        if (this.isDeleting) {
          // Remove one character at a time during deletion
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          // Add one character at a time during typing
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
      
        // Update the HTML content of the element
        this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;
        let delta = 100;
        if (this.isDeleting) delta /= 2; // Faster when deleting
      
        // Check if the full word is typed or fully deleted
        if (!this.isDeleting && this.txt === fullTxt) {
          // Pause after typing the full word
          delta = this.period-200;
          this.isDeleting = true; // Start deleting
        } else if (this.isDeleting && this.txt === '') {
          // Move to the next word after deleting
          this.isDeleting = false;
          this.loopNum++; // Move to the next word
          delta = 500; // Small pause before typing the next word
        }
      
        // Schedule the next tick
        setTimeout(() => this.tick(), delta);
      }
      
    }

    const elements = document.getElementsByClassName("typewrite");
    for (let i = 0; i < elements.length; i++) {
      const toRotate = elements[i].getAttribute("data-type");
      const period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
  }, []);

  return (
    <h1
      className="typewrite"
      data-period={dataPeriod}
      data-type={dataType}
    >
      <span className="wrap"></span>
    </h1>
  );
};

export default Typewriter;
