import "../css/rankingColegio.css";
import { useRef, useLayoutEffect, useState } from "react";
import SectionHeading from "../../../shared/components/SectionHeading";
import { useRankingColegio } from "../hooks/useRankingColegio";

const PREVIEW_ROWS = 10;

export default function RankingColegioComponent() {
  const {
    headers,
    rows,
    totalRows,
    loading,
    expanded,
    setExpanded,
    handleDownload,
  } = useRankingColegio();

  const animRef = useRef(null);
  const [collapsedHeight, setCollapsedHeight] = useState(0);
  const [fullHeight, setFullHeight] = useState(0);

  useLayoutEffect(() => {
    if (loading || !animRef.current) return;
    const table = animRef.current.querySelector("table");
    if (!table) return;
    const tbodyRows = Array.from(table.querySelectorAll("tbody tr"));
    if (tbodyRows.length === 0) return;

    const fullH = animRef.current.scrollHeight;
    let colH = fullH;

    if (tbodyRows.length > PREVIEW_ROWS) {
      const tenthRow = tbodyRows[PREVIEW_ROWS - 1];
      const bottom = tenthRow.getBoundingClientRect().bottom;
      const top = animRef.current.getBoundingClientRect().top;
      colH = Math.round(bottom - top);
    }

    setCollapsedHeight(colH);
    setFullHeight(fullH);
  }, [loading]);

  const maxHeight =
    collapsedHeight === 0 ? "none" : expanded ? `${fullHeight}px` : `${collapsedHeight}px`;

  return (
    <section className="rankingColegio" aria-labelledby="ranking-colegio-titulo">
      <div className="rankingColegio__container">
        {loading ? (
          <p className="rankingColegio__loading">Cargando datos...</p>
        ) : (
          <>
            <div
              ref={animRef}
              className="rankingColegio__tabla-anim"
              style={{ maxHeight }}
            >
              <div className="rankingColegio__tabla-wrapper" role="region" aria-label="Tabla de ranking">
                <table className="rankingColegio__tabla">
                  {headers.length > 0 && (
                    <thead>
                      <tr>
                        {headers.map((header, i) => (
                          <th key={i} scope="col">{header}</th>
                        ))}
                      </tr>
                    </thead>
                  )}
                  <tbody>
                    {rows.map((row, i) => (
                      <tr key={i}>
                        {headers.map((_, j) => (
                          <td key={j}>{row[j] ?? ""}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rankingColegio__acciones">
              {totalRows > 10 && (
                <button
                  className="rankingColegio__btn-ver"
                  onClick={() => setExpanded((prev) => !prev)}
                >
                  {expanded ? "Ver menos" : "Ver más"}
                </button>
              )}
              <button className="rankingColegio__btn-descargar" onClick={handleDownload}>
                Descargar
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
