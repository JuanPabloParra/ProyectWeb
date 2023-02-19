// Función para obtener la fecha actual en formato yyyy-mm-dd
function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }
  
  // Función para hacer solicitudes HTTP al servidor
  async function makeHttpRequest(url, method = 'GET', data = null) {
    const response = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: data && JSON.stringify(data),
    });
    return response.json();
  }
  
  // Función para dar formato a los números
  function formatNumber(number) {
    if (number >= 1000000000) {
      return (number / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
    }
    if (number >= 1000000) {
      return (number / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (number >= 1000) {
      return (number / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return number;
  }
  
  export { getTodayDate, makeHttpRequest, formatNumber };
  