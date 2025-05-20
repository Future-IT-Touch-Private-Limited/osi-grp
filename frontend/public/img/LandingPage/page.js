import React from "react";
import Image from "next/image";
import campus from "../app/campus.webp";
import leftArc from "../app/why-choose-left-bg.png";
import rightArc from "../app/why-choose-right-bg.png";
import tree from "../app/tree.png";

import f1 from "../app/feature-icon-1.png";
import f2 from "../app/feature-icon-3.png";
import f3 from "../app/feature-icon-4.png";
import f4 from "../app/feature-icon-5.png";
import f5 from "../app/feature-icon-6.png";

// just replace these with your two actual images
import worldMap from "./international-tieups-bg.webp";
import arcGraphic from "./tieup-outline.png";
import arcGraphic2 from "./tieup-inner-circle.png";
// (optional) replace these with your actual icons, or leave them as text-only
import iconTieUps from "./tieup-img-1.png";
import iconCountries from "./tieup-img-2.png";
import iconContinents from "./tieup-icon-3.png";
import iconPrograms from "./tieup-img-4.png";

export default function WhyChooseCGC() {
  return (
    <>
      <section className="why-choose">
        <h2 className="title">Why Choose CGC Mohali?</h2>
        <div className="layout">
          {/* ←– LEFT ARC WITH ICONS ––*/}
          <div className="arc-wrapper left-arc">
            <Image
              src={leftArc}
              alt="Decorative arc"
              width={125}
              height={356}
              className="arc-img"
            />

            <div
              className="arc-icon arc-icon--start"
              style={{ border: "3px solid rgb(152, 0, 46)" }}
            >
              <Image src={tree} className="iconSmall" alt="Decorative arc" />
              <div
                className="layer-ol-data"
                style={{ position: "absolute", fontWeight: "bold" }}
              >
                Lush Green Campus
              </div>
            </div>
            <div
              className="arc-icon arc-icon--center"
              style={{ border: "3px solid #000", backgroundColor: "#2e2e2e" }}
            >
              <Image src={f1} className="iconSmall" alt="Decorative arc" />
              <div
                className="layer-tl-data"
                style={{ position: "absolute", fontWeight: "bold" }}
              >
                Research Centric Environment
              </div>
            </div>
            <div
              className="arc-icon arc-icon--end"
              style={{ border: "3px solid rgb(152, 0, 46)" }}
            >
              <Image src={f2} className="iconSmall" alt="Decorative arc" />
              <div
                className="layer-thrl-data"
                style={{ position: "absolute", fontWeight: "bold" }}
              >
                100% Assured Placements
              </div>
            </div>
          </div>

          {/* ←– CENTER IMAGE + BUTTON ––*/}
          <div className="center-content">
            <Image
              src={campus}
              alt="CGC Mohali Campus"
              width={425}
              height={400}
              className="campus-image"
            />
          </div>

          {/* ←– RIGHT ARC (if you need it) ––*/}
          <div className="arc-wrapper right-arc">
            <Image
              src={rightArc}
              alt="Decorative arc"
              width={125}
              height={356}
              className="arc-img"
            />

            <div
              className="arc-icon arc-icon--r-start"
              style={{ border: "3px solid rgb(152, 0, 46)" }}
            >
              <Image src={f3} className="iconSmall" alt="Decorative arc" />
              <div
                className="layer-or-data"
                style={{ position: "absolute", fontWeight: "bold" }}
              >
                Scholarships <br /> upto 100%
              </div>
            </div>
            <div
              className="arc-icon arc-icon--r-center"
              style={{ border: "3px solid #000", backgroundColor: "#2e2e2e" }}
            >
              <Image src={f4} className="iconSmall" alt="Decorative arc" />
              <div
                className="layer-tr-data"
                style={{ position: "absolute", fontWeight: "bold" }}
              >
                Fully WiFi
                <br />
                Enabled Campus
              </div>
            </div>
            <div
              className="arc-icon arc-icon--r-end"
              style={{ border: "3px solid rgb(152, 0, 46)" }}
            >
              <Image src={f5} className="iconSmall" alt="Decorative arc" />
              <div
                className="layer-thrr-data"
                style={{ position: "absolute", fontWeight: "bold" }}
              >
                Experienced <br /> Faculty
              </div>
            </div>
          </div>
        </div>
        <button className="btnn">Apply Now</button>
      </section>

      <section className="international-tieups">
        <h2 className="it-title">
          Our International Tie-Ups and Collaborations
        </h2>
        <p className="it-subtitle">
          CGC Mohali boasts a vibrant global perspective through its extensive
          international tie-ups and collaborations. By fostering partnerships
          with esteemed institutions worldwide, CGC Mohali ensures a rich and
          diverse learning environment that prepares students for global
          success.
        </p>

        <div
          className="it"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "240px",
          }}
        >
          <div className="it-arc">
            <Image
              src={arcGraphic2}
              alt="Semi-circular arc"
              width={480}
              height={243}
            />
            <div
              className="it-point it-point--global"
              style={{ backgroundColor: "white" }}
            >
              <div className="it-icon-layer layer-one">
                <Image
                  src={iconTieUps}
                  alt="Global Tie-Ups"
                  className="it-icon"
                />

                <div className="layer-one-data">
                  <div className="it-number">200+</div>
                  <div className="it-label">Global Tie-Ups</div>
                </div>
              </div>
            </div>
            <div className="it-point it-point--countries">
              <div className="it-icon-layer layer-two">
                <Image
                  src={iconCountries}
                  alt="Countries"
                  className="it-icon"
                />
                <div className="layer-two-data">
                  <div className="it-number">60+</div>
                  <div className="it-label">Countries</div>
                </div>
              </div>
            </div>

            <div className="it-point it-point--continents">
              <div className="it-icon-layer layer-three">
                <Image
                  src={iconContinents}
                  alt="Continents"
                  className="it-icon"
                />

                <div className="layer-three-data">
                  <div className="it-number">05+</div>
                  <div className="it-label">Continents</div>
                </div>
              </div>
            </div>

            <div className="it-point it-point--programs">
              <div className="it-icon-layer layer-four">
                <Image src={iconPrograms} alt="Programs" className="it-icon" />

                <div className="layer-four-data">
                  <div className="it-number">100+</div>
                  <div className="it-label">Programs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
