'use client';
import { useEffect } from 'react';

export default function PracticePage() {
  useEffect(() => {
      const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.1});
        document.querySelectorAll('.rv').forEach(el=>io.observe(el));
  }, []);

  return (
    <div className="p-practice">
        <div className="topbar">
          <div className="wrap">
            <a href="https://salaro.com/" className="brand">Sala<span>ro</span></a>
            <nav className="nav"><a href="https://salaro.com/practice" className="active">Practice</a><a href="https://salaro.com/work">Work</a><a href="https://salaro.com/studio">Studio</a><a href="https://salaro.com/writing">Writing</a><a href="https://salaro.com/contact">Contact</a></nav>
            <a href="tel:+447485222490" className="top-cta">Start a project</a>
          </div>
        </div>


        <header className="hero drifting-field">
          <div className="wrap">
            <div className="hero-inner">
              <div className="hero-copy">
                <div className="eyebrow lab a">Our identity</div>
                <div className="practice-hero-body">
                <h1 className="serif">
                  <span className="reveal-line"><span>Built by People.</span></span>
                  <span className="reveal-line"><span><span className="rust">Engineered</span> for</span></span>
                  <span className="reveal-line"><span>Performance.</span></span>
                </h1>
                <p className="sub">Behind every exceptional digital platform is a dedicated collective of strategists, developers, visual artists, and project directors working with a calm approach.</p>
                </div>
                <div className="practice-hero-details">
                  <div className="practice-hero-disciplines lab"><span>Strategy</span><span>Engineering</span><span>Design</span></div>
                </div>
              </div>
              <div className="hero-viz">
                <div className="viz-cap"><span className="lab a">Studio facts</span><span className="lab">UK-led · Pondicherry delivery</span></div>
                <div className="practice-globe-art" role="img" aria-label="Dotted globe connecting UK strategy and Pondicherry development">
                  <svg viewBox="0 0 680 380" aria-hidden="true">
                    <defs><radialGradient id="practiceSphere" cx="35%" cy="28%" r="75%"><stop stopColor="#fffdf8"/><stop offset="1" stopColor="#e7d8c3"/></radialGradient><linearGradient id="practiceOrbit"><stop stopColor="#b5c7b7"/><stop offset="1" stopColor="#b46a42"/></linearGradient></defs>
                    <ellipse cx="340" cy="190" rx="290" ry="95" transform="rotate(-17 340 190)" fill="none" stroke="url(#practiceOrbit)" strokeDasharray="3 7"/>
                    <circle cx="340" cy="190" r="166" fill="url(#practiceSphere)" stroke="#cdbba3"/>
                    <g fill="none" stroke="#cbbda9" strokeWidth=".65" opacity=".55"><ellipse cx="340" cy="190" rx="85" ry="166"/><ellipse cx="340" cy="190" rx="135" ry="166"/><ellipse cx="340" cy="190" rx="166" ry="54"/><ellipse cx="340" cy="190" rx="166" ry="115"/></g>
                    <path d="M287.9 325.6h.01 M294.9 326.7h.01 M302.1 327.6h.01 M280.8 320.3h.01 M287.8 321.5h.01 M294.9 322.6h.01 M302.1 323.5h.01 M309.4 324.3h.01 M275.0 314.8h.01 M281.8 316.1h.01 M288.8 317.3h.01 M295.9 318.3h.01 M303.2 319.2h.01 M310.5 319.9h.01 M481.4 276.8h.01 M277.0 310.6h.01 M283.9 311.8h.01 M290.9 313.0h.01 M298.1 313.9h.01 M305.4 314.7h.01 M312.8 315.4h.01 M320.2 315.9h.01 M350.3 316.3h.01 M484.0 271.8h.01 M486.1 268.7h.01 M273.2 305.0h.01 M280.1 306.3h.01 M287.1 307.4h.01 M294.2 308.5h.01 M301.5 309.3h.01 M308.8 310.1h.01 M316.2 310.6h.01 M346.3 311.4h.01 M353.8 311.1h.01 M488.8 262.9h.01 M264.0 297.8h.01 M270.7 299.3h.01 M277.5 300.6h.01 M284.5 301.8h.01 M291.6 302.9h.01 M298.8 303.8h.01 M306.1 304.6h.01 M313.5 305.2h.01 M320.9 305.7h.01 M351.0 306.0h.01 M358.5 305.7h.01 M262.5 292.1h.01 M269.2 293.6h.01 M276.0 295.0h.01 M283.0 296.2h.01 M290.1 297.2h.01 M297.3 298.2h.01 M304.6 299.0h.01 M312.0 299.6h.01 M319.4 300.1h.01 M326.9 300.4h.01 M349.5 300.5h.01 M357.0 300.3h.01 M262.2 286.4h.01 M268.9 287.9h.01 M275.7 289.3h.01 M282.7 290.5h.01 M289.8 291.5h.01 M297.0 292.4h.01 M304.3 293.2h.01 M311.7 293.9h.01 M319.1 294.3h.01 M326.6 294.7h.01 M334.2 294.9h.01 M356.7 294.5h.01 M179.3 230.6h.01 M263.1 280.8h.01 M269.8 282.2h.01 M276.6 283.5h.01 M283.6 284.7h.01 M290.8 285.7h.01 M298.0 286.6h.01 M305.3 287.4h.01 M312.7 288.0h.01 M320.2 288.5h.01 M327.7 288.8h.01 M335.2 288.9h.01 M177.5 222.6h.01 M178.6 225.7h.01 M180.1 228.9h.01 M265.1 275.2h.01 M271.8 276.6h.01 M278.7 277.8h.01 M285.8 278.9h.01 M293.0 279.9h.01 M300.2 280.8h.01 M307.6 281.5h.01 M315.0 282.0h.01 M322.5 282.4h.01 M330.0 282.7h.01 M498.7 230.9h.01 M502.9 221.5h.01 M176.1 214.9h.01 M177.2 218.0h.01 M178.6 221.1h.01 M261.6 268.1h.01 M268.3 269.6h.01 M275.1 270.9h.01 M282.1 272.1h.01 M289.2 273.1h.01 M296.4 274.0h.01 M303.7 274.8h.01 M311.1 275.4h.01 M318.6 275.9h.01 M326.1 276.2h.01 M490.5 235.4h.01 M174.7 204.2h.01 M175.3 207.4h.01 M176.3 210.6h.01 M259.3 261.1h.01 M265.9 262.6h.01 M272.7 263.9h.01 M279.7 265.2h.01 M286.7 266.3h.01 M293.9 267.2h.01 M301.2 268.0h.01 M308.6 268.7h.01 M316.0 269.2h.01 M323.5 269.6h.01 M331.0 269.9h.01 M486.3 232.8h.01 M501.8 214.9h.01 M503.2 211.8h.01 M251.7 252.5h.01 M258.1 254.2h.01 M264.8 255.7h.01 M271.6 257.0h.01 M278.5 258.3h.01 M285.5 259.4h.01 M292.7 260.4h.01 M300.0 261.2h.01 M307.3 261.9h.01 M314.7 262.5h.01 M322.2 262.9h.01 M329.7 263.2h.01 M337.2 263.3h.01 M482.1 229.4h.01 M485.8 226.7h.01 M495.2 218.0h.01 M497.7 215.0h.01 M499.9 211.9h.01 M503.3 205.7h.01 M251.7 245.7h.01 M258.2 247.3h.01 M264.8 248.8h.01 M271.6 250.2h.01 M278.5 251.5h.01 M285.6 252.6h.01 M292.8 253.6h.01 M300.0 254.4h.01 M307.4 255.1h.01 M314.8 255.6h.01 M322.3 256.1h.01 M329.8 256.3h.01 M337.3 256.4h.01 M344.8 256.4h.01 M482.1 222.6h.01 M485.8 219.8h.01 M495.2 211.1h.01 M497.7 208.1h.01 M499.9 205.1h.01 M252.9 239.0h.01 M259.4 240.6h.01 M266.0 242.1h.01 M272.9 243.5h.01 M279.8 244.7h.01 M286.9 245.8h.01 M294.1 246.7h.01 M301.4 247.6h.01 M308.7 248.2h.01 M316.2 248.8h.01 M323.6 249.1h.01 M331.1 249.4h.01 M338.7 249.5h.01 M346.2 249.4h.01 M353.7 249.2h.01 M482.7 215.0h.01 M497.9 200.5h.01 M500.0 197.5h.01 M210.3 215.7h.01 M215.1 218.2h.01 M220.1 220.6h.01 M225.4 222.8h.01 M230.9 225.0h.01 M236.7 227.0h.01 M242.7 229.0h.01 M248.9 230.8h.01 M255.2 232.5h.01 M261.8 234.1h.01 M268.5 235.5h.01 M275.4 236.8h.01 M282.3 238.0h.01 M289.5 239.0h.01 M296.7 240.0h.01 M304.0 240.7h.01 M311.4 241.3h.01 M318.8 241.8h.01 M326.3 242.2h.01 M333.8 242.3h.01 M341.4 242.4h.01 M348.9 242.3h.01 M356.4 242.1h.01 M479.9 209.6h.01 M504.1 179.7h.01 M208.4 207.2h.01 M213.0 209.7h.01 M217.9 212.1h.01 M223.1 214.5h.01 M228.5 216.7h.01 M234.1 218.8h.01 M240.0 220.8h.01 M246.0 222.7h.01 M252.3 224.4h.01 M258.7 226.1h.01 M265.4 227.6h.01 M272.2 229.0h.01 M279.1 230.2h.01 M286.1 231.3h.01 M293.3 232.3h.01 M300.6 233.2h.01 M307.9 233.9h.01 M315.3 234.4h.01 M322.8 234.8h.01 M330.3 235.1h.01 M337.8 235.2h.01 M345.4 235.2h.01 M352.9 235.0h.01 M360.4 234.7h.01 M436.6 221.9h.01 M442.6 220.0h.01 M477.7 203.5h.01 M501.8 176.9h.01 M502.8 173.7h.01 M203.2 196.3h.01 M207.4 199.0h.01 M211.9 201.5h.01 M216.7 204.0h.01 M221.8 206.3h.01 M227.0 208.6h.01 M232.6 210.8h.01 M238.3 212.8h.01 M244.3 214.7h.01 M250.5 216.6h.01 M256.9 218.2h.01 M263.5 219.8h.01 M270.2 221.2h.01 M277.1 222.5h.01 M284.1 223.7h.01 M291.2 224.7h.01 M298.4 225.6h.01 M305.8 226.4h.01 M313.2 227.0h.01 M320.6 227.4h.01 M328.1 227.7h.01 M335.6 227.9h.01 M365.7 227.0h.01 M434.7 215.0h.01 M476.1 196.7h.01 M483.7 191.3h.01 M487.1 188.4h.01 M501.4 167.1h.01 M203.3 188.3h.01 M207.4 191.0h.01 M211.8 193.6h.01 M216.5 196.1h.01 M221.4 198.5h.01 M226.6 200.8h.01 M232.1 203.0h.01 M237.8 205.0h.01 M243.7 207.0h.01 M249.9 208.9h.01 M256.2 210.6h.01 M262.7 212.2h.01 M269.4 213.6h.01 M276.2 215.0h.01 M283.2 216.2h.01 M290.3 217.2h.01 M297.6 218.1h.01 M304.9 218.9h.01 M312.3 219.5h.01 M319.7 220.0h.01 M327.2 220.3h.01 M334.7 220.5h.01 M349.8 220.4h.01 M357.3 220.1h.01 M427.6 209.6h.01 M433.8 207.8h.01 M475.1 189.4h.01 M479.0 186.7h.01 M482.7 183.9h.01 M486.0 181.1h.01 M208.2 183.4h.01 M212.5 186.0h.01 M217.1 188.5h.01 M222.0 190.9h.01 M227.2 193.2h.01 M232.6 195.4h.01 M238.3 197.5h.01 M244.2 199.5h.01 M250.3 201.4h.01 M256.6 203.1h.01 M263.1 204.7h.01 M269.8 206.2h.01 M276.6 207.5h.01 M283.6 208.7h.01 M290.7 209.8h.01 M297.9 210.7h.01 M305.2 211.5h.01 M312.6 212.1h.01 M320.1 212.6h.01 M327.6 212.9h.01 M342.6 213.1h.01 M350.1 213.0h.01 M357.6 212.7h.01 M365.1 212.3h.01 M372.5 211.7h.01 M427.8 201.9h.01 M433.9 200.1h.01 M439.9 198.1h.01 M466.1 186.8h.01 M470.5 184.2h.01 M474.7 181.5h.01 M478.5 178.8h.01 M482.0 176.0h.01 M496.2 157.9h.01 M209.7 176.1h.01 M214.1 178.7h.01 M218.7 181.2h.01 M223.6 183.6h.01 M228.7 186.0h.01 M234.1 188.2h.01 M239.8 190.3h.01 M245.7 192.3h.01 M251.8 194.1h.01 M258.1 195.8h.01 M264.6 197.4h.01 M271.3 198.9h.01 M278.2 200.2h.01 M285.2 201.4h.01 M292.3 202.5h.01 M299.5 203.4h.01 M306.8 204.1h.01 M314.2 204.7h.01 M321.7 205.2h.01 M344.2 205.6h.01 M351.8 205.4h.01 M359.3 205.1h.01 M366.7 204.7h.01 M374.1 204.0h.01 M381.4 203.3h.01 M422.7 195.6h.01 M429.0 193.9h.01 M435.1 192.0h.01 M440.9 190.0h.01 M446.6 187.9h.01 M466.5 178.4h.01 M470.8 175.8h.01 M474.8 173.1h.01 M478.4 170.3h.01 M484.8 164.5h.01 M212.1 169.2h.01 M216.4 171.8h.01 M221.1 174.3h.01 M226.0 176.7h.01 M231.2 179.0h.01 M236.6 181.2h.01 M242.3 183.3h.01 M248.2 185.3h.01 M254.4 187.1h.01 M260.7 188.8h.01 M267.3 190.4h.01 M274.0 191.8h.01 M280.9 193.1h.01 M287.9 194.3h.01 M295.1 195.3h.01 M302.3 196.1h.01 M309.7 196.8h.01 M317.1 197.4h.01 M324.5 197.8h.01 M339.6 198.1h.01 M347.1 198.0h.01 M354.6 197.8h.01 M362.1 197.4h.01 M369.5 196.9h.01 M376.9 196.2h.01 M384.2 195.4h.01 M412.0 190.5h.01 M418.5 189.0h.01 M424.9 187.3h.01 M431.1 185.5h.01 M437.1 183.5h.01 M442.8 181.4h.01 M448.3 179.3h.01 M453.5 177.0h.01 M458.4 174.6h.01 M463.1 172.1h.01 M467.4 169.5h.01 M471.5 166.8h.01 M475.2 164.0h.01 M478.6 161.2h.01 M481.7 158.3h.01 M484.5 155.3h.01 M215.2 162.6h.01 M219.6 165.2h.01 M224.3 167.7h.01 M229.3 170.1h.01 M234.5 172.4h.01 M240.0 174.5h.01 M245.8 176.6h.01 M251.8 178.5h.01 M258.0 180.3h.01 M264.4 182.0h.01 M271.0 183.5h.01 M277.8 184.9h.01 M284.7 186.1h.01 M291.8 187.2h.01 M299.0 188.2h.01 M306.3 189.0h.01 M313.7 189.6h.01 M321.1 190.1h.01 M328.6 190.4h.01 M336.2 190.6h.01 M343.7 190.6h.01 M351.2 190.4h.01 M358.7 190.1h.01 M373.5 189.0h.01 M408.8 183.5h.01 M415.4 182.0h.01 M421.9 180.4h.01 M428.1 178.6h.01 M434.1 176.6h.01 M439.9 174.6h.01 M445.4 172.4h.01 M450.6 170.1h.01 M455.6 167.8h.01 M460.3 165.3h.01 M464.7 162.7h.01 M468.7 160.0h.01 M472.5 157.2h.01 M475.9 154.4h.01 M479.0 151.5h.01 M481.7 148.5h.01 M484.1 145.5h.01 M486.1 142.4h.01 M219.2 156.4h.01 M223.6 159.0h.01 M228.4 161.4h.01 M233.5 163.8h.01 M238.8 166.0h.01 M244.4 168.2h.01 M250.3 170.2h.01 M256.4 172.0h.01 M262.7 173.8h.01 M269.2 175.4h.01 M275.9 176.8h.01 M282.7 178.2h.01 M289.8 179.3h.01 M296.9 180.3h.01 M304.2 181.2h.01 M311.5 181.9h.01 M326.4 182.8h.01 M333.9 183.0h.01 M341.5 183.0h.01 M349.0 182.9h.01 M356.5 182.7h.01 M371.4 181.6h.01 M378.7 180.9h.01 M385.9 180.0h.01 M393.0 178.9h.01 M399.9 177.7h.01 M406.7 176.3h.01 M413.4 174.8h.01 M419.8 173.1h.01 M426.0 171.3h.01 M432.0 169.4h.01 M437.8 167.4h.01 M443.3 165.2h.01 M448.5 162.9h.01 M453.5 160.5h.01 M458.1 158.0h.01 M462.5 155.4h.01 M466.5 152.7h.01 M470.2 149.9h.01 M473.6 147.1h.01 M476.6 144.2h.01 M479.2 141.2h.01 M481.5 138.2h.01 M483.4 135.1h.01 M228.5 153.1h.01 M233.4 155.5h.01 M238.6 157.8h.01 M244.1 160.0h.01 M249.8 162.1h.01 M255.8 164.0h.01 M262.0 165.8h.01 M268.4 167.5h.01 M275.1 169.0h.01 M281.9 170.3h.01 M288.8 171.6h.01 M295.9 172.6h.01 M303.2 173.5h.01 M310.5 174.2h.01 M317.9 174.8h.01 M325.4 175.2h.01 M332.9 175.5h.01 M340.4 175.5h.01 M347.9 175.4h.01 M355.4 175.2h.01 M362.9 174.8h.01 M370.3 174.2h.01 M377.6 173.4h.01 M384.8 172.5h.01 M391.9 171.4h.01 M398.9 170.2h.01 M405.7 168.8h.01 M412.3 167.3h.01 M418.7 165.6h.01 M424.9 163.8h.01 M430.8 161.9h.01 M436.6 159.8h.01 M442.0 157.6h.01 M447.2 155.3h.01 M452.0 152.8h.01 M456.6 150.3h.01 M460.8 147.7h.01 M464.8 145.0h.01 M468.3 142.2h.01 M471.5 139.3h.01 M474.4 136.3h.01 M476.9 133.3h.01 M479.0 130.3h.01 M480.7 127.2h.01 M234.2 147.6h.01 M239.3 149.9h.01 M244.6 152.2h.01 M250.3 154.3h.01 M256.2 156.3h.01 M262.3 158.1h.01 M268.7 159.8h.01 M325.5 167.7h.01 M333.0 168.0h.01 M340.5 168.0h.01 M348.0 167.9h.01 M355.5 167.7h.01 M363.0 167.2h.01 M370.4 166.6h.01 M377.7 165.9h.01 M384.9 164.9h.01 M392.0 163.8h.01 M398.9 162.6h.01 M405.6 161.1h.01 M412.2 159.6h.01 M418.5 157.9h.01 M424.6 156.0h.01 M430.5 154.0h.01 M436.1 151.9h.01 M441.4 149.6h.01 M446.5 147.3h.01 M451.2 144.8h.01 M455.6 142.2h.01 M459.7 139.5h.01 M463.4 136.8h.01 M466.8 133.9h.01 M469.8 131.0h.01 M472.4 128.0h.01 M474.6 125.0h.01 M476.5 121.9h.01 M479.8 109.2h.01 M240.8 142.4h.01 M246.1 144.6h.01 M251.7 146.8h.01 M257.5 148.8h.01 M263.6 150.6h.01 M319.2 159.9h.01 M326.7 160.3h.01 M334.2 160.6h.01 M341.7 160.6h.01 M349.2 160.5h.01 M356.7 160.2h.01 M364.2 159.7h.01 M371.6 159.0h.01 M378.8 158.2h.01 M386.0 157.2h.01 M393.0 156.0h.01 M399.8 154.7h.01 M406.5 153.2h.01 M413.0 151.6h.01 M419.2 149.8h.01 M425.2 147.9h.01 M430.9 145.8h.01 M436.4 143.6h.01 M441.5 141.3h.01 M446.4 138.9h.01 M450.9 136.3h.01 M455.0 133.7h.01 M458.8 130.9h.01 M462.3 128.1h.01 M465.4 125.2h.01 M468.0 122.2h.01 M470.3 119.2h.01 M472.2 116.1h.01 M475.4 106.6h.01 M475.5 100.3h.01 M474.9 97.1h.01 M243.1 135.2h.01 M248.4 137.5h.01 M278.7 146.8h.01 M299.5 150.5h.01 M306.7 151.4h.01 M314.1 152.1h.01 M321.5 152.7h.01 M329.0 153.0h.01 M336.5 153.2h.01 M344.0 153.2h.01 M351.5 153.0h.01 M373.8 151.4h.01 M381.0 150.4h.01 M388.1 149.4h.01 M395.0 148.1h.01 M401.7 146.7h.01 M408.3 145.1h.01 M414.6 143.4h.01 M420.7 141.5h.01 M426.5 139.5h.01 M432.0 137.3h.01 M437.2 135.0h.01 M442.1 132.6h.01 M446.7 130.1h.01 M450.9 127.4h.01 M454.7 124.7h.01 M458.2 121.9h.01 M461.2 118.9h.01 M463.9 116.0h.01 M466.2 112.9h.01 M470.1 90.9h.01 M246.2 128.3h.01 M251.5 130.6h.01 M288.6 141.3h.01 M295.6 142.5h.01 M310.0 144.4h.01 M317.3 145.1h.01 M324.8 145.5h.01 M332.3 145.8h.01 M339.8 145.9h.01 M347.4 145.8h.01 M354.9 145.5h.01 M369.7 144.4h.01 M376.9 143.6h.01 M384.1 142.6h.01 M391.1 141.4h.01 M397.8 140.0h.01 M404.4 138.5h.01 M410.8 136.8h.01 M416.9 134.9h.01 M422.8 132.9h.01 M428.3 130.7h.01 M433.5 128.4h.01 M438.4 126.0h.01 M443.0 123.5h.01 M447.2 120.8h.01 M451.0 118.1h.01 M454.4 115.2h.01 M457.4 112.3h.01 M460.0 109.3h.01 M462.1 106.3h.01 M463.9 103.2h.01 M465.1 100.1h.01 M466.0 96.9h.01 M464.9 84.2h.01 M245.2 119.4h.01 M250.1 121.9h.01 M255.3 124.1h.01 M260.8 126.3h.01 M279.2 131.8h.01 M292.7 134.7h.01 M299.7 135.8h.01 M306.9 136.8h.01 M344.2 138.7h.01 M366.6 137.5h.01 M373.8 136.7h.01 M381.0 135.7h.01 M388.0 134.5h.01 M394.8 133.2h.01 M401.5 131.6h.01 M407.8 129.9h.01 M413.9 128.1h.01 M419.8 126.1h.01 M425.3 123.9h.01 M430.5 121.6h.01 M435.3 119.2h.01 M439.8 116.6h.01 M443.9 113.9h.01 M447.6 111.2h.01 M450.9 108.3h.01 M453.7 105.4h.01 M456.1 102.3h.01 M458.1 99.3h.01 M459.6 96.1h.01 M460.7 93.0h.01 M461.3 89.8h.01 M461.4 86.6h.01 M459.0 77.2h.01 M234.1 62.4h.01 M231.2 65.3h.01 M228.8 68.3h.01 M226.9 71.4h.01 M265.5 120.2h.01 M271.4 122.1h.01 M277.6 123.9h.01 M290.8 127.0h.01 M297.7 128.2h.01 M304.9 129.3h.01 M312.1 130.2h.01 M334.4 131.5h.01 M342.0 131.6h.01 M349.5 131.4h.01 M364.4 130.5h.01 M371.7 129.7h.01 M378.9 128.8h.01 M385.9 127.6h.01 M392.7 126.3h.01 M399.3 124.7h.01 M405.6 123.0h.01 M411.7 121.1h.01 M417.5 119.1h.01 M422.9 116.9h.01 M428.0 114.5h.01 M432.7 112.1h.01 M437.1 109.5h.01 M441.0 106.7h.01 M444.5 103.9h.01 M447.6 101.0h.01 M450.2 98.0h.01 M452.3 95.0h.01 M454.0 91.9h.01 M455.2 88.7h.01 M455.9 85.6h.01 M456.1 82.4h.01 M455.9 79.2h.01 M241.1 56.9h.01 M238.0 59.7h.01 M235.3 62.7h.01 M230.2 72.0h.01 M259.8 110.1h.01 M265.2 112.3h.01 M270.9 114.4h.01 M276.9 116.3h.01 M283.2 118.0h.01 M289.8 119.5h.01 M296.7 120.9h.01 M303.7 122.0h.01 M310.9 123.0h.01 M318.2 123.7h.01 M325.6 124.2h.01 M333.1 124.5h.01 M340.7 124.6h.01 M348.2 124.5h.01 M355.7 124.1h.01 M363.1 123.6h.01 M370.4 122.8h.01 M377.6 121.8h.01 M384.6 120.6h.01 M391.3 119.3h.01 M397.9 117.7h.01 M404.2 115.9h.01 M410.2 114.0h.01 M415.8 111.9h.01 M421.1 109.6h.01 M426.1 107.2h.01 M430.6 104.7h.01 M434.7 102.0h.01 M438.4 99.3h.01 M441.6 96.4h.01 M444.3 93.4h.01 M446.6 90.4h.01 M448.4 87.3h.01 M449.6 84.1h.01 M450.4 81.0h.01 M450.6 77.8h.01 M450.4 74.6h.01 M248.4 51.8h.01 M244.9 54.6h.01 M242.0 57.6h.01 M239.6 60.6h.01 M237.7 63.7h.01 M236.3 66.8h.01 M265.7 104.7h.01 M277.0 108.9h.01 M283.2 110.7h.01 M289.7 112.3h.01 M296.4 113.7h.01 M303.4 115.0h.01 M310.5 116.0h.01 M317.8 116.8h.01 M325.2 117.3h.01 M332.7 117.6h.01 M340.3 117.8h.01 M347.8 117.6h.01 M355.3 117.3h.01 M362.7 116.7h.01 M370.0 115.9h.01 M377.1 114.9h.01 M384.0 113.7h.01 M390.8 112.2h.01 M397.2 110.6h.01 M403.4 108.7h.01 M409.2 106.7h.01 M414.7 104.5h.01 M419.8 102.2h.01 M424.5 99.7h.01 M428.7 97.1h.01 M432.5 94.3h.01 M435.8 91.5h.01 M438.6 88.5h.01 M440.9 85.5h.01 M442.7 82.4h.01 M444.0 79.3h.01 M444.7 76.1h.01 M444.9 72.9h.01 M444.6 69.7h.01 M260.0 44.6h.01 M252.1 50.0h.01 M248.9 52.9h.01 M246.2 55.9h.01 M244.1 58.9h.01 M242.5 62.0h.01 M272.2 99.7h.01 M284.0 103.7h.01 M290.3 105.4h.01 M297.0 106.9h.01 M303.9 108.2h.01 M311.0 109.2h.01 M318.3 110.0h.01 M325.7 110.6h.01 M333.2 110.9h.01 M340.7 111.0h.01 M348.2 110.9h.01 M355.7 110.5h.01 M363.1 109.9h.01 M370.3 109.0h.01 M377.4 107.9h.01 M384.3 106.6h.01 M390.9 105.1h.01 M397.2 103.4h.01 M403.1 101.4h.01 M408.8 99.3h.01 M414.0 97.0h.01 M418.8 94.5h.01 M423.1 91.9h.01 M426.9 89.2h.01 M430.3 86.4h.01 M433.1 83.4h.01 M435.4 80.4h.01 M437.1 77.3h.01 M438.3 74.1h.01 M438.9 71.0h.01 M438.9 67.8h.01 M438.4 64.6h.01 M437.3 61.5h.01 M255.9 48.7h.01 M253.0 51.6h.01 M250.7 54.6h.01 M274.0 92.9h.01 M312.2 102.7h.01 M319.5 103.5h.01 M326.9 104.1h.01 M334.4 104.4h.01 M341.9 104.5h.01 M349.4 104.3h.01 M356.9 103.8h.01 M364.2 103.1h.01 M371.4 102.2h.01 M378.4 101.0h.01 M385.1 99.6h.01 M391.5 97.9h.01 M397.6 96.0h.01 M403.3 94.0h.01 M408.6 91.7h.01 M413.5 89.3h.01 M417.8 86.7h.01 M421.7 83.9h.01 M425.0 81.1h.01 M427.7 78.1h.01 M429.9 75.0h.01 M431.5 71.9h.01 M432.5 68.8h.01 M432.8 65.6h.01 M432.6 62.4h.01 M422.4 47.2h.01 M263.1 44.9h.01 M259.9 47.8h.01 M257.4 50.8h.01 M300.2 94.0h.01 M314.1 96.5h.01 M321.4 97.3h.01 M328.8 97.8h.01 M336.3 98.1h.01 M343.9 98.1h.01 M351.4 97.8h.01 M358.8 97.3h.01 M366.1 96.4h.01 M373.1 95.3h.01 M380.0 94.0h.01 M386.5 92.4h.01 M392.6 90.6h.01 M398.4 88.5h.01 M403.7 86.3h.01 M408.6 83.9h.01 M412.9 81.2h.01 M416.7 78.5h.01 M419.9 75.6h.01 M422.5 72.6h.01 M424.4 69.5h.01 M425.7 66.4h.01 M426.4 63.2h.01 M426.4 60.1h.01 M425.8 56.9h.01 M416.8 44.8h.01 M289.7 31.9h.01 M270.4 41.5h.01 M267.0 44.4h.01 M260.1 59.9h.01 M296.3 86.5h.01 M302.8 88.1h.01 M316.7 90.5h.01 M324.0 91.3h.01 M331.5 91.8h.01 M339.0 92.0h.01 M346.5 91.8h.01 M354.0 91.4h.01 M361.3 90.7h.01 M368.5 89.7h.01 M375.4 88.5h.01 M382.0 86.9h.01 M388.2 85.1h.01 M394.0 83.1h.01 M399.3 80.8h.01 M404.1 78.4h.01 M408.3 75.8h.01 M411.9 73.0h.01 M414.9 70.0h.01 M417.2 67.0h.01 M418.8 63.9h.01 M419.7 60.7h.01 M420.0 57.6h.01 M419.5 54.4h.01 M418.3 51.2h.01 M416.4 48.2h.01 M413.8 45.2h.01 M410.6 42.3h.01 M406.8 39.6h.01 M402.3 37.0h.01 M304.8 27.8h.01 M298.4 29.5h.01 M292.5 31.4h.01 M287.0 33.6h.01 M282.1 36.0h.01 M271.2 44.4h.01 M266.8 53.7h.01 M266.8 56.9h.01 M274.7 69.1h.01 M306.0 82.4h.01 M319.9 84.8h.01 M327.3 85.5h.01 M334.7 85.9h.01 M342.3 86.0h.01 M349.8 85.7h.01 M357.2 85.1h.01 M364.4 84.2h.01 M371.4 83.0h.01 M378.0 81.5h.01 M384.2 79.7h.01 M390.0 77.7h.01 M395.2 75.4h.01 M399.9 72.9h.01 M403.9 70.2h.01 M407.2 67.3h.01 M409.9 64.4h.01 M411.8 61.3h.01 M412.9 58.1h.01 M413.3 54.9h.01 M412.9 51.8h.01 M411.7 48.6h.01 M409.8 45.6h.01 M407.1 42.6h.01 M403.8 39.7h.01 M399.7 37.0h.01 M395.0 34.6h.01 M378.6 29.3h.01 M365.5 26.2h.01 M358.3 25.1h.01 M351.0 24.4h.01 M343.5 24.1h.01 M336.0 24.1h.01 M328.5 24.5h.01 M321.2 25.2h.01 M314.1 26.3h.01 M307.3 27.7h.01 M301.0 29.4h.01 M295.2 31.4h.01 M289.9 33.7h.01 M278.2 41.8h.01 M275.8 44.8h.01 M273.6 51.1h.01 M273.7 54.3h.01 M274.7 57.4h.01 M309.7 77.1h.01 M316.5 78.4h.01 M323.7 79.4h.01 M346.1 80.1h.01 M353.6 79.6h.01 M360.9 78.8h.01 M367.9 77.6h.01 M374.5 76.1h.01 M380.7 74.3h.01 M386.4 72.2h.01 M391.5 69.9h.01 M395.9 67.3h.01 M399.6 64.6h.01 M402.5 61.6h.01 M404.7 58.6h.01 M406.0 55.4h.01 M406.5 52.3h.01 M406.1 49.1h.01 M404.8 46.0h.01 M402.8 42.9h.01 M399.9 40.0h.01 M396.2 37.2h.01 M391.9 34.6h.01 M386.8 32.2h.01 M360.6 26.0h.01 M353.4 25.0h.01 M345.9 24.5h.01 M330.9 24.7h.01 M323.6 25.4h.01 M297.9 31.8h.01 M285.3 39.7h.01 M280.5 48.9h.01 M280.8 52.1h.01 M282.1 55.2h.01 M284.2 58.3h.01 M320.8 73.3h.01 M328.0 74.2h.01 M377.6 69.0h.01 M383.1 66.9h.01 M387.9 64.4h.01 M392.0 61.8h.01 M395.2 58.9h.01 M397.6 55.9h.01 M399.0 52.7h.01 M399.5 49.6h.01 M399.0 46.4h.01 M397.6 43.3h.01 M395.3 40.2h.01 M392.0 37.4h.01 M388.0 34.7h.01 M383.2 32.2h.01 M325.9 25.9h.01 M318.8 27.0h.01 M312.1 28.5h.01 M306.1 30.4h.01 M300.7 32.6h.01 M296.1 35.1h.01 M287.6 47.2h.01 M288.1 50.3h.01 M289.7 53.4h.01 M292.3 56.4h.01 M368.8 65.7h.01 M374.8 63.8h.01 M380.0 61.5h.01 M384.5 59.0h.01 M388.0 56.1h.01 M390.5 53.2h.01 M392.0 50.0h.01 M392.4 46.9h.01 M391.7 43.7h.01 M390.0 40.6h.01 M328.1 26.8h.01 M295.2 42.6h.01 M294.8 45.8h.01 M295.7 49.0h.01 M297.7 52.0h.01 M372.2 58.7h.01 M377.0 56.2h.01 M380.8 53.5h.01 M311.4 33.0h.01 M304.0 38.5h.01 M302.4 41.6h.01 M302.2 44.8h.01 M303.6 47.9h.01 M373.7 50.9h.01 M314.4 35.1h.01 M309.6 41.0h.01 M309.9 44.2h.01 M312.0 47.3h.01 M327.5 53.9h.01 M321.9 34.9h.01 M318.3 37.7h.01 M316.9 40.8h.01 M318.0 43.9h.01" fill="none" stroke="#657d60" strokeWidth="2.6" strokeLinecap="round"/>
                    <ellipse className="practice-globe-orbit" cx="340" cy="190" rx="274" ry="112" transform="rotate(-17 340 190)" fill="none" stroke="#b77c51" strokeWidth="1.1" strokeDasharray="35 12 3 12"/>
                    <path d="M269.7 105.2 Q340 36 439.5 213.1" fill="none" stroke="#b16a43" strokeWidth="2"/>
                    <path className="practice-globe-signal" d="M269.7 105.2 Q340 36 439.5 213.1" pathLength="100" fill="none" stroke="#fffdf4" strokeWidth="4" strokeLinecap="round"/>
                    <g fill="#8b3c22" stroke="#fff9ed" strokeWidth="2"><circle cx="269.7" cy="105.2" r="6"/><circle cx="439.5" cy="213.1" r="6"/></g>
                    <g fill="none" stroke="#b46a42"><circle className="practice-globe-ring" cx="269.7" cy="105.2" r="12"/><circle className="practice-globe-ring" cx="439.5" cy="213.1" r="12"/><path d="M269.7 105.2 L170 80 H25 M439.5 213.1 L520 245 H655"/></g>
                    <g fill="#382d25" fontSize="15" fontWeight="600"><text x="25" y="69">UK</text><text x="525" y="235">Pondicherry</text></g><g fill="#756657" fontSize="11"><text x="25" y="95">Strategy &amp; leadership</text><text x="525" y="261" fontSize="10">Development &amp; delivery</text></g>
                    <g stroke="#b99a79" strokeWidth="1.2"><path d="M110 280v14m-7-7h14M570 65v14m-7-7h14M460 345v12m-6-6h12"/></g>
                  </svg>
                </div>
                <div className="practice-proof-grid">
                  <div><b className="serif">1995</b><span>Building for the web since</span></div>
                  <div><b className="serif">~1,000</b><span>Client sites delivered by our team</span></div>
                  <div><b className="serif">UK + India</b><span>Lead in the UK, delivery in Pondicherry</span></div>
                  <div><b className="serif">Direct</b><span>Work with the founder, not an account manager</span></div>
                </div>
              </div>
            </div>
            <a href="#s01" className="scroll"><span className="lab">Scroll for more</span><span className="chev"></span></a>
          </div>
        </header>

        <div className="signal-line"></div>

        <section className="row contour-drift client-delivery" id="s01">
          <div className="wrap"><div className="grid">
            <div className="rowhead rv">
              <div className="num lab a">(01)</div>
              <h2 className="serif">We approach technical delivery with <span className="rust">absolute precision</span>.</h2>
            </div>
            <div className="content rv">
              <p>We firmly believe that impactful software engineering is rooted in authentic relationships. To us, technology should always be accompanied by intuitive, responsive, and collaborative client service.</p>
              <p>We shape bespoke digital ecosystems around your goals, combining practical technical delivery with resilient foundations that are built to last.</p>
              <div className="client-visual"><div className="lab a">From your goals to delivery</div><ol className="client-flow">{[['01','Understand','Your goals'],['02','Plan','Clear direction'],['03','Build','Reliable foundations'],['04','Deliver','Ongoing collaboration']].map(([n,t,d])=><li key={n}><span className="client-node">{n}</span><strong>{t}</strong><small>{d}</small></li>)}</ol></div>
            </div>
          </div></div>
        </section>


        <section className="row client-history">
          <div className="wrap"><div className="grid">
            <div className="rowhead rv">
              <div className="num lab a">(02)</div>
              <h2 className="serif">Practising since <span className="rust">1995</span></h2>
              <div className="client-history-line"><div><b>1995</b><small>Our beginnings</small></div><span aria-hidden="true"/><div><b>Today</b><small>Modern digital delivery</small></div></div>
              <div className="history-evolution" aria-hidden="true">
                <svg viewBox="0 0 480 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g className="evolution-stage evolution-old" stroke="currentColor" strokeWidth="1.5"><rect x="12" y="18" width="102" height="72" rx="5"/><rect x="20" y="26" width="86" height="52" rx="2"/><path d="M63 90v12m-23 0h46M29 38h58M29 47h42M29 56h51M29 65h30"/><circle cx="63" cy="84" r="1.5"/></g>
                  <path className="evolution-wire" d="M114 54H181M310 54H389" stroke="#bca68e" strokeWidth="1.3" strokeDasharray="3 5"/>
                  <path className="evolution-signal" d="M114 54H181M310 54H389" stroke="#a65a36" strokeWidth="2" strokeLinecap="round"/>
                  <g className="evolution-stage evolution-web" stroke="currentColor" strokeWidth="1.5"><rect x="181" y="10" width="129" height="88" rx="6"/><path d="M181 26h129M194 19h2m6 0h2m6 0h2"/><rect x="192" y="36" width="47" height="49" rx="2"/><path d="M249 39h48m-48 10h37m-37 10h44m-44 10h27"/><rect x="249" y="77" width="29" height="8" rx="3"/></g>
                  <g className="evolution-stage evolution-mobile" stroke="currentColor" strokeWidth="1.5"><rect x="389" y="5" width="57" height="103" rx="9"/><path d="M409 13h17M407 100h21"/><rect x="397" y="23" width="41" height="31" rx="3"/><path d="M398 64h39m-39 8h30m-30 8h35"/><rect x="398" y="86" width="24" height="7" rx="3"/></g>
                </svg>
                <div className="evolution-labels"><span>Early web</span><span>Modern platforms</span><span>Connected experiences</span></div>
              </div>
            </div>
            <div className="content rv">
              <p>Salaro has been building thoughtful digital products since 1995, working with clients who need clarity, quality, and a calm approach to change. Our background in design and digital delivery gives us a strong grounding in both product thinking and practical implementation.</p>
              <p>We specialise in modernising legacy frameworks into fluid, high-conversion web experiences, intuitive content systems, custom e-commerce products, and cohesive digital identities. Our work is guided by UK-led strategy supported by an international development team.</p>
              <div className="caps">
                <div className="lab">Cross-industry capabilities span</div>
                <div className="cap-tags">
                  <span>Finance</span><span>Hospitality</span><span>Premium Retail</span><span>Manufacturing</span><span>Corporate Services</span>
                </div>
              </div>
            </div>
          </div></div>
        </section>


        <section className="row client-global">
          <div className="wrap"><div className="grid">
            <div className="rowhead rv">
              <div className="num lab a">(03)</div>
              <h2 className="serif">Global Capability. <span className="rust">Uninterrupted</span> Support.</h2>
              <p className="sub">True operational agility requires seamless execution across borders. Salaro addresses this through a synchronised international ecosystem.</p>
            </div>
            <div className="content rv">
              <div className="loc">
                <span className="ic"><svg viewBox="0 0 24 24"><path d="M12 22 C12 22 5 14 5 9 a7 7 0 0 1 14 0 C19 14 12 22 12 22Z"/><circle cx="12" cy="9" r="2.5"/></svg></span>
                <div><h4 className="serif">Salaro United Kingdom</h4><p>UK-led strategy, client partnership, and product direction for the work that matters most.</p></div>
              </div>
              <div className="loc">
                <span className="ic"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12 H21 M12 3 a14 14 0 0 1 0 18 a14 14 0 0 1 0 -18"/></svg></span>
                <div><h4 className="serif">International delivery team</h4><p>An international development team supports implementation, systems thinking, and thoughtful product care.</p></div>
              </div>
              <div className="client-connection"><span>UK strategy</span><i aria-hidden="true"/><span>International delivery</span></div><p className="loc-note">By combining UK-led strategy with an international delivery team, we maintain a transparent and dependable workflow that keeps the work moving without unnecessary complexity.</p>
            </div>
          </div></div>
        </section>


        <section className="trust">
          <div className="wrap">
            <div className="rv">
              <div className="num lab a">(04)</div>
              <h2 className="serif">Why growing businesses <span className="rust">choose</span> Salaro</h2>
              <p className="sub">Choosing a digital partner is a serious decision, and it helps when the process feels calm, clear and practical.</p>
            </div>
            <div className="trust-cols rv">
              <div className="tcol"><div className="n">01</div><div className="client-benefit">Know where your project stands</div><h4 className="serif">Transparent Execution</h4><p>We eliminate project ambiguity through rigorous management methodologies, keeping you fully informed at every milestone.</p></div>
              <div className="tcol"><div className="n">02</div><div className="client-benefit">Work closely with your team</div><h4 className="serif">Practical Partnership</h4><p>We stay close to the work, make clear recommendations, and help teams move from idea to delivery without the usual agency friction.</p></div>
              <div className="tcol"><div className="n">03</div><div className="client-benefit">Reduce delivery uncertainty</div><h4 className="serif">Measured Delivery</h4><p>Thoughtful planning, reliable implementation, and clear communication reduce risk while keeping the experience calm and effective.</p></div>
            </div>
          </div>
        </section>


        <section className="qband">
          <div className="wrap rv">
            <span className="statement-mark" aria-hidden="true">“</span><blockquote className="serif">We build bespoke digital products with <em>clear thinking</em>, <em>calm delivery</em>, and no unnecessary complexity.</blockquote><div className="statement-signal" aria-hidden="true"/>
          </div>
        </section>


        <section className="exp">
          <div className="wrap">
            <div className="head rv">
              <div className="num lab a">(05)</div>
              <h2 className="serif">Areas of <span className="rust">Expertise</span></h2>
            </div>
            <div className="exp-grid rv">
              <div className="exp-item">
                <span className="expert-art" aria-hidden="true"><svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="15" y="15" width="70" height="49" rx="4"/><path d="M15 26H85 M39 26V64"/><rect className="art-motion" x="46" y="33" width="31" height="22" rx="2"/><path d="M22 35H32 M22 43H32 M22 51H32"/></svg></span>
                <div><h4 className="serif">Bespoke UI/UX Design &amp; Brand Strategy</h4><div className="client-benefit">Make your brand easier to recognise</div><p>Crafting visual identities that resonate and interfaces that convert.</p></div>
              </div>
              <div className="exp-item">
                <span className="expert-art" aria-hidden="true"><svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="36" y="8" width="28" height="18" rx="3"/><rect x="8" y="49" width="28" height="18" rx="3"/><rect x="64" y="49" width="28" height="18" rx="3"/><path className="art-motion" d="M50 26V37H22V49 M50 37H78V49"/></svg></span>
                <div><h4 className="serif">Practical Web &amp; Application Architecture</h4><div className="client-benefit">Build for long-term reliability</div><p>Resilient technical foundations designed for performance, clarity, and long-term support.</p></div>
              </div>
              <div className="exp-item">
                <span className="expert-art" aria-hidden="true"><svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="33" y="5" width="34" height="70" rx="6"/><path d="M43 12H57 M46 68H54"/><rect x="39" y="22" width="22" height="12" rx="2"/><path className="art-motion" d="M39 42H61 M39 49H56 M39 56H61"/></svg></span>
                <div><h4 className="serif">Mobile Software Engineering</h4><div className="client-benefit">Reach customers on mobile</div><p>Fluid, high-conversion mobile environments built for modern users.</p></div>
              </div>
              <div className="exp-item">
                <span className="expert-art" aria-hidden="true"><svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12V67H90 M25 59V47 M43 59V38 M61 59V27 M79 59V16"/><path className="art-motion" d="M19 43L39 30L55 35L83 9 M72 9H83V20"/></svg></span>
                <div><h4 className="serif">Targeted Digital Acquisition &amp; Marketing</h4><div className="client-benefit">Support measurable business goals</div><p>Strategic campaigns that drive measurable business outcomes.</p></div>
              </div>
            </div>
          </div>
        </section>


        <section className="cta">
          <div className="wrap">
            <div className="rv">
              <div className="lab">Ready to start?</div><div className="client-cta-line" aria-hidden="true"/>
              <h2 className="serif">Let's build something <em>exceptional</em>.</h2>
              <div className="btns">
                <a href="tel:+447485222490" className="btn-primary">Start a conversation <span>→</span></a>
                <a href="tel:+447485222490" className="btn-ghost">07485 222490</a>
              </div>
            </div>
          </div>
        </section>


        <footer className="dark-lattice">
          <div className="cols">
            <div className="foot-top">
              <div>
                <div className="fbrand">Salaro</div>
                <p>A UK-led digital consultancy. Practising since 1995.</p>
              </div>
              <div className="fcol"><h5>Practice</h5><a href="/build">Build</a><a href="/migrate">Migrate</a><a href="/advise">Advise</a></div>
              <div className="fcol"><h5>Work</h5><a href="/work">Recent projects</a><a href="/archive">Archive</a></div>
              <div className="fcol"><h5>Contact</h5><a href="mailto:team@salaro.com">team@salaro.com</a><span>Guildford, Surrey</span><a href="https://uk.linkedin.com/in/salaro">LinkedIn</a></div>
            </div>
            <div className="foot-bot">
              <span className="lab">© 2026 Salaro · a trading name of S. Golestanian, sole trader · Guildford, Surrey</span>
              <span className="lab">Practising since 1995</span>
            </div>
          </div>
        </footer>
    </div>
  );
}
