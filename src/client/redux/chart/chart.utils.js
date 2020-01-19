export const filterCharts = (charts, id, data, type) => {
  const filteredCharts = charts.map(chart =>
    chart.id == id
      ? {
          ...chart,
          isFiltered: true,
          [type]: data
        }
      : chart
  );

  return filteredCharts;
};

export const clearChart = (charts, id) => {
  const updatedCharts = charts.map(chart =>
    chart.id == id
      ? {
          ...chart,
          isFiltered: false
        }
      : chart
  );

  return updatedCharts;
};
