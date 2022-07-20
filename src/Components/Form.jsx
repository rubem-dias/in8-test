import React from 'react'
import '../Assets/styles/Form.css'

export default function Form() {
  return (
    <div className="form-container">
        <h1 className="title-form"> CADASTRO </h1>
        <form>
            <div className="form-labels">
                <h3> Nome </h3>
            </div>
            <div>
                <input
                    type="text"
                    name="name"
                    placeholder="Seu Nome"
                />
            </div>

            <div className="form-labels">
                <h3> Email </h3>
            </div>
            <div>
                <input
                    type="text"
                    name="name"
                    placeholder="Seu Email"
                />
            </div>

            <div className="form-labels">
                <h3> Nascimento </h3>
            </div>
            <div>
                <input
                    type="text"
                    name="name"
                    placeholder="Seu Nascimento"
                />
            </div>


            <div className="form-labels">
                <h3> Telefone </h3>
            </div>
            <div>
                <input
                    type="text"
                    name="name"
                    placeholder="Telefone"
                />
            </div>

            <div>
                <button>CADASTRAR</button>
            </div>
        </form>
    </div>
  )
}
