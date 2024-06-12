export function Table() {
  return (
    <table className="w-3/4 table-auto border-collapse border border-white">
      <thead className="table-header-group">
        <tr className="table-row">
          <th className="table-cell border border-white">
            Característica
          </th>

          <th className="table-cell border border-white">
            useState
          </th>

          <th className="table-cell border border-white">
            useEffect
          </th>
        </tr>
      </thead>

      <tbody>
        <tr className="table-row">
          <td className="table-cell border border-white">
            Tipo de estado
          </td>

          <td className="table-cell border border-white">
            Simples (valores primitivos ou objetos)
          </td>

          <td className="table-cell border border-white">
            Complexos (objetos com várias propriedades)
          </td>
        </tr>

        <tr className="table-row">
          <td className="table-cell border border-white">
            Atualização de estado
          </td>

          <td className="table-cell border border-white">
            Direta, através de um setter
          </td>

          <td className="table-cell border border-white">
            Através de um reducer
          </td>
        </tr>

        <tr className="table-row">
          <td className="table-cell border border-white">
            Logica de atualização
          </td>

          <td className="table-cell border border-white">
            Simples, contida no componente
          </td>

          <td className="table-cell border border-white">
            Centralizada no reducer
          </td>
        </tr>

        <tr className="table-row">
          <td className="table-cell border border-white">
            Quando usar
          </td>

          <td className="table-cell border border-white">
            Estados simples, lógica de atualização local
          </td>

          <td className="table-cell border border-white">
            Estados complexos, lógica de atualização centralizada, múltiplas ações
          </td>
        </tr>
      </tbody>
    </table>
  );
}
