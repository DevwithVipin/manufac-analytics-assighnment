import React from "react";
import { Table } from "@mantine/core";
import CalculationGamma from "./CalculationGamma";
const wineData = require("./Wine-Data.json");

function Calculation() {
  const {
    extractAlcoholClasses,
    calculateFlavanoidsMean,
    calculateFlavanoidsMedian,
    calculateFlavanoidsMode,
    calculateGammaMean,
    calculateGammaMedian,
    calculateGammaMode,
    addGammaProperty,
  } = CalculationGamma({ data: wineData });
  const uniqueAlcoholClasses = extractAlcoholClasses(wineData);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "90vw", margin: "0px" }}>
    <div style={{ margin: "20px", overflowX: "auto" }}>
      <Table style={{ borderCollapse: "collapse", width: "100%", fontSize: "16px" }}>
        <thead>
          <Table.Tr style={{ border: "2px solid black" }}>
            <Table.Th style={{ border: "2px solid black", padding: "8px" }}>
              Measures
            </Table.Th>
            {uniqueAlcoholClasses.map((item, index) => (
              <Table.Th
                key={index}
                style={{ border: "2px solid black", padding: "8px" }}
              >
                {`Class ${item}`}
              </Table.Th>
            ))}
          </Table.Tr>
        </thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td
              key="mean-label"
              style={{ border: "2px solid black", padding: "8px" }}
            >
              Flavonoids Mean
            </Table.Td>
            {uniqueAlcoholClasses.map((row, index) => (
              <Table.Td
                key={index}
                style={{ border: "2px solid black", padding: "8px" }}
              >
                {calculateFlavanoidsMean(wineData, row)}
              </Table.Td>
            ))}
          </Table.Tr>
          <Table.Tr>
            <Table.Td
              key="median-label"
              style={{ border: "2px solid black", padding: "8px" }}
            >
              Flavonoids Median
            </Table.Td>
            {uniqueAlcoholClasses.map((row, index) => (
              <Table.Td
                key={index}
                style={{ border: "2px solid black", padding: "8px" }}
              >
                {calculateFlavanoidsMedian(wineData, row)}
              </Table.Td>
            ))}
          </Table.Tr>
          <Table.Tr>
            <Table.Td
              key="mode-label"
              style={{ border: "2px solid black", padding: "8px" }}
            >
              Flavonoids Mode
            </Table.Td>
            {uniqueAlcoholClasses.map((row, index) => (
              <Table.Td
                key={index}
                style={{ border: "2px solid black", padding: "8px" }}
              >
                {calculateFlavanoidsMode(wineData, row)}
              </Table.Td>
            ))}
          </Table.Tr>
        </Table.Tbody>
      </Table>
    </div>
    <div style={{ margin: "20px", overflowX: "auto" }}>
      <Table style={{ borderCollapse: "collapse", width: "100%", fontSize: "16px" }}>
        <thead>
          <Table.Tr style={{ border: "2px solid black" }}>
            <Table.Th style={{ border: "2px solid black", padding: "8px" }}>
              Measures
            </Table.Th>
            {uniqueAlcoholClasses.map((item, index) => (
              <Table.Th
                key={index}
                style={{ border: "2px solid black", padding: "8px" }}
              >
                {`Class ${item}`}
              </Table.Th>
            ))}
          </Table.Tr>
        </thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td
              key="mean-label"
              style={{ border: "2px solid black", padding: "8px" }}
            >
              Gamma Mean
            </Table.Td>
            {uniqueAlcoholClasses.map((row, index) => (
              <Table.Td
                key={index}
                style={{ border: "2px solid black", padding: "8px" }}
              >
                {calculateGammaMean(wineData, row)}
              </Table.Td>
            ))}
          </Table.Tr>
          <Table.Tr>
            <Table.Td
              key="median-label"
              style={{ border: "2px solid black", padding: "8px" }}
            >
              Gamma Median
            </Table.Td>
            {uniqueAlcoholClasses.map((row, index) => (
              <Table.Td
                key={index}
                style={{ border: "2px solid black", padding: "8px" }}
              >
                {calculateGammaMedian(wineData, row)}
              </Table.Td>
            ))}
          </Table.Tr>
          <Table.Tr>
            <Table.Td
              key="mode-label"
              style={{ border: "2px solid black", padding: "8px" }}
            >
              Gamma Mode
            </Table.Td>
            {uniqueAlcoholClasses.map((row, index) => (
              <Table.Td
                key={index}
                style={{ border: "2px solid black", padding: "8px" }}
              >
                {calculateGammaMode(wineData, row)}
              </Table.Td>
            ))}
          </Table.Tr>
        </Table.Tbody>
      </Table>
    </div>
  </div>
  
  
  );
}

export default Calculation;