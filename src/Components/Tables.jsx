import React from 'react'
import '../Assets/styles/Tables.css'
import topPage from '../Assets/Icons/topo-pag.svg'

export default function Tables() {
  return (
    <>
        <div className="table-title">
            <h1> LISTA DE CADASTRO </h1>
        </div>
        <div className="tables">
            <table>
                <tr>
                    <th></th>
                    <th> NOME </th>
                    <th> E-MAIL</th>
                    <th> NASCIMENTO </th>
                    <th> TELEFONE </th>
                </tr>
                <tr>
                    <td> 1 </td>
                    <td>Rubem Dias </td>
                    <td>rds@gmail.com</td>
                    <td>09/12/1999</td>
                    <td>(31) 99100-7682 </td>
                </tr>
                <tr>
                    <td> 2 </td>
                    <td>Rubem Dias </td>
                    <td>rds@gmail.com</td>
                    <td>09/12/1999</td>
                    <td>(31) 99100-7682 </td>
                </tr>
            </table>
            <a href="#"><img src={topPage} alt="" className="top-pag"></img></a>
        </div>
    </>
  )
}
