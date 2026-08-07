import { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import rankingUrl from "../data/Ranking-Colegio.xlsx?url";

const PREVIEW_ROWS = 10;

export function useRankingColegio() {
  const [headers, setHeaders] = useState([]);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    async function loadFile() {
      try {
        const res = await fetch(rankingUrl);
        const buffer = await res.arrayBuffer();
        const workbook = XLSX.read(new Uint8Array(buffer), { type: "array" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        if (data.length > 0) {
          setHeaders(data[0]);
          setRows(
            data
              .slice(1)
              .filter((row) => row.some((cell) => cell !== undefined && cell !== ""))
          );
        }
      } finally {
        setLoading(false);
      }
    }
    loadFile();
  }, []);

  function handleDownload() {
    const link = document.createElement("a");
    link.href = rankingUrl;
    link.download = "Ranking-Colegio.xlsx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return {
    headers,
    rows,
    totalRows: rows.length,
    loading,
    expanded,
    setExpanded,
    handleDownload,
  };
}
