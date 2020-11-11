import React from "react";
import * as d3 from "d3";
import "d3-shape";
import './atom.css';

function debounce(fn, timeout) {
  let tid = 0;
  return function debouncedWrapped() {
    if (tid) {
      window.clearTimeout(tid);
    }
    tid = window.setTimeout(fn, timeout);
  };
}

export function BeAtom({ eSize = 3, velocity = 30, color = "#f47b20" }) {
  const container = React.createRef();
  const eNum = 2;

  React.useEffect(() => {
    if (!container.current) return;

    if (d3.select(container.current).select("svg").size()) {
      const atom = d3.select(container.current).select("svg");
      const electrons = atom.selectAll("circle.svg-electron");

      electrons
        .attr("r", eSize)
        .attr("fill", color)
        .transition()
        .on("end", () => flyElectron(electrons));
    } else {
      const atom = d3.create("svg").attr("viewBox", [0, 0, 200, 100]);
      atom
        .append("text")
        .attr("x", 63)
        .attr("y", 55)
        .attr("fill", "#7e7e7e")
        .style("alignment-baseline", "middle")
        .style("font-size", "50px")
        .text("psilo");

      atom.append("g").call((g) => {
        const eCoord = g.append("svg").attr("viewBox", [-50, -55, 200, 100]);
        const distanceAngle = 360 / eNum;
        const items = [...Array(eNum).keys()].map((i) => {
          let radius = Math.PI * ((i * distanceAngle) / 180);
          return 0.25 * Math.PI + radius;
        });

        eCoord
          .append("text")
          .attr("x", 0)
          .attr("y", 0)
          .attr("fill", "#7e7e7e")
          .style("text-anchor", "middle")
          .style("alignment-baseline", "middle")
          .style("font-size", "50px")
          .text("e");

        eCoord
          .selectAll("g")
          .data(items)
          .join("g")
          .call((e) => {
            let ovalLine = d3
              .line()
              .x((rad, index) => {
                switch (index) {
                  case 0:
                    return 25 * Math.sin(rad);
                  case 1:
                    return 10 * Math.sin(2 * Math.PI * 0.5 - rad);
                  case 2:
                    return -25 * Math.sin(rad);
                  case 3:
                    return -10 * Math.sin(2 * Math.PI * 0.5 - rad);
                }
              })
              .y((rad, index) => {
                switch (index) {
                  case 0:
                    return 25 * Math.cos(rad);
                  case 1:
                    return 10 * Math.cos(2 * Math.PI * 0.5 - rad);
                  case 2:
                    return -25 * Math.cos(rad);
                  case 3:
                    return -10 * Math.cos(2 * Math.PI * 0.5 - rad);
                }
              })
              .curve(d3.curveCatmullRomClosed.alpha(0.5));

            e.append("path")
              .attr("d", (d, index) => {
                return ovalLine(Array(4).fill(d));
              })
              .attr("fill", "transparent")
              .attr("stroke", "white")
              .attr("stroke-width", 0);

            const electron = e
              .datum((rad, i) => ({
                x: 25 * Math.sin(rad),
                y: 25 * Math.cos(rad),
              }))
              .append("circle")
              .attr("class", "svg-electron")
              .attr("fill", color)
              .attr("stroke", "#fff")
              .attr("stroke-width", 1)
              .attr("r", eSize)
              .attr("transform", (d) => {
                return `translate(${d.x},${d.y})`;
              });

            electron.call(flyElectron);
          });
      });

      container.current.append(atom.node());
    }

    function flyElectron(electron) {
      electron
        .transition()
        .duration(velocity * 100)
        .ease(d3.easeLinear)
        .attrTween("transform", followPath())
        .on("end", () => flyElectron(electron));
    }

    function followPath() {
      let error = 1;
      return function (initCoord, i, a) {
        let path = d3.select(a[i].parentNode).select("path").node();
        let l = path.getTotalLength();
        let bringUp = debounce(() => {
          window.requestAnimationFrame(() => {
            let g = a[i].parentNode;
            g.parentNode.insertBefore(g, g.parentNode.firstChild);
          });
        }, 50);
        let bringDown = debounce(() => {
          window.requestAnimationFrame(() => {
            let g = a[i].parentNode;
            g.parentNode.append(g);
          });
        }, 50);

        if (i >= eNum / 2) {
          const temp = bringUp;
          bringUp = bringDown;
          bringDown = temp;
        }

        return function (t) {
          var p = path.getPointAtLength(t * l);
          if (
            Math.abs(p.x + initCoord.x) < error &&
            Math.abs(p.y + initCoord.y) < error
          ) {
            bringUp();
          } else if (
            Math.abs(p.x - initCoord.x) < error &&
            Math.abs(p.y - initCoord.y) < error
          ) {
            bringDown();
          }

          return "translate(" + p.x + "," + p.y + ")";
        };
      };
    }
  }, [eSize, velocity, color]);

  return <div ref={container} className="an-atom" />;
}
